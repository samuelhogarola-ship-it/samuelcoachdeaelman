import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemapFile = path.join(rootDir, "sitemap.xml");
const baseUrl = "https://www.samuelcoachdealeman.com";

function localFileForUrl(loc) {
  if (!loc.startsWith(baseUrl)) return null;

  const url = new URL(loc);
  let pathname = decodeURIComponent(url.pathname);
  if (!pathname.endsWith("/")) {
    pathname += "/";
  }

  return path.join(rootDir, pathname.replace(/^\/+/, ""), "index.html");
}

function shouldKeep(loc) {
  const localFile = localFileForUrl(loc);
  if (!localFile) return false;
  return fs.existsSync(localFile);
}

if (fs.existsSync(sitemapFile)) {
  const xml = fs.readFileSync(sitemapFile, "utf8");
  const matches = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
  const seen = new Set();
  const kept = [];

  for (const block of matches) {
    const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
    if (!locMatch) continue;
    const loc = locMatch[1].trim();
    if (seen.has(loc)) continue;
    if (!shouldKeep(loc)) continue;

    seen.add(loc);
    kept.push(
      block
        .trim()
        .split("\n")
        .map((line) => `  ${line.trimStart()}`)
        .join("\n")
    );
  }

  const next = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    kept.join("\n"),
    "</urlset>",
    ""
  ].join("\n");

  fs.writeFileSync(sitemapFile, next, "utf8");
  console.log(`Deduped sitemap: kept ${kept.length} unique live URLs.`);
}
