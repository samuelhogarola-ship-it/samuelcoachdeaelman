import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dedupeSitemap } from "../../scripts/dedupe-sitemap.mjs";

const sitemapUrl = new URL("../../sitemap.xml", import.meta.url);
const packageUrl = new URL("../../package.json", import.meta.url);

test("sitemap publishes each canonical URL exactly once", async () => {
  const sitemap = await readFile(sitemapUrl, "utf8");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const seen = new Set();
  const duplicates = new Set();

  for (const location of locations) {
    if (seen.has(location)) duplicates.add(location);
    seen.add(location);
  }

  assert.ok(locations.length > 0, "sitemap.xml must contain URLs");
  assert.equal(
    duplicates.size,
    0,
    `found ${duplicates.size} duplicated canonical URLs; sample: ${[...duplicates].slice(0, 5).join(", ")}`,
  );

  const canonicalOrder = ["loc", "lastmod", "changefreq", "priority"];
  for (const block of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const tags = [...block[1].matchAll(/<(loc|lastmod|changefreq|priority)>/g)].map((match) => match[1]);
    assert.deepEqual(tags, canonicalOrder.filter((tag) => tags.includes(tag)));
  }
});

test("generated page builds finish by deduplicating the sitemap", async () => {
  const packageJson = JSON.parse(await readFile(packageUrl, "utf8"));

  for (const scriptName of ["build:i18n", "build:generated"]) {
    assert.match(
      packageJson.scripts[scriptName],
      /&& node scripts\/dedupe-sitemap\.mjs$/,
      `${scriptName} must finish with sitemap deduplication`,
    );
  }
});

test("deduplication keeps the stable owner and merges current metadata", () => {
  const source = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/shared/</loc><lastmod>2026-01-01T01:00:00+02:00</lastmod></url>
  <url><loc>https://example.com/unique/</loc></url>
  <url><loc>https://example.com/shared/</loc><lastmod>2026-01-01T00:30:00Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://example.com/shared/</loc></url>
</urlset>`;
  const result = dedupeSitemap(source);
  const secondPass = dedupeSitemap(result.xml);

  assert.equal(result.removed, 2);
  assert.equal(result.unique, 2);
  assert.match(result.xml, /<lastmod>2026-01-01T00:30:00Z<\/lastmod>/);
  assert.match(result.xml, /<changefreq>monthly<\/changefreq>/);
  assert.match(result.xml, /<priority>0\.8<\/priority>/);
  assert.match(
    result.xml,
    /<loc>https:\/\/example\.com\/shared\/<\/loc>\s*<lastmod>2026-01-01T00:30:00Z<\/lastmod>\s*<changefreq>monthly<\/changefreq>\s*<priority>0\.8<\/priority>/,
  );
  assert.match(result.xml, /https:\/\/example\.com\/unique\//);
  assert.equal(secondPass.removed, 0);
  assert.equal(secondPass.xml, result.xml);
});
