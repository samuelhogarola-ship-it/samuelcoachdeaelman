#!/usr/bin/env node
// Genera páginas estáticas para ejercicios de Schreiben.
// Salida: /recursos/schreiben/{modalidad}/{nivel}/{slug}/index.html

const fs   = require('fs');
const path = require('path');

const ROOT_DIR  = path.resolve(__dirname, '..');
const OUT_ROOT  = path.join(ROOT_DIR, 'recursos', 'schreiben');
const BASE_URL  = 'https://www.samuelcoachdealeman.com';
const EJERCICIOS = require(path.join(ROOT_DIR, 'assets/js/schreiben-data.js'));

const MODALIDAD_LABEL = { telc: 'TELC', goethe: 'Goethe', eoi: 'Escuela de Idiomas' };
const NIVEL_LABEL     = { a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1' };

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Permite HTML en contexto/aufgabe pero escapa los atributos
function safe(str) { return String(str).replace(/"/g, '&quot;'); }

function wordRange(min, max) {
  if (min === max) return `ca. ${min} Wörter`;
  return `${min}–${max} Wörter`;
}

function registroLabel(r) {
  return r === 'formal' ? 'Registro formal' : 'Registro informal';
}

function registroBadge(r) {
  return r === 'formal'
    ? '<span class="schreib-badge schreib-badge--formal">Formal</span>'
    : '<span class="schreib-badge schreib-badge--informal">Informal</span>';
}

function modalidadBadge(m) {
  const cls = m === 'telc' ? 'telc' : m === 'goethe' ? 'goethe' : 'eoi';
  return `<span class="schreib-badge schreib-badge--${cls}">${MODALIDAD_LABEL[m]}</span>`;
}

function tipoLabel(tipo) {
  return `Schreiben · Tipo ${tipo}`;
}

function navPath(modalidad, nivel) {
  return `/recursos/schreiben/${modalidad}/${nivel}/`;
}

function buildPage(ej) {
  const mod   = ej.modalidad;
  const niv   = ej.nivel;
  const url   = `${BASE_URL}/recursos/schreiben/${mod}/${niv}/${ej.slug}/`;
  const title = `${ej.titulo} — Schreiben ${NIVEL_LABEL[niv]} ${MODALIDAD_LABEL[mod]} | Samuel Coach de Alemán`;
  const desc  = esc(ej.descripcionEs);
  const backUrl = navPath(mod, niv);

  const puntosHtml = ej.puntos
    .map(p => `          <li>${p}</li>`)
    .join('\n');

  const criteriosHtml = ej.criterios
    .map(c => `              <li>${esc(c)}</li>`)
    .join('\n');

  const tipsHtml = ej.tips
    .map(t => `              <li>${t}</li>`)
    .join('\n');

  const contextoHtml = String(ej.contexto).replace(/\n/g, '<br>');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${desc}">
  <link rel="canonical" href="${url}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#455a64">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(ej.titulo)} — Schreiben ${NIVEL_LABEL[niv]} ${MODALIDAD_LABEL[mod]}">
  <meta property="og:description" content="${desc}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${BASE_URL}/assets/img/og-recursos.webp">
  <meta property="og:site_name" content="Samuel Coach de Alemán">
  <meta property="og:locale" content="es_ES">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(ej.titulo)} — Schreiben ${NIVEL_LABEL[niv]} ${MODALIDAD_LABEL[mod]}">
  <meta name="twitter:description" content="${desc}">
  <meta name="twitter:image" content="${BASE_URL}/assets/img/og-recursos.webp">
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap"></noscript>
  <link rel="icon" type="image/webp" href="/assets/img/favicon.webp">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.webp">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="stylesheet" href="/assets/css/cookie-banner-core.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "${safe(ej.titulo)}",
    "description": "${safe(ej.descripcionEs)}",
    "url": "${url}",
    "inLanguage": "de",
    "educationalLevel": "${NIVEL_LABEL[niv]}",
    "provider": {
      "@type": "Person",
      "name": "Samuel Coach de Alemán",
      "url": "${BASE_URL}/"
    }
  }
  </script>
</head>
<body>

  <nav>
    <div class="nav-inner">
      <a class="nav-logo" href="/"><img src="/assets/img/logo-main.webp" alt="Samuel Coach de Alemán" width="260" height="260"></a>
      <button class="hamburger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú" aria-haspopup="true">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="${BASE_URL}/f/">Blog</a></li>
        <li><a href="/sobre-mi/">Sobre mí</a></li>
        <li class="nav-drop">
          <a href="/servicios/">Servicios</a>
          <div class="drop-menu">
            <a href="/servicios/#conversacional">Alemán conversacional</a>
            <a href="/servicios/#laboral">Trabajar en Alemania</a>
            <a href="/servicios/#examenes">Preparación de exámenes</a>
            <a href="/servicios/#empresas">Alemán para empresas</a>
            <a href="/servicios/#escolar">Alemán escolar</a>
          </div>
        </li>
        <li class="nav-drop">
          <a href="/practicar-aleman/">Mis APPs</a>
          <div class="drop-menu">
            <a href="https://vokabellab.com" target="_blank" rel="noopener noreferrer">Vokabel Lab</a>
            <a href="https://derdiedas.vokabellab.com" target="_blank" rel="noopener noreferrer">Der Die Das</a>
            <a href="https://imkontext.vokabellab.com" target="_blank" rel="noopener noreferrer">Im Kontext</a>
          </div>
        </li>
        <li><a href="/recursos/">Recursos</a></li>
      </ul>
    </div>
    <div id="mobile-menu" class="mobile-menu" hidden>
      <a href="/">Inicio</a>
      <a href="${BASE_URL}/f/">Blog</a>
      <a href="/sobre-mi/">Sobre mí</a>
      <a href="/servicios/">Servicios</a>
      <a href="/servicios/#conversacional">Alemán conversacional</a>
      <a href="/servicios/#laboral">Trabajar en Alemania</a>
      <a href="/servicios/#examenes">Preparación de exámenes</a>
      <a href="/servicios/#empresas">Alemán para empresas</a>
      <a href="/servicios/#escolar">Alemán escolar</a>
      <a href="/practicar-aleman/">Mis APPs</a>
      <a href="https://vokabellab.com" target="_blank" rel="noopener noreferrer">Vokabel Lab</a>
      <a href="https://derdiedas.vokabellab.com" target="_blank" rel="noopener noreferrer">Der Die Das</a>
      <a href="https://imkontext.vokabellab.com" target="_blank" rel="noopener noreferrer">Im Kontext</a>
      <a href="/recursos/">Recursos</a>
    </div>
  </nav>

  <main>

    <section class="page-hero page-hero--schreiben">
      <div class="page-hero-inner">
        <div class="resource-badge-row">
          ${modalidadBadge(mod)}
          <span class="resource-badge">${NIVEL_LABEL[niv]}</span>
          <span class="resource-badge">${tipoLabel(ej.tipo)}</span>
        </div>
        <h1>${esc(ej.titulo)}</h1>
        <p>${esc(ej.descripcionEs)}</p>
        <div class="schreib-meta-row">
          <span class="schreib-meta-item">${wordRange(ej.minWords, ej.maxWords)}</span>
          ${registroBadge(ej.registro)}
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container schreib-layout">

        <div class="schreib-context">
          <p class="schreib-context__label">Situación</p>
          <p>${contextoHtml}</p>
        </div>

        <div class="schreib-aufgabe">
          <p class="schreib-aufgabe__label">Aufgabe</p>
          <p>${esc(ej.aufgabe)}</p>
          <ul class="schreib-punkte">
${puntosHtml}
          </ul>
        </div>

        <div class="schreib-area">
          <label class="schreib-area__label" for="schreib-input">Tu respuesta</label>
          <textarea
            id="schreib-input"
            class="schreib-textarea"
            placeholder="Schreib hier deine Antwort auf Deutsch…"
            rows="14"
            spellcheck="true"
            lang="de"
          ></textarea>
          <div class="schreib-wordcount">
            <span class="schreib-wordcount__n" id="schreib-wc">0</span> palabras
            <span class="schreib-wordcount__guide">(${wordRange(ej.minWords, ej.maxWords)})</span>
          </div>
        </div>

        <details class="schreib-tips">
          <summary>Consejos para esta tarea</summary>
          <ul>
${tipsHtml}
          </ul>
        </details>

        <div class="schreib-criterios">
          <h2 class="schreib-criterios__title">Criterios de evaluación</h2>
          <ul class="schreib-criterios__list">
${criteriosHtml}
          </ul>
        </div>

        <div class="schreib-premium">
          <div class="schreib-premium__inner">
            <div class="schreib-premium__icon" aria-hidden="true">✦</div>
            <h2 class="schreib-premium__title">Corrección con IA de Samuel</h2>
            <p class="schreib-premium__desc">Cuando termines de escribir, la IA entrenada por Samuel Coach de Alemán analiza tu texto y te da feedback detallado sobre contenido, gramática, léxico y registro — igual que lo haría Samuel en clase.</p>
            <div class="schreib-premium__tags">
              <span>Feedback por criterio</span>
              <span>Errores señalados</span>
              <span>Sugerencias de mejora</span>
              <span>Puntuación orientativa</span>
            </div>
            <a href="/#contacto" class="btn schreib-premium__btn">Quiero acceso premium</a>
            <p class="schreib-premium__note">Solo disponible para alumnos activos de Samuel Coach de Alemán</p>
          </div>
        </div>

        <div class="schreib-nav-bottom">
          <a href="${backUrl}" class="btn btn-white">← Más ejercicios ${MODALIDAD_LABEL[mod]} ${NIVEL_LABEL[niv]}</a>
          <a href="/recursos/schreiben/" class="btn btn-white">Todos los ejercicios</a>
        </div>

      </div>
    </section>

  </main>

  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <a class="footer-logo footer-logo-fun" href="/"><img src="/assets/img/logo-fun.webp" alt="Samuel Coach de Alemán" width="180" height="180" loading="lazy"></a>
        <div class="footer-links">
          <a href="/recursos/">Recursos</a>
          <a href="/servicios">Servicios</a>
          <a href="/metodologia">Metodología</a>
          <a href="/#faq">Preguntas frecuentes</a>
          <a href="/politica-de-privacidad">Política de privacidad</a>
        </div>
      </div>
      <div class="footer-bottom">Copyright © 2026 Samuel Coach de Alemán · Todos los derechos reservados.</div>
    </div>
  </footer>

  <script defer src="/assets/js/google-analytics-core.js"></script>
  <script src="/assets/js/cookie-banner-core.js" defer></script>
  <script src="/assets/js/main.js" defer></script>
  <script src="/assets/js/progress-tracker.js" defer></script>
  <script>
  (function () {
    var MIN = ${ej.minWords}, MAX = ${ej.maxWords};
    var ta = document.getElementById('schreib-input');
    var wc = document.getElementById('schreib-wc');
    if (!ta || !wc) return;
    ta.addEventListener('input', function () {
      var words = this.value.trim().split(/\s+/).filter(Boolean).length;
      wc.textContent = words;
      wc.className = 'schreib-wordcount__n' +
        (words === 0 ? '' : words < MIN ? ' is-low' : words > MAX ? ' is-high' : ' is-ok');
    });
  })();
  </script>

</body>
</html>`;
}

function writeFile(filepath, content) {
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
}

// Genera todas las páginas de ejercicios individuales
let count = 0;
for (const ej of EJERCICIOS) {
  const outPath = path.join(OUT_ROOT, ej.modalidad, ej.nivel, ej.slug, 'index.html');
  writeFile(outPath, buildPage(ej));
  count++;
  console.log(`  ✓ /recursos/schreiben/${ej.modalidad}/${ej.nivel}/${ej.slug}/`);
}

console.log(`\nSchreiben: ${count} páginas generadas.`);
