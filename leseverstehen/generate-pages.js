#!/usr/bin/env node
// Genera páginas estáticas para Leseverstehen:
//   - /leseverstehen/[nivel]/[slug]/index.html  → una por texto
//   - /leseverstehen/[nivel]/index.html          → una por nivel
// Uso: node leseverstehen/generate-pages.js
// Los datos vienen de assets/js/leseverstehen-data.js (fuente única de verdad).

const fs = require('fs');
const path = require('path');

const TEXTOS = require('../assets/js/leseverstehen-data.js');

// ── Funciones de escape ──────────────────────────────────────────────────────
// Para valores dentro de atributos HTML (content="…", og:title, etc.)
function escapeHtmlAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Para contenido de texto visible en el HTML (<title>, <h1>, etc.)
function escapeHtmlText(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Para valores dentro del bloque JSON-LD: usa JSON.stringify() que escapa
// comillas, barras, etc. El resultado ya lleva las comillas externas.
// Uso: "name": ${jsonVal(titulo)}
function jsonVal(str) {
  return JSON.stringify(String(str));
}

// ── Metadatos SEO por nivel ──────────────────────────────────────────────────
const NIVEL_META = {
  A2: {
    title: 'Textos en alemán A2 — Comprensión lectora con ejercicios | Samuel Coach de Alemán',
    description: 'Practica el Leseverstehen A2 con textos graduados y ejercicios de Richtig oder Falsch. Ideal para preparar el Goethe A2 o el TELC A2. Gratis, sin registro.',
    h1: 'Leseverstehen A2',
    sub: 'Textos en alemán nivel A2 con ejercicios interactivos de <em>Richtig oder Falsch</em>. Practica la comprensión lectora y prepárate para el Goethe A2 o el TELC A2.',
    keywords: 'textos alemán A2, leseverstehen A2, comprensión lectora alemán A2, ejercicios alemán A2, Goethe A2, TELC A2',
  },
  B1: {
    title: 'Textos en alemán B1 — Comprensión lectora con ejercicios | Samuel Coach de Alemán',
    description: 'Practica el Leseverstehen B1 con textos graduados y ejercicios de Richtig oder Falsch. Ideal para preparar el Goethe B1 o el TELC B1. Gratis, sin registro.',
    h1: 'Leseverstehen B1',
    sub: 'Textos en alemán nivel B1 con ejercicios interactivos de <em>Richtig oder Falsch</em>. Practica la comprensión lectora y prepárate para el Goethe B1 o el TELC B1.',
    keywords: 'textos alemán B1, leseverstehen B1, comprensión lectora alemán B1, ejercicios alemán B1, Goethe B1, TELC B1',
  },
  B2: {
    title: 'Textos en alemán B2 — Comprensión lectora con ejercicios | Samuel Coach de Alemán',
    description: 'Practica el Leseverstehen B2 con textos graduados y ejercicios de Richtig oder Falsch. Ideal para preparar el Goethe B2 o el TELC B2. Gratis, sin registro.',
    h1: 'Leseverstehen B2',
    sub: 'Textos en alemán nivel B2 con ejercicios interactivos de <em>Richtig oder Falsch</em>. Practica la comprensión lectora y prepárate para el Goethe B2 o el TELC B2.',
    keywords: 'textos alemán B2, leseverstehen B2, comprensión lectora alemán B2, ejercicios alemán B2, Goethe B2, TELC B2',
  },
};

// ── Plantillas de nav y footer (p = prefijo de assets, ej. '../../') ─────────
function makeNav(p) {
  return `
  <nav>
    <div class="nav-inner">
      <a class="nav-logo" href="/"><img src="${p}assets/img/logo-main.webp" alt="Samuel Coach de Alemán" width="260" height="260" fetchpriority="high"></a>
      <button class="hamburger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú" aria-haspopup="true">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="https://blog.samuelcoachdealeman.com">Blog</a></li>
        <li><a href="/sobre-mi">Sobre mí</a></li>
        <li class="nav-drop">
          <a href="/servicios">Servicios</a>
          <div class="drop-menu">
            <a href="/servicios#conversacional">Alemán conversacional</a>
            <a href="/servicios#laboral">Trabajar en Alemania</a>
            <a href="/servicios#examenes">Preparación de exámenes</a>
            <a href="/servicios#empresas">Alemán para empresas</a>
            <a href="/servicios#escolar">Alemán escolar</a>
          </div>
        </li>
        <li><a href="/metodologia">Metodología</a></li>
        <li><a href="/#faq">FAQs</a></li>
        <li class="nav-drop">
          <a href="/practicar-aleman">Mis APPs</a>
          <div class="drop-menu">
            <a href="https://vokabellab.com" target="_blank" rel="noopener noreferrer">🔤 Vokabellab</a>
            <a href="https://derdiedas.vokabellab.com" target="_blank" rel="noopener noreferrer">🇩🇪 Der Die Das</a>
            <a href="https://imkontext.vokabellab.com" target="_blank" rel="noopener noreferrer">📖 Im Kontext</a>
          </div>
        </li>
        <li><a href="/leseverstehen/">Leseverstehen</a></li>
      </ul>
    </div>
    <div id="mobile-menu" class="mobile-menu" hidden>
      <a href="/">Inicio</a>
      <a href="https://blog.samuelcoachdealeman.com">Blog</a>
      <a href="/sobre-mi">Sobre mí</a>
      <a href="/servicios">Servicios</a>
      <a href="/servicios#conversacional">Alemán conversacional</a>
      <a href="/servicios#laboral">Trabajar en Alemania</a>
      <a href="/servicios#examenes">Preparación de exámenes</a>
      <a href="/servicios#empresas">Alemán para empresas</a>
      <a href="/servicios#escolar">Alemán escolar</a>
      <a href="/metodologia">Metodología</a>
      <a href="/#faq">FAQs</a>
      <a href="/practicar-aleman">Mis APPs</a>
      <a href="https://vokabellab.com" target="_blank" rel="noopener noreferrer">Vokabellab</a>
      <a href="https://derdiedas.vokabellab.com" target="_blank" rel="noopener noreferrer">Der Die Das</a>
      <a href="https://imkontext.vokabellab.com" target="_blank" rel="noopener noreferrer">Im Kontext</a>
      <a href="/leseverstehen/">Leseverstehen</a>
    </div>
  </nav>`;
}

function makeFooter(p) {
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <a class="footer-logo footer-logo-fun" href="/"><img src="${p}assets/img/logo-fun.webp" alt="Logo divertido de Samuel Coach de Alemán" width="180" height="180" loading="lazy" decoding="async"></a>
        <div class="socials">
          <a href="https://blog.samuelcoachdealeman.com" aria-label="Blog" title="Blog">Blog</a>
          <a href="https://www.instagram.com/samuelcoachdealeman" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">Instagram</a>
          <a href="https://www.facebook.com/samuelcoachdealeman" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">Facebook</a>
          <a href="/practicar-aleman" aria-label="Apps para practicar alemán" title="Apps para practicar alemán">Apps</a>
        </div>
        <div class="footer-links">
          <a href="https://blog.samuelcoachdealeman.com">Blog</a>
          <a href="/sobre-mi">Sobre mí</a>
          <a href="/servicios">Servicios</a>
          <a href="/practicar-aleman">Practicar alemán</a>
          <a href="/#contacto">Contacto</a>
          <a href="/politica-de-privacidad">Política de privacidad</a>
        </div>
      </div>
      <div class="footer-bottom">
        Copyright © 2026 Samuel Coach de Alemán · Todos los derechos reservados.
      </div>
    </div>
  </footer>`;
}

// ── Página de texto individual (/leseverstehen/[nivel]/[slug]/) ───────────────
function generatePage(texto) {
  const { slug, nivel, titulo, descripcion } = texto;
  const p = '../../../';
  const canonical = `https://www.samuelcoachdealeman.com/leseverstehen/${nivel.toLowerCase()}/${slug}/`;
  const pageTitle = `${titulo} — Leseverstehen ${nivel} | Samuel Coach de Alemán`;

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtmlText(pageTitle)}</title>
  <meta name="description" content="${escapeHtmlAttr(descripcion)}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#455a64">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtmlAttr(titulo)} — Leseverstehen ${nivel}">
  <meta property="og:description" content="${escapeHtmlAttr(descripcion)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://www.samuelcoachdealeman.com/assets/img/leseverstehen-og.jpg">
  <meta property="og:site_name" content="Samuel Coach de Alemán">
  <meta property="og:locale" content="es_ES">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtmlAttr(titulo)} — Leseverstehen ${nivel}">
  <meta name="twitter:description" content="${escapeHtmlAttr(descripcion)}">
  <meta name="twitter:image" content="https://www.samuelcoachdealeman.com/assets/img/leseverstehen-og.jpg">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": ${jsonVal(titulo)},
    "description": ${jsonVal(descripcion)},
    "url": ${jsonVal(canonical)},
    "educationalLevel": ${jsonVal(nivel)},
    "inLanguage": "de",
    "learningResourceType": "Reading comprehension exercise",
    "provider": {
      "@type": "Person",
      "name": "Samuel Coach de Alemán",
      "url": "https://www.samuelcoachdealeman.com/"
    }
  }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/webp" href="${p}assets/img/favicon.webp">
  <link rel="apple-touch-icon" href="${p}assets/img/apple-touch-icon.webp">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="stylesheet" href="${p}assets/css/styles.css">
  <link rel="stylesheet" href="${p}assets/css/cookie-banner-core.css">
</head>
<body>
${makeNav(p)}

  <main>
    <div class="container">
      <div id="lese-leer-root" class="lese-leer-root"></div>
    </div>
  </main>

${makeFooter(p)}

  <script src="${p}assets/js/cookie-banner-core.js" defer></script>
  <script src="${p}assets/js/main.js" defer></script>
  <script src="${p}assets/js/leseverstehen-data.js"></script>
  <script src="${p}assets/js/leseverstehen.js"></script>
  <script>
    renderLectura(document.getElementById('lese-leer-root'), '${slug}');
  </script>
</body>
</html>
`;
}

// ── Página de nivel (/leseverstehen/[nivel]/) ────────────────────────────────
function generateLevelPage(nivel) {
  const meta = NIVEL_META[nivel];
  const p = '../../';
  const canonical = `https://www.samuelcoachdealeman.com/leseverstehen/${nivel.toLowerCase()}/`;

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtmlText(meta.title)}</title>
  <meta name="description" content="${escapeHtmlAttr(meta.description)}">
  <meta name="keywords" content="${escapeHtmlAttr(meta.keywords)}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#455a64">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtmlAttr(meta.h1)} — Comprensión lectora con ejercicios">
  <meta property="og:description" content="${escapeHtmlAttr(meta.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://www.samuelcoachdealeman.com/assets/img/leseverstehen-og.jpg">
  <meta property="og:image:width" content="1080">
  <meta property="og:image:height" content="1080">
  <meta property="og:site_name" content="Samuel Coach de Alemán">
  <meta property="og:locale" content="es_ES">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtmlAttr(meta.h1)} — Comprensión lectora con ejercicios">
  <meta name="twitter:description" content="${escapeHtmlAttr(meta.description)}">
  <meta name="twitter:image" content="https://www.samuelcoachdealeman.com/assets/img/leseverstehen-og.jpg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/webp" href="${p}assets/img/favicon.webp">
  <link rel="apple-touch-icon" href="${p}assets/img/apple-touch-icon.webp">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="stylesheet" href="${p}assets/css/styles.css">
  <link rel="stylesheet" href="${p}assets/css/cookie-banner-core.css">
</head>
<body>
${makeNav(p)}

  <main>
    <section class="lese-hero">
      <div class="container">
        <span class="lese-hero-kicker">Comprensión lectora en alemán</span>
        <h1>${escapeHtmlText(meta.h1)}</h1>
        <p>${meta.sub}</p>
      </div>
    </section>

    <section class="lese-lista">
      <div class="container">
        <div id="lese-lista-root"></div>
      </div>
    </section>
  </main>

${makeFooter(p)}

  <script src="${p}assets/js/cookie-banner-core.js" defer></script>
  <script src="${p}assets/js/main.js" defer></script>
  <script src="${p}assets/js/leseverstehen-data.js"></script>
  <script src="${p}assets/js/leseverstehen.js"></script>
  <script>
    renderListaNivel(document.getElementById('lese-lista-root'), '${nivel}');
  </script>
</body>
</html>
`;
}

// ── Generación ───────────────────────────────────────────────────────────────
const root = path.resolve(__dirname, '..');

// 1. Páginas de texto individuales
TEXTOS.forEach(texto => {
  const dir = path.join(root, 'leseverstehen', texto.nivel.toLowerCase(), texto.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generatePage(texto), 'utf8');
  console.log(`✓ /leseverstehen/${texto.nivel.toLowerCase()}/${texto.slug}/`);
});

// 2. Páginas de nivel
const niveles = [...new Set(TEXTOS.map(t => t.nivel))];
niveles.forEach(nivel => {
  if (!NIVEL_META[nivel]) return; // skip niveles sin meta definida
  const dir = path.join(root, 'leseverstehen', nivel.toLowerCase());
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generateLevelPage(nivel), 'utf8');
  console.log(`✓ /leseverstehen/${nivel.toLowerCase()}/`);
});

console.log(`\n${TEXTOS.length} textos + ${niveles.length} páginas de nivel generadas.`);
