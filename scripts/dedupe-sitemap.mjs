import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Return a sitemap with one entry per location while merging valid metadata.
 * The first entry keeps ownership and later entries supply current frequency
 * and priority values; the chronologically latest lastmod value wins.
 *
 * @param {string} source Complete sitemap XML.
 * @returns {{xml: string, removed: number, unique: number}} Deduplicated XML and counts.
 */
export function dedupeSitemap(source) {
  if (!source.includes("<urlset") || !source.includes("</urlset>")) {
    throw new Error("sitemap.xml must contain a complete <urlset> document.");
  }

  const urlBlockPattern = /\n?[ \t]*<url>[\s\S]*?<\/url>/g;
  const matches = [...source.matchAll(urlBlockPattern)].map((match) => {
    const locationMatch = match[0].match(/<loc>([^<]+)<\/loc>/);
    const location = locationMatch && locationMatch[1].trim();

    if (!location) {
      throw new Error("Every sitemap <url> block must contain one <loc> value.");
    }

    return {
      block: match[0],
      index: match.index,
      location,
    };
  });

  const occurrences = new Map();
  for (const [index, match] of matches.entries()) {
    const entries = occurrences.get(match.location) || [];
    entries.push({ ...match, order: index });
    occurrences.set(match.location, entries);
  }

  const finalEntries = new Map();
  for (const [location, entries] of occurrences) {
    let block = entries[0].block;
    const metadata = {};

    for (const tag of ["changefreq", "priority"]) {
      for (const entry of entries) {
        const value = entry.block.match(new RegExp(`<${tag}>([^<]+)</${tag}>`));
        if (value) metadata[tag] = value[1].trim();
      }
    }

    const lastModifiedValues = entries
      .map((entry) => entry.block.match(/<lastmod>([^<]+)<\/lastmod>/))
      .filter(Boolean)
      .map((match) => match[1].trim());

    if (lastModifiedValues.length > 0) {
      metadata.lastmod = lastModifiedValues.reduce((latest, candidate) => {
        const candidateTime = Date.parse(candidate);
        const latestTime = Date.parse(latest);

        if (Number.isNaN(candidateTime) || Number.isNaN(latestTime)) {
          throw new Error(`Invalid sitemap lastmod value for ${location}.`);
        }

        return candidateTime >= latestTime ? candidate : latest;
      });
    }

    for (const tag of ["lastmod", "changefreq", "priority"]) {
      block = block.replace(new RegExp(`\\s*<${tag}>[^<]+</${tag}>`, "g"), "");
    }

    const metadataElements = ["lastmod", "changefreq", "priority"]
      .filter((tag) => metadata[tag])
      .map((tag) => `    <${tag}>${metadata[tag]}</${tag}>`);

    if (metadataElements.length > 0) {
      block = block.replace("</loc>", `</loc>\n${metadataElements.join("\n")}`);
    }

    finalEntries.set(location, {
      block,
      order: entries[0].order,
    });
  }

  let cursor = 0;
  let xml = "";
  let removed = 0;

  for (const [index, match] of matches.entries()) {
    xml += source.slice(cursor, match.index);

    const finalEntry = finalEntries.get(match.location);
    if (finalEntry.order === index) {
      xml += finalEntry.block;
    } else {
      removed += 1;
    }

    cursor = match.index + match.block.length;
  }

  xml += source.slice(cursor);

  return {
    xml,
    removed,
    unique: occurrences.size,
  };
}

const scriptFile = fileURLToPath(import.meta.url);

if (process.argv[1] && path.resolve(process.argv[1]) === scriptFile) {
  const rootDir = path.resolve(path.dirname(scriptFile), "..");
  const sitemapFile = path.join(rootDir, "sitemap.xml");
  const source = fs.readFileSync(sitemapFile, "utf8");
  const result = dedupeSitemap(source);

  if (result.removed > 0) {
    fs.writeFileSync(sitemapFile, result.xml, "utf8");
  }

  console.log(`Sitemap: ${result.unique} URLs únicas; ${result.removed} duplicados eliminados.`);
}
