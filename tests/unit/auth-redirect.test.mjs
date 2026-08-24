import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { safeAuthRedirect } from "../../assets/js/auth-redirect.mjs";

const origin = "https://www.samuelcoachdealeman.com";
const fallback = "/mi-cuenta/";

test("safeAuthRedirect keeps local absolute paths", () => {
  assert.equal(safeAuthRedirect("/mi-cuenta/", fallback, origin), "/mi-cuenta/");
  assert.equal(
    safeAuthRedirect("/de/mi-cuenta/?tab=progreso#racha", fallback, origin),
    "/de/mi-cuenta/?tab=progreso#racha"
  );
});

test("safeAuthRedirect rejects protocol-relative and external destinations", () => {
  assert.equal(safeAuthRedirect("//evil.example", fallback, origin), fallback);
  assert.equal(safeAuthRedirect("/\\evil.example", fallback, origin), fallback);
  assert.equal(safeAuthRedirect("https://evil.example/path", fallback, origin), fallback);
});

test("safeAuthRedirect falls back for empty, relative and malformed values", () => {
  assert.equal(safeAuthRedirect(null, fallback, origin), fallback);
  assert.equal(safeAuthRedirect("", fallback, origin), fallback);
  assert.equal(safeAuthRedirect("mi-cuenta", fallback, origin), fallback);
  assert.equal(safeAuthRedirect("/%E0%A4%A", fallback, origin), fallback);
});

test("all localized login pages use the shared redirect policy", async () => {
  const pages = ["login/index.html", "de/login/index.html", "en/login/index.html"];

  for (const page of pages) {
    const html = await readFile(new URL(`../../${page}`, import.meta.url), "utf8");
    assert.match(html, /import \{ safeAuthRedirect \} from '\/assets\/js\/auth-redirect\.mjs'/);
    assert.match(html, /location\.href = safeAuthRedirect\(/);
    assert.doesNotMatch(html, /startsWith\('\/'\) \?/);
  }
});
