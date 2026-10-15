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

test("versioned production config loads the Samuel Coach website id", async () => {
  const config = JSON.parse(
    await readFile(path.join(projectRoot, "umami-config.json"), "utf8"),
  );
  const tracker = await runBootstrap(config);

  assert.equal(tracker.dataset.websiteId, "cb401ab9-2a3d-4fee-9856-6914cd77cb30");
  assert.equal(tracker.dataset.hostUrl, "https://analytics.187.124.55.36.sslip.io");
});

test("fails closed when config points to a different Umami host", async () => {
  const tracker = await runBootstrap({
    hostUrl: "https://analytics.2.24.10.239.sslip.io",
    websiteId: "cb401ab9-2a3d-4fee-9856-6914cd77cb30",
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

// Exercise the shipped loaders in a browser-like document. A Google script
// injection, duplicate tracker, or broken legacy consent callback fails here.
async function runPageAnalytics(entryPaths) {
  const scripts = [];
  const pending = [];
  const requests = [];
  const config = JSON.parse(await readFile(path.join(projectRoot, 'umami-config.json'), 'utf8'));
  const sources = Object.fromEntries(await Promise.all([
    '/assets/js/google-analytics-core.js', '/assets/js/umami-analytics-core.js',
  ].map(async file => [file, await readFile(path.join(projectRoot, file), 'utf8')])));
  let context;
  const window = { location: { href: 'https://samuelcoachdealeman.com/', pathname: '/' } };
  const document = {
    title: 'Samuel',
    createElement: () => ({ dataset: {} }),
    querySelector(selector) {
      return scripts.find(script =>
        (selector.includes('data-umami-tracker') && script.dataset.umamiTracker) ||
        (selector.includes('data-samuel-umami-bootstrap') && script.dataset.samuelUmamiBootstrap)
      ) || null;
    },
    head: { appendChild(script) {
      scripts.push(script);
      if (sources[script.src]) pending.push(script.src);
    } },
  };
  context = vm.createContext({ window, document, console, fetch: async url => {
    requests.push(url);
    return { ok: true, json: async () => config };
  } });
  for (const file of entryPaths) vm.runInContext(sources[file], context);
  if (window.GoogleAnalyticsCore) {
    const legacy = window.GoogleAnalyticsCore;
    legacy.init({ measurementId: 'G-JR13E61YDJ' });
    legacy.grantConsent();
    legacy.revokeConsent();
    legacy.trackEvent('click');
    legacy.trackPageview('/');
  }
  while (pending.length) vm.runInContext(sources[pending.shift()], context);
  await window.UmamiAnalyticsCore?.ready;
  return { scripts, requests, window };
}

test('legacy HTML and cached main callbacks request only one Umami tracker', async () => {
  const result = await runPageAnalytics(['/assets/js/google-analytics-core.js']);
  assert.deepEqual(result.scripts.filter(s => s.src.startsWith('https:')).map(s => s.src), [
    'https://analytics.187.124.55.36.sslip.io/script.js',
  ]);
  assert.equal(result.window.gtag, undefined);
  assert.equal(result.window.dataLayer, undefined);
});

test('repeated and mixed bootstrap execution fetches config and installs tracker once', async () => {
  const result = await runPageAnalytics([
    '/assets/js/umami-analytics-core.js', '/assets/js/umami-analytics-core.js',
    '/assets/js/google-analytics-core.js', '/assets/js/google-analytics-core.js',
  ]);
  assert.deepEqual(result.requests, ['/umami-config.json']);
  assert.equal(result.scripts.filter(s => s.dataset.umamiTracker).length, 1);
});

test('every shipped HTML analytics entry reaches the configured Umami tracker', async () => {
  for (const file of await collectHtmlFiles()) {
    const html = await readFile(file, 'utf8');
    const entries = [...html.matchAll(/<script\b[^>]*src=["']([^"']*(?:google|umami)-analytics-core\.js(?:\?[^"']*)?)["'][^>]*>/g)]
      .map(match => new URL(match[1], 'https://samuelcoachdealeman.com/' + path.relative(projectRoot, file)).pathname);
    const result = await runPageAnalytics(entries);
    assert.equal(result.scripts.filter(s => s.dataset.websiteId === 'cb401ab9-2a3d-4fee-9856-6914cd77cb30').length, 1, path.relative(projectRoot, file));
  }
});


test('all legacy HTML references bypass previously cached Google loaders', async () => {
  for (const file of await collectHtmlFiles()) {
    const html = await readFile(file, 'utf8');
    for (const match of html.matchAll(/src=["']([^"']*google-analytics-core\.js[^"']*)["']/g)) {
      assert.equal(new URL(match[1], 'https://samuelcoachdealeman.com/').searchParams.get('v'), 'umami-20261015', file);
    }
  }
});
