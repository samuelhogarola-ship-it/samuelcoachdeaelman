const { defineConfig, devices } = require("@playwright/test");
const { execFileSync } = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");

function isPortInUse(port) {
  try {
    execFileSync("lsof", ["-nP", `-iTCP:${port}`, "-sTCP:LISTEN"], {
      stdio: "ignore"
    });
    return true;
  } catch (error) {
    return false;
  }
}

function findAvailablePort(startPort, maxAttempts = 20) {
  for (let offset = 0; offset < maxAttempts; offset += 1) {
    const port = startPort + offset;
    if (!isPortInUse(port)) {
      return port;
    }
  }

  throw new Error(
    `No free port found between ${startPort} and ${startPort + maxAttempts - 1}.`
  );
}

function resolveStablePort() {
  const preferredPort = Number(process.env.PLAYWRIGHT_PORT || 4173);
  const workspaceHash = crypto
    .createHash("sha1")
    .update(process.cwd())
    .digest("hex")
    .slice(0, 12);
  const portFile = path.join(os.tmpdir(), `playwright-port-${workspaceHash}.txt`);

  if (process.env.PLAYWRIGHT_PORT) {
    return preferredPort;
  }

  if (fs.existsSync(portFile)) {
    const savedPort = Number(fs.readFileSync(portFile, "utf8").trim());
    if (Number.isInteger(savedPort) && savedPort > 0) {
      const portFileAge = Date.now() - fs.statSync(portFile).mtimeMs;
      // Workers load this config again after the parent starts the web server.
      if (portFileAge < 5 * 60 * 1000 || !isPortInUse(savedPort)) {
        return savedPort;
      }
    }
  }

  const freePort = findAvailablePort(preferredPort);
  fs.writeFileSync(portFile, String(freePort));
  return freePort;
}

const serverPort = resolveStablePort();
const baseURL = `http://127.0.0.1:${serverPort}`;

module.exports = defineConfig({
  testDir: "./tests/playwright",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "on-first-retry"
  },
  webServer: {
    command: `python3 -m http.server ${serverPort} --bind 127.0.0.1`,
    url: baseURL,
    reuseExistingServer: !process.env.CI
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});
