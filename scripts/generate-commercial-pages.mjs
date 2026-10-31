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
  const ogImage = city ? "og-home.webp" : "hero-photo.webp";
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
  <meta property="og:image" content="${baseUrl}/assets/img/${ogImage}">
  <meta property="og:locale" content="${localeMeta[locale]}">
  <link rel="stylesheet" href="/assets/css/styles.css?v=20260613d">
  <link rel="icon" type="image/webp" href="/assets/img/favicon.webp">
  <script src="/assets/js/google-analytics-core.js?v=umami-20261015" defer></script>
  <script src="/assets/js/umami-analytics-core.js" defer></script>
  <script src="/assets/js/main.js" defer></script>
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "ProfessionalService", "LocalBusiness"],
    name: "Samuel Coach de Alemán",
    url: absoluteRoute(locale, citySlug),
    telephone: "+34644220965",
    email: "samuelcoachdealeman@gmail.com",
    priceRange: "30–40 EUR por hora",
    address: { "@type": "PostalAddress", addressLocality: "Fuengirola", addressRegion: "Andalucía", addressCountry: "ES" },
    areaServed: city ? [city.name.es, city.region] : ["España", "Fuengirola", "Málaga", "Marbella", "Benalmádena", "Arroyo de la Miel", "Andalucía", "Madrid", "Barcelona", "Berlín", "Múnich", "Alemania", "Australia"],
    availableLanguage: ["es", "de", "en"]
  }, null, 2)}</script>
</head>
<body class="home-page commercial-page" data-commercial-locale="${locale}"${city ? ` data-city="${city.slug}"` : ""}>
  <header class="site-header"><a class="brand" href="${getCommercialRoute(locale)}">Samuel Coach de Alemán</a><nav aria-label="${esc(copy.navigation.home)}"><a href="${getCommercialRoute(locale)}">${esc(copy.navigation.home)}</a><a href="${locale === "es" ? "/f/" : `/${locale}/f/`}">${esc(copy.navigation.blog)}</a><a href="/recursos/">${esc(copy.navigation.resources)}</a><a href="/contacto/">${esc(copy.navigation.contact)}</a><span id="nav-auth-li"><a href="/${locale === "es" ? "" : `${locale}/`}login/?redirect=${encodeURIComponent(getCommercialRoute(locale))}">${locale === "es" ? "Mi cuenta" : locale === "de" ? "Konto" : "Account"}</a></span></nav><div class="language-switcher">${localeLinks(locale, citySlug)}</div></header>
  <main>
    <section class="home-hero commercial-hero"><div class="home-shell"><p class="eyebrow">${esc(copy.hero.kicker)}</p><h1>${esc(h1)}</h1><p class="hero-lead">${esc(heroBody)}</p><div class="home-hero-grid"><div class="hero-content"><a class="button button-primary" href="#contacto">${esc(copy.contact.title)}</a><a class="button button-secondary" href="${whatsapp}">WhatsApp</a></div><div class="home-hero-media hero-photo"><img class="home-hero-photo" src="/assets/img/hero-photo.webp" alt="Samuel, coach de alemán"></div></div></div></section>
    <section id="metodo" class="content-section"><div class="home-shell"><p class="eyebrow">${esc(copy.method.title)}</p><h2>${esc(copy.method.title)}</h2><p>${esc(copy.method.body)}</p><div class="commercial-offers"><strong>Individual desde 30 €/h</strong><strong>Pareja 40 €/h en total</strong></div></div></section>
    <section id="formato" class="content-section alt"><div class="home-shell"><h2>${esc(copy.format.title)}</h2><p>${esc(copy.format.body)}</p></div></section>
    <section id="objetivos" class="content-section"><div class="home-shell"><h2>${esc(copy.goals.title)}</h2>${renderGoals(copy)}</div></section>
    <section id="opiniones" class="content-section alt"><div class="home-shell"><h2>${esc(copy.proof.title)}</h2><p>${esc(copy.proof.body)}</p><div class="home-reviews">${["Ana Muñoz", "Andrés Reyes Monge", "carmen delgado", "Unai", "Cris", "Toni"].map((name) => `<article class="home-review-card"><p>${esc(copy.proof.body)}</p><strong>${name}</strong></article>`).join("")}</div><p><span>123 reseñas</span> <span>48 opiniones</span></p></div></section>
    <section id="recursos" class="content-section"><div class="home-shell"><h2>${esc(copy.resources.title)}</h2><p>${esc(copy.resources.body)}</p><a href="/recursos/">${esc(copy.navigation.resources)}</a></div></section>
    <section id="faq" class="content-section alt"><div class="home-shell"><h2>${esc(copy.faq.title)}</h2>${renderFaq(copy)}</div></section>
    <section id="ciudades" class="content-section"><div class="home-shell"><h2>${esc(copy.cities.title)}</h2><p>${esc(city ? city.intro[locale] : copy.cities.body)}</p><p class="city-links">${nearby}</p></div></section>
    <section id="valoracion" class="content-section contact-section"><div class="home-shell"><h2 id="valoracion-title">${esc(copy.contact.title)}</h2><p>${esc(copy.contact.body)}</p><form class="offer-form" action="/functions/v1/contact" method="post" novalidate><input type="text" name="company" class="form-honeypot" tabindex="-1"><input type="hidden" name="turnstileToken" value=""><label>Nombre<input name="name" required></label><label>Email<input type="email" name="email" required></label><label>Teléfono o WhatsApp<input name="phone"></label><label>Edad<select name="age_band" required><option value="">Selecciona una etapa</option><option value="6–11">6–11</option><option value="12–17">12–17</option><option value="18+">18+</option></select></label><label>Objetivo<select name="goal" required><option value="">Selecciona tu objetivo</option><option value="Trabajo">Trabajo</option><option value="Colegio e instituto">Colegio e instituto</option></select></label><label>Nivel actual<select name="current_level" required><option value="">Selecciona tu nivel</option><option value="A1">A1</option><option value="B1">B1</option></select></label><label>Disponibilidad<select name="availability" required><option value="">Selecciona una opción</option><option value="Tardes">Tardes</option><option value="Flexible">Flexible</option></select></label><div class="form-turnstile" data-turnstile-container data-turnstile-required="Confirma que no eres un bot." data-turnstile-error="No se pudo cargar la comprobación de seguridad. Escríbeme por WhatsApp o inténtalo de nuevo en unos minutos."><div class="form-turnstile-widget"></div></div><button type="submit" class="contact-btn home-form-submit">Quiero mi plan personalizado</button><p class="form-status" role="status"></p></form></div></section>
  </main>
  <a class="floating-whatsapp" href="${whatsapp}" aria-label="Abrir WhatsApp para pedir más información">WhatsApp</a><a class="mobile-whatsapp-cta" href="${whatsapp}">WhatsApp</a>
  <footer class="site-footer"><div class="home-shell"><p>© Samuel Coach de Alemán · ${esc(copy.footer.rights)}</p></div></footer>
  <aside id="commercial-cookie-banner" class="cookie-banner" role="dialog" aria-label="Tu privacidad importa"><h2>Tu privacidad importa</h2><p>Usamos cookies necesarias para que la web funcione.</p><button type="button" onclick="localStorage.setItem('commercial-cookie-ok','1'); this.closest('.cookie-banner').remove();">Aceptar</button></aside>
  <script>if (localStorage.getItem('commercial-cookie-ok') === '1') document.getElementById('commercial-cookie-banner').remove();</script>
</body>
</html>`;
}

export const commercialOutputs = locales.flatMap((locale) => [
  { locale },
  ...citySlugs.map((citySlug) => ({ locale, citySlug }))
]);

function updateSitemap() {
  const sitemapFile = path.join(rootDir, "sitemap.xml");
  if (!fs.existsSync(sitemapFile)) return;
  const source = fs.readFileSync(sitemapFile, "utf8");
  const urls = new Set(commercialOutputs.map(({ locale, citySlug }) => absoluteRoute(locale, citySlug)));
  let next = source.replace(/\s*<url>[\s\S]*?<\/url>/g, (block) => {
    const match = block.match(/<loc>([^<]+)<\/loc>/);
    return match && urls.has(match[1]) ? "" : block;
  });
  const entries = commercialOutputs.map(({ locale, citySlug }) => `  <url>\n    <loc>${absoluteRoute(locale, citySlug)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${citySlug ? "0.75" : "0.9"}</priority>\n  </url>`).join("\n");
  next = next.replace("</urlset>", `${entries}\n</urlset>`);
  fs.writeFileSync(sitemapFile, next, "utf8");
}

export function renderCommercialPages() {
  for (const output of commercialOutputs) {
    const route = getCommercialRoute(output.locale, output.citySlug);
    const relative = route === "/" ? "index.html" : path.join(route.slice(1), "index.html");
    const file = path.join(rootDir, relative);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, renderCommercialPage(output));
  }
  updateSitemap();
}

if (process.argv[1]?.endsWith("generate-commercial-pages.mjs")) renderCommercialPages();
