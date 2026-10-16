import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const origin = "https://www.samuelcoachdealeman.com";
const sitemapFile = path.join(rootDir, "sitemap.xml");
const legacyBlogAliases = [
  "demonstrativpronomen-los-pronombres-demostrativos-en-aleman",
  "el-imperativo-en-aleman",
  "haeufigkeitsadverbien-en-aleman",
  "la-voz-pasiva-con-verbos-modales-en-aleman-passiv-mit-modalverben",
  "las-w-fragen-en-aleman",
  "los-articulos-posesivos-en-aleman-possessivartikel-auf-deutsch",
  "partizip-1-vs-partizip-2-en-aleman",
  "partizip-2-en-aleman-la-formacion-del-participio",
  "tekamolo-2-0-en-aleman-satzbau",
  "trennbare-verben-en-aleman-verbos-separables-y-no-separables",
];

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(match => [match[1], match[2]]));
}

function findBlogPages() {
  const pages = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const filePath = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(filePath);
      else if (entry.name === "index.html") {
        const html = fs.readFileSync(filePath, "utf8");
        const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attributes(match[0]));
        const canonical = links.find(link => link.rel === "canonical")?.href;
        const route = path.relative(rootDir, filePath).replaceAll(path.sep, "/").replace(/index\.html$/, "");
        const robots = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attributes(match[0])).find(meta => meta.name === "robots")?.content || "";
        if (canonical !== `${origin}/${route}` || /noindex/i.test(robots)) continue;
        const locale = route.startsWith("de/") ? "de" : route.startsWith("en/") ? "en" : "es";
        pages.push({ filePath, html, links, canonical, locale });
      }
    }
  }
  for (const prefix of ["f", "de/f", "en/f"]) walk(path.join(rootDir, prefix));
  return pages;
}

function consolidateAlternates(pages) {
  const byCanonical = new Map(pages.map(page => [page.canonical, page]));
  const groups = new Map(pages.filter(page => page.locale === "es").map(page => [page.canonical, { es: page }]));
  // A translation explicitly declares its Spanish source; a matching slug alone
  // does not establish that two pages contain equivalent localized content.
  for (const page of pages.filter(page => page.locale !== "es")) {
    const spanish = page.links.find(link => link.hreflang === "es")?.href;
    if (groups.has(spanish)) groups.get(spanish)[page.locale] = page;
  }
  for (const group of groups.values()) {
    const translated = Boolean(group.de || group.en);
    for (const page of Object.values(group)) {
      let next = page.html;
      if (translated) {
        next = next.replace(/\n?[ \t]*<link\b[^>]*>/gi, tag => attributes(tag).hreflang ? "" : tag);
        const alternates = ["es", "de", "en"].filter(locale => group[locale])
          .map(locale => `  <link rel="alternate" hreflang="${locale}" href="${group[locale].canonical}">`);
        alternates.push(`  <link rel="alternate" hreflang="x-default" href="${group.es.canonical}">`);
        next = next.replace(/<link\b[^>]*>/gi, tag => attributes(tag).rel === "canonical" ? `${tag}\n${alternates.join("\n")}` : tag);
      } else {
        next = next.replace(/\n?[ \t]*<link\b[^>]*>/gi, tag => {
          const link = attributes(tag);
          return ["de", "en"].includes(link.hreflang) && !byCanonical.has(link.href) ? "" : tag;
        });
      }
      if (next !== page.html) fs.writeFileSync(page.filePath, next, "utf8");
    }
  }
}

function updateBlogSitemap(pages) {
  if (!fs.existsSync(sitemapFile)) return;
  const source = fs.readFileSync(sitemapFile, "utf8");
  const valid = new Set(pages.map(page => page.canonical));
  const seen = new Set();
  let next = source.replace(/\n?[ \t]*<url>[\s\S]*?<\/url>/g, block => {
    const location = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!location?.match(/^https:\/\/www\.samuelcoachdealeman\.com\/(?:de\/|en\/)?f\//)) return block;
    if (!valid.has(location) || seen.has(location)) return "";
    seen.add(location);
    return block;
  });
  const missing = [...valid].filter(url => !seen.has(url)).sort();
  if (missing.length) {
    const entries = missing.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`).join("\n");
    next = next.replace("</urlset>", `${entries}\n</urlset>`);
  }
  if (next !== source) fs.writeFileSync(sitemapFile, next, "utf8");
}

for (const slug of legacyBlogAliases) {
  for (const prefix of ["f", "de/f", "en/f"]) {
    fs.rmSync(path.join(rootDir, prefix, slug), { recursive: true, force: true });
  }
}
const pages = findBlogPages();
consolidateAlternates(pages);
updateBlogSitemap(pages);
console.log(`Consolidated ${pages.length} indexable blog pages, preserving real translations and removing legacy aliases.`);
