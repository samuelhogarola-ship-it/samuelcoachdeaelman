export const locales = ["es", "de", "en"];

const citySeed = [
  ["alicante", "Alicante", "Comunidad Valenciana", ["valencia", "murcia"]],
  ["barakaldo", "Barakaldo", "País Vasco", ["bilbao", "vitoria-gasteiz"]],
  ["barcelona", "Barcelona", "Cataluña", ["madrid", "valencia"]],
  ["benalmadena", "Benalmádena", "Andalucía", ["fuengirola", "malaga"]],
  ["bilbao", "Bilbao", "País Vasco", ["barakaldo", "vitoria-gasteiz"]],
  ["estepona", "Estepona", "Andalucía", ["marbella", "fuengirola"]],
  ["fuengirola", "Fuengirola", "Andalucía", ["mijas", "benalmadena", "marbella"]],
  ["granada", "Granada", "Andalucía", ["malaga", "sevilla"]],
  ["irun", "Irún", "País Vasco", ["san-sebastian", "vitoria-gasteiz"]],
  ["las-palmas", "Las Palmas", "Canarias", ["tenerife", "madrid"]],
  ["madrid", "Madrid", "Comunidad de Madrid", ["barcelona", "sevilla", "zaragoza"]],
  ["malaga", "Málaga", "Andalucía", ["fuengirola", "granada", "marbella"]],
  ["marbella", "Marbella", "Andalucía", ["estepona", "fuengirola", "malaga"]],
  ["mijas", "Mijas", "Andalucía", ["fuengirola", "marbella"]],
  ["murcia", "Murcia", "Región de Murcia", ["alicante", "valencia"]],
  ["nerja", "Nerja", "Andalucía", ["malaga", "torremolinos"]],
  ["palma-de-mallorca", "Palma de Mallorca", "Islas Baleares", ["barcelona", "valencia"]],
  ["pamplona", "Pamplona", "Navarra", ["vitoria-gasteiz", "bilbao"]],
  ["san-sebastian", "San Sebastián", "País Vasco", ["irun", "bilbao"]],
  ["sevilla", "Sevilla", "Andalucía", ["granada", "madrid"]],
  ["tenerife", "Tenerife", "Canarias", ["las-palmas", "madrid"]],
  ["torremolinos", "Torremolinos", "Andalucía", ["malaga", "fuengirola"]],
  ["valencia", "Valencia", "Comunidad Valenciana", ["alicante", "barcelona", "murcia"]],
  ["vitoria-gasteiz", "Vitoria-Gasteiz", "País Vasco", ["bilbao", "pamplona"]],
  ["zaragoza", "Zaragoza", "Aragón", ["madrid", "barcelona", "pamplona"]]
];

export const citySlugs = citySeed.map(([slug]) => slug);

const cityName = (name, locale) => ({
  es: name,
  de: name,
  en: name
}[locale]);

const localizedIntro = (name, locale) => ({
  es: `Clases de alemán online para personas de ${name} que quieren avanzar con un plan claro, clases cercanas y seguimiento real.`,
  de: `Online-Deutschunterricht für Menschen in ${name} mit einem klaren Plan, persönlicher Begleitung und echtem Fortschritt.`,
  en: `Online German lessons for people in ${name}, with a clear plan, personal support and measurable progress.`
}[locale]);

const localizedWhatsapp = (name, locale) => ({
  es: `Hola Samuel, he visto tu web y me gustaría informarme sobre clases de alemán en ${name}`,
  de: `Hallo Samuel, ich habe deine Website gesehen und möchte mehr über Deutschunterricht in ${name} erfahren`,
  en: `Hi Samuel, I found your website and would like to know more about German lessons in ${name}`
}[locale]);

export const cities = citySeed.map(([slug, name, region, nearby]) => ({
  slug,
  region,
  nearby,
  name: Object.fromEntries(locales.map((locale) => [locale, cityName(name, locale)])),
  intro: Object.fromEntries(locales.map((locale) => [locale, localizedIntro(name, locale)])),
  whatsappText: Object.fromEntries(locales.map((locale) => [locale, localizedWhatsapp(name, locale)]))
}));

export const nationalCopy = {
  es: {
    title: "Clases de alemán online | Samuel Coach de Alemán",
    description: "Clases de alemán online personalizadas para conversar, preparar Goethe o TELC, trabajar o reforzar el alemán escolar."
  },
  de: {
    title: "Online-Deutschunterricht | Samuel Coach de Alemán",
    description: "Persönlicher Online-Deutschunterricht für Konversation, Goethe- oder TELC-Prüfungen, Arbeit und Schule."
  },
  en: {
    title: "Online German lessons | Samuel Coach de Alemán",
    description: "Personalised online German lessons for conversation, Goethe or TELC exams, work and school support."
  }
};

export const localeCopy = {
  es: {
    navigation: { home: "Inicio", services: "Clases", blog: "Blog", resources: "Recursos", about: "Sobre mí", contact: "Contacto" },
    hero: { kicker: "Alemán con un plan claro", title: "Clases de alemán online", lead: "Un plan personalizado para tu objetivo, con seguimiento y una ruta clara para avanzar." },
    method: { title: "Aprende alemán con método y seguimiento", body: "Partimos de tu nivel, tu objetivo y el tiempo disponible para construir un plan concreto." },
    format: { title: "Clases online, cercanas y flexibles", body: "Trabajamos desde donde estés con materiales compartidos y una estructura clara entre sesiones." },
    goals: { title: "¿Para qué necesitas alemán?", items: ["Colegio e instituto", "Universidad", "Trabajo", "Vivir en Alemania", "Goethe / TELC", "Oposiciones"] },
    proof: { title: "Resultados y experiencia", body: "Confianza, cercanía y formación pensada para objetivos reales." },
    resources: { title: "Recursos gratuitos", body: "Practica entre clases y sigue avanzando con más dirección." },
    faq: { title: "Preguntas frecuentes", items: [["¿Las clases son solo online?", "Sí, todo está pensado para formato online y seguimiento individual."], ["¿Preparas Goethe y TELC?", "Sí, trabajamos estrategia, formato y práctica enfocada."]] },
    cities: { title: "Clases de alemán online en toda España", body: "Imparto clases online en toda España. Encuentra tu ciudad y descubre cómo puedo ayudarte." },
    contact: { title: "Reserva tu valoración personalizada", body: "Te ayudo a definir tu nivel, objetivo y mejor plan de aprendizaje." },
    footer: { rights: "Todos los derechos reservados." }
  },
  de: {
    navigation: { home: "Start", services: "Angebote", blog: "Blog", resources: "Ressourcen", about: "Über mich", contact: "Kontakt" },
    hero: { kicker: "Deutsch mit einem klaren Plan", title: "Online-Deutschunterricht", lead: "Ein persönlicher Plan für dein Ziel, mit Begleitung und einer klaren Route zum Fortschritt." },
    method: { title: "Deutsch lernen mit Methode und Begleitung", body: "Wir starten bei deinem Niveau, deinem Ziel und deiner verfügbaren Zeit." },
    format: { title: "Persönlicher und flexibler Online-Unterricht", body: "Du lernst von überall mit gemeinsamen Materialien und einer klaren Struktur." },
    goals: { title: "Wofür brauchst du Deutsch?", items: ["Schule", "Universität", "Arbeit", "Leben in Deutschland", "Goethe / TELC", "Prüfungen"] },
    proof: { title: "Erfahrung und Fortschritt", body: "Persönliche Begleitung für echte Ziele und mehr Sicherheit im Deutschen." },
    resources: { title: "Kostenlose Ressourcen", body: "Übe zwischen den Stunden und lerne mit einer klaren Route weiter." },
    faq: { title: "Häufige Fragen", items: [["Findet der Unterricht online statt?", "Ja, alles ist auf Online-Unterricht und persönliche Begleitung ausgelegt."], ["Bereitest du auf Goethe und TELC vor?", "Ja, wir arbeiten Strategie, Format und gezielte Praxis."]] },
    cities: { title: "Online-Deutschunterricht in ganz Spanien", body: "Ich unterrichte online in ganz Spanien. Finde deine Stadt und entdecke, wie ich dir helfen kann." },
    contact: { title: "Persönliches Erstgespräch anfragen", body: "Wir klären dein Niveau, dein Ziel und den passenden Lernplan." },
    footer: { rights: "Alle Rechte vorbehalten." }
  },
  en: {
    navigation: { home: "Home", services: "Lessons", blog: "Blog", resources: "Resources", about: "About me", contact: "Contact" },
    hero: { kicker: "German with a clear plan", title: "Online German lessons", lead: "A personalised plan for your goal, with guidance and a clear route to progress." },
    method: { title: "Learn German with method and support", body: "We start from your level, goal and available time to build a concrete plan." },
    format: { title: "Personal, flexible online lessons", body: "Learn from wherever you are with shared materials and a clear structure." },
    goals: { title: "What do you need German for?", items: ["School", "University", "Work", "Living in Germany", "Goethe / TELC", "Exams"] },
    proof: { title: "Experience and progress", body: "Personal support for real goals and greater confidence in German." },
    resources: { title: "Free resources", body: "Practise between lessons and keep moving forward with more direction." },
    faq: { title: "Frequently asked questions", items: [["Are lessons online?", "Yes, everything is designed for online lessons and personal support."], ["Do you prepare students for Goethe and TELC?", "Yes, we work on strategy, format and focused practice."]] },
    cities: { title: "Online German lessons across Spain", body: "I teach online across Spain. Find your city and see how I can help." },
    contact: { title: "Book your personalised assessment", body: "We will define your level, goal and the best learning plan." },
    footer: { rights: "All rights reserved." }
  }
};

export function getCommercialRoute(locale, citySlug) {
  if (!locales.includes(locale)) throw new Error(`Unsupported commercial locale: ${locale}`);
  if (citySlug !== undefined && !citySlugs.includes(citySlug)) {
    throw new Error(`Unknown commercial city: ${citySlug}`);
  }
  if (citySlug === undefined) return locale === "es" ? "/" : `/${locale}/`;
  return locale === "es" ? `/${citySlug}/` : `/${locale}/${citySlug}/`;
}
