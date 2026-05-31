import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const baseUrl = "https://www.samuelcoachdealeman.com";
const locales = ["de", "en"];
const localeOg = {
  es: "es_ES",
  de: "de_DE",
  en: "en_GB"
};

const shared = {
  de: {
    lang: "de",
    localeName: "Deutsch",
    notice:
      'Terminplan bis zum 22.06 geschlossen · In der Zwischenzeit kannst du <a href="https://blog.samuelcoachdealeman.com">im Blog kostenlos Deutsch lernen</a>',
    nav: {
      home: "Start",
      blog: "Blog",
      about: "Über mich",
      services: "Angebote",
      methodology: "Methodik",
      faq: "FAQ",
      apps: "Meine Apps",
      resources: "Ressourcen",
      conversational: "Konversationsdeutsch",
      work: "Arbeiten in Deutschland",
      exams: "Prüfungsvorbereitung",
      companies: "Deutsch für Unternehmen",
      school: "Schuldeutsch",
      privacy: "Datenschutz"
    },
    ctas: {
      whatsapp: "WhatsApp",
      call: "Anrufen",
      viewServices: "Angebote ansehen",
      viewResources: "Ressourcen ansehen",
      contact: "Kontakt aufnehmen",
      openResource: "Ressource öffnen",
      learnMore: "Mehr erfahren",
      requestAssessment: "Erstgespräch anfragen",
      openApp: "App öffnen"
    },
    widget: {
      aria: "Schnellzugriff auf Apps",
      open: "Apps zum Deutschlernen öffnen",
      close: "Apps-Menü schließen",
      closeLabel: "Schließen",
      kicker: "Deutsch üben mit",
      title: "Vokabel Lab Apps",
      vokabellab: "Vokabel Lab öffnen",
      derdiedas: "Der Die Das öffnen",
      imkontext: "Im Kontext öffnen"
    },
    cookie: {
      navigation: {
        openMenu: "Menü öffnen",
        closeMenu: "Menü schließen"
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
        saveConfigLabel: "Einstellungen speichern"
      }
    },
    footerRights: "Alle Rechte vorbehalten."
  },
  en: {
    lang: "en",
    localeName: "English",
    notice:
      'Schedule closed until 22.06 · In the meantime, you can <a href="https://blog.samuelcoachdealeman.com">learn German for free on the blog</a>',
    nav: {
      home: "Home",
      blog: "Blog",
      about: "About me",
      services: "Services",
      methodology: "Method",
      faq: "FAQ",
      apps: "My Apps",
      resources: "Resources",
      conversational: "Conversational German",
      work: "Working in Germany",
      exams: "Exam preparation",
      companies: "German for companies",
      school: "School German",
      privacy: "Privacy policy"
    },
    ctas: {
      whatsapp: "WhatsApp",
      call: "Call",
      viewServices: "View services",
      viewResources: "View resources",
      contact: "Get in touch",
      openResource: "Open resource",
      learnMore: "Learn more",
      requestAssessment: "Request assessment",
      openApp: "Open app"
    },
    widget: {
      aria: "Quick access to apps",
      open: "Open apps for practising German",
      close: "Close apps menu",
      closeLabel: "Close",
      kicker: "Practise German with",
      title: "Vokabel Lab Apps",
      vokabellab: "Open Vokabel Lab",
      derdiedas: "Open Der Die Das",
      imkantext: "Open Im Kontext"
    },
    cookie: {
      navigation: {
        openMenu: "Open menu",
        closeMenu: "Close menu"
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
        saveConfigLabel: "Save settings"
      }
    },
    footerRights: "All rights reserved."
  }
};

const pages = [
  {
    key: "home",
    slug: "",
    sourceFile: "index.html",
    changefreq: "weekly",
    priority: "1.0",
    schemaType: "WebPage"
  },
  {
    key: "services",
    slug: "servicios/",
    sourceFile: "servicios/index.html",
    changefreq: "monthly",
    priority: "0.9",
    schemaType: "Service"
  },
  {
    key: "about",
    slug: "sobre-mi/",
    sourceFile: "sobre-mi/index.html",
    changefreq: "monthly",
    priority: "0.8",
    schemaType: "AboutPage"
  },
  {
    key: "methodology",
    slug: "metodologia/",
    sourceFile: "metodologia/index.html",
    changefreq: "monthly",
    priority: "0.8",
    schemaType: "WebPage"
  },
  {
    key: "apps",
    slug: "practicar-aleman/",
    sourceFile: "practicar-aleman/index.html",
    changefreq: "monthly",
    priority: "0.8",
    schemaType: "CollectionPage"
  },
  {
    key: "resources",
    slug: "recursos/",
    sourceFile: "recursos/index.html",
    changefreq: "weekly",
    priority: "0.9",
    schemaType: "CollectionPage"
  },
  {
    key: "lueckentext",
    slug: "recursos/lueckentext/",
    sourceFile: "recursos/lueckentext/index.html",
    changefreq: "monthly",
    priority: "0.7",
    schemaType: "WebPage"
  },
  {
    key: "schreiben",
    slug: "recursos/schreiben/",
    sourceFile: "recursos/schreiben/index.html",
    changefreq: "monthly",
    priority: "0.7",
    schemaType: "WebPage"
  },
  {
    key: "hoerverstehen",
    slug: "recursos/hoerverstehen/",
    sourceFile: "recursos/hoerverstehen/index.html",
    changefreq: "monthly",
    priority: "0.6",
    schemaType: "WebPage"
  },
  {
    key: "privacy",
    slug: "politica-de-privacidad/",
    sourceFile: "politica-de-privacidad/index.html",
    changefreq: "yearly",
    priority: "0.4",
    schemaType: "WebPage"
  }
];

const copy = {
  de: {
    home: {
      title: "Online-Deutschunterricht in Fuengirola | Samuel Coach de Alemán",
      description:
        "Online-Deutschunterricht aus Fuengirola: Konversation, Schule, Integration und berufliche Vorbereitung. Klarer Plan, individuelle Begleitung und echter Fortschritt.",
      ogTitle: "Online-Deutschunterricht in Fuengirola | Samuel Coach de Alemán",
      ogDescription:
        "Persönlicher Online-Deutschunterricht aus Fuengirola für Alltag, Schule, Prüfungen und berufliche Ziele.",
      heroTitle: "Online-Deutschunterricht mit Klarheit, Struktur und echtem Fortschritt",
      heroLead:
        "Ich unterstütze Erwachsene, Familien und Fachkräfte dabei, Deutsch mit einem klaren Plan zu lernen: für Alltag, Prüfungen, Beruf oder den Schritt nach Deutschland.",
      kicker: "Willkommen bei Samuel Coach de Alemán",
      cardsTitle: "Womit ich dich unterstütze",
      cards: [
        ["Konversation", "Mehr Flüssigkeit, mehr Sicherheit und weniger Blockaden beim Sprechen."],
        ["Goethe und TELC", "Gezielte Prüfungsvorbereitung mit Strategie, Format und realer Praxis."],
        ["Arbeiten in Deutschland", "Deutsch für Interviews, Alltag und den beruflichen Einstieg."],
        ["Schuldeutsch", "Klare Unterstützung für Kinder und Jugendliche mit Deutsch im Schulalltag."]
      ],
      methodTitle: "Deutsch lernen ohne planloses Herumprobieren",
      methodText:
        "Mein Unterricht ist darauf ausgelegt, dass du verstehst, woran du arbeitest, warum du daran arbeitest und wie du wirklich vorankommst. Kein Füllmaterial, sondern ein klarer Weg.",
      faqTitle: "Häufige Fragen",
      faqs: [
        ["Ist der Unterricht nur für Erwachsene?", "Nein. Ich arbeite auch mit Jugendlichen und Familien, wenn das Ziel und die Betreuung dazu passen."],
        ["Bereitest du auf Goethe und TELC vor?", "Ja. Ich arbeite gezielt an Format, Strategie, Schwächen und den einzelnen Prüfungsteilen."],
        ["Findet alles online statt?", "Der Unterricht kann online stattfinden und ist so aufgebaut, dass du auch außerhalb der Stunde klar weiterarbeiten kannst."]
      ],
      ctaTitle: "Wenn du Deutsch mit Richtung lernen willst, lass uns sprechen",
      ctaText: "Schreib mir kurz, wo du stehst und was du erreichen willst. Ich sage dir ehrlich, wie ich dir helfen kann."
    },
    services: {
      title: "Online-Deutschunterricht für Goethe, TELC, Beruf und Konversation",
      description:
        "Individuelle Online-Deutschstunden für flüssigeres Sprechen, Goethe- und TELC-Prüfungen, den Beruf in Deutschland oder Schülerunterstützung.",
      ogTitle: "Online-Deutschunterricht für Goethe, TELC, Beruf und Konversation",
      ogDescription:
        "Deutschunterricht für Konversation, offizielle Prüfungen, den Arbeitsmarkt in Deutschland, Unternehmen und Schule.",
      heroTitle: "Deutschangebote für echte Ziele, nicht für Schubladen",
      heroText:
        "Ich arbeite eins zu eins mit dir, damit Deutsch zu deinem konkreten Ziel passt: freier sprechen, Goethe oder TELC bestehen, beruflich weiterkommen oder Schuldeutsch sinnvoll aufbauen.",
      introTitle: "Wähle das Format nach deinem Ziel",
      introText:
        "Nicht jeder Deutschunterricht bringt dasselbe. Hier findest du einen klaren Überblick, damit du schnell erkennst, welches Angebot zu dir passt.",
      cards: [
        ["conversacional", "Konversationsdeutsch", "Ideal, wenn du bereits Grundlagen hast und natürlicher sprechen möchtest: mehr Reaktionsfähigkeit, mehr Sicherheit und weniger Blockaden."],
        ["examenes", "Goethe- und TELC-Vorbereitung", "Hier lernst du nicht nur Deutsch, sondern auch, wie du in einer Prüfung gut performst: Struktur, Zeitmanagement und Strategien inklusive."],
        ["laboral", "Deutsch für die Arbeit in Deutschland", "Praktische Vorbereitung für Interviews, Arbeitsalltag und echte berufliche Chancen in Deutschland, Österreich oder der Schweiz."],
        ["empresas", "Deutsch für Unternehmen", "Sprachtraining plus berufliches Coaching für Teams, die mit deutschen Partnern, Kunden oder Strukturen arbeiten."],
        ["escolar", "Schuldeutsch", "Klare, visuelle und geduldige Unterstützung für Kinder und Jugendliche, die Deutsch in der Schule brauchen."]
      ],
      ctaTitle: "Wenn du nicht weißt, womit du anfangen sollst, finden wir es gemeinsam heraus",
      ctaText: "Erzähl mir dein Ziel und ich sage dir, welches Format am meisten Sinn macht."
    },
    about: {
      title: "Über mich | Samuel Coach de Alemán",
      description:
        "Lerne Samuel kennen: echte Erfahrung in Deutschland, Unterrichtspraxis und eine klare, menschliche Art, Deutsch online zu vermitteln.",
      ogTitle: "Über mich | Samuel Coach de Alemán",
      ogDescription:
        "Meine Geschichte, meine Erfahrung in Deutschland und meine Art, Deutsch mit Nähe und Klarheit zu unterrichten.",
      heroTitle: "Über mich",
      heroText:
        "Ich bin Samuel, Deutschlehrer und Coach. Ich unterrichte aus echter Erfahrung: leben, arbeiten und wachsen in Deutschland und danach anderen Menschen den Weg erleichtern.",
      storyTitle: "Meine Geschichte in Kurzform",
      story: [
        "Nach meinem Studium zog ich 2014 nach München. Ich musste Deutsch nicht aus einem Lehrbuch kennenlernen, sondern im echten Leben.",
        "Ich arbeitete zuerst praktisch im Alltag und später in der Bildungsarbeit, wo ich Menschen beim Deutschlernen und beim Einstieg in Deutschland begleitete.",
        "Mit der Zeit erreichte ich erst B2 und später C2+ beim Goethe-Institut. Gleichzeitig wuchs mein Blick dafür, was Lernende wirklich brauchen: Klarheit, Struktur und ehrliches Feedback.",
        "Heute unterrichte ich online und präsent vor allem mit einem Ziel: dass Deutsch für dich nutzbar wird, nicht nur theoretisch korrekt."
      ],
      valuesTitle: "Was mir im Unterricht wichtig ist",
      values: [
        ["Verständnis vor Show", "Ich will, dass du wirklich verstehst, was du tust und warum es funktioniert."],
        ["Praxis vor Leerlauf", "Wir arbeiten an Inhalten, die dir für Alltag, Beruf oder Prüfung wirklich helfen."],
        ["Nähe mit Anspruch", "Ich erkläre klar und geduldig, aber ich lasse dich nicht im Kreis lernen."]
      ],
      ctaTitle: "Wenn dich diese Art zu lernen anspricht, lass uns reden",
      ctaText: "Erzähl mir, wo du stehst, und wir schauen, welcher Weg für dein Deutsch sinnvoll ist."
    },
    methodology: {
      title: "Methodik für erfolgreiches Deutschlernen online",
      description:
        "Entdecke die Methodik von Samuel Coach de Alemán: klar, strukturiert und auf echte Fortschritte in Konversation, Prüfungen und Beruf ausgerichtet.",
      ogTitle: "Methodik für erfolgreiches Deutschlernen online",
      ogDescription: "Eine klare, wirksame und menschliche Methode, um online Deutsch mit Ziel zu lernen.",
      heroTitle: "Methodik",
      heroText:
        "Deutschlernen sollte kein Ratespiel sein. Meine Arbeitsweise ist darauf aufgebaut, dass du genau weißt, was du tust, warum du es tust und wie du weiterkommst.",
      steps: [
        ["1. Standort bestimmen", "Zuerst sehen wir uns an, wo du wirklich stehst, was dich blockiert und welches Ziel du verfolgst."],
        ["2. Passenden Plan bauen", "Je nach Ziel braucht man Konversation, Grammatik, Schreiben, Hörverstehen oder gezielte Prüfungsvorbereitung."],
        ["3. Mit Absicht üben", "Ich gebe keine Aufgaben, nur um Zeit zu füllen. Alles hat einen klaren Zweck."],
        ["4. Korrigieren und anpassen", "Wir justieren den Prozess laufend, damit du nicht stecken bleibst und deine Fehler schneller hinter dir lässt."]
      ],
      resultTitle: "Was gute Arbeit meist verändert",
      resultItems: [
        "du lernst nicht mehr ohne Richtung",
        "du erkennst, woran du als Nächstes arbeiten solltest",
        "du wiederholst typische Fehler seltener",
        "du wirst sicherer beim Sprechen und Anwenden"
      ],
      ctaTitle: "Wenn du mit Struktur lernen willst, bin ich gern an deiner Seite",
      ctaText: "Schreib mir kurz dein Ziel und wir schauen, wie wir den sinnvollsten Weg aufbauen."
    },
    apps: {
      title: "Apps zum Deutschlernen: Wortschatz, Artikel und Texte",
      description:
        "Entdecke drei Apps zum Deutschlernen: Wortschatztraining, Artikeltraining mit der-die-das und Deutsch im Kontext mit echten Texten.",
      ogTitle: "Apps zum Deutschlernen: Wortschatz, Artikel und Texte",
      ogDescription:
        "Drei Apps zum Deutschlernen: Wortschatz, Artikel und Deutsch im Kontext mit echten Texten.",
      heroTitle: "Deutsch online mit echten Tools ueben",
      heroText:
        "Hier findest du eine Auswahl an Apps, mit denen du zwischen den Stunden sinnvoll weiterarbeiten kannst: Wortschatz, Artikel und Deutsch im Kontext.",
      introTitle: "Drei Apps, drei klare Schwerpunkte",
      introText:
        "Jede App trainiert einen anderen Teil des Deutschen. Zusammen geben sie dir mehr Kontinuität, Abwechslung und echte Wiederholung.",
      cards: [
        ["Vokabel Lab", "Aktives Wortschatztraining mit Themen, Karten, Schreiben und Testformaten.", "Nützlich, wenn du deinen Wortschatz erweitern und regelmäßig mit der Sprache in Kontakt bleiben willst.", "https://vokabellab.com", "/assets/img/apps/vokabellab-logo.webp"],
        ["Der Die Das", "Gezielte Übung für Artikel und grammatische Sicherheit.", "Ideal, wenn du mit Genus und Artikeln kämpfst und genau dort präziser werden willst.", "https://derdiedas.vokabellab.com", "/assets/img/apps/derdiedas-logo.png"],
        ["Im Kontext", "Deutsch in echten Sätzen und Texten statt nur in isolierten Listen.", "Hilft dir zu verstehen, wie Wörter wirklich verwendet werden und wie Sprache im Zusammenhang funktioniert.", "https://imkontext.vokabellab.com", "/assets/img/apps/imkontext-logo.png"]
      ],
      ctaTitle: "Selbststaendig ueben und trotzdem mit Richtung vorankommen",
      ctaText: "Nutze die Apps für deinen Alltag und kombiniere sie mit Unterricht, wenn du mehr Struktur und persönliches Feedback willst."
    },
    resources: {
      title: "Ressourcen für TELC und Goethe",
      description:
        "Ressourcen für die Vorbereitung auf TELC und Goethe: Leseverstehen, Lückentext, Schreiben mit Feedback und Hörverstehen.",
      ogTitle: "Ressourcen für TELC und Goethe",
      ogDescription:
        "Eine Bibliothek mit klaren Ressourcen für die Vorbereitung auf Deutschprüfungen.",
      heroTitle: "Ressourcen für TELC und Goethe",
      heroText:
        "Bereite dich strukturiert auf deine Deutschprüfungen vor. Hier findest du Ressourcen, die einzelne Fertigkeiten gezielt trainieren.",
      introTitle: "Einfacher lernen mit klaren Bausteinen",
      introText:
        "Nicht jede Person braucht denselben Einstieg. Deshalb gibt es hier verschiedene Ressourcen für Lesen, Lücken, Schreiben und Hören.",
      cards: [
        ["1", "Leseverstehen", "Texte auf Deutsch mit interaktiven Aufgaben, damit du Lesekompetenz nach Niveau trainieren kannst.", ["A1, A2, B1 und B2", "prüfungsnahe Leseübungen", "geeignet für TELC und Goethe"], "/leseverstehen/", "Kostenlos", "Verfügbar"],
        ["2", "Lückentext", "Lückentext-Übungen für Wortschatz, Konnektoren und globales Verständnis.", ["praxisnaher Kontext", "hilft bei präzisen Fehlern", "sinnvoll für Prüfung und Alltag"], "/de/recursos/lueckentext/", "In Vorbereitung", ""],
        ["3", "Schreiben", "Reale Schreibaufgaben mit schnellem Feedback. Die Erfahrung wird von KI begleitet, die von Samuel trainiert wurde.", ["reale Aufgabenformate", "sofortiges Feedback", "Premium-Ressource"], "/de/recursos/schreiben/", "Nur Premium", ""],
        ["4", "Hörverstehen", "Eine künftige Ressource für gezieltes Hörtraining und besseres Verstehen im echten Sprachtempo.", ["Training nach Niveau", "nützlich für Alltag und Prüfung", "bald verfügbar"], "/de/recursos/hoerverstehen/", "Coming soon", ""]
      ],
      ctaTitle: "Wenn du eine geführte Vorbereitung suchst, begleite ich dich gern",
      ctaText: "Wenn du nicht weißt, welche Ressource für dich jetzt am meisten Sinn macht, helfe ich dir bei der Auswahl."
    },
    lueckentext: {
      title: "Lückentext | Ressource für Deutschprüfungen",
      description:
        "Lückentext als Ressource für Deutschprüfungen: Wortschatz, Konnektoren und Strukturen im Kontext trainieren.",
      ogTitle: "Lückentext | Ressource für Deutschprüfungen",
      ogDescription:
        "Trainiere Wortschatz, Konnektoren und Strukturen mit gezielten Lückentext-Aufgaben.",
      heroTitle: "Lückentext",
      heroText:
        "Diese Ressource ist für Lernende gedacht, die bereits lesen können, aber beim Ergänzen noch unsicher sind. Der Übungskern bleibt auf Deutsch.",
      bullets: [
        "Wortschatz und Konnektoren im Kontext ueben",
        "globale und lokale Textlogik besser verstehen",
        "Fehler in Struktur und Praezision schneller erkennen"
      ],
      noteTitle: "Status",
      noteText: "Die Ressource ist in Vorbereitung. Die spaetere Uebung bleibt auf Deutsch; nur die redaktionelle Einfuehrung wird lokalisiert."
    },
    schreiben: {
      title: "Schreiben | Premium-Ressource für TELC und Goethe",
      description:
        "Schreiben als Premium-Ressource: reale Schreibaufgaben mit schnellem Feedback für TELC, Goethe und schriftliche Ausdrucksfähigkeit.",
      ogTitle: "Schreiben | Premium-Ressource für TELC und Goethe",
      ogDescription:
        "Reale Schreibaufgaben mit schnellem Feedback und klaren Korrekturhinweisen.",
      heroTitle: "Schreiben",
      heroText:
        "Schreiben richtet sich an Lernende, die nicht nur Aufgaben sammeln wollen, sondern klares Feedback und echte Orientierung für ihren schriftlichen Ausdruck brauchen.",
      bullets: [
        "reale Aufgaben mit pruefungsnahen Formaten",
        "schnelles Feedback mit konkreten Hinweisen",
        "geeignet für TELC, Goethe und alltagstaugliches Schreiben"
      ],
      noteTitle: "Premium",
      noteText: "Diese Ressource ist als Premium-Bereich gedacht. Die Uebungsinhalte selbst bleiben auf Deutsch."
    },
    hoerverstehen: {
      title: "Hörverstehen | Kommende Ressource",
      description:
        "Hörverstehen als kommende Ressource für Deutschprüfungen und alltagsnahes Verstehen in echtem Sprachtempo.",
      ogTitle: "Hörverstehen | Kommende Ressource",
      ogDescription:
        "Eine kommende Ressource für Hörtraining, Informationsverarbeitung und mehr Sicherheit im Deutschen.",
      heroTitle: "Hörverstehen",
      heroText:
        "Diese Ressource wird spaeter das gezielte Hoertraining abdecken: Informationen herausholen, Tempo aushalten und Struktur besser erkennen.",
      bullets: [
        "Training nach Niveau",
        "alltagsnahes und prüfungsrelevantes Hörverstehen",
        "klare Progression statt planloser Hörübungen"
      ],
      noteTitle: "Coming soon",
      noteText: "Noch nicht veroeffentlicht. Wenn sie live geht, bleibt das Uebungsmaterial auf Deutsch."
    },
    privacy: {
      title: "Datenschutzerklärung | Samuel Coach de Alemán",
      description:
        "Datenschutzerklärung von Samuel Coach de Alemán: Informationen zu Datenverarbeitung, Kontakt, Speicherdauer und Nutzerrechten.",
      ogTitle: "Datenschutzerklärung | Samuel Coach de Alemán",
      ogDescription: "Informationen zu Datenverarbeitung, Nutzerrechten und Datenschutz auf dieser Website.",
      heroTitle: "Datenschutzerklärung",
      heroText:
        "Grundlegende Informationen zur Verarbeitung personenbezogener Daten auf dieser Website. Diese Übersetzung dient der Orientierung und sollte rechtlich geprüft werden.",
      sections: [
        ["Verantwortliche Stelle", ["Samuel Coach de Alemán", "Kontakt: samuelcoachdealeman@gmail.com", "Standort: Fuengirola, Málaga, Spanien"]],
        ["Zweck der Verarbeitung", ["Personenbezogene Daten können genutzt werden, um Anfragen zu beantworten, Kontakte zu verwalten und gewünschte Leistungen bereitzustellen."]],
        ["Rechtsgrundlage", ["Grundlage der Verarbeitung sind Einwilligung, vorvertragliche oder vertragliche Beziehung und, sofern zutreffend, berechtigtes Interesse."]],
        ["Speicherdauer", ["Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck und für gesetzliche Pflichten erforderlich ist."]],
        ["Empfänger", ["Daten werden nur weitergegeben, wenn es gesetzlich notwendig ist oder für technische Dienstleister und Kommunikationsplattformen benötigt wird."]],
        ["Rechte der Nutzer", ["Auskunft", "Berichtigung oder Löschung", "Einschränkung der Verarbeitung", "Widerspruch gegen die Verarbeitung", "Datenübertragbarkeit, sofern anwendbar"]],
        ["Cookies und Drittanbieter", ["Die Website kann technische und analytische Cookies sowie Dienste Dritter nutzen. Diese Information sollte mit der Cookie-Richtlinie zusammen gelesen werden."]]
      ]
    }
  },
  en: {
    home: {
      title: "Online German Lessons in Fuengirola | Samuel Coach de Aleman",
      description:
        "Online German lessons from Fuengirola: conversation, school support, integration and professional preparation. Clear plan, personal guidance and real progress.",
      ogTitle: "Online German Lessons in Fuengirola | Samuel Coach de Aleman",
      ogDescription:
        "Personal online German lessons from Fuengirola for daily life, school, exams and professional goals.",
      heroTitle: "Online German lessons with clarity, structure and real progress",
      heroLead:
        "I help adults, families and professionals learn German with a clear plan: for everyday life, exams, work or a move to Germany.",
      kicker: "Welcome to Samuel Coach de Aleman",
      cardsTitle: "What I can help you with",
      cards: [
        ["Conversation", "More fluency, more confidence and fewer blocks when speaking."],
        ["Goethe and TELC", "Focused exam preparation with strategy, format and realistic practice."],
        ["Working in Germany", "German for interviews, daily life and professional transition."],
        ["School German", "Clear support for children and teenagers who need German at school."]
      ],
      methodTitle: "Learn German without guessing your way through it",
      methodText:
        "My teaching is built so that you understand what you are working on, why you are working on it and how you are actually improving. No filler, just direction.",
      faqTitle: "Frequently asked questions",
      faqs: [
        ["Are your lessons only for adults?", "No. I also work with teenagers and families when the goal and the format are a good fit."],
        ["Do you prepare students for Goethe and TELC?", "Yes. I work on format, strategy, weak points and the specific skills each exam requires."],
        ["Is everything online?", "Lessons can be online and are designed so you can keep working with clarity between sessions."]
      ],
      ctaTitle: "If you want to learn German with direction, let's talk",
      ctaText: "Send me a short message about your current level and your goal. I will tell you honestly how I can help."
    },
    services: {
      title: "Online German Lessons for Goethe, TELC, Work and Conversation",
      description:
        "Personalised online German lessons for fluency, Goethe and TELC exams, working in Germany or school support.",
      ogTitle: "Online German Lessons for Goethe, TELC, Work and Conversation",
      ogDescription:
        "German services for conversation, official exams, working in Germany, companies and school support.",
      heroTitle: "German services built around real goals",
      heroText:
        "I work one to one with you so that German fits a real objective: speaking more freely, passing Goethe or TELC, improving your job prospects or strengthening school German.",
      introTitle: "Choose the format that matches your goal",
      introText:
        "Not every kind of German tuition gives you the same result. This overview helps you see quickly which path makes the most sense for you.",
      cards: [
        ["conversacional", "Conversational German", "Ideal if you already have a base and want to sound more natural: more fluency, quicker reactions and fewer speaking blocks."],
        ["examenes", "Goethe and TELC preparation", "Here you do not just learn German. You learn how to perform well in an exam: timing, strategy and task awareness included."],
        ["laboral", "German for working in Germany", "Practical preparation for interviews, workplace communication and real professional opportunities in Germany, Austria or Switzerland."],
        ["empresas", "German for companies", "Language training plus professional coaching for teams working with German-speaking clients, partners or systems."],
        ["escolar", "School German", "Clear, visual and supportive guidance for children and teenagers who need German in a school environment."]
      ],
      ctaTitle: "If you are not sure where to begin, we can work it out together",
      ctaText: "Tell me your goal and I will point you towards the option that gives you the most value."
    },
    about: {
      title: "About Me | Samuel Coach de Aleman",
      description:
        "Get to know Samuel: real experience in Germany, teaching practice and a clear, human way of teaching German online.",
      ogTitle: "About Me | Samuel Coach de Aleman",
      ogDescription:
        "My story, my experience in Germany and the way I teach German with clarity and warmth.",
      heroTitle: "About me",
      heroText:
        "I am Samuel, a German teacher and coach. I teach from lived experience: living, working and growing in Germany, then helping others make that path easier.",
      storyTitle: "My story in short",
      story: [
        "After graduating, I moved to Munich in 2014. I did not learn German only from textbooks; I had to learn it inside real life.",
        "I first worked in practical roles and later in education, supporting people with German and with their transition into life and work in Germany.",
        "Over time I reached B2 and later C2+ through the Goethe-Institut. At the same time I learned what students truly need: clarity, structure and honest feedback.",
        "Today I teach online and in person with one main aim: to make German genuinely useful for you, not just theoretically correct."
      ],
      valuesTitle: "What matters to me when I teach",
      values: [
        ["Understanding before performance", "I want you to understand what you are doing and why it works."],
        ["Practice before filler", "We work on material that really helps you in daily life, at work or in exams."],
        ["Warmth with standards", "I explain clearly and patiently, but I do not let you keep learning in circles."]
      ],
      ctaTitle: "If this way of learning speaks to you, let's talk",
      ctaText: "Tell me where you are now and we will see which path makes sense for your German."
    },
    methodology: {
      title: "Method for Learning German Online with Structure",
      description:
        "Discover Samuel Coach de Aleman's method for learning German online with structure, clarity and real progress in conversation, exams and professional goals.",
      ogTitle: "Method for Learning German Online with Structure",
      ogDescription: "A clear, effective and human way to learn German online with purpose.",
      heroTitle: "Method",
      heroText:
        "Learning German should not feel like trial and error. My way of working is designed so you always know what you are doing, why it matters and how to move forward.",
      steps: [
        ["1. Identify your real starting point", "We first look at your level, your sticking points and your actual goal."],
        ["2. Build the right plan", "Depending on your goal, the focus may be conversation, grammar, writing, listening or exam work."],
        ["3. Practise with intention", "I do not give exercises just to fill time. Everything has a clear purpose."],
        ["4. Correct and adjust", "We fine-tune the process as we go so that you do not stay stuck in the same mistakes."]
      ],
      resultTitle: "What usually changes when the process works well",
      resultItems: [
        "you stop studying without knowing whether you are improving",
        "you understand what to work on next and in what order",
        "you repeat the same mistakes less often",
        "you become more confident when speaking and using the language"
      ],
      ctaTitle: "If you want to learn with structure, I would be glad to help",
      ctaText: "Send me your goal and we will see how to build the most useful path."
    },
    apps: {
      title: "Apps to Learn German: Vocabulary, Articles and Context",
      description:
        "Discover three apps to learn German: vocabulary practice, article training with der-die-das and German in context through real texts.",
      ogTitle: "Apps to Learn German: Vocabulary, Articles and Context",
      ogDescription:
        "Three apps to learn German: vocabulary, articles and German in context with real texts.",
      heroTitle: "Practise German online with real tools",
      heroText:
        "Here you will find a small set of apps that let you keep practising between lessons: vocabulary, articles and German in context.",
      introTitle: "Three apps, three clear training goals",
      introText:
        "Each app works on a different part of the language. Together they give you more consistency, variety and meaningful repetition.",
      cards: [
        ["Vokabel Lab", "Active vocabulary practice with themes, cards, writing and test formats.", "Useful if you want to expand practical vocabulary and stay in touch with German on a regular basis.", "https://vokabellab.com", "/assets/img/apps/vokabellab-logo.webp"],
        ["Der Die Das", "Focused practice for articles and grammatical accuracy.", "Ideal if gender and articles are one of your biggest weak points and you want to improve exactly there.", "https://derdiedas.vokabellab.com", "/assets/img/apps/derdiedas-logo.png"],
        ["Im Kontext", "German inside real sentences and texts rather than isolated word lists.", "Helps you understand how vocabulary is actually used and how meaning works in context.", "https://imkontext.vokabellab.com", "/assets/img/apps/imkontext-logo.png"]
      ],
      ctaTitle: "Practise on your own and still move forward with direction",
      ctaText: "Use the apps in your daily routine and combine them with lessons if you want more structure and personal feedback."
    },
    resources: {
      title: "Resources for TELC and Goethe",
      description:
        "Resources for TELC and Goethe preparation: reading comprehension, gap fill practice, writing with feedback and listening.",
      ogTitle: "Resources for TELC and Goethe",
      ogDescription:
        "A clear library of resources for preparing German exams skill by skill.",
      heroTitle: "Resources for TELC and Goethe",
      heroText:
        "Prepare for your German exams with more structure. Here you will find resources designed to train specific skills in a clear progression.",
      introTitle: "A simpler route for smarter study",
      introText:
        "Not everyone needs the same starting point. That is why this section brings together different resources for reading, gap filling, writing and listening.",
      cards: [
        ["1", "Leseverstehen", "German texts with interactive tasks to train reading comprehension by level.", ["A1, A2, B1 and B2", "exam-style reading practice", "suited to TELC and Goethe"], "/leseverstehen/", "Free", "Available"],
        ["2", "Lueckentext", "Gap-fill practice for vocabulary, connectors and overall understanding.", ["context-based practice", "helps spot precision issues", "useful for exams and real use"], "/en/recursos/lueckentext/", "In preparation", ""],
        ["3", "Writing", "Real writing tasks with fast feedback. The experience is guided by AI trained by Samuel.", ["real task formats", "immediate feedback", "premium resource"], "/en/recursos/schreiben/", "Premium only", ""],
        ["4", "Listening", "A future resource focused on listening skills, information tracking and real German pace.", ["level-based training", "useful for everyday use and exams", "coming soon"], "/en/recursos/hoerverstehen/", "Coming soon", ""]
      ],
      ctaTitle: "If you want guided preparation, I can help",
      ctaText: "If you are unsure which resource fits your level and goal, I can point you in the right direction."
    },
    lueckentext: {
      title: "Lueckentext | Resource for German Exam Preparation",
      description:
        "Gap-fill practice resource for German exams: train vocabulary, connectors and structures in context.",
      ogTitle: "Lueckentext | Resource for German Exam Preparation",
      ogDescription:
        "Train vocabulary, connectors and structure through focused gap-fill tasks.",
      heroTitle: "Lueckentext",
      heroText:
        "This resource is designed for learners who can already read but still feel unsure when completing a text. The exercise core remains in German.",
      bullets: [
        "practise vocabulary and connectors in context",
        "understand local and global text logic more clearly",
        "spot structure and precision errors faster"
      ],
      noteTitle: "Status",
      noteText: "This resource is in preparation. The exercise content itself will remain in German; only the editorial layer is translated."
    },
    schreiben: {
      title: "Writing | Premium Resource for TELC and Goethe",
      description:
        "Premium writing resource with real tasks and fast feedback for TELC, Goethe and written German.",
      ogTitle: "Writing | Premium Resource for TELC and Goethe",
      ogDescription:
        "Real writing tasks with quick feedback and clear correction guidance.",
      heroTitle: "Writing",
      heroText:
        "Writing is for learners who want more than a pile of prompts. It is built to provide orientation, correction and useful feedback for written production.",
      bullets: [
        "real tasks with exam-style formats",
        "fast feedback with concrete improvement points",
        "useful for TELC, Goethe and practical written German"
      ],
      noteTitle: "Premium",
      noteText: "This is planned as a premium area. The exercise content itself stays in German."
    },
    hoerverstehen: {
      title: "Listening | Upcoming Resource",
      description:
        "Upcoming listening resource for German exams and real-world comprehension at natural speed.",
      ogTitle: "Listening | Upcoming Resource",
      ogDescription:
        "A future resource for listening training, information processing and stronger comprehension in German.",
      heroTitle: "Listening",
      heroText:
        "This resource will later focus on listening with purpose: extracting key information, handling speed and understanding real spoken German more confidently.",
      bullets: [
        "level-based listening training",
        "useful for daily life and exam preparation",
        "clear progression instead of random audio practice"
      ],
      noteTitle: "Coming soon",
      noteText: "Not published yet. When it goes live, the exercise material itself will remain in German."
    },
    privacy: {
      title: "Privacy Policy | Samuel Coach de Aleman",
      description:
        "Privacy policy of Samuel Coach de Aleman: information about data processing, contact, storage and user rights.",
      ogTitle: "Privacy Policy | Samuel Coach de Aleman",
      ogDescription: "Information about data processing, user rights and privacy on this website.",
      heroTitle: "Privacy policy",
      heroText:
        "Basic information about how personal data may be processed on this website. This translated version is provided for clarity and should be legally reviewed before final publication.",
      sections: [
        ["Data controller", ["Samuel Coach de Aleman", "Contact email: samuelcoachdealeman@gmail.com", "Location: Fuengirola, Malaga, Spain"]],
        ["Purpose of processing", ["Personal data may be used to answer enquiries, manage communication and provide the services requested by the user."]],
        ["Legal basis", ["The legal basis may be the user's consent, a pre-contractual or contractual relationship, and legitimate interest where applicable."]],
        ["Data retention", ["Data will be stored only for as long as needed for the relevant purpose and to comply with legal obligations."]],
        ["Recipients", ["Data will not be shared with third parties unless required by law or necessary through technical providers or communication platforms."]],
        ["User rights", ["access", "rectification or erasure", "restriction of processing", "objection to processing", "data portability where applicable"]],
        ["Cookies and third-party tools", ["This website may use technical and analytics cookies or third-party tools. This notice should be read together with the cookie policy."]]
      ]
    }
  }
};

function localePrefix(locale) {
  return locale === "es" ? "" : `/${locale}`;
}

function localizedPath(locale, slug) {
  const cleanSlug = slug || "";
  if (!cleanSlug) return locale === "es" ? "/" : `${localePrefix(locale)}/`;
  return `${localePrefix(locale)}/${cleanSlug}`;
}

function absoluteUrl(locale, slug) {
  const urlPath = localizedPath(locale, slug);
  return `${baseUrl}${urlPath.startsWith("/") ? urlPath : `/${urlPath}`}`;
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderAlternates(slug) {
  const entries = [
    { hreflang: "es", href: absoluteUrl("es", slug) },
    { hreflang: "de", href: absoluteUrl("de", slug) },
    { hreflang: "en", href: absoluteUrl("en", slug) },
    { hreflang: "x-default", href: absoluteUrl("es", slug) }
  ];

  return entries
    .map((entry) => `  <link rel="alternate" hreflang="${entry.hreflang}" href="${entry.href}">`)
    .join("\n");
}

function renderLocaleScript(locale) {
  return `  <script>\n    window.siteLocaleContent = ${JSON.stringify(shared[locale].cookie)};\n  </script>`;
}

function renderNav(locale) {
  const common = shared[locale];
  const prefix = localePrefix(locale);
  const servicesHref = `${prefix || ""}/servicios/`;
  const appsHref = `${prefix || ""}/practicar-aleman/`;
  const resourcesHref = `${prefix || ""}/recursos/`;
  const aboutHref = `${prefix || ""}/sobre-mi/`;
  const homeHref = `${prefix || ""}/`;

  return `  <div class="notice">${common.notice}</div>
  <nav>
    <div class="nav-inner">
      <a class="nav-logo" href="${homeHref}"><img src="/assets/img/logo-main.webp" alt="Samuel Coach de Alemán" width="260" height="260"></a>
      <button class="hamburger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${common.cookie.navigation.openMenu}"><span></span><span></span><span></span></button>
      <ul class="nav-links">
        <li><a href="${homeHref}">${common.nav.home}</a></li>
        <li><a href="https://blog.samuelcoachdealeman.com">${common.nav.blog}</a></li>
        <li><a href="${aboutHref}">${common.nav.about}</a></li>
        <li class="nav-drop">
          <a href="${servicesHref}">${common.nav.services}</a>
          <div class="drop-menu">
            <a href="${servicesHref}#conversacional">${common.nav.conversational}</a>
            <a href="${servicesHref}#laboral">${common.nav.work}</a>
            <a href="${servicesHref}#examenes">${common.nav.exams}</a>
            <a href="${servicesHref}#empresas">${common.nav.companies}</a>
            <a href="${servicesHref}#escolar">${common.nav.school}</a>
          </div>
        </li>
        <li class="nav-drop">
          <a href="${appsHref}">${common.nav.apps}</a>
          <div class="drop-menu">
            <a href="https://vokabellab.com" target="_blank" rel="noopener noreferrer">Vokabel Lab</a>
            <a href="https://derdiedas.vokabellab.com" target="_blank" rel="noopener noreferrer">Der Die Das</a>
            <a href="https://imkontext.vokabellab.com" target="_blank" rel="noopener noreferrer">Im Kontext</a>
          </div>
        </li>
        <li><a href="${resourcesHref}">${common.nav.resources}</a></li>
      </ul>
    </div>
    <div id="mobile-menu" class="mobile-menu" hidden>
      <a href="${homeHref}">${common.nav.home}</a>
      <a href="https://blog.samuelcoachdealeman.com">${common.nav.blog}</a>
      <a href="${aboutHref}">${common.nav.about}</a>
      <a href="${servicesHref}">${common.nav.services}</a>
      <a href="${servicesHref}#conversacional">${common.nav.conversational}</a>
      <a href="${servicesHref}#laboral">${common.nav.work}</a>
      <a href="${servicesHref}#examenes">${common.nav.exams}</a>
      <a href="${servicesHref}#empresas">${common.nav.companies}</a>
      <a href="${servicesHref}#escolar">${common.nav.school}</a>
      <a href="${appsHref}">${common.nav.apps}</a>
      <a href="https://vokabellab.com" target="_blank" rel="noopener noreferrer">Vokabel Lab</a>
      <a href="https://derdiedas.vokabellab.com" target="_blank" rel="noopener noreferrer">Der Die Das</a>
      <a href="https://imkontext.vokabellab.com" target="_blank" rel="noopener noreferrer">Im Kontext</a>
      <a href="${resourcesHref}">${common.nav.resources}</a>
    </div>
  </nav>`;
}

function renderFooter(locale) {
  const common = shared[locale];
  const prefix = localePrefix(locale);
  const faqHref = `${prefix || ""}/#faq`;
  return `  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <a class="footer-logo footer-logo-fun" href="${prefix || "/"}"><img src="/assets/img/logo-fun.webp" alt="Samuel Coach de Alemán" width="180" height="180" loading="lazy"></a>
        <div class="footer-links">
          <a href="https://blog.samuelcoachdealeman.com">${common.nav.blog}</a>
          <a href="${prefix}/sobre-mi/">${common.nav.about}</a>
          <a href="${prefix}/servicios/">${common.nav.services}</a>
          <a href="${prefix}/metodologia/">${common.nav.methodology}</a>
          <a href="${faqHref}">${common.nav.faq}</a>
          <a href="${prefix}/practicar-aleman/">${common.nav.apps}</a>
          <a href="${prefix}/politica-de-privacidad/">${common.nav.privacy}</a>
        </div>
      </div>
      <div class="footer-bottom">Copyright © 2026 Samuel Coach de Alemán · ${common.footerRights}</div>
    </div>
  </footer>`;
}

function renderAppsWidget(locale) {
  const widget = shared[locale].widget;
  return `  <div class="apps-widget" aria-label="${widget.aria}">
    <div class="apps-widget-panel">
      <input class="apps-widget-toggle" type="checkbox" id="apps-widget-toggle">
      <label class="apps-widget-backdrop" for="apps-widget-toggle" aria-hidden="true"></label>
      <label class="apps-widget-trigger" for="apps-widget-toggle" aria-label="${widget.open}">
        <img src="/assets/img/logo-tree.png" alt="Logo Tree" class="apps-widget-tree" loading="lazy">
      </label>
      <div class="apps-widget-menu">
        <label class="apps-widget-close" for="apps-widget-toggle" aria-label="${widget.close}">${widget.closeLabel}</label>
        <img src="/assets/img/logo-tree.png" alt="Logo Tree" class="apps-widget-poster" loading="lazy">
        <p class="apps-widget-kicker">${widget.kicker}</p>
        <h3>${widget.title}</h3>
        <a href="https://vokabellab.com" target="_blank" rel="noopener noreferrer">${widget.vokabellab}</a>
        <a href="https://derdiedas.vokabellab.com" target="_blank" rel="noopener noreferrer">${widget.derdiedas}</a>
        <a href="https://imkontext.vokabellab.com" target="_blank" rel="noopener noreferrer">${widget.imkantext || widget.imkontext}</a>
      </div>
    </div>
  </div>`;
}

function renderPageSchema(page, locale, title, description) {
  const pathUrl = absoluteUrl(locale, page.slug);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: shared[locale].nav.home,
            item: absoluteUrl(locale, "")
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: pathUrl
          }
        ]
      },
      {
        "@type": page.schemaType,
        name: title,
        url: pathUrl,
        description,
        inLanguage: shared[locale].lang
      }
    ]
  };

  return `  <script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n  </script>`;
}

function renderHome(locale) {
  const text = copy[locale].home;
  const ctas = shared[locale].ctas;
  const prefix = localePrefix(locale);
  const cards = text.cards
    .map(
      ([title, body]) => `        <div class="page-card">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(body)}</p>
        </div>`
    )
    .join("\n");
  const faqs = text.faqs
    .map(
      ([title, body]) => `        <div class="page-card">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(body)}</p>
        </div>`
    )
    .join("\n");

  return `  <main>
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-text">
          <span class="hero-kicker">${text.kicker}</span>
          <h1>${text.heroTitle}</h1>
          <p>${text.heroLead}</p>
          <div class="hero-btns">
            <a href="/${locale}/servicios/" class="btn btn-white">${ctas.viewServices}</a>
            <a href="https://wa.me/34644220965" class="btn btn-wa" target="_blank" rel="noopener noreferrer">${ctas.whatsapp}</a>
          </div>
        </div>
        <div class="hero-photo">
          <div class="photo-wrap">
            <img src="/assets/img/hero-photo-full.webp" alt="Samuel Coach de Alemán" width="720" height="720" loading="eager" fetchpriority="high">
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container content-narrow">
        <h2>${text.cardsTitle}</h2>
        <p>${text.methodText}</p>
      </div>
    </section>

    <section class="page-section alt">
      <div class="container page-grid-2">
${cards}
      </div>
    </section>

    <section class="page-section">
      <div class="container content-narrow">
        <h2>${text.methodTitle}</h2>
        <p>${text.methodText}</p>
      </div>
    </section>

    <section class="page-section alt" id="faq">
      <div class="container content-narrow">
        <h2>${text.faqTitle}</h2>
      </div>
      <div class="container page-grid-2">
${faqs}
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="page-cta">
          <h2>${text.ctaTitle}</h2>
          <p>${text.ctaText}</p>
          <div class="hero-btns">
            <a href="tel:644220965" class="btn btn-white">${ctas.call}</a>
            <a href="https://wa.me/34644220965" class="btn btn-wa" target="_blank" rel="noopener noreferrer">${ctas.whatsapp}</a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

function renderServices(locale) {
  const text = copy[locale].services;
  const ctas = shared[locale].ctas;
  const cards = text.cards
    .map(
      ([id, title, body]) => `        <article class="services-card" id="${id}">
          <h3>${title}</h3>
          <p>${body}</p>
        </article>`
    )
    .join("\n");

  return `  <main>
    <section class="page-hero services-hero">
      <div class="page-hero-inner services-hero-inner">
        <div class="services-hero-copy">
          <h1>${text.heroTitle}</h1>
          <p>${text.heroText}</p>
          <div class="hero-btns">
            <a href="https://wa.me/34644220965" class="btn btn-wa" target="_blank" rel="noopener noreferrer">${ctas.requestAssessment}</a>
            <a href="#servicios-grid" class="btn btn-white">${ctas.learnMore}</a>
          </div>
        </div>
        <figure class="services-hero-media">
          <img src="/assets/img/services-hero.webp" alt="German lessons illustration" width="1600" height="1067" loading="eager" fetchpriority="high">
        </figure>
      </div>
    </section>
    <section class="page-section">
      <div class="container content-narrow services-section-intro">
        <h2>${text.introTitle}</h2>
        <p>${text.introText}</p>
      </div>
    </section>
    <section class="page-section alt">
      <div class="container services-grid" id="servicios-grid">
${cards}
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div class="page-cta">
          <h2>${text.ctaTitle}</h2>
          <p>${text.ctaText}</p>
          <div class="hero-btns">
            <a href="tel:644220965" class="btn btn-white">${ctas.call}</a>
            <a href="https://wa.me/34644220965" class="btn btn-wa" target="_blank" rel="noopener noreferrer">${ctas.whatsapp}</a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

function renderAbout(locale) {
  const text = copy[locale].about;
  const cards = text.values
    .map(
      ([title, body]) => `        <div class="page-card">
          <h3>${title}</h3>
          <p>${body}</p>
        </div>`
    )
    .join("\n");
  const story = text.story.map((paragraph) => `          <p>${paragraph}</p>`).join("\n");
  const ctas = shared[locale].ctas;
  return `  <main>
    <section class="page-hero">
      <div class="page-hero-inner">
        <h1>${text.heroTitle}</h1>
        <p>${text.heroText}</p>
      </div>
    </section>
    <section class="page-section">
      <div class="container story-layout">
        <figure class="story-media">
          <img src="/assets/img/about-journey.webp" alt="Editorial illustration about Samuel's journey" width="1024" height="1024" loading="eager" fetchpriority="high">
        </figure>
        <div class="story-copy">
          <h2>${text.storyTitle}</h2>
${story}
        </div>
      </div>
    </section>
    <section class="page-section alt">
      <div class="container content-narrow">
        <h2>${text.valuesTitle}</h2>
      </div>
      <div class="container page-grid-2">
${cards}
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div class="page-cta">
          <h2>${text.ctaTitle}</h2>
          <p>${text.ctaText}</p>
          <div class="hero-btns">
            <a href="tel:644220965" class="btn btn-white">${ctas.call}</a>
            <a href="https://wa.me/34644220965" class="btn btn-wa" target="_blank" rel="noopener noreferrer">${ctas.whatsapp}</a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

function renderMethodology(locale) {
  const text = copy[locale].methodology;
  const steps = text.steps
    .map(
      ([title, body]) => `        <div class="page-card">
          <h3>${title}</h3>
          <p>${body}</p>
        </div>`
    )
    .join("\n");
  const results = text.resultItems.map((item) => `          <li>${item}</li>`).join("\n");
  const ctas = shared[locale].ctas;
  return `  <main>
    <section class="page-hero">
      <div class="page-hero-inner">
        <h1>${text.heroTitle}</h1>
        <p>${text.heroText}</p>
      </div>
    </section>
    <section class="page-section">
      <div class="container page-grid-2">
${steps}
      </div>
    </section>
    <section class="page-section alt">
      <div class="container content-narrow">
        <h2>${text.resultTitle}</h2>
        <ul>
${results}
        </ul>
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div class="page-cta">
          <h2>${text.ctaTitle}</h2>
          <p>${text.ctaText}</p>
          <div class="hero-btns">
            <a href="tel:644220965" class="btn btn-white">${ctas.call}</a>
            <a href="https://wa.me/34644220965" class="btn btn-wa" target="_blank" rel="noopener noreferrer">${ctas.whatsapp}</a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

function renderAppsPage(locale) {
  const text = copy[locale].apps;
  const ctas = shared[locale].ctas;
  const cards = text.cards
    .map(
      ([title, sub, body, link, image]) => `        <article class="app-card">
          <div class="app-logo-wrap">
            <img src="${image}" alt="${title}" class="app-logo" loading="lazy">
          </div>
          <h3>${title}</h3>
          <p><strong>${sub}</strong></p>
          <p>${body}</p>
          <div class="app-link-row">
            <a href="${link}" class="btn btn-teal" target="_blank" rel="noopener noreferrer">${ctas.openApp}</a>
          </div>
        </article>`
    )
    .join("\n");

  return `  <main>
    <section class="page-hero">
      <div class="page-hero-inner">
        <h1>${text.heroTitle}</h1>
        <p>${text.heroText}</p>
      </div>
    </section>
    <section class="page-section">
      <div class="container content-narrow">
        <h2>${text.introTitle}</h2>
        <p>${text.introText}</p>
      </div>
    </section>
    <section class="page-section alt">
      <div class="container app-grid">
${cards}
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div class="page-cta">
          <h2>${text.ctaTitle}</h2>
          <p>${text.ctaText}</p>
          <div class="hero-btns">
            <a href="/${locale}/servicios/" class="btn btn-white">${ctas.viewServices}</a>
            <a href="https://wa.me/34644220965" class="btn btn-wa" target="_blank" rel="noopener noreferrer">${ctas.whatsapp}</a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

function renderResources(locale) {
  const text = copy[locale].resources;
  const ctas = shared[locale].ctas;
  const cards = text.cards
    .map(([num, title, body, bullets, link, badgeA, badgeB]) => {
      const badges = [badgeA, badgeB]
        .filter(Boolean)
        .map((badge) => `<span class="resource-badge resource-badge-guide">${badge}</span>`)
        .join("");
      const list = bullets.map((item) => `            <li>${item}</li>`).join("\n");
      return `        <article class="resource-card">
          <div class="resource-card-top">
            <div><div class="resource-card-number">${num}</div></div>
            <div class="resource-badge-row">${badges}</div>
          </div>
          <div>
            <h3>${title}</h3>
            <p>${body}</p>
          </div>
          <ul>
${list}
          </ul>
          <div class="app-link-row">
            <a href="${link}" class="btn btn-dark">${ctas.openResource}</a>
          </div>
        </article>`;
    })
    .join("\n");

  return `  <main>
    <section class="page-hero resources-hero">
      <div class="page-hero-inner resources-hero-inner">
        <div class="resources-hero-copy">
          <h1>${text.heroTitle}</h1>
          <p>${text.heroText}</p>
        </div>
        <figure class="resources-hero-media">
          <img src="/assets/img/resources-exam-hero.webp" alt="Resources for TELC and Goethe" width="1024" height="1024" loading="eager" fetchpriority="high">
        </figure>
      </div>
    </section>
    <section class="page-section">
      <div class="container content-narrow">
        <h2>${text.introTitle}</h2>
        <p>${text.introText}</p>
      </div>
    </section>
    <section class="page-section alt">
      <div class="container resource-grid">
${cards}
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div class="page-cta">
          <h2>${text.ctaTitle}</h2>
          <p>${text.ctaText}</p>
          <div class="hero-btns">
            <a href="/${locale}/servicios/" class="btn btn-white">${ctas.viewServices}</a>
            <a href="https://wa.me/34644220965" class="btn btn-wa" target="_blank" rel="noopener noreferrer">${ctas.whatsapp}</a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

function renderSimpleResource(locale, key) {
  const text = copy[locale][key];
  const ctas = shared[locale].ctas;
  const bullets = text.bullets.map((item) => `            <li>${item}</li>`).join("\n");
  return `  <main>
    <section class="page-hero">
      <div class="page-hero-inner">
        <h1>${text.heroTitle}</h1>
        <p>${text.heroText}</p>
      </div>
    </section>
    <section class="page-section">
      <div class="container page-grid-2">
        <div class="page-card">
          <h2>${text.heroTitle}</h2>
          <ul>
${bullets}
          </ul>
        </div>
        <div class="page-card">
          <h2>${text.noteTitle}</h2>
          <p>${text.noteText}</p>
        </div>
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div class="page-cta">
          <h2>${copy[locale].resources.ctaTitle}</h2>
          <p>${copy[locale].resources.ctaText}</p>
          <div class="hero-btns">
            <a href="/${locale}/recursos/" class="btn btn-white">${ctas.viewResources}</a>
            <a href="https://wa.me/34644220965" class="btn btn-wa" target="_blank" rel="noopener noreferrer">${ctas.whatsapp}</a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

function renderPrivacy(locale) {
  const text = copy[locale].privacy;
  const sections = text.sections
    .map(([title, items]) => {
      const body = items.length > 1
        ? `          <ul>\n${items.map((item) => `            <li>${item}</li>`).join("\n")}\n          </ul>`
        : `          <p>${items[0]}</p>`;
      return `        <div class="privacy-block">
          <h2>${title}</h2>
${body}
        </div>`;
    })
    .join("\n");
  return `  <main>
    <section class="page-hero">
      <div class="page-hero-inner">
        <h1>${text.heroTitle}</h1>
        <p>${text.heroText}</p>
      </div>
    </section>
    <section class="page-section">
      <div class="container content-narrow">
${sections}
      </div>
    </section>
  </main>`;
}

function renderMain(page, locale) {
  switch (page.key) {
    case "home":
      return renderHome(locale);
    case "services":
      return renderServices(locale);
    case "about":
      return renderAbout(locale);
    case "methodology":
      return renderMethodology(locale);
    case "apps":
      return renderAppsPage(locale);
    case "resources":
      return renderResources(locale);
    case "lueckentext":
    case "schreiben":
    case "hoerverstehen":
      return renderSimpleResource(locale, page.key);
    case "privacy":
      return renderPrivacy(locale);
    default:
      throw new Error(`Unknown page key: ${page.key}`);
  }
}

function pageTitle(locale, key) {
  return copy[locale][key].title;
}

function pageDescription(locale, key) {
  return copy[locale][key].description;
}

function pageOgTitle(locale, key) {
  return copy[locale][key].ogTitle || copy[locale][key].title;
}

function pageOgDescription(locale, key) {
  return copy[locale][key].ogDescription || copy[locale][key].description;
}

function pageImage(pageKey) {
  if (pageKey === "resources" || pageKey === "lueckentext" || pageKey === "schreiben" || pageKey === "hoerverstehen") {
    return `${baseUrl}/assets/img/resources-exam-hero.webp`;
  }
  if (pageKey === "services") {
    return `${baseUrl}/assets/img/services-hero.webp`;
  }
  if (pageKey === "about") {
    return `${baseUrl}/assets/img/about-journey.webp`;
  }
  return `${baseUrl}/assets/img/hero-photo-full.webp`;
}

function buildHtml(page, locale) {
  const title = pageTitle(locale, page.key);
  const description = pageDescription(locale, page.key);
  const ogTitle = pageOgTitle(locale, page.key);
  const ogDescription = pageOgDescription(locale, page.key);
  const canonical = absoluteUrl(locale, page.slug);

  return `<!DOCTYPE html>
<html lang="${shared[locale].lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
${renderAlternates(page.slug)}
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="theme-color" content="#455a64">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(ogTitle)}">
  <meta property="og:description" content="${escapeHtml(ogDescription)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${pageImage(page.key)}">
  <meta property="og:site_name" content="Samuel Coach de Alemán">
  <meta property="og:locale" content="${localeOg[locale]}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(ogTitle)}">
  <meta name="twitter:description" content="${escapeHtml(ogDescription)}">
  <meta name="twitter:image" content="${pageImage(page.key)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/webp" href="/assets/img/favicon.webp">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.webp">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="stylesheet" href="/assets/css/cookie-banner-core.css">
${renderLocaleScript(locale)}
${renderPageSchema(page, locale, title, description)}
</head>
<body>
${renderNav(locale)}
${renderMain(page, locale)}
${renderFooter(locale)}
${renderAppsWidget(locale)}
  <script defer src="/assets/js/google-analytics-core.js"></script>
  <script src="/assets/js/cookie-banner-core.js" defer></script>
  <script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

function writeLocalizedPages() {
  for (const locale of locales) {
    for (const page of pages) {
      const relativeFile = path.join(locale, page.slug, "index.html");
      const targetFile = path.join(rootDir, relativeFile);
      ensureDir(targetFile);
      fs.writeFileSync(targetFile, buildHtml(page, locale), "utf8");
    }
  }
}

function updateOriginalAlternates() {
  for (const page of pages) {
    const targetFile = path.join(rootDir, page.sourceFile);
    const source = fs.readFileSync(targetFile, "utf8");
    const alternateBlock = `${renderAlternates(page.slug)}`;
    const withMarkers = `\n  <!-- I18N-ALTERNATES:START -->\n${alternateBlock}\n  <!-- I18N-ALTERNATES:END -->`;

    let next = source.replace(/\n\s*<!-- I18N-ALTERNATES:START -->[\s\S]*?<!-- I18N-ALTERNATES:END -->/, "");
    next = next.replace(/(<link rel="canonical" href="[^"]+">)/, `$1${withMarkers}`);
    fs.writeFileSync(targetFile, next, "utf8");
  }
}

function updateSitemap() {
  const sitemapFile = path.join(rootDir, "sitemap.xml");
  const source = fs.readFileSync(sitemapFile, "utf8");
  const localizedEntries = [];

  for (const locale of locales) {
    for (const page of pages) {
      localizedEntries.push(`  <url>
    <loc>${absoluteUrl(locale, page.slug)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
    }
  }

  const block = `  <!-- I18N:START -->\n${localizedEntries.join("\n")}\n  <!-- I18N:END -->\n\n`;
  let next = source.replace(/  <!-- I18N:START -->[\s\S]*?<!-- I18N:END -->\n\n/, "");

  if (next.includes("<!-- LESEVERSTEHEN:START -->")) {
    next = next.replace("  <!-- LESEVERSTEHEN:START -->", `${block}  <!-- LESEVERSTEHEN:START -->`);
  } else {
    next = next.replace("</urlset>", `${block}</urlset>`);
  }

  fs.writeFileSync(sitemapFile, next, "utf8");
}

writeLocalizedPages();
updateOriginalAlternates();
updateSitemap();

console.log("Localized pages generated for /de and /en.");
