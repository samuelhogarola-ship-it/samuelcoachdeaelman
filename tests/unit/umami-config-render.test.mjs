import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const projectRoot = process.cwd();
const renderer = path.join(projectRoot, "scripts", "render-umami-config.sh");
const template = path.join(projectRoot, "config", "umami-config.template.json");
const personalScriptSrc = "https://analytics.187.124.55.36.sslip.io/script.js";
const personalHostUrl = "https://analytics.187.124.55.36.sslip.io";

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
