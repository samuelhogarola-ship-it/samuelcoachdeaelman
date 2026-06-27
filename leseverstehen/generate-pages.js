#!/usr/bin/env node
// Genera páginas estáticas para Leseverstehen en español, alemán e inglés.
// Los textos se mantienen en alemán, pero la interfaz y la navegación
// se localizan por idioma para que el selector funcione en cualquier página.

const fs = require('fs');
const path = require('path');

const TEXTOS = require('../assets/js/leseverstehen-data.js');

// Bump este valor cada vez que cambies leseverstehen.js o leseverstehen-data.js
// para que LiteSpeed/browsers descarguen el archivo nuevo en lugar de usar caché.
const JS_VERSION = '20260601a';
const BASE_URL = 'https://www.samuelcoachdealeman.com';
const BLOG_URL = `${BASE_URL}/f/`;

function escapeHtmlAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function jsonVal(str) {
  return JSON.stringify(String(str));
}

const LOCALES = {
  es: {
    htmlLang: 'es',
    ogLocale: 'es_ES',
    localePath: '',
    localeName: 'Español',
    siteLocaleContent: null,
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      about: 'Sobre mí',
      services: 'Servicios',
      apps: 'Mis APPs',
      resources: 'Recursos',
      conversational: 'Alemán conversacional',
      work: 'Trabajar en Alemania',
      exams: 'Preparación de exámenes',
      companies: 'Alemán para empresas',
      school: 'Alemán escolar',
      methodology: 'Metodología',
      faq: 'Preguntas frecuentes',
      practice: 'Practicar alemán',
      privacy: 'Política de privacidad',
      rights: 'Todos los derechos reservados.',
    },
    notice:
      `🗓️ Agenda cerrada hasta el 22.06 &nbsp;·&nbsp; Mientras tanto, <a href="${BLOG_URL}">aprende alemán gratis en el blog</a>`,
    root: {
      title: 'Leseverstehen — Textos en alemán A1, A2, B1 y B2 con ejercicios | Samuel Coach de Alemán',
      description:
        'Practica la comprensión lectora en alemán con textos niveles A1, A2, B1 y B2 y ejercicios interactivos de Richtig oder Falsch. Ideal para preparar el Goethe o el TELC. Gratis, sin registro.',
      keywords:
        'leseverstehen alemán, comprensión lectora alemán, textos alemán A1, textos alemán A2, textos alemán B1, textos alemán B2, ejercicios alemán, practicar alemán, Goethe, TELC',
      ogTitle: 'Leseverstehen — Textos en alemán A1, A2, B1 y B2 con ejercicios interactivos',
      twitterDescription:
        'Textos en alemán niveles A1, A2, B1 y B2 con ejercicios de comprensión lectora. Gratis y sin registro.',
      kicker: 'Comprensión lectora en alemán',
      h1: 'Leseverstehen',
      lead:
        'Uno de mis recursos para preparar Goethe y TELC con más claridad. Practica la comprensión lectora en tu nivel — A1, A2, B1 o B2 — con ejercicios interactivos de <em>Richtig oder Falsch</em>. Gratis y sin registro.',
    },
    levelMeta(nivel) {
      return {
        title: `Textos en alemán ${nivel} — Comprensión lectora con ejercicios | Samuel Coach de Alemán`,
        description: `Practica el Leseverstehen ${nivel} con textos graduados y ejercicios de Richtig oder Falsch. Ideal para preparar el Goethe ${nivel} o el TELC ${nivel}. Gratis, sin registro.`,
        keywords: `textos alemán ${nivel}, leseverstehen ${nivel}, comprensión lectora alemán ${nivel}, ejercicios alemán ${nivel}, Goethe ${nivel}, TELC ${nivel}`,
        h1: `Leseverstehen ${nivel}`,
        sub: `Textos en alemán nivel ${nivel} con ejercicios interactivos de <em>Richtig oder Falsch</em>. Practica la comprensión lectora y prepárate para el Goethe ${nivel} o el TELC ${nivel}.`,
      };
    },
    pageDescription(texto) {
      return texto.descripcion;
    },
  },
  de: {
    htmlLang: 'de',
    ogLocale: 'de_DE',
    localePath: '/de',
    localeName: 'Deutsch',
    siteLocaleContent: {
      navigation: {
        openMenu: 'Menü öffnen',
        closeMenu: 'Menü schließen',
      },
      cookieBanner: {
        imageAlt: 'Dekoratives Keksbild im Cookie-Banner',
        title: 'Deine Privatsphäre ist wichtig',
        noticeHtml:
          '<p>Wir verwenden notwendige Cookies, damit die Website funktioniert, und nur mit deiner Zustimmung Analyse-Cookies, um Nutzung und Inhalte zu verbessern. <a href="/de/politica-de-privacidad/">Mehr Informationen</a>.</p>',
        acceptLabel: 'Akzeptieren',
        rejectLabel: 'Ablehnen',
        configLabel: 'Cookies einstellen',
        configModalTitle: 'Cookies konfigurieren',
        configModalIntro:
          'Du kannst nur notwendige Cookies akzeptieren oder auch Analyse-Cookies aktivieren. Deine Entscheidung kannst du jederzeit ändern, indem du die Browser-Cookies löschst.',
        necessaryTitle: 'Notwendige Cookies',
        necessaryDescription:
          'Sie sind erforderlich für Navigation, Sicherheit und das Speichern deiner Cookie-Entscheidung.',
        necessaryBadge: 'Immer aktiv',
        analyticsTitle: 'Analyse-Cookies',
        analyticsDescription:
          'Sie helfen uns zu verstehen, wie die Website genutzt wird, damit wir Inhalte, Leistung und Nutzererlebnis verbessern können.',
        saveConfigLabel: 'Einstellungen speichern',
      },
    },
    nav: {
      home: 'Start',
      blog: 'Blog',
      about: 'Über mich',
      services: 'Angebote',
      apps: 'Meine Apps',
      resources: 'Ressourcen',
      conversational: 'Konversationsdeutsch',
      work: 'Arbeiten in Deutschland',
      exams: 'Prüfungsvorbereitung',
      companies: 'Deutsch für Unternehmen',
      school: 'Schuldeutsch',
      methodology: 'Methodik',
      faq: 'FAQ',
      practice: 'Deutsch üben',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten.',
    },
    notice:
      `Terminplan bis zum 22.06 geschlossen · In der Zwischenzeit kannst du <a href="${BLOG_URL}">im Blog kostenlos Deutsch lernen</a>`,
    root: {
      title: 'Leseverstehen auf Deutsch — Texte mit interaktiven Übungen | Samuel Coach de Alemán',
      description:
        'Trainiere deutsches Leseverstehen mit Texten auf A1-, A2-, B1- und B2-Niveau. Interaktive Aufgaben, klarer Fortschritt und geeignet für Goethe und TELC.',
      keywords:
        'Leseverstehen Deutsch, deutsche Texte A1 A2 B1 B2, Lesetraining Deutsch, Goethe Vorbereitung, TELC Vorbereitung',
      ogTitle: 'Leseverstehen auf Deutsch — Texte mit interaktiven Übungen',
      twitterDescription:
        'Deutsche Texte auf A1-, A2-, B1- und B2-Niveau mit interaktiven Aufgaben. Kostenlos und ohne Anmeldung.',
      kicker: 'Lesekompetenz auf Deutsch',
      h1: 'Leseverstehen',
      lead:
        'Hier trainierst du deutsches Leseverstehen nach Niveau — A1, A2, B1 oder B2 — mit interaktiven Aufgaben. Ideal als zusätzliche Übung für Goethe- oder TELC-Prüfungen.',
    },
    levelMeta(nivel) {
      return {
        title: `Deutsche Texte ${nivel} — Leseverstehen mit Übungen | Samuel Coach de Alemán`,
        description: `Trainiere Leseverstehen ${nivel} mit deutschen Texten und interaktiven Richtig-oder-Falsch-Aufgaben. Geeignet für Goethe ${nivel} und TELC ${nivel}.`,
        keywords: `deutsche Texte ${nivel}, Leseverstehen ${nivel}, Goethe ${nivel}, TELC ${nivel}, Deutschprüfung ${nivel}`,
        h1: `Leseverstehen ${nivel}`,
        sub: `Deutsche Texte auf Niveau ${nivel} mit interaktiven <em>Richtig-oder-Falsch</em>-Aufgaben. Perfekt zum gezielten Training für Goethe ${nivel} oder TELC ${nivel}.`,
      };
    },
    pageDescription(texto) {
      return `Interaktiver Lesetext auf Deutsch auf Niveau ${texto.nivel}: ${texto.titulo}.`;
    },
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    localePath: '/en',
    localeName: 'English',
    siteLocaleContent: {
      navigation: {
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      },
      cookieBanner: {
        imageAlt: 'Decorative cookie image in the cookie banner',
        title: 'Your privacy matters',
        noticeHtml:
          '<p>We use essential cookies to make the site work and, only if you agree, analytics cookies to understand usage and improve the website. <a href="/en/politica-de-privacidad/">More information</a>.</p>',
        acceptLabel: 'Accept',
        rejectLabel: 'Reject',
        configLabel: 'Cookie settings',
        configModalTitle: 'Configure your cookies',
        configModalIntro:
          'You can accept only essential cookies or also enable analytics cookies. You can change your decision at any time by deleting browser cookies.',
        necessaryTitle: 'Essential cookies',
        necessaryDescription:
          'They are required for basic functions such as navigation, security and remembering your cookie choice.',
        necessaryBadge: 'Always active',
        analyticsTitle: 'Analytics cookies',
        analyticsDescription:
          'They help us understand how the site is used so we can improve content, performance and user experience.',
        saveConfigLabel: 'Save settings',
      },
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      about: 'About me',
      services: 'Services',
      apps: 'My Apps',
      resources: 'Resources',
      conversational: 'Conversational German',
      work: 'Working in Germany',
      exams: 'Exam preparation',
      companies: 'German for companies',
      school: 'School German',
      methodology: 'Method',
      faq: 'FAQ',
      practice: 'Practise German',
      privacy: 'Privacy policy',
      rights: 'All rights reserved.',
    },
    notice:
      `Schedule closed until 22.06 · In the meantime, you can <a href="${BLOG_URL}">learn German for free on the blog</a>`,
    root: {
      title: 'German Reading Practice — Interactive A1, A2, B1 and B2 texts | Samuel Coach de Alemán',
      description:
        'Practise German reading comprehension with interactive texts from A1 to B2. Useful for Goethe and TELC preparation, with clear progression and no registration required.',
      keywords:
        'German reading practice, German texts A1 A2 B1 B2, Goethe preparation, TELC preparation, reading comprehension German',
      ogTitle: 'German Reading Practice — Interactive texts from A1 to B2',
      twitterDescription:
        'Interactive German reading texts from A1 to B2 for steady practice and exam preparation.',
      kicker: 'German reading practice',
      h1: 'Leseverstehen',
      lead:
        'Use these German reading texts to practise by level — A1, A2, B1 or B2 — with interactive tasks. A helpful extra resource for Goethe and TELC exam preparation.',
    },
    levelMeta(nivel) {
      return {
        title: `German texts ${nivel} — Reading practice with exercises | Samuel Coach de Alemán`,
        description: `Practise German reading at ${nivel} level with interactive true-or-false activities. Suitable for Goethe ${nivel} and TELC ${nivel} preparation.`,
        keywords: `German texts ${nivel}, reading practice ${nivel}, Goethe ${nivel}, TELC ${nivel}, German exam practice ${nivel}`,
        h1: `Leseverstehen ${nivel}`,
        sub: `German texts at ${nivel} level with interactive <em>true-or-false</em> tasks. Ideal extra reading practice for Goethe ${nivel} or TELC ${nivel}.`,
      };
    },
    pageDescription(texto) {
      return `Interactive German reading text at ${texto.nivel} level: ${texto.titulo}.`;
    },
  },
};

function route(locale, slug = '') {
  const prefix = LOCALES[locale].localePath;
  if (!slug) return prefix ? `${prefix}/` : '/';
  return `${prefix}/${slug}`;
}

function leseBase(locale) {
  return route(locale, 'leseverstehen/');
}

function levelPath(locale, nivel) {
  return route(locale, `leseverstehen/${nivel.toLowerCase()}/`);
}

function textPath(locale, texto) {
  return route(locale, `leseverstehen/${texto.nivel.toLowerCase()}/${texto.slug}/`);
}

function absolute(urlPath) {
  return `${BASE_URL}${urlPath}`;
}

function makeAlternateLinks(pathBuilder) {
  return `  <link rel="alternate" hreflang="es" href="${absolute(pathBuilder('es'))}">
  <link rel="alternate" hreflang="de" href="${absolute(pathBuilder('de'))}">
  <link rel="alternate" hreflang="en" href="${absolute(pathBuilder('en'))}">
  <link rel="alternate" hreflang="x-default" href="${absolute(pathBuilder('es'))}">`;
}

function makeLocaleScript(locale) {
  const content = LOCALES[locale].siteLocaleContent;
  if (!content) return '';
  return `  <script>
    window.siteLocaleContent = ${JSON.stringify(content)};
  </script>`;
}

function makeNav(locale) {
  const copy = LOCALES[locale].nav;
  return `
  <nav>
    <div class="nav-inner">
      <a class="nav-logo" href="${route(locale)}"><img src="/assets/img/logo-main.webp" alt="Samuel Coach de Alemán" width="260" height="260"></a>
      <button class="hamburger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${locale === 'es' ? 'Abrir menú' : locale === 'de' ? 'Menü öffnen' : 'Open menu'}" aria-haspopup="true">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        <li><a href="${route(locale)}">${copy.home}</a></li>
        <li><a href="https://www.samuelcoachdealeman.com/f/">Blog</a></li>
        <li><a href="${route(locale, 'sobre-mi/')}">${copy.about}</a></li>
        <li class="nav-drop">
          <a href="${route(locale, 'servicios/')}">${copy.services}</a>
          <div class="drop-menu">
            <a href="${route(locale, 'servicios/#conversacional')}">${copy.conversational}</a>
            <a href="${route(locale, 'servicios/#laboral')}">${copy.work}</a>
            <a href="${route(locale, 'servicios/#examenes')}">${copy.exams}</a>
            <a href="${route(locale, 'servicios/#empresas')}">${copy.companies}</a>
            <a href="${route(locale, 'servicios/#escolar')}">${copy.school}</a>
          </div>
        </li>
        <li class="nav-drop">
          <a href="${route(locale, 'practicar-aleman/')}">${copy.apps}</a>
          <div class="drop-menu">
            <a href="https://vokabellab.com" target="_blank" rel="noopener noreferrer">Vokabel Lab</a>
            <a href="https://derdiedas.vokabellab.com" target="_blank" rel="noopener noreferrer">Der Die Das</a>
            <a href="https://imkontext.vokabellab.com" target="_blank" rel="noopener noreferrer">Im Kontext</a>
          </div>
        </li>
        <li><a href="${route(locale, 'recursos/')}">${copy.resources}</a></li>
      </ul>
    </div>
    <div id="mobile-menu" class="mobile-menu" hidden>
      <a href="${route(locale)}">${copy.home}</a>
      <a href="https://www.samuelcoachdealeman.com/f/">Blog</a>
      <a href="${route(locale, 'sobre-mi/')}">${copy.about}</a>
      <a href="${route(locale, 'servicios/')}">${copy.services}</a>
      <a href="${route(locale, 'servicios/#conversacional')}">${copy.conversational}</a>
      <a href="${route(locale, 'servicios/#laboral')}">${copy.work}</a>
      <a href="${route(locale, 'servicios/#examenes')}">${copy.exams}</a>
      <a href="${route(locale, 'servicios/#empresas')}">${copy.companies}</a>
      <a href="${route(locale, 'servicios/#escolar')}">${copy.school}</a>
      <a href="${route(locale, 'practicar-aleman/')}">${copy.apps}</a>
      <a href="https://vokabellab.com" target="_blank" rel="noopener noreferrer">Vokabel Lab</a>
      <a href="https://derdiedas.vokabellab.com" target="_blank" rel="noopener noreferrer">Der Die Das</a>
      <a href="https://imkontext.vokabellab.com" target="_blank" rel="noopener noreferrer">Im Kontext</a>
      <a href="${route(locale, 'recursos/')}">${copy.resources}</a>
    </div>
  </nav>`;
}

function makeFooter(locale) {
  const copy = LOCALES[locale].nav;
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <a class="footer-logo footer-logo-fun" href="${route(locale)}"><img src="/assets/img/logo-fun.webp" alt="Logo divertido de Samuel Coach de Alemán" width="180" height="180" loading="lazy" decoding="async"></a>
        <div class="socials">
          <a href="https://www.samuelcoachdealeman.com/f/" aria-label="Blog" title="Blog">Blog</a>
          <a href="https://www.instagram.com/samuelcoachdealeman" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">Instagram</a>
          <a href="https://www.facebook.com/samuelcoachdealeman" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">Facebook</a>
          <a href="${route(locale, 'practicar-aleman/')}" aria-label="${copy.apps}" title="${copy.apps}">Apps</a>
        </div>
        <div class="footer-links">
          <a href="https://www.samuelcoachdealeman.com/f/">Blog</a>
          <a href="${route(locale, 'sobre-mi/')}">${copy.about}</a>
          <a href="${route(locale, 'servicios/')}">${copy.services}</a>
          <a href="${route(locale, 'metodologia/')}">${copy.methodology}</a>
          <a href="${route(locale, '#faq')}">${copy.faq}</a>
          <a href="${route(locale, 'practicar-aleman/')}">${copy.apps}</a>
          <a href="${route(locale, 'politica-de-privacidad/')}">${copy.privacy}</a>
        </div>
      </div>
      <div class="footer-bottom">
        Copyright © 2026 Samuel Coach de Alemán · ${copy.rights}
      </div>
    </div>
  </footer>`;
}

function pageHead({ locale, title, description, keywords, canonicalPath, ogTitle, schemaType, schemaName, schemaDescription, schemaInLanguage = 'de', alternates }) {
  const localeMeta = LOCALES[locale];
  return `<!DOCTYPE html>
<html lang="${localeMeta.htmlLang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtmlText(title)}</title>
  <meta name="description" content="${escapeHtmlAttr(description)}">
${keywords ? `  <meta name="keywords" content="${escapeHtmlAttr(keywords)}">\n` : ''}  <link rel="canonical" href="${absolute(canonicalPath)}">
${alternates}
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <meta name="theme-color" content="#455a64">
  <meta property="og:type" content="${schemaType === 'LearningResource' ? 'article' : 'website'}">
  <meta property="og:title" content="${escapeHtmlAttr(ogTitle || title)}">
  <meta property="og:description" content="${escapeHtmlAttr(description)}">
  <meta property="og:url" content="${absolute(canonicalPath)}">
  <meta property="og:image" content="${BASE_URL}/assets/img/leseverstehen-og.jpg">
  <meta property="og:image:width" content="1080">
  <meta property="og:image:height" content="1080">
  <meta property="og:site_name" content="Samuel Coach de Alemán">
  <meta property="og:locale" content="${localeMeta.ogLocale}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtmlAttr(ogTitle || title)}">
  <meta name="twitter:description" content="${escapeHtmlAttr(description)}">
  <meta name="twitter:image" content="${BASE_URL}/assets/img/leseverstehen-og.jpg">
${makeLocaleScript(locale)}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "${schemaType}",
    "name": ${jsonVal(schemaName || title)},
    "description": ${jsonVal(schemaDescription || description)},
    "url": ${jsonVal(absolute(canonicalPath))},
    "inLanguage": ${jsonVal(schemaInLanguage)},
    "provider": {
      "@type": "Person",
      "name": "Samuel Coach de Alemán",
      "url": "https://www.samuelcoachdealeman.com/"
    }
  }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap"></noscript>
  <link rel="icon" type="image/webp" href="/assets/img/favicon.webp">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.webp">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="stylesheet" href="/assets/css/cookie-banner-core.css">
</head>`;
}

function generateRootPage(locale) {
  const copy = LOCALES[locale].root;
  const canonicalPath = leseBase(locale);
  return `${pageHead({
    locale,
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    canonicalPath,
    ogTitle: copy.ogTitle,
    schemaType: 'CollectionPage',
    schemaName: copy.h1,
    schemaDescription: copy.description,
    alternates: makeAlternateLinks((altLocale) => leseBase(altLocale)),
  })}
<body>
${makeNav(locale)}
  <main>
    <section class="lese-hero">
      <div class="container">
        <span class="lese-hero-kicker">${copy.kicker}</span>
        <h1>${copy.h1}</h1>
        <p>${copy.lead}</p>
      </div>
    </section>

    <section class="lese-lista">
      <div class="container">
        <div id="lese-lista-root"></div>
      </div>
    </section>
  </main>

${makeFooter(locale)}

  <script defer src="/assets/js/google-analytics-core.js"></script>
  <script src="/assets/js/cookie-banner-core.js" defer></script>
  <script src="/assets/js/main.js" defer></script>
  <script src="/assets/js/leseverstehen-data.js?v=${JS_VERSION}"></script>
  <script src="/assets/js/leseverstehen.js?v=${JS_VERSION}"></script>
  <script>
    renderLista(document.getElementById('lese-lista-root'));
  </script>
  <script type="module" src="/assets/js/auth.js"></script>
</body>
</html>
`;
}

function generateLevelPage(locale, nivel) {
  const meta = LOCALES[locale].levelMeta(nivel);
  const canonicalPath = levelPath(locale, nivel);
  return `${pageHead({
    locale,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    canonicalPath,
    ogTitle: `${meta.h1} | Samuel Coach de Alemán`,
    schemaType: 'CollectionPage',
    schemaName: meta.h1,
    schemaDescription: meta.description,
    alternates: makeAlternateLinks((altLocale) => levelPath(altLocale, nivel)),
  })}
<body>
${makeNav(locale)}

  <main>
    <section class="lese-hero">
      <div class="container">
        <span class="lese-hero-kicker">${LOCALES[locale].root.kicker}</span>
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

${makeFooter(locale)}

  <script defer src="/assets/js/google-analytics-core.js"></script>
  <script src="/assets/js/cookie-banner-core.js" defer></script>
  <script src="/assets/js/main.js" defer></script>
  <script src="/assets/js/leseverstehen-data.js?v=${JS_VERSION}"></script>
  <script src="/assets/js/leseverstehen.js?v=${JS_VERSION}"></script>
  <script>
    renderListaNivel(document.getElementById('lese-lista-root'), '${nivel}');
  </script>
  <script type="module" src="/assets/js/auth.js"></script>
</body>
</html>
`;
}

function generateTextPage(locale, texto) {
  const description = LOCALES[locale].pageDescription(texto);
  const canonicalPath = textPath(locale, texto);
  const pageTitle = `${texto.titulo} — Leseverstehen ${texto.nivel} | Samuel Coach de Alemán`;
  return `${pageHead({
    locale,
    title: pageTitle,
    description,
    canonicalPath,
    ogTitle: `${texto.titulo} — Leseverstehen ${texto.nivel}`,
    schemaType: 'LearningResource',
    schemaName: texto.titulo,
    schemaDescription: description,
    schemaInLanguage: 'de',
    alternates: makeAlternateLinks((altLocale) => textPath(altLocale, texto)),
  })}
<body>
${makeNav(locale)}

  <main>
    <div class="container">
      <div id="lese-leer-root" class="lese-leer-root"></div>
    </div>
  </main>

${makeFooter(locale)}

  <script defer src="/assets/js/google-analytics-core.js"></script>
  <script src="/assets/js/cookie-banner-core.js" defer></script>
  <script src="/assets/js/main.js" defer></script>
  <script src="/assets/js/leseverstehen-data.js?v=${JS_VERSION}"></script>
  <script src="/assets/js/leseverstehen.js?v=${JS_VERSION}"></script>
  <script>
    renderLectura(document.getElementById('lese-leer-root'), '${texto.slug}');
  </script>
  <script src="/assets/js/progress-tracker.js" defer></script>
  <script type="module" src="/assets/js/auth.js"></script>
</body>
</html>
`;
}

const root = path.resolve(__dirname, '..');
const ORDEN_NIVELES = ['A1', 'A2', 'B1', 'B2'];
const niveles = ORDEN_NIVELES.filter((nivel) => TEXTOS.some((texto) => texto.nivel === nivel));
const locales = ['es', 'de', 'en'];

function outputDirFor(locale, relativePath) {
  if (locale === 'es') return path.join(root, relativePath);
  return path.join(root, locale, relativePath);
}

// 1. Índices principales por idioma
locales.forEach((locale) => {
  const dir = outputDirFor(locale, 'leseverstehen');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generateRootPage(locale), 'utf8');
  console.log(`✓ ${route(locale, 'leseverstehen/')}`);
});

// 2. Páginas por nivel y por texto en los tres idiomas
locales.forEach((locale) => {
  niveles.forEach((nivel) => {
    const levelDir = outputDirFor(locale, path.join('leseverstehen', nivel.toLowerCase()));
    fs.mkdirSync(levelDir, { recursive: true });
    fs.writeFileSync(path.join(levelDir, 'index.html'), generateLevelPage(locale, nivel), 'utf8');
    console.log(`✓ ${levelPath(locale, nivel)}`);
  });

  TEXTOS.forEach((texto) => {
    const textDir = outputDirFor(
      locale,
      path.join('leseverstehen', texto.nivel.toLowerCase(), texto.slug)
    );
    fs.mkdirSync(textDir, { recursive: true });
    fs.writeFileSync(path.join(textDir, 'index.html'), generateTextPage(locale, texto), 'utf8');
    console.log(`✓ ${textPath(locale, texto)}`);
  });
});

console.log(`\n${TEXTOS.length} textos + ${niveles.length} niveles generados en ${locales.length} idiomas.`);

// 3. Actualizar sitemap.xml
const sitemapPath = path.join(root, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
sitemap = sitemap.replace(/\s*<!-- LESEVERSTEHEN:START -->[\s\S]*?<!-- LESEVERSTEHEN:END -->/g, '');

let block = '\n  <!-- LESEVERSTEHEN:START -->';

locales.forEach((locale) => {
  block += `
  <url>
    <loc>${absolute(leseBase(locale))}</loc>
    <changefreq>weekly</changefreq>
    <priority>${locale === 'es' ? '0.9' : '0.7'}</priority>
  </url>`;
});

niveles.forEach((nivel) => {
  locales.forEach((locale) => {
    block += `
  <url>
    <loc>${absolute(levelPath(locale, nivel))}</loc>
    <changefreq>weekly</changefreq>
    <priority>${locale === 'es' ? '0.8' : '0.6'}</priority>
  </url>`;
  });
});

TEXTOS.forEach((texto) => {
  locales.forEach((locale) => {
    block += `
  <url>
    <loc>${absolute(textPath(locale, texto))}</loc>
    <changefreq>monthly</changefreq>
    <priority>${locale === 'es' ? '0.7' : '0.5'}</priority>
  </url>`;
  });
});

block += '\n  <!-- LESEVERSTEHEN:END -->';
sitemap = sitemap.replace('</urlset>', block + '\n</urlset>');
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`✓ sitemap.xml: rutas de Leseverstehen actualizadas en ${locales.length} idiomas.`);
