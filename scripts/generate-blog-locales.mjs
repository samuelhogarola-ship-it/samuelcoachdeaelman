import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const baseUrl = "https://www.samuelcoachdealeman.com";
const sourceBlogDir = path.join(rootDir, "f");
const sitemapFile = path.join(rootDir, "sitemap.xml");

const locales = {
  es: {
    lang: "es",
    prefix: "",
    ogLocale: "es_ES",
    title: "Blog de Alemán: Gramática, Vocabulario y Exámenes",
    description:
      "Blog de alemán gratis con guías de gramática, vocabulario, escritura, Lesen, Sprechen y preparación Goethe/TELC para aprender alemán con claridad."
  },
  de: {
    lang: "de",
    prefix: "/de",
    ogLocale: "de_DE",
    title: "Deutsch-Blog: Grammatik, Wortschatz und Prüfungen",
    description:
      "Deutsch-Blog mit kostenlosen Guides zu Grammatik, Wortschatz, Schreiben, Lesen, Sprechen und Goethe/TELC-Prüfungsvorbereitung."
  },
  en: {
    lang: "en",
    prefix: "/en",
    ogLocale: "en_GB",
    title: "German Blog: Grammar, Vocabulary and Exams",
    description:
      "Free German blog with guides on grammar, vocabulary, writing, reading, speaking and Goethe/TELC exam preparation."
  }
};

function blogPath(locale, slug = "") {
  const info = locales[locale];
  return `${info.prefix}/f/${slug ? `${slug}/` : ""}`;
}

function absoluteBlogUrl(locale, slug = "") {
  return `${baseUrl}${blogPath(locale, slug)}`;
}

function canonicalSlugFromHtml(html, fallbackSlug) {
  const canonicalMatch = html.match(/<link rel="canonical" href="https:\/\/www\.samuelcoachdealeman\.com\/f\/([^"]*)">/);
  if (!canonicalMatch) return fallbackSlug;
  return canonicalMatch[1].replace(/\/$/, "");
}

function findBlogPages() {
  const pages = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(entryPath);
        continue;
      }

      if (entry.name !== "index.html") continue;
      const relativeDir = path.relative(sourceBlogDir, path.dirname(entryPath));
      const slug = relativeDir === "" ? "" : relativeDir.split(path.sep).join("/");
      const source = fs.readFileSync(entryPath, "utf8");
      pages.push({ slug, canonicalSlug: canonicalSlugFromHtml(source, slug), sourceFile: entryPath });
    }
  }

  walk(sourceBlogDir);
  return pages.sort((a, b) => a.slug.localeCompare(b.slug));
}

function renderAlternates(slug) {
  return [
    ["es", absoluteBlogUrl("es", slug)],
    ["de", absoluteBlogUrl("de", slug)],
    ["en", absoluteBlogUrl("en", slug)],
    ["x-default", absoluteBlogUrl("es", slug)]
  ]
    .map(([hreflang, href]) => `  <link rel="alternate" hreflang="${hreflang}" href="${href}">`)
    .join("\n");
}

function targetFileFor(locale, slug) {
  const outputRoot = locale === "es" ? sourceBlogDir : path.join(rootDir, locale, "f");
  return path.join(outputRoot, slug, "index.html");
}

function localizeSiteLinks(html, locale) {
  if (locale === "es") return html;
  const prefix = locales[locale].prefix;
  const localizedPaths = [
    "servicios",
    "recursos",
    "sobre-mi",
    "contacto",
    "metodologia",
    "politica-de-privacidad",
    "mi-cuenta",
    "newsletter-confirmado",
    "preparacion-examenes",
    "trabajar-en-alemania",
    "aprender-aleman-solo",
    "practicar-aleman"
  ];

  let next = html
    .replace(/href="\/f\//g, `href="${blogPath(locale)}`)
    .replace(/href="\/"/g, `href="${prefix}/"`)
    .replace(/href="\/#/g, `href="${prefix}/#`);

  for (const pagePath of localizedPaths) {
    next = next.replace(new RegExp(`href="/${pagePath}/`, "g"), `href="${prefix}/${pagePath}/`);
  }

  return next;
}

function localizeHead(html, locale, slug, canonicalSlug) {
  const canonical = absoluteBlogUrl(locale, canonicalSlug);
  const alternates = renderAlternates(canonicalSlug);
  const info = locales[locale];

  let next = html
    .replace(/<html lang="[^"]*">/, `<html lang="${info.lang}">`)
    .replace(/\n\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+">/g, "")
    .replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${canonical}">\n${alternates}`)
    .replace(/<meta property="og:url" content="[^"]+">/, `<meta property="og:url" content="${canonical}">`)
    .replace(/<meta property="og:locale" content="[^"]+">/, `<meta property="og:locale" content="${info.ogLocale}">`);

  if (slug === "") {
    next = next
      .replace(/<title>[^<]+<\/title>/, `<title>${info.title}</title>`)
      .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${info.description}">`)
      .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${info.title}">`)
      .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${info.description}">`)
      .replace(/<meta property="og:image:alt" content="[^"]*">/, `<meta property="og:image:alt" content="${info.title}">`)
      .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${info.title}">`)
      .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${info.description}">`);
  }

  return next;
}

function localizeStructuredData(html, locale, canonicalSlug) {
  const currentBase = absoluteBlogUrl(locale);
  return html
    .replace(/https:\/\/www\.samuelcoachdealeman\.com\/f\//g, currentBase)
    .replace(/"inLanguage": "es"/g, `"inLanguage": "${locales[locale].lang}"`)
    .replace(/"@id": "https:\/\/www\.samuelcoachdealeman\.com\/(?:de\/|en\/)?f\/#webpage"/g, `"@id": "${absoluteBlogUrl(locale)}#webpage"`)
    .replace(/"@id": "https:\/\/www\.samuelcoachdealeman\.com\/(?:de\/|en\/)?f\/#blog"/g, `"@id": "${absoluteBlogUrl(locale)}#blog"`)
    .replace(/"mainEntityOfPage": "https:\/\/www\.samuelcoachdealeman\.com\/(?:de\/|en\/)?f\/[^"]+"/g, `"mainEntityOfPage": "${absoluteBlogUrl(locale, canonicalSlug)}"`);
}

function buildLocalizedHtml(source, locale, slug, canonicalSlug) {
  let html = source;
  html = localizeStructuredData(html, locale, canonicalSlug);
  html = localizeHead(html, locale, slug, canonicalSlug);
  html = localizeSiteLinks(html, locale);
  return html;
}

function writeBlogLocales() {
  const pages = findBlogPages();

  for (const page of pages) {
    const source = fs.readFileSync(page.sourceFile, "utf8");

    for (const locale of Object.keys(locales)) {
      const targetFile = targetFileFor(locale, page.slug);
      fs.mkdirSync(path.dirname(targetFile), { recursive: true });
      fs.writeFileSync(targetFile, buildLocalizedHtml(source, locale, page.slug, page.canonicalSlug), "utf8");
    }
  }

  return pages;
}

function updateSitemap(pages) {
  if (!fs.existsSync(sitemapFile)) return;

  const entries = [];
  const canonicalPages = pages.filter((page) => page.slug === page.canonicalSlug);
  for (const locale of ["de", "en"]) {
    for (const page of canonicalPages) {
      entries.push(`  <url>
    <loc>${absoluteBlogUrl(locale, page.canonicalSlug)}</loc>
    <changefreq>${page.canonicalSlug === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${page.canonicalSlug === "" ? "0.80" : "0.65"}</priority>
  </url>`);
    }
  }

  const block = `  <!-- BLOG-I18N:START -->\n${entries.join("\n")}\n  <!-- BLOG-I18N:END -->\n`;
  let sitemap = fs
    .readFileSync(sitemapFile, "utf8")
    .replace(/\s*<!-- BLOG-I18N:START -->[\s\S]*?<!-- BLOG-I18N:END -->\s*/g, "\n");

  sitemap = sitemap.replace("</urlset>", `${block}</urlset>`);
  fs.writeFileSync(sitemapFile, sitemap, "utf8");
}

const pages = writeBlogLocales();
updateSitemap(pages);

console.log(`Generated localized blog routes for ${pages.length} blog pages.`);
