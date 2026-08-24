import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const listed = spawnSync("git", ["ls-files", "*.html"], { encoding: "utf8" });
if (listed.status !== 0) process.exit(1);

const htmlFiles = listed.stdout.trim().split("\n").filter(Boolean);
const allowlistedSources = new Set(["blog/Style/post-template.html"]);
const allowlistedReferences = new Set(["f/como-escribir-posts/index.html\0url"]);
const failures = [];

const targetExists = (relativeTarget) => {
  const absolute = path.join(root, relativeTarget);
  if (fs.existsSync(absolute) && fs.statSync(absolute).isFile()) return true;
  if (fs.existsSync(path.join(absolute, "index.html"))) return true;
  if (!path.extname(absolute) && fs.existsSync(`${absolute}.html`)) return true;
  return false;
};

for (const source of htmlFiles) {
  if (allowlistedSources.has(source)) continue;
  const html = fs.readFileSync(path.join(root, source), "utf8");
  const references = html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi);

  for (const match of references) {
    const raw = match[1].trim();
    if (allowlistedReferences.has(`${source}\0${raw}`)) continue;
    if (!raw || raw.startsWith("#") || raw.startsWith("?") || raw.startsWith("//")) continue;
    if (/^[a-z][a-z\d+.-]*:/i.test(raw) || /\$\{|\{\{|<%/.test(raw)) continue;

    let pathname = raw.split("#")[0].split("?")[0];
    try {
      pathname = decodeURIComponent(pathname);
    } catch (_error) {
      failures.push({ source, target: raw, reason: "malformed URL encoding" });
      continue;
    }

    const relativeTarget = pathname.startsWith("/")
      ? pathname.replace(/^\/+/, "")
      : path.normalize(path.join(path.dirname(source), pathname));

    if (!relativeTarget || relativeTarget.startsWith("..") || targetExists(relativeTarget)) continue;
    failures.push({ source, target: raw, reason: "target not found" });
  }
}

if (failures.length) {
  failures.forEach(({ source, target, reason }) => console.error(`${source}: ${target} (${reason})`));
  console.error(`Found ${failures.length} broken internal link(s).`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: all internal links resolve.`);
