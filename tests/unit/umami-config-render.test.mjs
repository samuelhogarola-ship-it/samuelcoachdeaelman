import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import {
  copyFileSync,
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
} from "node:fs";
import { createServer } from "node:net";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { setTimeout as delay } from "node:timers/promises";

const projectRoot = process.cwd();
const renderer = path.join(projectRoot, "scripts", "render-umami-config.sh");
const template = path.join(projectRoot, "config", "umami-config.template.json");
const personalScriptSrc = "https://analytics.187.124.55.36.sslip.io/script.js";
const personalHostUrl = "https://analytics.187.124.55.36.sslip.io";

function createProductionFixture() {
  const fixtureRoot = mkdtempSync(path.join(os.tmpdir(), "samuel-production-"));

  cpSync(path.join(projectRoot, "scripts"), path.join(fixtureRoot, "scripts"), {
    recursive: true,
  });
  cpSync(path.join(projectRoot, "config"), path.join(fixtureRoot, "config"), {
    recursive: true,
  });
  mkdirSync(path.join(fixtureRoot, "assets", "js"), { recursive: true });
  copyFileSync(
    path.join(projectRoot, "assets", "js", "admin-gate-core.mjs"),
    path.join(fixtureRoot, "assets", "js", "admin-gate-core.mjs"),
  );
  cpSync(
    path.join(projectRoot, "supabase", "functions", "contact"),
    path.join(fixtureRoot, "supabase", "functions", "contact"),
    { recursive: true },
  );
  copyFileSync(
    path.join(projectRoot, ".htaccess"),
    path.join(fixtureRoot, ".htaccess"),
  );

  return fixtureRoot;
}

async function reservePort() {
  const server = createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const { port } = server.address();
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  return port;
}

function withTemporaryOutput(callback) {
  const temporaryDirectory = mkdtempSync(
    path.join(os.tmpdir(), "samuel-umami-"),
  );
  const output = path.join(temporaryDirectory, "umami-config.json");

  try {
    return callback(output);
  } finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
  }
}

test("renders public Umami config from environment", () => {
  withTemporaryOutput((output) => {
    execFileSync("/bin/sh", [renderer], {
      cwd: projectRoot,
      env: {
        ...process.env,
        UMAMI_CONFIG_TEMPLATE: template,
        UMAMI_CONFIG_OUTPUT: output,
        UMAMI_SCRIPT_URL: personalScriptSrc,
        UMAMI_HOST_URL: personalHostUrl,
        UMAMI_WEBSITE_ID: "samuel-production-id",
      },
      stdio: "pipe",
    });

    assert.deepEqual(JSON.parse(readFileSync(output, "utf8")), {
      scriptSrc: personalScriptSrc,
      hostUrl: personalHostUrl,
      websiteId: "samuel-production-id",
    });
  });
});

test("renders inert public config when website ID is missing", () => {
  withTemporaryOutput((output) => {
    execFileSync("/bin/sh", [renderer], {
      cwd: projectRoot,
      env: {
        UMAMI_CONFIG_TEMPLATE: template,
        UMAMI_CONFIG_OUTPUT: output,
      },
      stdio: "pipe",
    });

    const rendered = readFileSync(output, "utf8");

    assert.deepEqual(JSON.parse(rendered), {
      scriptSrc: personalScriptSrc,
      hostUrl: personalHostUrl,
      websiteId: "",
    });
    assert.doesNotMatch(rendered, /"websiteId"\s*:\s*"[A-Za-z0-9_-]{8,128}"/);
  });
});

test("rejects non-personal Umami hosts", () => {
  withTemporaryOutput((output) => {
    assert.throws(
      () =>
        execFileSync("/bin/sh", [renderer], {
          cwd: projectRoot,
          env: {
            UMAMI_CONFIG_TEMPLATE: template,
            UMAMI_CONFIG_OUTPUT: output,
            UMAMI_HOST_URL: "https://analytics.2.24.10.239.sslip.io",
          },
          stdio: "pipe",
        }),
      /Command failed/,
    );
  });
});

test("production start refuses to serve without an Umami website ID", () => {
  const fixtureRoot = createProductionFixture();

  try {
    assert.throws(
      () => execFileSync("/bin/sh", ["scripts/start-production.sh"], {
        cwd: fixtureRoot,
        env: {
          ...process.env,
          UMAMI_WEBSITE_ID: "",
        },
        stdio: "pipe",
      }),
      (error) => {
        assert.notEqual(error.status, 0);
        assert.match(error.stderr.toString(), /UMAMI_WEBSITE_ID is required/);
        return true;
      },
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("production start serves rendered Umami config with Node as PID 1", async () => {
  const fixtureRoot = createProductionFixture();
  const port = await reservePort();
  const websiteId = "11111111-1111-4111-8111-111111111111";
  const child = spawn("/bin/sh", ["scripts/start-production.sh"], {
    cwd: fixtureRoot,
    detached: true,
    env: {
      ...process.env,
      POST_MANAGER_HOST: "127.0.0.1",
      POST_MANAGER_PORT: String(port),
      SAMUEL_CONTENT_DIR: "",
      UMAMI_WEBSITE_ID: websiteId,
    },
    stdio: "ignore",
  });

  try {
    let response;
    for (let attempt = 0; attempt < 60; attempt += 1) {
      if (child.exitCode !== null) break;
      try {
        response = await fetch(`http://127.0.0.1:${port}/umami-config.json`);
        if (response.ok) break;
      } catch {
        await delay(50);
      }
    }

    assert.equal(response?.ok, true, "production server never became ready");
    assert.equal((await response.json()).websiteId, websiteId);
    assert.equal(child.exitCode, null, "production server exited after startup");

    const command = execFileSync("ps", ["-o", "comm=", "-p", String(child.pid)], {
      encoding: "utf8",
    }).trim();
    assert.match(path.basename(command), /^node/, "entrypoint did not exec Node");
  } finally {
    if (child.exitCode === null) process.kill(-child.pid, "SIGTERM");
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
