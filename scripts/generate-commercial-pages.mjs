import fs from "fs";
import path from "path";
import {
  cities,
  citySlugs,
  getCommercialRoute,
  localeCopy,
  locales,
  nationalCopy
} from "./commercial-page-data.mjs";

const rootDir = process.cwd();
const baseUrl = "https://www.samuelcoachdealeman.com";
const whatsappNumber = "34644220965";
const esc = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");
const localeMeta = { es: "es_ES", de: "de_DE", en: "en_GB" };

function cityFor(slug) {
  return cities.find((city) => city.slug === slug);
}

function absoluteRoute(locale, citySlug) {
  return `${baseUrl}${getCommercialRoute(locale, citySlug)}`;
}

function whatsappHref(text) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function localeLinks(locale, citySlug) {
  return locales.map((target) => `<a href="${getCommercialRoute(target, citySlug)}" lang="${target}">${target.toUpperCase()}</a>`).join(" ");
}

function renderGoals(copy) {
  return `<ul class="commercial-list">${copy.goals.items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
}

function renderFaq(copy) {
  return copy.faq.items.map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join("");
}

export function renderCommercialPage({ locale, citySlug } = {}) {
  if (!locales.includes(locale)) throw new Error(`Unsupported commercial locale: ${locale}`);
  const city = citySlug ? cityFor(citySlug) : null;
  if (citySlug && !city) throw new Error(`Unknown commercial city: ${citySlug}`);
  const copy = localeCopy[locale];
  const meta = nationalCopy[locale];
  const title = city
    ? `${locale === "es" ? "Clases de alemán online en" : locale === "de" ? "Online-Deutschunterricht in" : "Online German lessons in"} ${city.name[locale]} | Samuel Coach de Alemán`
    : meta.title;
  const description = city ? city.intro[locale] : meta.description;
  const h1 = city
    ? `${locale === "es" ? "Clases de alemán online en" : locale === "de" ? "Online-Deutschunterricht in" : "Online German lessons in"} ${city.name[locale]}`
    : copy.hero.title;
  const whatsapp = whatsappHref(city?.whatsappText[locale] || {
    es: "Hola Samuel, he visto tu web y me gustaría informarme sobre clases de alemán online",
    de: "Hallo Samuel, ich habe deine Website gesehen und möchte mehr über Online-Deutschunterricht erfahren",
    en: "Hi Samuel, I found your website and would like to know more about online German lessons"
  }[locale]);
  const route = getCommercialRoute(locale, citySlug);
  const alternates = locales.map((target) => `<link rel="alternate" hreflang="${target}" href="${absoluteRoute(target, citySlug)}">`).join("\n  ");
  const served = city ? `"areaServed": ${JSON.stringify([city.name.es, city.region])},` : `"areaServed": "España",`;
  const nearby = city ? city.nearby.map((slug) => {
    const item = cityFor(slug);
    return `<a href="${getCommercialRoute(locale, slug)}">${esc(item.name[locale])}</a>`;
  }).join(" · ") : cities.slice(0, 12).map((item) => `<a href="${getCommercialRoute(locale, item.slug)}">${esc(item.name[locale])}</a>`).join(" · ");
  const heroBody = city ? city.intro[locale] : copy.hero.lead;
  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${absoluteRoute(locale, citySlug)}">
  ${alternates}
  <meta property="og:type" content="website">
  <meta property="og:url" content="${absoluteRoute(locale, citySlug)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${baseUrl}/assets/img/og-home.webp">
  <meta property="og:locale" content="${localeMeta[locale]}">
  <link rel="stylesheet" href="/assets/css/styles.css?v=20260613d">
  <link rel="icon" type="image/webp" href="/assets/img/favicon.webp">
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "ProfessionalService"],
    name: "Samuel Coach de Alemán",
    url: absoluteRoute(locale, citySlug),
    telephone: "+34644220965",
    email: "samuelcoachdealeman@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Fuengirola", addressRegion: "Andalucía", addressCountry: "ES" },
    areaServed: city ? [city.name.es, city.region] : "España",
    availableLanguage: ["es", "de", "en"]
  })}</script>
</head>
<body class="home-page commercial-page" data-commercial-locale="${locale}"${city ? ` data-city="${city.slug}"` : ""}>
  <header class="site-header"><a class="brand" href="${getCommercialRoute(locale)}">Samuel Coach de Alemán</a><nav aria-label="${esc(copy.navigation.home)}"><a href="${getCommercialRoute(locale)}">${esc(copy.navigation.home)}</a><a href="/f/">${esc(copy.navigation.blog)}</a><a href="/recursos/">${esc(copy.navigation.resources)}</a><a href="/contacto/">${esc(copy.navigation.contact)}</a></nav><div class="language-switcher">${localeLinks(locale, citySlug)}</div></header>
  <main>
    <section class="home-hero commercial-hero"><div class="home-shell"><p class="eyebrow">${esc(copy.hero.kicker)}</p><h1>${esc(h1)}</h1><p class="hero-lead">${esc(heroBody)}</p><div class="home-hero-grid"><div class="hero-content"><a class="button button-primary" href="#contacto">${esc(copy.contact.title)}</a><a class="button button-secondary" href="${whatsapp}">WhatsApp</a></div><div class="home-hero-media"><img class="home-hero-photo" src="/assets/img/hero-photo.webp" alt="Samuel, coach de alemán"></div></div></div></section>
    <section id="metodo" class="content-section"><div class="home-shell"><p class="eyebrow">${esc(copy.method.title)}</p><h2>${esc(copy.method.title)}</h2><p>${esc(copy.method.body)}</p></div></section>
    <section id="formato" class="content-section alt"><div class="home-shell"><h2>${esc(copy.format.title)}</h2><p>${esc(copy.format.body)}</p></div></section>
    <section id="objetivos" class="content-section"><div class="home-shell"><h2>${esc(copy.goals.title)}</h2>${renderGoals(copy)}</div></section>
    <section id="opiniones" class="content-section alt"><div class="home-shell"><h2>${esc(copy.proof.title)}</h2><p>${esc(copy.proof.body)}</p></div></section>
    <section id="recursos" class="content-section"><div class="home-shell"><h2>${esc(copy.resources.title)}</h2><p>${esc(copy.resources.body)}</p><a href="/recursos/">${esc(copy.navigation.resources)}</a></div></section>
    <section id="faq" class="content-section alt"><div class="home-shell"><h2>${esc(copy.faq.title)}</h2>${renderFaq(copy)}</div></section>
    <section id="ciudades" class="content-section"><div class="home-shell"><h2>${esc(copy.cities.title)}</h2><p>${esc(city ? city.intro[locale] : copy.cities.body)}</p><p class="city-links">${nearby}</p></div></section>
    <section id="contacto" class="content-section contact-section"><div class="home-shell"><h2>${esc(copy.contact.title)}</h2><p>${esc(copy.contact.body)}</p><form action="/api/contact" method="post"><label>${locale === "es" ? "Nombre" : locale === "de" ? "Name" : "Name"}<input name="name" required></label><label>Email<input type="email" name="email" required></label><button class="button button-primary" type="submit">${esc(copy.contact.title)}</button></form></div></section>
  </main>
  <a class="floating-whatsapp" href="${whatsapp}" aria-label="WhatsApp">WhatsApp</a><a class="mobile-whatsapp-cta" href="${whatsapp}">WhatsApp</a>
  <footer class="site-footer"><div class="home-shell"><p>© Samuel Coach de Alemán · ${esc(copy.footer.rights)}</p></div></footer>
</body>
</html>`;
}

export function renderCommercialPages() {
  const outputs = [];
  for (const locale of locales) {
    outputs.push({ locale });
    for (const slug of citySlugs) outputs.push({ locale, citySlug: slug });
  }
  for (const output of outputs) {
    const route = getCommercialRoute(output.locale, output.citySlug);
    const relative = route === "/" ? "index.html" : path.join(route.slice(1), "index.html");
    const file = path.join(rootDir, relative);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, renderCommercialPage(output));
  }
}

if (import.meta.url === `file://${process.argv[1]}`) renderCommercialPages();
