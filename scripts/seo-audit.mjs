#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const baseUrl = "https://www.samuelcoachdealeman.com";
const ignoredDirectories = new Set([".git", "node_modules", "playwright-report", "test-results"]);

function walkHtml(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (ignoredDirectories.has(entry.name)) return [];
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkHtml(target);
    return entry.isFile() && entry.name === "index.html" ? [target] : [];
  });
}

function firstMatch(html, pattern) {
  return (html.match(pattern)?.[1] || "").trim();
}

function routeFor(file) {
  const relative = path.relative(rootDir, file).split(path.sep).join("/");
  return relative === "index.html" ? "/" : `/${relative.replace(/index\.html$/, "")}`;
}

function htmlFileForRoute(route) {
  let pathname = route.split(/[?#]/)[0];
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  if (!pathname.startsWith("/")) return null;
  if (pathname === "/") return path.join(rootDir, "index.html");
  const relative = pathname.replace(/^\//, "");
  const direct = path.join(rootDir, relative);
  if (path.extname(relative)) return direct;
  return path.join(direct, "index.html");
}

function extractInternalLinks(html) {
  return [...html.matchAll(/href=["']([^"']+)["']/gi)]
    .map((match) => match[1])
    .filter((href) => href.startsWith("/") && !href.startsWith("//"))
    .filter((href) => !href.startsWith("/functions/") && !href.startsWith("/assets/"));
}

const pages = walkHtml(rootDir).map((file) => {
  const html = fs.readFileSync(file, "utf8");
  const robots = firstMatch(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)/i)
    || firstMatch(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']robots["']/i);
  return {
    file,
    relative: path.relative(rootDir, file).split(path.sep).join("/"),
    route: routeFor(file),
    html,
    lang: firstMatch(html, /<html[^>]+lang=["']([^"']+)/i),
    title: firstMatch(html, /<title>([\s\S]*?)<\/title>/i).replace(/<[^>]+>/g, ""),
    description: firstMatch(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i)
      || firstMatch(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i),
    canonical: firstMatch(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i),
    h1Count: (html.match(/<h1\b/gi) || []).length,
    hreflangCount: (html.match(/hreflang=/gi) || []).length,
    noindex: /noindex/i.test(robots),
    staleNotice: /22\.06|agenda cerrada hasta|schedule closed until|terminplan bis zum/i.test(html),
    wrongLocalizedBlogLink:
      /^(de|en)\//.test(path.relative(rootDir, file).split(path.sep).join("/"))
      && /<a\b[^>]*\shref=["']https:\/\/www\.samuelcoachdealeman\.com\/f\//i.test(html),
    links: extractInternalLinks(html)
  };
});

const indexable = pages.filter((page) => !page.noindex);
const missingMetadata = indexable
  .filter((page) => !page.lang || !page.title || !page.description || !page.canonical || page.h1Count !== 1)
  .map((page) => ({
    file: page.relative,
    missing: [
      !page.lang && "lang",
      !page.title && "title",
      !page.description && "description",
      !page.canonical && "canonical",
      page.h1Count !== 1 && `h1:${page.h1Count}`
    ].filter(Boolean)
  }));

function duplicateValues(key) {
  const groups = new Map();
  for (const page of indexable) {
    const value = page[key];
    if (!value) continue;
    groups.set(value, [...(groups.get(value) || []), page.relative]);
  }
  return [...groups.entries()]
    .filter(([, files]) => files.length > 1)
    .map(([value, files]) => ({ value, files }));
}

const brokenInternalLinks = [];
for (const page of pages) {
  for (const href of new Set(page.links)) {
    const target = htmlFileForRoute(href);
    if (!target || fs.existsSync(target)) continue;
    brokenInternalLinks.push({ source: page.relative, href });
  }
}

const sitemapPath = path.join(rootDir, "sitemap.xml");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
const sitemapDuplicates = [...new Set(sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index))];
const sitemapMissingFiles = sitemapUrls
  .filter((url) => url.startsWith(baseUrl))
  .filter((url) => {
    const pathname = new URL(url).pathname;
    const file = htmlFileForRoute(pathname);
    return file && !fs.existsSync(file);
  });

const languages = pages.reduce((counts, page) => {
  counts[page.lang || "missing"] = (counts[page.lang || "missing"] || 0) + 1;
  return counts;
}, {});

const report = {
  pages: pages.length,
  indexablePages: indexable.length,
  languages,
  sitemap: {
    urls: sitemapUrls.length,
    uniqueUrls: new Set(sitemapUrls).size,
    duplicates: sitemapDuplicates,
    missingFiles: sitemapMissingFiles
  },
  critical: {
    missingMetadata,
    staleNotices: pages.filter((page) => page.staleNotice).map((page) => page.relative),
    localizedPagesLinkingSpanishBlog: pages
      .filter((page) => !page.noindex && page.wrongLocalizedBlogLink)
      .map((page) => page.relative)
  },
  warnings: {
    indexableWithoutHreflang: indexable.filter((page) => page.hreflangCount === 0).map((page) => page.relative),
    duplicateCanonicals: duplicateValues("canonical"),
    duplicateTitles: duplicateValues("title"),
    brokenInternalLinks
  }
};

console.log(JSON.stringify(report, null, 2));

const hasCriticalIssues =
  report.critical.missingMetadata.length > 0
  || report.critical.staleNotices.length > 0
  || report.critical.localizedPagesLinkingSpanishBlog.length > 0
  || sitemapDuplicates.length > 0
  || sitemapMissingFiles.length > 0;

if (hasCriticalIssues) process.exitCode = 1;
