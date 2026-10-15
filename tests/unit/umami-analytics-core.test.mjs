import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";

const projectRoot = process.cwd();
const corePath = path.join(projectRoot, "assets/js/umami-analytics-core.js");
const personalScriptSrc = "https://analytics.187.124.55.36.sslip.io/script.js";
const personalHostUrl = "https://analytics.187.124.55.36.sslip.io";

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
  const listeners = {};
  const document = {
    addEventListener(type, listener) {
      listeners[type] = listener;
    },
    createElement() {
      return {
        addEventListener() {},
        dataset: {},
        defer: false,
      };
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
  const window = {
    location: {
      href: "https://www.samuelcoachdealeman.com/servicios/",
      hostname: "www.samuelcoachdealeman.com",
      pathname: "/servicios/",
      search: "?utm_source=google&utm_campaign=brand",
    },
  };
  const context = vm.createContext({
    console,
    document,
    fetch: async (url, options) => ({
      json: async () => config,
      ok: true,
      options,
      url,
    }),
    URLSearchParams,
    window,
  });

  vm.runInContext(source, context);
  await window.UmamiAnalyticsCore.ready;

  return { appended, listeners, window };
}

test("loads personal Umami from same-origin config", async () => {
  const { appended } = await runBootstrap({
    scriptSrc: personalScriptSrc,
    hostUrl: personalHostUrl,
    websiteId: "samuel-test-website-id",
  });
  const tracker = appended[0] ?? null;

  assert.equal(
    tracker.src,
    personalScriptSrc,
  );
  assert.equal(
    tracker.dataset.hostUrl,
    personalHostUrl,
  );
  assert.equal(tracker.dataset.websiteId, "samuel-test-website-id");
  assert.equal(tracker.defer, true);
});

test("fails closed when the website id is missing", async () => {
  const { appended } = await runBootstrap({
    scriptSrc: personalScriptSrc,
    hostUrl: personalHostUrl,
    websiteId: "",
  });

  assert.equal(appended[0] ?? null, null);
});

test("versioned config is inert and contains no productive website id", async () => {
  const config = JSON.parse(
    await readFile(path.join(projectRoot, "umami-config.json"), "utf8"),
  );
  const { appended } = await runBootstrap(config);

  assert.equal(config.websiteId, "");
  assert.equal(appended[0] ?? null, null);
  assert.doesNotMatch(
    await readFile(path.join(projectRoot, "umami-config.json"), "utf8"),
    /"websiteId"\s*:\s*"[A-Za-z0-9_-]{8,128}"/,
  );
});

test("fails closed when config points to a different Umami host", async () => {
  const { appended } = await runBootstrap({
    scriptSrc: "https://analytics.2.24.10.239.sslip.io/script.js",
    hostUrl: "https://analytics.2.24.10.239.sslip.io",
    websiteId: "samuel-test-website-id",
  });

  assert.equal(appended[0] ?? null, null);
});

test("tracks standard commercial conversions from delegated clicks", async () => {
  const { listeners, window } = await runBootstrap({
    scriptSrc: personalScriptSrc,
    hostUrl: personalHostUrl,
    websiteId: "samuel-test-website-id",
  });
  const tracked = [];
  window.umami = {
    track(eventName, params) {
      tracked.push({ eventName, params });
    },
  };

  const whatsappLink = {
    getAttribute(name) {
      if (name === "href") return "https://wa.me/34644220965";
      if (name === "data-analytics-event") return null;
      return null;
    },
    closest(selector) {
      return selector === "a,button,[data-analytics-event]" ? whatsappLink : null;
    },
    textContent: "WhatsApp",
  };

  listeners.click({
    target: whatsappLink,
  });

  assert.deepEqual(JSON.parse(JSON.stringify(tracked)), [
    {
      eventName: "whatsapp_click",
      params: {
        href: "https://wa.me/34644220965",
        label: "WhatsApp",
        path: "/servicios/",
        utm_campaign: "brand",
        utm_source: "google",
      },
    },
  ]);
});

test("covers every tracked HTML entry through a local analytics core", async () => {
  const htmlFiles = await collectHtmlFiles();
  const missing = [];

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    if (
      !html.includes("google-analytics-core.js?v=umami-20261015") &&
      !html.includes("umami-analytics-core.js")
    ) {
      missing.push(path.relative(projectRoot, file));
    }
  }

  assert.deepEqual(missing, []);
});
