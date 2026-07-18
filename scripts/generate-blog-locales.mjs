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
    eyebrow: "Blog de alemán gratis",
    h1: "Blog de alemán: gramática, vocabulario, exámenes y trucos para aprender mejor",
    description:
      "Blog de alemán gratis con guías de gramática, vocabulario, escritura, Lesen, Sprechen y preparación Goethe/TELC para aprender alemán con claridad.",
    notice: 'Nuevas guías de alemán y recursos de examen publicados con regularidad.'
  },
  de: {
    lang: "de",
    prefix: "/de",
    ogLocale: "de_DE",
    title: "Deutsch-Blog: Grammatik, Wortschatz und Prüfungen",
    eyebrow: "Kostenloser Deutsch-Blog",
    h1: "Deutsch-Blog: Grammatik, Wortschatz, Prüfungen und Lerntipps",
    description:
      "Deutsch-Blog mit kostenlosen Guides zu Grammatik, Wortschatz, Schreiben, Lesen, Sprechen und Goethe/TELC-Prüfungsvorbereitung.",
    notice: 'Neue Deutsch-Guides und Prüfungsressourcen werden regelmäßig veröffentlicht.',
    untranslatedNotice: 'Dieser Artikel ist derzeit auf Spanisch verfügbar. <a href="/de/f/">Zur deutschen Blog-Übersicht</a>.'
  },
  en: {
    lang: "en",
    prefix: "/en",
    ogLocale: "en_GB",
    title: "German Blog: Grammar, Vocabulary and Exams",
    eyebrow: "Free German blog",
    h1: "German blog: grammar, vocabulary, exams and study tips",
    description:
      "Free German blog with guides on grammar, vocabulary, writing, reading, speaking and Goethe/TELC exam preparation.",
    notice: 'New German guides and exam resources are published regularly.',
    untranslatedNotice: 'This article is currently available in Spanish. <a href="/en/f/">Back to the English blog hub</a>.'
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

function renderAlternates(slug, hasTranslations) {
  const entries = hasTranslations
    ? [
        ["es", absoluteBlogUrl("es", slug)],
        ["de", absoluteBlogUrl("de", slug)],
        ["en", absoluteBlogUrl("en", slug)],
        ["x-default", absoluteBlogUrl("es", slug)]
      ]
    : [
        ["es", absoluteBlogUrl("es", slug)],
        ["x-default", absoluteBlogUrl("es", slug)]
      ];

  return entries
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
    .replace(/(<a\b[^>]*\shref=")https:\/\/www\.samuelcoachdealeman\.com\/f\//gi, `$1${absoluteBlogUrl(locale)}`)
    .replace(/(<a\b[^>]*\shref=")\/f\//gi, `$1${blogPath(locale)}`)
    .replace(/href="\/"/g, `href="${prefix}/"`)
    .replace(/href="\/#/g, `href="${prefix}/#`);

  for (const pagePath of localizedPaths) {
    next = next.replace(new RegExp(`href="/${pagePath}/`, "g"), `href="${prefix}/${pagePath}/`);
  }

  const slugMap = {
    de: {
      "/de/preparacion-examenes/": "/de/pruefungsvorbereitung/",
      "/de/trabajar-en-alemania/": "/de/arbeiten-in-deutschland/",
      "/de/aprender-aleman-solo/": "/de/deutsch-alleine-lernen/"
    },
    en: {
      "/en/preparacion-examenes/": "/en/exam-preparation/",
      "/en/trabajar-en-alemania/": "/en/work-in-germany/",
      "/en/aprender-aleman-solo/": "/en/learn-german-alone/"
    }
  };

  for (const [from, to] of Object.entries(slugMap[locale] || {})) {
    next = next.replace(new RegExp(`href="${from.replace(/\//g, "\\/")}`, "g"), `href="${to}`);
  }

  return next;
}

function localizeRootBlogBody(html, locale) {
  if (locale === "es") return html;

  const replacements = {
    de: [
      ['<li><a href="/de/">Inicio</a></li>', '<li><a href="/de/">Start</a></li>'],
      [
        "<p>Guías prácticas para aprender alemán desde A1 hasta B2: gramática alemana explicada fácil, vocabulario útil, escritura, comprensión lectora, Sprechen y preparación Goethe/TELC. Cada artículo conecta teoría con ejemplos reales y recursos para practicar.</p>",
        "<p>Praktische Guides zum Deutschlernen von A1 bis B2: einfache Grammatik, nützlicher Wortschatz, Schreiben, Leseverstehen, Sprechen und Goethe/TELC-Prüfungsvorbereitung. Jeder Artikel verbindet Theorie mit echten Beispielen und Ressourcen zum Üben.</p>"
      ],
      ["<h2>Rutas principales del blog de alemán</h2>", "<h2>Die wichtigsten Routen im Deutsch-Blog</h2>"],
      [
        "<p>Para que Google y el alumno entiendan rápido el mapa del contenido, estas son las rutas fuertes del blog: gramática A1-A2, gramática B1-B2, examen y alemán profesional.</p>",
        "<p>Damit Lernende und Suchmaschinen die Inhalte schnell einordnen können, bündelt der Blog die wichtigsten Routen: Grammatik A1-A2, Grammatik B1-B2, Prüfung und berufliches Deutsch.</p>"
      ],
      ["<h3>Gramática alemana A1-A2</h3>", "<h3>Deutsche Grammatik A1-A2</h3>"],
      [
        '<p><a href="/de/f/das-perfekt-en-aleman/">Das Perfekt</a>, <a href="/de/f/partizip-2-en-aleman/">Partizip 2</a>, <a href="/de/f/trennbare-verben-en-aleman/">verbos separables</a>, W-Fragen, posesivos y negación.</p>',
        '<p><a href="/de/f/das-perfekt-en-aleman/">Das Perfekt</a>, <a href="/de/f/partizip-2-en-aleman/">Partizip 2</a>, <a href="/de/f/trennbare-verben-en-aleman/">trennbare Verben</a>, W-Fragen, Possessivartikel und Negation.</p>'
      ],
      ["<h3>Gramática alemana B1-B2</h3>", "<h3>Deutsche Grammatik B1-B2</h3>"],
      [
        '<p><a href="/de/f/konjunktiv-2-en-aleman/">Konjunktiv 2</a>, <a href="/de/f/relativsaetze-en-aleman/">Relativsätze</a>, conectores, pasiva y estructuras para escribir mejor.</p>',
        '<p><a href="/de/f/konjunktiv-2-en-aleman/">Konjunktiv 2</a>, <a href="/de/f/relativsaetze-en-aleman/">Relativsätze</a>, Konnektoren, Passiv und Strukturen für besseres Schreiben.</p>'
      ],
      ["<h3>Preparación Goethe/TELC</h3>", "<h3>Goethe/TELC-Prüfungsvorbereitung</h3>"],
      [
        '<p>Consejos para <a href="/de/f/schreiben-errores-b1-b2/">Schreiben B1/B2</a>, <a href="/de/f/sprechen-redemittel-estructura/">Sprechen</a>, Lesen y rutas hacia recursos de examen.</p>',
        '<p>Tipps für <a href="/de/f/schreiben-errores-b1-b2/">Schreiben B1/B2</a>, <a href="/de/f/sprechen-redemittel-estructura/">Sprechen</a>, Lesen und passende Prüfungsressourcen.</p>'
      ],
      ["<h2>Archivo útil para seguir explorando</h2>", "<h2>Nützlicher Archivbereich zum Weiterlernen</h2>"],
      [
        "<p>Además de los artículos destacados de arriba, aquí tienes otras guías ya publicadas que conviene tener a mano si estás repasando gramática, examen y escritura con más calma.</p>",
        "<p>Zusätzlich zu den hervorgehobenen Artikeln findest du hier weitere veröffentlichte Guides, die beim Wiederholen von Grammatik, Prüfung und Schreiben hilfreich sind.</p>"
      ],
      ["<h2>Si vienes del blog y quieres convertir teoría en progreso real</h2>", "<h2>Wenn du Theorie in echten Fortschritt verwandeln willst</h2>"],
      [
        "<p>No hace falta leer veinte artículos seguidos. Lo más útil suele ser elegir una ruta clara: recursos por destreza, preparación de examen o una valoración inicial para saber qué trabajar primero.</p>",
        "<p>Du musst nicht zwanzig Artikel hintereinander lesen. Meist hilft eine klare Route mehr: Ressourcen nach Fertigkeit, Prüfungsvorbereitung oder ein Erstgespräch, um die nächsten Schritte zu ordnen.</p>"
      ],
      [">Ver preparación de exámenes</a>", ">Prüfungsvorbereitung ansehen</a>"],
      [">Explorar clases individuales</a>", ">Einzelunterricht ansehen</a>"],
      [">Reservar valoración</a>", ">Erstgespräch anfragen</a>"],
      ["<p class=\"blog-status-note\">Primero publicamos lo que ya está realmente sólido. Después seguimos ampliando el índice sin volver a crear URLs rotas.</p>", "<p class=\"blog-status-note\">Zuerst veröffentlichen wir, was wirklich solide ist. Danach wächst der Index weiter, ohne neue kaputte URLs zu erzeugen.</p>"]
    ],
    en: [
      ['<li><a href="/en/">Inicio</a></li>', '<li><a href="/en/">Home</a></li>'],
      [
        "<p>Guías prácticas para aprender alemán desde A1 hasta B2: gramática alemana explicada fácil, vocabulario útil, escritura, comprensión lectora, Sprechen y preparación Goethe/TELC. Cada artículo conecta teoría con ejemplos reales y recursos para practicar.</p>",
        "<p>Practical German guides from A1 to B2: clear grammar, useful vocabulary, writing, reading, speaking and Goethe/TELC exam preparation. Each article connects theory with real examples and resources for practice.</p>"
      ],
      ["<h2>Rutas principales del blog de alemán</h2>", "<h2>Main German blog routes</h2>"],
      [
        "<p>Para que Google y el alumno entiendan rápido el mapa del contenido, estas son las rutas fuertes del blog: gramática A1-A2, gramática B1-B2, examen y alemán profesional.</p>",
        "<p>To make the content map clear for learners and search engines, the blog is organised around strong routes: A1-A2 grammar, B1-B2 grammar, exams and professional German.</p>"
      ],
      ["<h3>Gramática alemana A1-A2</h3>", "<h3>German grammar A1-A2</h3>"],
      [
        '<p><a href="/en/f/das-perfekt-en-aleman/">Das Perfekt</a>, <a href="/en/f/partizip-2-en-aleman/">Partizip 2</a>, <a href="/en/f/trennbare-verben-en-aleman/">verbos separables</a>, W-Fragen, posesivos y negación.</p>',
        '<p><a href="/en/f/das-perfekt-en-aleman/">Das Perfekt</a>, <a href="/en/f/partizip-2-en-aleman/">Partizip 2</a>, <a href="/en/f/trennbare-verben-en-aleman/">separable verbs</a>, W-Fragen, possessives and negation.</p>'
      ],
      ["<h3>Gramática alemana B1-B2</h3>", "<h3>German grammar B1-B2</h3>"],
      [
        '<p><a href="/en/f/konjunktiv-2-en-aleman/">Konjunktiv 2</a>, <a href="/en/f/relativsaetze-en-aleman/">Relativsätze</a>, conectores, pasiva y estructuras para escribir mejor.</p>',
        '<p><a href="/en/f/konjunktiv-2-en-aleman/">Konjunktiv 2</a>, <a href="/en/f/relativsaetze-en-aleman/">Relativsätze</a>, connectors, passive voice and structures for better writing.</p>'
      ],
      ["<h3>Preparación Goethe/TELC</h3>", "<h3>Goethe/TELC exam preparation</h3>"],
      [
        '<p>Consejos para <a href="/en/f/schreiben-errores-b1-b2/">Schreiben B1/B2</a>, <a href="/en/f/sprechen-redemittel-estructura/">Sprechen</a>, Lesen y rutas hacia recursos de examen.</p>',
        '<p>Advice for <a href="/en/f/schreiben-errores-b1-b2/">Schreiben B1/B2</a>, <a href="/en/f/sprechen-redemittel-estructura/">Sprechen</a>, Lesen and routes into exam resources.</p>'
      ],
      ["<h2>Archivo útil para seguir explorando</h2>", "<h2>Useful archive for further study</h2>"],
      [
        "<p>Además de los artículos destacados de arriba, aquí tienes otras guías ya publicadas que conviene tener a mano si estás repasando gramática, examen y escritura con más calma.</p>",
        "<p>Alongside the featured articles above, these published guides are useful when you want to review grammar, exam skills and writing more calmly.</p>"
      ],
      ["<h2>Si vienes del blog y quieres convertir teoría en progreso real</h2>", "<h2>If you came from the blog and want real progress</h2>"],
      [
        "<p>No hace falta leer veinte artículos seguidos. Lo más útil suele ser elegir una ruta clara: recursos por destreza, preparación de examen o una valoración inicial para saber qué trabajar primero.</p>",
        "<p>You do not need to read twenty articles in a row. The useful move is usually to choose a clear route: resources by skill, exam preparation or an initial assessment to know what to work on first.</p>"
      ],
      [">Ver preparación de exámenes</a>", ">View exam preparation</a>"],
      [">Explorar clases individuales</a>", ">Explore 1:1 lessons</a>"],
      [">Reservar valoración</a>", ">Book an assessment</a>"],
      ["<p class=\"blog-status-note\">Primero publicamos lo que ya está realmente sólido. Después seguimos ampliando el índice sin volver a crear URLs rotas.</p>", "<p class=\"blog-status-note\">First we publish what is genuinely solid. Then we keep expanding the index without creating broken URLs again.</p>"]
    ]
  }[locale];

  let next = html;
  for (const [from, to] of replacements || []) {
    next = next.replaceAll(from, to);
  }
  next = next.replaceAll("Leer artículo →", locale === "de" ? "Artikel lesen →" : "Read article →");
  next = next.replaceAll("Publicado", locale === "de" ? "Veröffentlicht" : "Published");
  next = next.replaceAll("Nuevo", locale === "de" ? "Neu" : "New");

  return next;
}

function localizeHead(html, locale, slug, canonicalSlug) {
  const isUntranslatedCopy = locale !== "es" && slug !== "";
  const isInternalGuide = slug === "como-escribir-posts";
  const canonicalLocale = isUntranslatedCopy ? "es" : locale;
  const canonical = absoluteBlogUrl(canonicalLocale, canonicalSlug);
  const alternates = renderAlternates(canonicalSlug, slug === "");
  const info = locales[locale];
  const metadataLocale = locales[isUntranslatedCopy ? "es" : locale];

  let next = html
    .replace(/<html lang="[^"]*">/, `<html lang="${isUntranslatedCopy ? "es" : info.lang}">`)
    .replace(/\n\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+">/g, "")
    .replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${canonical}">\n${alternates}`)
    .replace(/<meta property="og:url" content="[^"]+">/, `<meta property="og:url" content="${canonical}">`)
    .replace(/<meta property="og:locale" content="[^"]+">/, `<meta property="og:locale" content="${metadataLocale.ogLocale}">`);

  if (slug === "") {
    next = next
      .replace(/<title>[^<]+<\/title>/, `<title>${info.title}</title>`)
      .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${info.description}">`)
      .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${info.title}">`)
      .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${info.description}">`)
      .replace(/<meta property="og:image:alt" content="[^"]*">/, `<meta property="og:image:alt" content="${info.title}">`)
      .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${info.title}">`)
      .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${info.description}">`)
      .replace(/<span class="blog-pill">[^<]*<\/span>/, `<span class="blog-pill">${info.eyebrow}</span>`)
      .replace(/<h1>[^<]*<\/h1>/, `<h1>${info.h1}</h1>`);
  }

  if (isUntranslatedCopy || isInternalGuide) {
    if (/<meta name="robots"/i.test(next)) {
      next = next.replace(/<meta name="robots" content="[^"]*">/i, '<meta name="robots" content="noindex, follow">');
    } else {
      next = next.replace(/<link rel="canonical"[^>]+>/, (match) => `${match}\n  <meta name="robots" content="noindex, follow">`);
    }
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
  const isUntranslatedCopy = locale !== "es" && slug !== "";
  html = isUntranslatedCopy
    ? html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "")
    : localizeStructuredData(html, locale, canonicalSlug);
  html = localizeHead(html, locale, slug, canonicalSlug);
  html = localizeSiteLinks(html, locale);
  if (slug === "") {
    html = localizeRootBlogBody(html, locale);
  }
  const notice = isUntranslatedCopy ? locales[locale].untranslatedNotice : locales[locale].notice;
  html = html.replace(/<div class="notice">[\s\S]*?<\/div>/, `<div class="notice">${notice}</div>`);
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
  const canonicalPages = pages.filter((page) => page.slug === "");
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
