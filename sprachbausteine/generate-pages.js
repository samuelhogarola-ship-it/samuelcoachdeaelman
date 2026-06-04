#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.samuelcoachdealeman.com";
const JS_VERSION = "20260603a";
const ROOT_DIR = path.resolve(__dirname, "..");
const TEXTOS = require(path.join(ROOT_DIR, "assets/js/leseverstehen-data.js"));

const LEVELS = ["A1", "A2", "B1", "B2"];
const GAP_COUNT_BY_LEVEL = {
  A1: 5,
  A2: 8,
  B1: 10,
  B2: 10,
};

const DISTRACTORS_PER_TYPE2 = 5;

const CLOSED_CLASSES = {
  article: new Set([
    "der", "die", "das", "den", "dem", "des",
    "ein", "eine", "einen", "einem", "einer", "eines",
    "kein", "keine", "keinen", "keinem", "keiner", "keines",
    "dieser", "diese", "dieses", "diesem", "diesen",
  ]),
  preposition: new Set([
    "an", "auf", "aus", "bei", "bis", "durch", "fur", "gegen", "hinter",
    "in", "mit", "nach", "neben", "ohne", "seit", "uber", "um", "unter",
    "von", "vor", "wahrend", "wegen", "zu", "zwischen",
  ]),
  conjunction: new Set([
    "aber", "als", "bevor", "bis", "damit", "dass", "denn", "falls",
    "nachdem", "ob", "obwohl", "oder", "sondern", "sowie", "und",
    "wahrend", "weil", "wenn",
  ]),
  pronoun: new Set([
    "alle", "dein", "deine", "deinem", "deinen", "deiner", "du", "euch",
    "er", "es", "euer", "eure", "ich", "ihr", "ihm", "ihn", "ihnen",
    "ihrer", "ihrem", "ihren", "ihres", "man", "mein", "meine", "meinem",
    "meinen", "meiner", "meines", "mich", "mir", "sich", "sein", "seine",
    "seinem", "seinen", "seiner", "seines", "sie", "unser", "unsere",
    "unserem", "unseren", "unserer", "unseres", "uns", "wir",
  ]),
  adverb: new Set([
    "anschliessend", "auch", "bald", "dabei", "danach", "dann", "darum", "daher",
    "deshalb", "deswegen", "direkt", "dort", "fruher", "gestern", "heute",
    "hier", "hingegen", "immer", "jetzt", "nicht", "noch", "oft", "schon", "selbst",
    "selten", "sofort", "sonst", "spater", "trotzdem", "vorher", "vielleicht",
    "wirklich", "zudem", "zuerst", "zusammen", "fast", "halb", "naturlich", "schlussendlich", "schließlich",
  ]),
};

const CONNECTOR_CATEGORIES = new Set(["conjunction", "adverb", "preposition"]);

const CURATED_DISTRACTOR_BANKS = {
  article: [
    "der", "die", "das", "den", "dem", "des",
    "ein", "eine", "einen", "einem", "einer", "eines",
    "kein", "keine", "keinen", "keinem", "keiner", "keines",
    "dieser", "diese", "dieses", "diesem", "diesen",
  ],
  preposition: [
    "an", "auf", "aus", "bei", "bis", "durch", "für", "gegen", "hinter",
    "in", "mit", "nach", "neben", "ohne", "seit", "über", "um", "unter",
    "von", "vor", "während", "wegen", "zu", "zwischen",
  ],
  conjunction: [
    "aber", "als", "bevor", "bis", "damit", "dass", "denn", "falls",
    "nachdem", "ob", "obwohl", "oder", "sondern", "sowie", "und",
    "während", "weil", "wenn",
  ],
  pronoun: [
    "ich", "du", "er", "sie", "es", "wir", "ihr", "sie",
    "mich", "dich", "ihn", "uns", "euch", "ihnen", "mir", "dir", "ihm",
    "mein", "meine", "meinem", "meinen", "meiner", "dein", "deine",
    "deinem", "deinen", "deiner", "sein", "seine", "seinem", "seinen",
    "seiner", "ihr", "ihre", "ihrem", "ihren", "ihrer", "unser", "unsere",
    "unserem", "unseren", "unserer", "sich", "man",
  ],
  adverb: [
    "auch", "anschließend", "bald", "dabei", "danach", "dann", "darum", "daher",
    "deshalb", "deswegen", "direkt", "dort", "früher", "heute", "immer",
    "jetzt", "nicht", "noch", "oft", "schon", "selbst", "sofort", "sonst", "später",
    "trotzdem", "vorher", "vielleicht", "wirklich", "zudem", "zuerst", "zusammen", "fast", "natürlich", "schließlich",
  ],
};

const ARTICLE_SURFACE_FALLBACKS = {
  der: ["dieser", "einer", "keiner"],
  die: ["diese", "eine", "keine"],
  das: ["dieses", "ein", "kein"],
  den: ["diesen", "einen", "keinen"],
  dem: ["diesem", "einem", "keinem"],
  des: ["dieses", "eines", "keines"],
  ein: ["dieses", "kein", "das"],
  eine: ["diese", "keine", "die"],
  einen: ["den", "keinen", "diesen"],
  einem: ["dem", "keinem", "diesem"],
  einer: ["dieser", "keiner", "der"],
  eines: ["dieses", "keines", "des"],
  kein: ["ein", "dieses", "das"],
  keine: ["eine", "diese", "die"],
  keinen: ["einen", "diesen", "den"],
  keinem: ["einem", "diesem", "dem"],
  keiner: ["einer", "dieser", "der"],
  keines: ["eines", "dieses", "des"],
  dieser: ["der", "einer", "keiner"],
  diese: ["die", "eine", "keine"],
  dieses: ["das", "ein", "kein"],
  diesem: ["dem", "einem", "keinem"],
  diesen: ["den", "einen", "keinen"],
};

const CONNECTOR_FAMILIES = {
  addition: ["und", "auch", "außerdem", "zudem", "sowie"],
  alternative: ["oder"],
  cause: ["weil", "denn", "deshalb", "deswegen", "darum", "daher"],
  condition: ["wenn", "falls", "sonst"],
  contrast: ["aber", "sondern", "obwohl", "trotzdem", "während"],
  purpose: ["damit"],
  sequence: ["dann", "danach", "anschließend", "vorher", "zuerst"],
  time: ["als", "bevor", "bis", "nachdem"],
  content: ["dass", "ob"],
};

const CONNECTOR_FAMILY_BY_WORD = Object.entries(CONNECTOR_FAMILIES).reduce((map, [family, words]) => {
  words.forEach((word) => {
    map[normalizeWord(word)] = family;
  });
  return map;
}, {});

const ARTICLE_PROFILES = {
  nomMasc: new Set(["der", "dieser"]),
  nomFemOrNomPl: new Set(["die", "eine", "keine", "diese"]),
  nomNeut: new Set(["das", "dieses", "ein", "kein"]),
  accMasc: new Set(["den", "einen", "keinen", "diesen"]),
  datMascNeut: new Set(["dem", "einem", "keinem", "diesem"]),
  datFemGen: new Set(["der", "einer", "keiner", "dieser"]),
  genMascNeut: new Set(["des", "eines", "keines", "dieses"]),
};

const PREPOSITION_PROFILES = {
  accusative: new Set(["durch", "fur", "gegen", "ohne", "um", "bis"]),
  dative: new Set(["aus", "bei", "mit", "nach", "seit", "von", "zu", "gegenuber"]),
  twoWay: new Set(["an", "auf", "hinter", "in", "neben", "uber", "unter", "vor", "zwischen"]),
  temporalCausal: new Set(["wahrend", "wegen"]),
};

const PRONOUN_PROFILES = {
  objectPronoun: new Set(["mich", "dich", "ihn", "ihm", "ihnen", "mir", "dir", "uns", "euch", "sich"]),
  personalNom: new Set(["ich", "du", "er", "sie", "es", "wir", "ihr"]),
  possessiveBase: new Set(["mein", "dein", "sein", "ihr", "unser", "euer"]),
  possessiveInflected: new Set([
    "meine", "meinem", "meinen", "meiner", "meines",
    "deine", "deinem", "deinen", "deiner",
    "seine", "seinem", "seinen", "seiner", "seines",
    "ihre", "ihrem", "ihren", "ihrer",
    "unsere", "unserem", "unseren", "unserer",
    "eure",
  ]),
};

const COMMON_NAMES = new Set([
  "ali", "anna", "clara", "felix", "jonas", "julia", "laura", "lea", "lisa",
  "lukas", "maja", "maria", "martin", "max", "mira", "nina", "paul",
  "patrick", "peter", "sara", "sophie", "stefan", "tim", "tom",
]);

const ARTICLE_LIKE_WORDS = new Set([
  ...CLOSED_CLASSES.article,
  ...["mein", "meine", "meinem", "meinen", "meiner", "meines", "dein", "deine", "deinem", "deinen", "deiner", "sein", "seine", "seinem", "seinen", "seiner", "ihr", "ihre", "ihrem", "ihren", "ihrer", "unser", "unsere", "unserem", "unseren", "unserer", "euer", "eure", "kein", "keine", "keinem", "keinen", "keiner", "keines"],
  ...["am", "ans", "beim", "im", "ins", "vom", "zum", "zur"],
]);

const COPULA_WORDS = new Set(["bin", "bist", "ist", "sind", "seid", "war", "waren", "bleibt", "bleiben", "wird", "werden", "wirkt", "scheint"]);
const NUMERAL_WORDS = new Set(["ein", "eine", "eins", "zwei", "drei", "vier", "fünf", "funf", "sechs", "sieben", "acht", "neun", "zehn"]);

const LOCALES = {
  es: {
    lang: "es",
    localePath: "",
    ogLocale: "es_ES",
    localeName: "Español",
    siteLocaleContent: null,
    notice:
      '🗓️ Agenda cerrada hasta el 22.06 &nbsp;·&nbsp; Mientras tanto, <a href="https://blog.samuelcoachdealeman.com">aprende alemán gratis en el blog</a>',
    nav: {
      home: "Inicio",
      blog: "Blog",
      about: "Sobre mí",
      services: "Servicios",
      apps: "Mis APPs",
      resources: "Recursos",
      conversational: "Alemán conversacional",
      work: "Trabajar en Alemania",
      exams: "Preparación de exámenes",
      companies: "Alemán para empresas",
      school: "Alemán escolar",
      methodology: "Metodología",
      faq: "FAQs",
      privacy: "Política de privacidad",
      rights: "Todos los derechos reservados.",
      openMenu: "Abrir menú",
    },
    root: {
      title: "Sprachbausteine interactivos para TELC y Goethe | Samuel Coach de Alemán",
      description:
        "Practica Sprachbausteine interactivos con ejercicios tipo 1 y tipo 2 a partir de textos reales de A1, A2, B1 y B2. Ideal para preparar Goethe y TELC.",
      status: "Disponible",
      heroTitle: "Sprachbausteine interactivos",
      heroLead:
        "Prepara Goethe y TELC con Sprachbausteine interactivos basados en textos reales. Practica conectores, vocabulario y estructuras con dos formatos pensados para examen y corrección inmediata.",
      mode1Title: "Tipo 1",
      mode1Body:
        "Sprachbausteine tipo 1 con huecos guiados y tres opciones por apartado. Ideal para entrenar lógica textual, conectores y vocabulario frecuente de examen.",
      mode2Title: "Tipo 2",
      mode2Body:
        "Sprachbausteine tipo 2 con banco de palabras y distractores de calidad para practicar una versión más abierta y exigente del formato TELC o Goethe.",
      cta: "Explora por nivel",
    },
    levelMeta(level) {
      return {
        title: `Sprachbausteine ${level} interactivos | Samuel Coach de Alemán`,
        description: `Ejercicios interactivos de Sprachbausteine ${level} con corrección inmediata y distractores de calidad para TELC y Goethe.`,
      };
    },
    pageMeta(exercise) {
      return {
        title: `${exercise.titulo} | Sprachbausteine ${exercise.nivel} interactivos`,
        description: `Sprachbaustein interactivo ${exercise.nivel} basado en "${exercise.titulo}" con corrección inmediata y distractores cuidados.`,
      };
    },
  },
  de: {
    lang: "de",
    localePath: "/de",
    ogLocale: "de_DE",
    localeName: "Deutsch",
    siteLocaleContent: {
      navigation: {
        openMenu: "Menü öffnen",
        closeMenu: "Menü schließen",
      },
      cookieBanner: {
        imageAlt: "Dekoratives Keksbild im Cookie-Banner",
        title: "Deine Privatsphäre ist wichtig",
        noticeHtml:
          '<p>Wir verwenden notwendige Cookies, damit die Website funktioniert, und nur mit deiner Zustimmung Analyse-Cookies, um Nutzung und Inhalte zu verbessern. <a href="/de/politica-de-privacidad/">Mehr Informationen</a>.</p>',
        acceptLabel: "Akzeptieren",
        rejectLabel: "Ablehnen",
        configLabel: "Cookies einstellen",
        configModalTitle: "Cookies konfigurieren",
        configModalIntro:
          "Du kannst nur notwendige Cookies akzeptieren oder auch Analyse-Cookies aktivieren. Deine Entscheidung kannst du jederzeit ändern, indem du die Browser-Cookies löschst.",
        necessaryTitle: "Notwendige Cookies",
        necessaryDescription:
          "Sie sind erforderlich für Navigation, Sicherheit und das Speichern deiner Cookie-Entscheidung.",
        necessaryBadge: "Immer aktiv",
        analyticsTitle: "Analyse-Cookies",
        analyticsDescription:
          "Sie helfen uns zu verstehen, wie die Website genutzt wird, damit wir Inhalte, Leistung und Nutzererlebnis verbessern können.",
        saveConfigLabel: "Einstellungen speichern",
      },
    },
    notice:
      'Terminplan bis zum 22.06 geschlossen · In der Zwischenzeit kannst du <a href="https://blog.samuelcoachdealeman.com">im Blog kostenlos Deutsch lernen</a>',
    nav: {
      home: "Start",
      blog: "Blog",
      about: "Über mich",
      services: "Angebote",
      apps: "Meine Apps",
      resources: "Ressourcen",
      conversational: "Konversationsdeutsch",
      work: "Arbeiten in Deutschland",
      exams: "Prüfungsvorbereitung",
      companies: "Deutsch für Unternehmen",
      school: "Schuldeutsch",
      methodology: "Methodik",
      faq: "FAQ",
      privacy: "Datenschutz",
      rights: "Alle Rechte vorbehalten.",
      openMenu: "Menü öffnen",
    },
    root: {
      title: "Interaktive Sprachbausteine für TELC und Goethe | Samuel Coach de Alemán",
      description:
        "Interaktive Sprachbausteine mit Typ 1 und Typ 2 auf Basis realer Texte von A1 bis B2. Geeignet für Goethe und TELC.",
      status: "Verfügbar",
      heroTitle: "Interaktive Sprachbausteine",
      heroLead:
        "Bereite Goethe und TELC mit interaktiven Sprachbausteinen auf Basis echter Texte vor. Du trainierst Konnektoren, Wortschatz und Strukturen in zwei prüfungsnahen Formaten mit direkter Korrektur.",
      mode1Title: "Typ 1",
      mode1Body:
        "Sprachbausteine Typ 1 mit geführten Lücken und drei Optionen pro Aufgabe. Gut, um Textlogik, Konnektoren und typischen Prüfungswortschatz sicher zu trainieren.",
      mode2Title: "Typ 2",
      mode2Body:
        "Sprachbausteine Typ 2 mit Wortbank und starken Distraktoren, damit du das offenere und anspruchsvollere Format von TELC oder Goethe übst.",
      cta: "Nach Niveau öffnen",
    },
    levelMeta(level) {
      return {
        title: `Sprachbausteine ${level} interaktiv | Samuel Coach de Alemán`,
        description: `Interaktive Sprachbausteine auf Niveau ${level} mit sofortiger Korrektur und sinnvollen Distraktoren.`,
      };
    },
    pageMeta(exercise) {
      return {
        title: `${exercise.titulo} | Sprachbausteine ${exercise.nivel} interaktiv`,
        description: `Interaktiver Sprachbaustein ${exercise.nivel} auf Basis von "${exercise.titulo}" mit direktem Feedback.`,
      };
    },
  },
  en: {
    lang: "en",
    localePath: "/en",
    ogLocale: "en_GB",
    localeName: "English",
    siteLocaleContent: {
      navigation: {
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      cookieBanner: {
        imageAlt: "Decorative cookie image in the cookie banner",
        title: "Your privacy matters",
        noticeHtml:
          '<p>We use essential cookies to make the site work and, only if you agree, analytics cookies to understand usage and improve the website. <a href="/en/politica-de-privacidad/">More information</a>.</p>',
        acceptLabel: "Accept",
        rejectLabel: "Reject",
        configLabel: "Cookie settings",
        configModalTitle: "Configure your cookies",
        configModalIntro:
          "You can accept only essential cookies or also enable analytics cookies. You can change your decision at any time by deleting browser cookies.",
        necessaryTitle: "Essential cookies",
        necessaryDescription:
          "They are required for basic functions such as navigation, security and remembering your cookie choice.",
        necessaryBadge: "Always active",
        analyticsTitle: "Analytics cookies",
        analyticsDescription:
          "They help us understand how the site is used so we can improve content, performance and user experience.",
        saveConfigLabel: "Save settings",
      },
    },
    notice:
      'Schedule closed until 22.06 · In the meantime, you can <a href="https://blog.samuelcoachdealeman.com">learn German for free on the blog</a>',
    nav: {
      home: "Home",
      blog: "Blog",
      about: "About me",
      services: "Services",
      apps: "My Apps",
      resources: "Resources",
      conversational: "Conversational German",
      work: "Working in Germany",
      exams: "Exam preparation",
      companies: "German for companies",
      school: "School German",
      methodology: "Method",
      faq: "FAQ",
      privacy: "Privacy policy",
      rights: "All rights reserved.",
      openMenu: "Open menu",
    },
    root: {
      title: "Interactive Sprachbausteine for TELC and Goethe | Samuel Coach de Alemán",
      description:
        "Practise interactive German gap-fill exercises with type 1 and type 2 tasks based on real A1 to B2 texts. Useful for Goethe and TELC preparation.",
      status: "Available",
      heroTitle: "Interactive Sprachbausteine",
      heroLead:
        "Prepare for Goethe and TELC with interactive Sprachbausteine built from real texts. Train connectors, vocabulary and structure through two exam-focused formats with instant correction.",
      mode1Title: "Type 1",
      mode1Body:
        "Type 1 Sprachbausteine with guided gaps and three options per item. Best for training text logic, connectors and high-frequency exam vocabulary.",
      mode2Title: "Type 2",
      mode2Body:
        "Type 2 Sprachbausteine with a word bank and high-quality distractors for a more open and demanding TELC or Goethe-style task.",
      cta: "Browse by level",
    },
    levelMeta(level) {
      return {
        title: `Interactive Sprachbausteine ${level} | Samuel Coach de Alemán`,
        description: `Interactive ${level} gap-fill tasks with 10 blanks, instant correction and high-quality distractors for Goethe and TELC.`,
      };
    },
    pageMeta(exercise) {
      return {
        title: `${exercise.titulo} | Interactive Sprachbausteine ${exercise.nivel}`,
        description: `Interactive ${exercise.nivel} Sprachbaustein based on "${exercise.titulo}" with instant feedback and careful distractors.`,
      };
    },
  },
};

function normalizeWord(word) {
  return String(word)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function isWordToken(token) {
  return /^[\p{L}ÄÖÜäöüß-]+$/u.test(token);
}

function splitParagraph(paragraph) {
  return paragraph.split(/([\p{L}ÄÖÜäöüß-]+)/u).filter(Boolean);
}

function findNeighborWord(segments, startIndex, step) {
  for (let index = startIndex + step; index >= 0 && index < segments.length; index += step) {
    if (isWordToken(segments[index])) return segments[index];
  }
  return "";
}

function detectCategory(word, previousToken = "", nextToken = "") {
  const normalized = normalizeWord(word);
  const previous = normalizeWord(previousToken);
  const next = normalizeWord(nextToken);
  const nextLooksNoun = /^[A-ZÄÖÜ]/.test(nextToken);

  if (CLOSED_CLASSES.article.has(normalized)) return "article";
  if (CLOSED_CLASSES.preposition.has(normalized)) return "preposition";
  if (CLOSED_CLASSES.conjunction.has(normalized)) return "conjunction";
  if (CLOSED_CLASSES.pronoun.has(normalized)) return "pronoun";
  if (/^[A-ZÄÖÜ]/.test(word) && previous && !/[.!?]$/.test(previousToken)) return "noun";
  if (CLOSED_CLASSES.adverb.has(normalized)) return "adverb";
  if (NUMERAL_WORDS.has(normalized)) return "other";
  if (
    previous &&
    ARTICLE_LIKE_WORDS.has(previous) &&
    !/^[A-ZÄÖÜ]/.test(word) &&
    /(e|en|er|em|es|ig|isch|lich|bar|los|sam|haft|voll|frei|nah|weit|alt|neu|jung|klar|bewusst|spannend|gesund|gemutlich|gemuetlich|britisch|schattig|wichtig|ruhig|freundlich|kalt|warm|perfekt)$/i.test(normalized)
  ) {
    return "adjective";
  }
  if (
    nextLooksNoun &&
    !/^[A-ZÄÖÜ]/.test(word) &&
    !CLOSED_CLASSES.adverb.has(normalized) &&
    !CLOSED_CLASSES.pronoun.has(normalized) &&
    !NUMERAL_WORDS.has(normalized)
  ) {
    return "adjective";
  }
  if (
    previous &&
    COPULA_WORDS.has(previous) &&
    !/^[A-ZÄÖÜ]/.test(word) &&
    !CLOSED_CLASSES.adverb.has(normalized)
  ) {
    return "adjective";
  }
  if (previous === "zu" && /(ieren|en|eln|ern)$/i.test(normalized)) return "verb";
  if (/(lich|ig|isch|bar|sam|los|end)$/i.test(word)) return "adjective";
  if (
    !ARTICLE_LIKE_WORDS.has(previous) &&
    !COPULA_WORDS.has(previous) &&
    !NUMERAL_WORDS.has(normalized) &&
    !/(ig|isch|lich|bar|los|sam|haft|voll|frei|nah|weit|alt|neu|jung|klar|bewusst|spannend|gesund|gemutlich|gemuetlich|britisch|schattig|wichtig|ruhig|freundlich|kalt|warm|perfekt)$/i.test(normalized) &&
    /(en|ern|eln|ieren|st|t)$/i.test(word)
  ) {
    return "verb";
  }
  return "other";
}

function detectProfileFromMap(word, profileMap, fallback) {
  const normalized = normalizeWord(word);
  for (const [profile, words] of Object.entries(profileMap)) {
    if (words.has(normalized)) return profile;
  }
  return fallback;
}

function detectVerbProfile(word) {
  const normalized = normalizeWord(word);
  if (isLikelyParticipleLike(normalized)) {
    return "participle";
  }
  if (/(ieren|en|eln|ern)$/.test(normalized)) return "infinitive";
  if (/(test|est)$/.test(normalized)) return "finite2sg";
  if (/(ten|eten)$/.test(normalized)) return "finitePluralOrPast";
  if (/(te|ete)$/.test(normalized)) return "finitePast";
  if (/t$/.test(normalized)) return "finite3sg";
  if (/e$/.test(normalized)) return "finite1sg";
  return "verb";
}

function isLikelyParticipleLike(word) {
  const normalized = normalizeWord(word);
  return /^(ge.+(en|t)|(?:ab|an|auf|aus|ein|fort|los|mit|nach|vor|weg|wieder|zuruck|zurueck|zusammen)ge.+(en|t))$/.test(normalized)
    || /(worden|funden|fahren|gangen|kommen|nommen|schlossen|beschlossen|geboten|gesehen)$/i.test(normalized);
}

function detectNounProfile(word) {
  const normalized = normalizeWord(word);
  if (/en$/.test(normalized) && !/(ung|keit|heit|schaft)$/.test(normalized)) return "nominalizedOrPlural";
  if (/-/.test(word) || /[A-ZÄÖÜ][a-zäöüß]+[A-ZÄÖÜ]/.test(word)) return "compound";
  return "noun";
}

function detectOtherProfile(word) {
  const normalized = normalizeWord(word);
  if (normalized === "nicht") return "negation";
  if (normalized === "zu") return "particle";
  return "other";
}

function detectProfile(word, category) {
  switch (category) {
    case "article":
      return detectProfileFromMap(word, ARTICLE_PROFILES, "article");
    case "preposition":
      return detectProfileFromMap(word, PREPOSITION_PROFILES, "preposition");
    case "pronoun":
      return detectProfileFromMap(word, PRONOUN_PROFILES, "pronoun");
    case "verb":
      return detectVerbProfile(word);
    case "noun":
      return detectNounProfile(word);
    case "other":
      return detectOtherProfile(word);
    default:
      return category;
  }
}

function detectConnectorFamily(word, category) {
  if (!CONNECTOR_CATEGORIES.has(category)) return null;
  return CONNECTOR_FAMILY_BY_WORD[normalizeWord(word)] || null;
}

function isEligibleWord(word, previousToken) {
  const normalized = normalizeWord(word);
  if (!isWordToken(word)) return false;
  if (word.length < 2) return false;
  if (COMMON_NAMES.has(normalized)) return false;
  if (!previousToken || /[.!?]\s*$/.test(previousToken)) return false;
  return true;
}

function uniqueWords(words) {
  const seen = new Set();
  const result = [];

  words.forEach((word) => {
    const normalized = normalizeWord(word);
    if (seen.has(normalized)) return;
    seen.add(normalized);
    result.push(word);
  });

  return result;
}

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededSort(items, seed, keyFn) {
  return items
    .map((item, index) => ({
      item,
      order: hashString(`${seed}:${keyFn(item, index)}`),
    }))
    .sort((a, b) => a.order - b.order)
    .map((entry) => entry.item);
}

function buildLevelPools() {
  const pools = {};

  LEVELS.forEach((level) => {
    const levelPools = {
      article: [],
      preposition: [],
      conjunction: [],
      pronoun: [],
      adverb: [],
      noun: [],
      verb: [],
      adjective: [],
      other: [],
    };

    TEXTOS
      .filter((text) => text.nivel === level)
      .forEach((text) => {
        const rawTokens = text.texto.split(/\s+/);
        rawTokens.forEach((rawToken, index) => {
          const cleaned = rawToken.replace(/^[^A-Za-zÄÖÜäöüß]+|[^A-Za-zÄÖÜäöüß-]+$/gu, "");
          if (!cleaned || !isWordToken(cleaned)) return;
          const previousToken = rawTokens[index - 1] || "";
          const nextToken = rawTokens[index + 1] || "";
          levelPools[detectCategory(cleaned, previousToken, nextToken)].push(cleaned);
        });
      });

    Object.keys(levelPools).forEach((bucket) => {
      levelPools[bucket] = uniqueWords(levelPools[bucket]);
    });

    pools[level] = levelPools;
  });

  return pools;
}

const LEVEL_POOLS = buildLevelPools();

function buildCandidates(text) {
  const candidates = [];
  let absoluteWordIndex = 0;

  text.texto.split("\n\n").forEach((paragraph, paragraphIndex) => {
    const segments = splitParagraph(paragraph);

    segments.forEach((segment, segmentIndex) => {
      if (!isWordToken(segment)) return;
      absoluteWordIndex += 1;
      const previousToken = findNeighborWord(segments, segmentIndex, -1);
      const nextToken = findNeighborWord(segments, segmentIndex, 1);
      if (!isEligibleWord(segment, previousToken)) return;

      candidates.push({
        paragraphIndex,
        segmentIndex,
        absoluteWordIndex,
        word: segment,
        normalized: normalizeWord(segment),
        category: detectCategory(segment, previousToken, nextToken),
      });
    });
  });

  return candidates;
}

function getGapCount(level) {
  return GAP_COUNT_BY_LEVEL[level] || 10;
}

function getWordBankSize(level) {
  return getGapCount(level) + DISTRACTORS_PER_TYPE2;
}

function selectGaps(text, gapCount) {
  const candidates = buildCandidates(text);
  if (candidates.length <= gapCount) return candidates;

  const selected = [];
  const usedWords = new Set();

  for (let slot = 0; slot < gapCount; slot += 1) {
    const targetIndex = Math.floor(((slot + 0.5) * candidates.length) / gapCount);
    let found = null;

    for (let offset = 0; offset < candidates.length; offset += 1) {
      const leftIndex = targetIndex - offset;
      const rightIndex = targetIndex + offset;
      const tryIndexes = offset === 0 ? [targetIndex] : [leftIndex, rightIndex];

      for (const index of tryIndexes) {
        if (index < 0 || index >= candidates.length) continue;
        const candidate = candidates[index];
        if (usedWords.has(candidate.normalized)) continue;
        if (selected.some((item) => Math.abs(item.absoluteWordIndex - candidate.absoluteWordIndex) < 3)) continue;
        found = candidate;
        break;
      }

      if (found) break;
    }

    if (found) {
      selected.push(found);
      usedWords.add(found.normalized);
    }
  }

  return selected
    .slice(0, gapCount)
    .sort((a, b) => a.absoluteWordIndex - b.absoluteWordIndex);
}

function similarityScore(target, candidate) {
  const a = normalizeWord(target);
  const b = normalizeWord(candidate);
  let score = 0;
  if (a.length === b.length) score += 2;
  if (a[0] === b[0]) score += 1;
  if (a.slice(-2) === b.slice(-2)) score += 2;
  if (/^[A-ZÄÖÜ]/.test(target) === /^[A-ZÄÖÜ]/.test(candidate)) score += 1;
  return score;
}

function grammaticalScore(answerMeta, candidateMeta) {
  let score = similarityScore(answerMeta.word, candidateMeta.word);
  if (candidateMeta.category === answerMeta.category) score += 5;
  if (candidateMeta.profile === answerMeta.profile) score += 6;
  if (candidateMeta.family && candidateMeta.family === answerMeta.family) score += 8;

  const lengthDelta = Math.abs(answerMeta.word.length - candidateMeta.word.length);
  score += Math.max(0, 3 - lengthDelta);

  if (answerMeta.category === "verb" && candidateMeta.profile === answerMeta.profile) score += 2;
  if (answerMeta.category === "noun" && candidateMeta.profile === answerMeta.profile) score += 1;

  return score;
}

function buildCandidateMeta(word, categoryOverride) {
  const category = categoryOverride || detectCategory(word);
  return {
    word,
    normalized: normalizeWord(word),
    category,
    profile: detectProfile(word, category),
    family: detectConnectorFamily(word, category),
  };
}

function isAcceptableDistractor(answerMeta, candidateMeta) {
  if (candidateMeta.normalized === normalizeWord(answerMeta.word)) return false;

  if (answerMeta.family) {
    return CONNECTOR_CATEGORIES.has(candidateMeta.category)
      && (candidateMeta.family === answerMeta.family || candidateMeta.category === answerMeta.category);
  }

  if (answerMeta.category === "verb") {
    return candidateMeta.category === "verb"
      && candidateMeta.profile !== "participle"
      && !isLikelyParticipleLike(candidateMeta.word);
  }

  if (answerMeta.category === "pronoun") {
    return candidateMeta.category === "pronoun" && candidateMeta.profile === answerMeta.profile;
  }

  if (["article", "preposition"].includes(answerMeta.category)) {
    return candidateMeta.category === answerMeta.category && candidateMeta.profile === answerMeta.profile;
  }

  return candidateMeta.category === answerMeta.category;
}

function fallbackAcceptableDistractor(answerMeta, candidateMeta) {
  if (candidateMeta.normalized === normalizeWord(answerMeta.word)) return false;

  if (answerMeta.family) {
    return CONNECTOR_CATEGORIES.has(candidateMeta.category);
  }

  if (answerMeta.category === "verb") {
    return candidateMeta.category === "verb" && !isLikelyParticipleLike(candidateMeta.word);
  }

  if (answerMeta.category === "pronoun") {
    return candidateMeta.category === "pronoun" && candidateMeta.profile === answerMeta.profile;
  }

  if (["article", "preposition"].includes(answerMeta.category)) {
    return candidateMeta.category === answerMeta.category && candidateMeta.profile === answerMeta.profile;
  }

  return candidateMeta.category === answerMeta.category;
}

function ensureOptionCount(level, answer, category, options, bannedWords, seed) {
  const answerMeta = {
    word: answer,
    category,
    profile: detectProfile(answer, category),
    family: detectConnectorFamily(answer, category),
  };

  const existing = uniqueWords(options);
  if (existing.length >= 3) return existing.slice(0, 3);

  const pools = [
    ...(CURATED_DISTRACTOR_BANKS[category] || []),
    ...(LEVEL_POOLS[level][category] || []),
    ...(answerMeta.family ? Object.values(CONNECTOR_FAMILIES).flat() : []),
  ];

  const seen = new Set([...bannedWords, ...existing].map((word) => normalizeWord(word)));
  const candidates = seededSort(
    uniqueWords(pools)
      .map((word) => buildCandidateMeta(word, (CURATED_DISTRACTOR_BANKS[category] || []).includes(word) ? category : undefined))
      .filter((candidate) => !seen.has(candidate.normalized))
      .filter((candidate) => fallbackAcceptableDistractor(answerMeta, candidate))
      .sort((a, b) => grammaticalScore(answerMeta, b) - grammaticalScore(answerMeta, a))
      .slice(0, 12),
    `${seed}:fallback`,
    (candidate) => candidate.word
  );

  for (const candidate of candidates) {
    if (existing.length >= 3) break;
    seen.add(candidate.normalized);
    existing.push(candidate.word);
  }

  if (existing.length < 3 && category === "article") {
    const relaxedArticleSource = [
      ...(ARTICLE_SURFACE_FALLBACKS[normalizeWord(answer)] || []),
      ...(CURATED_DISTRACTOR_BANKS.article || []),
    ];

    const relaxedArticleCandidates = seededSort(
      uniqueWords(relaxedArticleSource)
        .map((word) => buildCandidateMeta(word, "article"))
        .filter((candidate) => !seen.has(candidate.normalized))
        .filter((candidate) => candidate.category === "article")
        .sort((a, b) => grammaticalScore(answerMeta, b) - grammaticalScore(answerMeta, a))
        .slice(0, 12),
      `${seed}:article-relaxed`,
      (candidate) => candidate.word
    );

    for (const candidate of relaxedArticleCandidates) {
      if (existing.length >= 3) break;
      seen.add(candidate.normalized);
      existing.push(candidate.word);
    }
  }

  return existing.slice(0, 3);
}

function pickDistractors(level, answer, category, amount, bannedWords, seed) {
  const banned = new Set((bannedWords || []).map((item) => normalizeWord(item)));
  banned.add(normalizeWord(answer));
  const answerMeta = {
    word: answer,
    category,
    profile: detectProfile(answer, category),
    family: detectConnectorFamily(answer, category),
  };

  const pool = uniqueWords([
    ...(CURATED_DISTRACTOR_BANKS[category] || []),
    ...(LEVEL_POOLS[level][category] || []),
    ...(answerMeta.family
      ? Object.values(CONNECTOR_FAMILIES)
          .flat()
          .concat(
            LEVEL_POOLS[level].conjunction || [],
            LEVEL_POOLS[level].adverb || [],
            LEVEL_POOLS[level].preposition || []
          )
      : []),
  ]);

  const candidates = pool
    .filter((word) => !banned.has(normalizeWord(word)))
    .map((word) => {
      const forcedCategory = (CURATED_DISTRACTOR_BANKS[category] || []).includes(word)
        ? category
        : answerMeta.family && (LEVEL_POOLS[level].conjunction || []).includes(word)
          ? "conjunction"
          : answerMeta.family && (LEVEL_POOLS[level].adverb || []).includes(word)
            ? "adverb"
            : answerMeta.family && (LEVEL_POOLS[level].preposition || []).includes(word)
              ? "preposition"
              : category;
      return buildCandidateMeta(word, forcedCategory);
    })
    .filter((candidate) => isAcceptableDistractor(answerMeta, candidate));

  const tiers = answerMeta.family
    ? [
        (candidate) => candidate.family === answerMeta.family && candidate.category === answerMeta.category,
        (candidate) => candidate.family === answerMeta.family && CONNECTOR_CATEGORIES.has(candidate.category),
        (candidate) => candidate.category === answerMeta.category,
        (candidate) => CONNECTOR_CATEGORIES.has(candidate.category),
      ]
    : ["article", "preposition", "pronoun"].includes(answerMeta.category)
      ? [
          (candidate) => candidate.category === answerMeta.category && candidate.profile === answerMeta.profile,
        ]
      : answerMeta.profile
      ? [
          (candidate) => candidate.category === answerMeta.category && candidate.profile === answerMeta.profile,
          (candidate) => candidate.category === answerMeta.category,
        ]
      : [
          (candidate) => candidate.category === answerMeta.category,
        ];

  const picked = [];
  const seen = new Set();

  tiers.forEach((predicate, tierIndex) => {
    if (picked.length >= amount) return;

    seededSort(
      candidates
        .filter((candidate) => !seen.has(candidate.normalized))
        .filter(predicate)
        .sort((a, b) => grammaticalScore(answerMeta, b) - grammaticalScore(answerMeta, a))
        .slice(0, Math.max(amount * 4, amount + 2)),
      `${seed}:tier:${tierIndex}`,
      (candidate) => candidate.word
    ).forEach((candidate) => {
      if (picked.length >= amount) return;
      if (seen.has(candidate.normalized)) return;
      seen.add(candidate.normalized);
      picked.push(candidate.word);
    });
  });

  return picked.slice(0, amount);
}

function buildParagraphs(text, gaps) {
  const gapMap = new Map(
    gaps.map((gap, index) => [`${gap.paragraphIndex}:${gap.segmentIndex}`, { ...gap, id: index + 1 }])
  );

  return text.texto.split("\n\n").map((paragraph, paragraphIndex) => {
    const segments = splitParagraph(paragraph);
    return segments.map((segment, segmentIndex) => {
      const gap = gapMap.get(`${paragraphIndex}:${segmentIndex}`);
      if (!gap) return { type: "text", value: segment };
      return {
        type: "blank",
        id: gap.id,
        answer: gap.word,
        category: gap.category,
      };
    });
  });
}

function buildTypeAssignments() {
  const assignments = {};
  LEVELS.forEach((level) => {
    const texts = TEXTOS.filter((text) => text.nivel === level);
    const type1Count = Math.ceil(texts.length / 2);
    assignments[level] = {};
    texts.forEach((text, index) => {
      assignments[level][text.slug] = index < type1Count ? "type1" : "type2";
    });
  });
  return assignments;
}

const TYPE_ASSIGNMENTS = buildTypeAssignments();

function buildExercises() {
  return TEXTOS.map((text) => {
    const tipo = TYPE_ASSIGNMENTS[text.nivel][text.slug];
    const gapCount = getGapCount(text.nivel);
    const wordBankSize = getWordBankSize(text.nivel);
    const gaps = selectGaps(text, gapCount);
    const bannedAnswers = gaps.map((gap) => gap.word);
    const seedBase = `${text.nivel}:${text.slug}:${tipo}`;

    const blanks = gaps.map((gap, index) => {
      const id = index + 1;
      const options = tipo === "type1"
        ? ensureOptionCount(
            text.nivel,
            gap.word,
            gap.category,
            seededSort(
              [
                gap.word,
                ...pickDistractors(text.nivel, gap.word, gap.category, 2, bannedAnswers, `${seedBase}:options:${id}`),
              ],
              `${seedBase}:shuffle:${id}`,
              (item) => item
            ),
            bannedAnswers,
            `${seedBase}:options:${id}`
          )
        : [];

      return {
        id,
        answer: gap.word,
        category: gap.category,
        options,
      };
    });

    const distractors = [];
    blanks.forEach((blank) => {
      pickDistractors(
        text.nivel,
        blank.answer,
        blank.category,
        2,
        [...bannedAnswers, ...distractors],
        `${seedBase}:bank:${blank.id}`
      ).forEach((word) => {
        if (distractors.length < wordBankSize - gapCount) distractors.push(word);
      });
    });

    const wordBank = tipo === "type2"
      ? seededSort(
          [
            ...blanks.map((blank) => ({
              id: `answer-${blank.id}`,
              text: blank.answer,
              correctFor: blank.id,
            })),
            ...uniqueWords(distractors)
              .slice(0, wordBankSize - gapCount)
              .map((word, index) => ({
                id: `distractor-${index + 1}`,
                text: word,
                correctFor: null,
              })),
          ],
          `${seedBase}:word-bank`,
          (item) => `${item.id}:${item.text}`
        )
      : [];

    return {
      slug: text.slug,
      nivel: text.nivel,
      titulo: text.titulo,
      descripcion: text.descripcion,
      tipo,
      paragraphs: buildParagraphs(text, gaps),
      blanks,
      wordBank,
    };
  });
}

function route(locale, slug) {
  const prefix = LOCALES[locale].localePath;
  if (!slug) return prefix ? `${prefix}/` : "/";
  return prefix ? `${prefix}/${slug}` : `/${slug}`;
}

function rootPath(locale) {
  return route(locale, "recursos/sprachbausteine/");
}

function levelPath(locale, level) {
  return route(locale, `recursos/sprachbausteine/${level.toLowerCase()}/`);
}

function exercisePath(locale, exercise) {
  return route(locale, `recursos/sprachbausteine/${exercise.nivel.toLowerCase()}/${exercise.slug}/`);
}

function absolute(urlPath) {
  return `${BASE_URL}${urlPath}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function buildAlternates(pathBuilder) {
  return [
    `<link rel="alternate" hreflang="es" href="${absolute(pathBuilder("es"))}">`,
    `<link rel="alternate" hreflang="de" href="${absolute(pathBuilder("de"))}">`,
    `<link rel="alternate" hreflang="en" href="${absolute(pathBuilder("en"))}">`,
    `<link rel="alternate" hreflang="x-default" href="${absolute(pathBuilder("es"))}">`,
  ].join("\n  ");
}

function buildNav(locale) {
  const nav = LOCALES[locale].nav;
  const home = route(locale, "");
  const services = route(locale, "servicios/");
  const apps = route(locale, "practicar-aleman/");
  const resources = route(locale, "recursos/");
  const about = route(locale, "sobre-mi/");

  return `
  <nav>
    <div class="nav-inner">
      <a class="nav-logo" href="${home}"><img src="/assets/img/logo-main.webp" alt="Samuel Coach de Alemán" width="260" height="260"></a>
      <button class="hamburger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${nav.openMenu}"><span></span><span></span><span></span></button>
      <ul class="nav-links">
        <li><a href="${home}">${nav.home}</a></li>
        <li><a href="https://blog.samuelcoachdealeman.com">${nav.blog}</a></li>
        <li><a href="${about}">${nav.about}</a></li>
        <li class="nav-drop">
          <a href="${services}">${nav.services}</a>
          <div class="drop-menu">
            <a href="${services}#conversacional">${nav.conversational}</a>
            <a href="${services}#laboral">${nav.work}</a>
            <a href="${services}#examenes">${nav.exams}</a>
            <a href="${services}#empresas">${nav.companies}</a>
            <a href="${services}#escolar">${nav.school}</a>
          </div>
        </li>
        <li><a href="${apps}">${nav.apps}</a></li>
        <li><a href="${resources}">${nav.resources}</a></li>
      </ul>
    </div>
    <div id="mobile-menu" class="mobile-menu" hidden>
      <a href="${home}">${nav.home}</a>
      <a href="https://blog.samuelcoachdealeman.com">${nav.blog}</a>
      <a href="${about}">${nav.about}</a>
      <a href="${services}">${nav.services}</a>
      <a href="${services}#conversacional">${nav.conversational}</a>
      <a href="${services}#laboral">${nav.work}</a>
      <a href="${services}#examenes">${nav.exams}</a>
      <a href="${services}#empresas">${nav.companies}</a>
      <a href="${services}#escolar">${nav.school}</a>
      <a href="${apps}">${nav.apps}</a>
      <a href="${resources}">${nav.resources}</a>
    </div>
  </nav>`;
}

function buildFooter(locale) {
  const nav = LOCALES[locale].nav;
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <a class="footer-logo footer-logo-fun" href="${route(locale, "")}"><img src="/assets/img/logo-fun.webp" alt="Samuel Coach de Alemán" width="180" height="180" loading="lazy"></a>
        <div class="footer-links">
          <a href="https://blog.samuelcoachdealeman.com">${nav.blog}</a>
          <a href="${route(locale, "sobre-mi/")}">${nav.about}</a>
          <a href="${route(locale, "servicios/")}">${nav.services}</a>
          <a href="${route(locale, "metodologia/")}">${nav.methodology}</a>
          <a href="${route(locale, "#faq")}">${nav.faq}</a>
          <a href="${route(locale, "politica-de-privacidad/")}">${nav.privacy}</a>
        </div>
      </div>
      <div class="footer-bottom">Copyright © 2026 Samuel Coach de Alemán · ${nav.rights}</div>
    </div>
  </footer>`;
}

function buildHero(locale, heroTitle, heroLead, showModes) {
  const copy = LOCALES[locale].root;
  return `
    <section class="page-hero lueck-hero">
      <div class="page-hero-inner">
        <div class="resource-badge-row">
          <span class="resource-badge resource-badge-guide">Sprachbaustein</span>
          <span class="resource-badge resource-badge-free">${escapeHtml(copy.status)}</span>
        </div>
        <h1>${escapeHtml(heroTitle)}</h1>
        <p>${escapeHtml(heroLead)}</p>
        ${showModes ? `
        <div class="lueck-mode-grid">
          <article class="lueck-mode-card">
            <span class="lueck-mode-kicker">${escapeHtml(copy.mode1Title)}</span>
            <p>${escapeHtml(copy.mode1Body)}</p>
          </article>
          <article class="lueck-mode-card">
            <span class="lueck-mode-kicker">${escapeHtml(copy.mode2Title)}</span>
            <p>${escapeHtml(copy.mode2Body)}</p>
          </article>
        </div>` : ""}
      </div>
    </section>`;
}

function buildPage(locale, options) {
  const localeConfig = LOCALES[locale];
  const canonical = absolute(options.canonical);
  const appAttrs = Object.entries(options.appData || {})
    .map(([key, value]) => `data-${key}="${escapeAttr(value)}"`)
    .join(" ");

  return `<!DOCTYPE html>
<html lang="${localeConfig.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(options.meta.title)}</title>
  <meta name="description" content="${escapeAttr(options.meta.description)}">
  <link rel="canonical" href="${canonical}">
  ${buildAlternates(options.alternatePath)}
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="theme-color" content="#455a64">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeAttr(options.meta.title)}">
  <meta property="og:description" content="${escapeAttr(options.meta.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${BASE_URL}/assets/img/resources-exam-hero.webp">
  <meta property="og:site_name" content="Samuel Coach de Alemán">
  <meta property="og:locale" content="${localeConfig.ogLocale}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttr(options.meta.title)}">
  <meta name="twitter:description" content="${escapeAttr(options.meta.description)}">
  <meta name="twitter:image" content="${BASE_URL}/assets/img/resources-exam-hero.webp">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/webp" href="/assets/img/favicon.webp">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.webp">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="stylesheet" href="/assets/css/cookie-banner-core.css">
  ${localeConfig.siteLocaleContent ? `<script>
    window.siteLocaleContent = ${JSON.stringify(localeConfig.siteLocaleContent)};
  </script>` : ""}
</head>
<body>
  <div class="notice">${localeConfig.notice}</div>
  ${buildNav(locale)}
  <main>
    ${options.hero}
    <section class="lueck-app-shell">
      <div class="container">
        <div id="lueck-app" ${appAttrs}></div>
      </div>
    </section>
  </main>
  ${buildFooter(locale)}
  <script defer src="/assets/js/google-analytics-core.js"></script>
  <script src="/assets/js/cookie-banner-core.js" defer></script>
  <script src="/assets/js/main.js" defer></script>
  <script src="/assets/js/lueckentext-data.js?v=${JS_VERSION}" defer></script>
  <script src="/assets/js/lueckentext.js?v=${JS_VERSION}" defer></script>
</body>
</html>`;
}

function writeFile(targetPath, content) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, content);
}

function writeDataFile(exercises) {
  const filePath = path.join(ROOT_DIR, "assets/js/lueckentext-data.js");
  const content = `const LUECKENTEXTE = ${JSON.stringify(exercises, null, 2)};\n\nif (typeof module !== "undefined" && module.exports) module.exports = LUECKENTEXTE;\nif (typeof window !== "undefined") window.LUECKENTEXTE = LUECKENTEXTE;\n`;
  fs.writeFileSync(filePath, content);
}

function updateSitemap(exercises) {
  const sitemapPath = path.join(ROOT_DIR, "sitemap.xml");
  const existing = fs.readFileSync(sitemapPath, "utf8");
  const inner = existing
    .replace(/^<\?xml[^>]*>\s*/i, "")
    .replace(/^<urlset[^>]*>\s*/i, "")
    .replace(/\s*<\/urlset>\s*$/i, "");
  const keptBlocks = inner
    .split(/(?=\s*<url>)/)
    .map((block) => block.trim())
    .filter(Boolean)
    .filter((block) => !block.includes("/recursos/sprachbausteine/"));

  const urls = [];
  Object.keys(LOCALES).forEach((locale) => {
    urls.push(rootPath(locale));
    LEVELS.forEach((level) => {
      urls.push(levelPath(locale, level));
    });
    exercises.forEach((exercise) => {
      urls.push(exercisePath(locale, exercise));
    });
  });

  const urlBlocks = urls.map((url) => `  <url>\n    <loc>${absolute(url)}</loc>\n  </url>`).join("\n");
  const preserved = keptBlocks.map((block) => `  ${block.replace(/\n/g, "\n  ")}`).join("\n");
  const finalXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${preserved}${preserved ? "\n" : ""}${urlBlocks}\n</urlset>\n`;
  fs.writeFileSync(sitemapPath, finalXml);
}

function generate() {
  const exercises = buildExercises();
  writeDataFile(exercises);

  Object.keys(LOCALES).forEach((locale) => {
    const rootCopy = LOCALES[locale].root;
    writeFile(
      path.join(ROOT_DIR, locale === "es" ? "recursos/sprachbausteine/index.html" : `${locale}/recursos/sprachbausteine/index.html`),
      buildPage(locale, {
        meta: {
          title: rootCopy.title,
          description: rootCopy.description,
        },
        canonical: rootPath(locale),
        alternatePath: rootPath,
        hero: buildHero(locale, rootCopy.heroTitle, rootCopy.heroLead, false),
        appData: {
          view: "home",
          level: "",
          slug: "",
        },
      })
    );

    LEVELS.forEach((level) => {
      const meta = LOCALES[locale].levelMeta(level);
      writeFile(
        path.join(ROOT_DIR, locale === "es" ? `recursos/sprachbausteine/${level.toLowerCase()}/index.html` : `${locale}/recursos/sprachbausteine/${level.toLowerCase()}/index.html`),
        buildPage(locale, {
          meta,
          canonical: levelPath(locale, level),
          alternatePath: (targetLocale) => levelPath(targetLocale, level),
          hero: buildHero(locale, `Sprachbausteine ${level}`, meta.description, false),
          appData: {
            view: "level",
            level,
            slug: "",
          },
        })
      );
    });

    exercises.forEach((exercise) => {
      const meta = LOCALES[locale].pageMeta(exercise);
      writeFile(
        path.join(ROOT_DIR, locale === "es" ? `recursos/sprachbausteine/${exercise.nivel.toLowerCase()}/${exercise.slug}/index.html` : `${locale}/recursos/sprachbausteine/${exercise.nivel.toLowerCase()}/${exercise.slug}/index.html`),
        buildPage(locale, {
          meta,
          canonical: exercisePath(locale, exercise),
          alternatePath: (targetLocale) => exercisePath(targetLocale, exercise),
          hero: buildHero(locale, exercise.titulo, meta.description, false),
          appData: {
            view: "exercise",
            level: exercise.nivel,
            slug: exercise.slug,
          },
        })
      );
    });
  });

  updateSitemap(exercises);
}

if (require.main === module) {
  generate();
  process.exit(0);
}

module.exports = { generate };
