import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const baseUrl = "https://www.samuelcoachdealeman.com";
const sourceBlogDir = path.join(rootDir, "f");
const sitemapFile = path.join(rootDir, "sitemap.xml");
const blogIndexFile = path.join(sourceBlogDir, "index.html");

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

function stripTags(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'");
}

function extractMatch(html, pattern, fallback = "") {
  const match = html.match(pattern);
  return match ? decodeEntities(stripTags(match[1])) : fallback;
}

function imagePathFromUrl(imageUrl) {
  if (!imageUrl) return "/assets/img/og-home.webp";
  const imagePath = imageUrl.replace(baseUrl, "");
  return imagePath === "/assets/img/og-blog.webp" ? "/assets/img/og-home.webp" : imagePath;
}

function readCanonicalBlogPosts() {
  const posts = [];

  for (const entry of fs.readdirSync(sourceBlogDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const file = path.join(sourceBlogDir, slug, "index.html");
    if (!fs.existsSync(file)) continue;

    const html = fs.readFileSync(file, "utf8");
    const canonicalSlug = canonicalSlugFromHtml(html, slug);
    if (canonicalSlug !== slug) continue;

    const title = extractMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/, extractMatch(html, /<title>([\s\S]*?)<\/title>/, slug))
      .replace(/\s+\|\s+Samuel Coach de Alemán$/, "");
    const description = extractMatch(html, /<meta name="description" content="([^"]*)">/, "");
    const image = imagePathFromUrl((html.match(/<meta property="og:image" content="([^"]*)">/) || [])[1]);
    const datePublished = extractMatch(html, /"datePublished":\s*"([^"]+)"/, "2026-06-06");
    const topic = description.split(/[.:;]/)[0].slice(0, 84);

    posts.push({
      slug,
      title,
      description,
      image,
      datePublished,
      topic: topic || "Guía de alemán"
    });
  }

  return posts.sort((a, b) => {
    const dateSort = b.datePublished.localeCompare(a.datePublished);
    return dateSort || a.title.localeCompare(b.title);
  });
}

function formatDate(date) {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(parsed);
}

function renderBlogPostSchema(posts) {
  return posts.map((post) => `        {
          "@type": "BlogPosting",
          "headline": ${JSON.stringify(post.title)},
          "url": "${absoluteBlogUrl("es", post.slug)}",
          "datePublished": "${post.datePublished}",
          "dateModified": "${post.datePublished}",
          "image": "${baseUrl}${post.image}",
          "isPartOf": {
            "@id": "${absoluteBlogUrl("es")}#blog"
          },
          "publisher": {
            "@id": "${baseUrl}/#organization"
          }
        }`).join(",\n");
}

function renderPostCard(post, index) {
  const tag = index < 6 ? "Destacado" : "Publicado";
  return `          <article class="blog-hub-card">
            <div class="blog-hub-thumb"><img src="${post.image}" alt="${post.title}" width="400" height="225" loading="${index < 3 ? "eager" : "lazy"}" decoding="async"></div>
            <div class="blog-hub-card-body">
              <span class="blog-tag">${tag}</span>
              <h2><a href="/f/${post.slug}/">${post.title}</a></h2>
              <div class="blog-meta">📅 ${formatDate(post.datePublished)} · ${post.topic}</div>
              <p>${post.description}</p>
              <a href="/f/${post.slug}/" class="btn-outline-teal">Leer artículo →</a>
            </div>
          </article>`;
}

function renderArchiveLinks(posts) {
  return posts
    .map((post) => `            <li><a href="/f/${post.slug}/">${post.title}</a></li>`)
    .join("\n");
}

function buildBlogIndex() {
  const posts = readCanonicalBlogPosts();
  const cards = posts.map(renderPostCard).join("\n");
  const archiveLinks = renderArchiveLinks(posts);

  fs.writeFileSync(blogIndexFile, `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${locales.es.title}</title>
  <meta name="description" content="${locales.es.description}">
  <link rel="canonical" href="${absoluteBlogUrl("es")}">
${renderAlternates("")}
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${locales.es.title}">
  <meta property="og:description" content="${locales.es.description}">
  <meta property="og:url" content="${absoluteBlogUrl("es")}">
  <meta property="og:image" content="${baseUrl}/assets/img/og-home.webp">
  <meta property="og:image:alt" content="${locales.es.title}">
  <meta property="og:locale" content="${locales.es.ogLocale}">
  <meta property="og:site_name" content="Samuel Coach de Alemán">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${locales.es.title}">
  <meta name="twitter:description" content="${locales.es.description}">
  <meta name="twitter:image" content="${baseUrl}/assets/img/og-home.webp">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap"></noscript>
  <link rel="stylesheet" href="/assets/css/styles.css?v=20260728a">
  <link rel="stylesheet" href="/assets/css/cookie-banner-core.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "${baseUrl}/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "${absoluteBlogUrl("es")}"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "${absoluteBlogUrl("es")}#webpage",
        "url": "${absoluteBlogUrl("es")}",
        "name": "${locales.es.title}",
        "description": "${locales.es.description}",
        "inLanguage": "es",
        "isPartOf": {
          "@id": "${baseUrl}/#website"
        }
      },
      {
        "@type": "Blog",
        "@id": "${absoluteBlogUrl("es")}#blog",
        "name": "Blog de Samuel Coach de Alemán",
        "url": "${absoluteBlogUrl("es")}",
        "description": "${locales.es.description}",
        "blogPost": [
${renderBlogPostSchema(posts)}
        ]
      }
    ]
  }
  </script>
</head>
<body class="premium-page premium-resource-page">
  <nav aria-label="Principal">
    <div class="nav-inner">
      <a class="nav-logo" href="/"><img src="/assets/img/logo-main.webp" alt="Samuel Coach de Alemán" width="260" height="260"></a>
      <button class="hamburger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú" aria-haspopup="true"><span></span><span></span><span></span></button>
      <ul class="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/servicios/">Clases</a></li>
        <li><a href="/f/">Blog</a></li>
        <li><a href="/recursos/">Recursos</a></li>
        <li><a href="/sobre-mi/">Sobre mí</a></li>
        <li><a href="/contacto/">Contacto</a></li>
        <li><a class="nav-cta" href="/contacto/#contacto-formulario">Reservar valoración</a></li>
      </ul>
    </div>
    <div id="mobile-menu" class="mobile-menu" hidden>
      <a href="/">Inicio</a>
      <a href="/servicios/">Clases</a>
      <a href="/f/">Blog</a>
      <a href="/recursos/">Recursos</a>
      <a href="/sobre-mi/">Sobre mí</a>
      <a href="/contacto/">Contacto</a>
      <a class="mobile-cta" href="/contacto/#contacto-formulario">Reservar valoración</a>
    </div>
  </nav>

  <main>
    <section class="blog-hub-hero">
      <div class="container">
        <div class="blog-breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Inicio</a></li>
            <li>Blog</li>
          </ol>
        </div>
        <div class="blog-hub-intro">
          <span class="blog-pill">${posts.length} guías publicadas</span>
          <h1>Blog de alemán: gramática, vocabulario, exámenes y trucos para aprender mejor</h1>
          <p>Todos los artículos publicados en Samuel Coach de Alemán, con sus imágenes propias para reforzar la relevancia visual en Google: Kausalsätze, Modalverben, Partizip 2, W-Fragen, casos, conectores y preparación Goethe/TELC.</p>
        </div>
        <section class="blog-hub-cta" style="margin:28px 0; background:#fff7e8; border-radius:18px; padding:24px;">
          <h2>Rutas principales del blog de alemán</h2>
          <p>Para que Google y el alumno entiendan rápido el mapa del contenido, estas son las rutas fuertes del blog: gramática A1-A2, gramática B1-B2, examen y alemán profesional.</p>
          <div class="signal-grid">
            <article class="signal-card">
              <h3>Gramática alemana A1-A2</h3>
              <p><a href="/f/das-perfekt-en-aleman/">Das Perfekt</a>, <a href="/f/partizip-2-en-aleman/">Partizip 2</a>, <a href="/f/trennbare-verben-en-aleman/">verbos separables</a>, W-Fragen, posesivos y negación.</p>
            </article>
            <article class="signal-card">
              <h3>Gramática alemana B1-B2</h3>
              <p><a href="/f/konjunktiv-2-en-aleman/">Konjunktiv 2</a>, <a href="/f/relativsaetze-en-aleman/">Relativsätze</a>, <a href="/f/weil-denn-deshalb-en-aleman/">Kausalsätze con weil, denn y deshalb</a>, pasiva y estructuras para escribir mejor.</p>
            </article>
            <article class="signal-card">
              <h3>Preparación Goethe/TELC</h3>
              <p>Consejos para <a href="/f/schreiben-errores-b1-b2/">Schreiben B1/B2</a>, <a href="/f/sprechen-redemittel-estructura/">Sprechen</a>, Lesen y rutas hacia recursos de examen.</p>
            </article>
          </div>
        </section>
        <div class="blog-hub-grid">
${cards}
        </div>
        <section class="blog-hub-cta" style="margin-top:32px; background:#f7fafc; border-radius:18px; padding:24px;">
          <h2>Archivo completo del blog</h2>
          <p>Todos los posts canónicos publicados, enlazados desde una sola portada para que no se queden escondidos.</p>
          <ul style="columns:2; column-gap:32px; margin-top:20px;">
${archiveLinks}
          </ul>
        </section>
        <section class="blog-hub-cta" style="margin-top:32px; background:#edf5ff; border-radius:18px; padding:24px;">
          <h2>Si vienes del blog y quieres convertir teoría en progreso real</h2>
          <p>No hace falta leer veinte artículos seguidos. Lo más útil suele ser elegir una ruta clara: recursos por destreza, preparación de examen o una valoración inicial para saber qué trabajar primero.</p>
          <div class="hero-btns">
            <a href="/preparacion-examenes/" class="btn btn-primary">Ver preparación de exámenes</a>
            <a href="/servicios/#examenes" class="btn btn-white">Explorar clases individuales</a>
            <a href="/contacto/#contacto-formulario" class="btn btn-wa">Reservar valoración</a>
          </div>
        </section>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <a class="footer-logo footer-logo-fun" href="/"><img src="/assets/img/logo-fun.webp" alt="Logo divertido de Samuel Coach de Alemán" width="180" height="180" loading="lazy" decoding="async"></a>
        <div class="footer-links">
          <a href="/">Inicio</a>
          <a href="/f/">Blog</a>
          <a href="/recursos/">Recursos</a>
          <a href="/sobre-mi/">Sobre mí</a>
          <a href="/servicios/">Clases</a>
          <a href="/metodologia/">Metodología</a>
          <a href="/contacto/">Contacto</a>
          <a href="/politica-de-privacidad/">Política de privacidad</a>
        </div>
      </div>
      <div class="footer-bottom">Copyright © 2026 Samuel Coach de Alemán · Todos los derechos reservados.</div>
    </div>
  </footer>

  <script defer src="/assets/js/google-analytics-core.js"></script>
  <script src="/assets/js/cookie-banner-core.js" defer></script>
  <script src="/assets/js/main.js" defer></script>
</body>
</html>
`, "utf8");

  return posts;
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

buildBlogIndex();
const pages = writeBlogLocales();
updateSitemap(pages);

console.log(`Generated localized blog routes for ${pages.length} blog pages.`);
