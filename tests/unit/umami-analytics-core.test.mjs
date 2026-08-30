import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";

const projectRoot = process.cwd();
const corePath = path.join(projectRoot, "assets/js/umami-analytics-core.js");

async function collectHtmlFiles(directory = projectRoot) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectHtmlFiles(fullPath)));
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(fullPath);
  }

  return files;
}

async function runBootstrap(config) {
  const source = await readFile(corePath, "utf8");
  const appended = [];
  const document = {
    createElement() {
      return { dataset: {}, defer: false };
    },
    head: {
      appendChild(element) {
        appended.push(element);
      },
    },
    querySelector() {
      return null;
    },
  };
  const window = {};
  const context = vm.createContext({
    console,
    document,
    fetch: async (url, options) => ({
      json: async () => config,
      ok: true,
      options,
      url,
    }),
    window,
  });

  vm.runInContext(source, context);
  await window.UmamiAnalyticsCore.ready;

  return appended[0] ?? null;
}

test("loads personal Umami from same-origin config", async () => {
  const tracker = await runBootstrap({
    hostUrl: "https://analytics.187.124.55.36.sslip.io",
    websiteId: "samuel-test-website-id",
  });

  assert.equal(
    tracker.src,
    "https://analytics.187.124.55.36.sslip.io/script.js",
  );
  assert.equal(
    tracker.dataset.hostUrl,
    "https://analytics.187.124.55.36.sslip.io",
  );
  assert.equal(tracker.dataset.websiteId, "samuel-test-website-id");
  assert.equal(tracker.defer, true);
});

test("fails closed when the website id is missing", async () => {
  const tracker = await runBootstrap({
    hostUrl: "https://analytics.187.124.55.36.sslip.io",
    websiteId: "",
  });

  assert.equal(tracker, null);
});

test("covers every tracked HTML entry through a local analytics core", async () => {
  const htmlFiles = await collectHtmlFiles();
  const missing = [];

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    if (
      !html.includes("google-analytics-core.js") &&
      !html.includes("umami-analytics-core.js")
    ) {
      missing.push(path.relative(projectRoot, file));
    }
  }

  assert.deepEqual(missing, []);
});
