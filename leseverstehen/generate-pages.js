#!/usr/bin/env node
// Genera una página estática por cada texto en /leseverstehen/[nivel]/[slug]/index.html
// Uso: node leseverstehen/generate-pages.js

const fs = require('fs');
const path = require('path');

const TEXTOS = [
  {
    slug: 'auf-dem-markt',
    nivel: 'A2',
    titulo: 'Auf dem Markt',
    descripcion: 'Practica el Leseverstehen A2 con este texto sobre Anna y Max en un mercado semanal en Berlín. Ejercicios de comprensión Richtig oder Falsch.',
  },
  {
    slug: 'im-park',
    nivel: 'A2',
    titulo: 'Im Park',
    descripcion: 'Texto A2 en alemán sobre Laura y Max en el parque. Comprensión lectora con ejercicios de Richtig oder Falsch para practicar el Leseverstehen.',
  },
  {
    slug: 'im-zoo',
    nivel: 'A2',
    titulo: 'Im Zoo',
    descripcion: 'Lectura en alemán A2 sobre una visita al zoo. Ejercicios interactivos de Richtig oder Falsch para practicar la comprensión lectora en alemán.',
  },
  {
    slug: 'im-restaurant',
    nivel: 'A2',
    titulo: 'Im Restaurant',
    descripcion: 'Texto en alemán A2 sobre Sophie y Martin en un restaurante. Practica el Leseverstehen con ejercicios de comprensión Richtig oder Falsch.',
  },
  {
    slug: 'im-einkaufszentrum',
    nivel: 'A2',
    titulo: 'Im Einkaufszentrum',
    descripcion: 'Lectura A2 en alemán sobre ir de compras al centro comercial. Comprensión lectora con ejercicios interactivos de Richtig oder Falsch.',
  },
  {
    slug: 'ausflug-mit-freunden',
    nivel: 'A2',
    titulo: 'Der Ausflug mit Freunden',
    descripcion: 'Texto en alemán A2 sobre una excursión con amigos a la montaña. Ejercicios de comprensión lectora Richtig oder Falsch para nivel A2.',
  },
  {
    slug: 'familienausflug',
    nivel: 'A2',
    titulo: 'Der Familienausflug',
    descripcion: 'Lectura en alemán A2 sobre la familia Müller en el lago. Practica el Leseverstehen A2 con ejercicios interactivos de Richtig oder Falsch.',
  },
  {
    slug: 'museumsbesuch',
    nivel: 'A2',
    titulo: 'Der Museumsbesuch',
    descripcion: 'Texto A2 en alemán sobre una visita escolar a un museo. Comprensión lectora con ejercicios de Richtig oder Falsch para preparar el Goethe A2.',
  },
  {
    slug: 'tagesausflug',
    nivel: 'A2',
    titulo: 'Der Tagesausflug',
    descripcion: 'Lectura en alemán A2 sobre Paul y Maria de excursión a la montaña. Ejercicios de comprensión lectora Richtig oder Falsch nivel A2.',
  },
  // ── B1 ──────────────────────────────────────────────────────
  {
    slug: 'homeoffice',
    nivel: 'B1',
    titulo: 'Homeoffice – Fluch oder Segen?',
    descripcion: 'Texto B1 en alemán sobre el teletrabajo: ventajas, inconvenientes y reglas empresariales. Practica el Leseverstehen B1 con ejercicios Wahr/Falsch.',
  },
  {
    slug: 'reise-mit-dem-zug',
    nivel: 'B1',
    titulo: 'Eine Reise mit dem Zug durch Europa',
    descripcion: 'Lectura B1 en alemán sobre un viaje en tren con Interrail por Europa. Comprensión lectora con ejercicios Wahr/Falsch para nivel B1.',
  },
  {
    slug: 'gesund-essen',
    nivel: 'B1',
    titulo: 'Gesund essen im Alltag – leichter gesagt als getan',
    descripcion: 'Texto en alemán B1 sobre alimentación saludable y hábitos de vida. Ejercicios de comprensión lectora Wahr/Falsch. Ideal para preparar el Goethe B1.',
  },
  {
    slug: 'klimaschutz-im-alltag',
    nivel: 'B1',
    titulo: 'Klimaschutz im Alltag – Was kann jeder tun?',
    descripcion: 'Lectura B1 en alemán sobre la protección del clima y el papel del individuo. Ejercicios Wahr/Falsch para practicar el Leseverstehen B1.',
  },
  {
    slug: 'lebenslanges-lernen',
    nivel: 'B1',
    titulo: 'Lebenslanges Lernen – Weiterbildung im Erwachsenenalter',
    descripcion: 'Texto en alemán B1 sobre formación continua y plataformas digitales de aprendizaje. Comprensión lectora con ejercicios Wahr/Falsch nivel B1.',
  },
  {
    slug: 'stress-und-erholung',
    nivel: 'B1',
    titulo: 'Stress und Erholung – Wie finden wir die Balance?',
    descripcion: 'Lectura B1 en alemán sobre el estrés, el sueño y el descanso. Practica el Leseverstehen B1 con ejercicios interactivos Wahr/Falsch.',
  },
  {
    slug: 'soziale-medien',
    nivel: 'B1',
    titulo: 'Soziale Medien – Fluch oder Segen für Jugendliche?',
    descripcion: 'Texto B1 en alemán sobre redes sociales y su impacto en los jóvenes. Comprensión lectora con ejercicios Wahr/Falsch para nivel B1.',
  },
  {
    slug: 'ehrenamt',
    nivel: 'B1',
    titulo: 'Ehrenamt – Warum immer mehr Menschen freiwillig helfen',
    descripcion: 'Lectura en alemán B1 sobre el voluntariado en Alemania. Ejercicios de comprensión lectora Wahr/Falsch. Preparación Goethe B1 y TELC B1.',
  },
  {
    slug: 'wochenende-auf-dem-bauernhof',
    nivel: 'B1',
    titulo: 'Ein Wochenende auf dem Bauernhof',
    descripcion: 'Texto B1 en alemán sobre un fin de semana en una granja ecológica cerca de Friburgo. Ejercicios Wahr/Falsch de comprensión lectora nivel B1.',
  },
];

const NAV = `
  <nav>
    <div class="nav-inner">
      <a class="nav-logo" href="/"><img src="../../../assets/img/logo-main.webp" alt="Samuel Coach de Alemán" width="260" height="260" fetchpriority="high"></a>
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

const FOOTER = `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <a class="footer-logo footer-logo-fun" href="/"><img src="../../../assets/img/logo-fun.webp" alt="Logo divertido de Samuel Coach de Alemán" width="180" height="180" loading="lazy" decoding="async"></a>
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

function generatePage(texto) {
  const { slug, nivel, titulo, descripcion } = texto;
  const canonical = `https://www.samuelcoachdealeman.com/leseverstehen/${nivel.toLowerCase()}/${slug}/`;
  const pageTitle = `${titulo} — Leseverstehen ${nivel} | Samuel Coach de Alemán`;

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <meta name="description" content="${descripcion}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#455a64">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${titulo} — Leseverstehen ${nivel}">
  <meta property="og:description" content="${descripcion}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://www.samuelcoachdealeman.com/assets/img/leseverstehen-og.jpg">
  <meta property="og:site_name" content="Samuel Coach de Alemán">
  <meta property="og:locale" content="es_ES">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${titulo} — Leseverstehen ${nivel}">
  <meta name="twitter:description" content="${descripcion}">
  <meta name="twitter:image" content="https://www.samuelcoachdealeman.com/assets/img/leseverstehen-og.jpg">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "${titulo}",
    "description": "${descripcion}",
    "url": "${canonical}",
    "educationalLevel": "${nivel}",
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
  <link rel="icon" type="image/webp" href="../../../assets/img/favicon.webp">
  <link rel="apple-touch-icon" href="../../../assets/img/apple-touch-icon.webp">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="stylesheet" href="../../../assets/css/styles.css">
  <link rel="stylesheet" href="../../../assets/css/cookie-banner-core.css">
</head>
<body>
${NAV}

  <main>
    <div class="container">
      <div id="lese-leer-root" class="lese-leer-root"></div>
    </div>
  </main>

${FOOTER}

  <script src="../../../assets/js/cookie-banner-core.js" defer></script>
  <script src="../../../assets/js/main.js" defer></script>
  <script src="../../../assets/js/leseverstehen.js"></script>
  <script>
    renderLectura(document.getElementById('lese-leer-root'), '${slug}');
  </script>
</body>
</html>
`;
}

const root = path.resolve(__dirname, '..');

TEXTOS.forEach(texto => {
  const dir = path.join(root, 'leseverstehen', texto.nivel.toLowerCase(), texto.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generatePage(texto), 'utf8');
  console.log(`✓ /leseverstehen/${texto.nivel.toLowerCase()}/${texto.slug}/`);
});

console.log(`\n${TEXTOS.length} páginas generadas.`);
