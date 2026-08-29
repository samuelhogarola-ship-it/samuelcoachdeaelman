# Samuel Coach Personal Umami Tracking Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Measure every Samuel Coach page in the personal Umami instance without cookies and without depending on Google Analytics consent.

**Architecture:** A dedicated local bootstrap fetches a same-origin JSON configuration and injects the personal Umami script only when a valid public website ID exists. The existing analytics core loads that bootstrap on 564 pages; the four HTML entries that do not use the existing core receive the same local bootstrap directly.

**Tech Stack:** Static HTML, ES5-compatible browser JavaScript, Node.js built-in test runner.

**Spec:** https://github.com/samuelhogarola-ship-it/webfuengirola/blob/main/docs/superpowers/specs/2026-08-29-umami-all-panels-design.md

## Global Constraints

- Use only `https://analytics.187.124.55.36.sslip.io` for Samuel Coach.
- Umami is anonymous and cookieless; it must not wait for cookie consent.
- A missing or malformed website ID must fail closed and send no request.
- Keep `assets/js/` compatible with iOS 13: no optional chaining.
- The public website ID is configuration, never a credential or API token.

---

### Task 1: Site-wide static Umami bootstrap

**Files:**
- Create: `assets/js/umami-analytics-core.js`
- Create: `umami-config.json`
- Create: `tests/unit/umami-analytics-core.test.mjs`
- Modify: `assets/js/google-analytics-core.js`
- Modify: `CHAT/index.html`
- Modify: `blog/Style/post-template.html`
- Modify: `informes-profesor/index.html`
- Modify: `recursos/wordmaker-aleman/index.html`

**Interfaces:**
- Consumes: same-origin `GET /umami-config.json` returning `{ "hostUrl": string, "websiteId": string }`.
- Produces: `window.UmamiAnalyticsCore.init()` and one script with `data-website-id`, `data-host-url`, `data-domains`, and `data-umami-tracker="true"`.

- [x] **Step 1: Write the failing test**

```js
test("loads personal Umami from same-origin config", async () => {
  const tracker = await runBootstrap({
    hostUrl: "https://analytics.187.124.55.36.sslip.io",
    websiteId: "samuel-test-website-id",
  });
  assert.equal(tracker.src, "https://analytics.187.124.55.36.sslip.io/script.js");
  assert.equal(tracker.dataset.websiteId, "samuel-test-website-id");
});
```

- [x] **Step 2: Run test to verify it fails**

Run: `node --test tests/unit/umami-analytics-core.test.mjs`

Expected: FAIL because `assets/js/umami-analytics-core.js` does not exist.

- [x] **Step 3: Implement the minimal bootstrap and coverage hooks**

```js
(function () {
  "use strict";
  var PERSONAL_HOST = "https://analytics.187.124.55.36.sslip.io";
  function init() {
    return fetch("/umami-config.json", { cache: "no-store", credentials: "same-origin" })
      .then(function (response) { return response.ok ? response.json() : null; })
      .then(function (config) {
        if (!config || config.hostUrl !== PERSONAL_HOST || !config.websiteId) return null;
        var tracker = document.createElement("script");
        tracker.defer = true;
        tracker.src = PERSONAL_HOST + "/script.js";
        tracker.dataset.hostUrl = PERSONAL_HOST;
        tracker.dataset.websiteId = config.websiteId;
        document.head.appendChild(tracker);
        return tracker;
      });
  }
  window.UmamiAnalyticsCore = { init: init };
  init();
})();
```

The Google Analytics core injects `/assets/js/umami-analytics-core.js` immediately and independently of consent. The four HTML exceptions include `<script defer src="/assets/js/umami-analytics-core.js"></script>` directly.

- [x] **Step 4: Run verification**

Run: `node --test tests/unit/umami-analytics-core.test.mjs`

Run: `rg --files-without-match 'umami-analytics-core\\.js|google-analytics-core\\.js' -g '*.html'`

Expected: tests PASS and the coverage command prints no HTML files.

- [x] **Step 5: Commit**

```bash
git add assets/js/umami-analytics-core.js assets/js/google-analytics-core.js umami-config.json tests/unit/umami-analytics-core.test.mjs CHAT/index.html blog/Style/post-template.html informes-profesor/index.html recursos/wordmaker-aleman/index.html docs/superpowers/plans/2026-08-29-umami-personal-tracking.md
git commit -m "feat: add personal Umami tracking"
```
