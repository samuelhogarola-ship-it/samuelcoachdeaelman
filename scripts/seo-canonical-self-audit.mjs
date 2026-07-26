import fs from "fs";
import path from "path";
import process from "process";

const ROOT = process.cwd();
const BASE_URL = "https://www.samuelcoachdealeman.com";
const SKIP_DIRS = new Set(["node_modules", ".git", "CHAT", "playwright-report", "output", "test-results"]);
const SAMPLE_LIMIT = 20;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) return [];
      return walk(fullPath);
    }
    return entry.isFile() && entry.name === "index.html" ? [fullPath] : [];
  });
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function getCanonical(html) {
  return (html.match(/<link[^>]+rel=(["'])canonical\1[^>]+href=(["'])([\s\S]*?)\2/i) || [])[3] || "";
}

function getRobots(html) {
  return (html.match(/<meta[^>]+name=(["'])robots\1[^>]+content=(["'])([\s\S]*?)\2/i) || [])[3] || "";
}

function expectedCanonical(filePath) {
  const relativePath = rel(filePath).replace(/\\/g, "/");
  if (relativePath === "index.html") return `${BASE_URL}/`;
  return `${BASE_URL}/${relativePath.replace(/\/index\.html$/, "")}/`;
}

const pages = walk(ROOT).map((filePath) => {
  const html = read(filePath);
  return {
    filePath,
    relativePath: rel(filePath),
    canonical: getCanonical(html),
    robots: getRobots(html)
  };
});

const issues = [];

for (const page of pages) {
  if (!page.canonical.startsWith(BASE_URL)) continue;
  if (/noindex/i.test(page.robots)) continue;
  const expected = expectedCanonical(page.filePath);
  if (page.canonical !== expected) {
    issues.push({
      type: "canonical-self-mismatch",
      file: page.relativePath,
      canonical: page.canonical,
      expected
    });
  }
}

console.log(
  JSON.stringify(
    {
      totals: {
        pagesChecked: pages.length,
        withCanonical: pages.filter((page) => page.canonical.startsWith(BASE_URL)).length,
        indexablePages: pages.filter((page) => page.canonical.startsWith(BASE_URL) && !/noindex/i.test(page.robots)).length,
        issueCount: issues.length
      },
      sample: issues.slice(0, SAMPLE_LIMIT)
    },
    null,
    2
  )
);

if (issues.length > 0) process.exitCode = 1;
