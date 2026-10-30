import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  cities,
  citySlugs,
  getCommercialRoute,
  localeCopy,
  locales,
  nationalCopy
} from "../../scripts/commercial-page-data.mjs";
import { commercialOutputs, renderCommercialPage } from "../../scripts/generate-commercial-pages.mjs";

const expectedCitySlugs = [
  "alicante",
  "barakaldo",
  "barcelona",
  "benalmadena",
  "bilbao",
  "estepona",
  "fuengirola",
  "granada",
  "irun",
  "las-palmas",
  "madrid",
  "malaga",
  "marbella",
  "mijas",
  "murcia",
  "nerja",
  "palma-de-mallorca",
  "pamplona",
  "san-sebastian",
  "sevilla",
  "tenerife",
  "torremolinos",
  "valencia",
  "vitoria-gasteiz",
  "zaragoza"
];

const requiredLocaleSections = [
  "navigation",
  "hero",
  "method",
  "format",
  "goals",
  "proof",
  "resources",
  "faq",
  "cities",
  "contact",
  "footer"
];

test("commercial data contains every Spanish city route", () => {
  assert.deepEqual(citySlugs, expectedCitySlugs);
  assert.equal(cities.length, expectedCitySlugs.length);
  assert.deepEqual(cities.map((city) => city.slug), expectedCitySlugs);
});

test("every city has complete localized fields", () => {
  for (const city of cities) {
    assert.equal(city.slug, city.slug.trim());
    assert.ok(city.region);
    assert.ok(Array.isArray(city.nearby));
    for (const locale of locales) {
      assert.ok(city.name[locale], `${city.slug} is missing ${locale} name`);
      assert.ok(city.intro[locale], `${city.slug} is missing ${locale} intro`);
      assert.ok(city.whatsappText[locale], `${city.slug} is missing ${locale} WhatsApp text`);
    }
  }
});

test("national and locale copy expose all shared commercial sections", () => {
  for (const locale of locales) {
    for (const section of requiredLocaleSections) {
      assert.ok(localeCopy[locale][section], `${locale} is missing ${section} copy`);
    }
    assert.ok(nationalCopy[locale].title);
    assert.ok(nationalCopy[locale].description);
  }
});

test("commercial routes map locale and city consistently", () => {
  assert.equal(getCommercialRoute("es"), "/");
  assert.equal(getCommercialRoute("de"), "/de/");
  assert.equal(getCommercialRoute("en"), "/en/");
  assert.equal(getCommercialRoute("es", "barcelona"), "/barcelona/");
  assert.equal(getCommercialRoute("de", "barcelona"), "/de/barcelona/");
  assert.equal(getCommercialRoute("en", "barcelona"), "/en/barcelona/");
});

test("renderer keeps the national H1 and shared commercial structure", () => {
  const html = renderCommercialPage({ locale: "es" });
  assert.match(html, /<h1[^>]*>Clases de alemán online<\/h1>/);
  for (const marker of ["método", "formato", "objetivos", "opiniones", "Recursos", "Preguntas frecuentes", "Clases de alemán online en toda España"]) {
    assert.match(html, new RegExp(marker));
  }
  assert.match(html, /wa\.me\/34644220965/);
  assert.match(html, /class="mobile-whatsapp-cta"/);
});

test("renderer localizes city copy, H1, and WhatsApp message", () => {
  const barcelona = renderCommercialPage({ locale: "es", citySlug: "barcelona" });
  assert.match(barcelona, /<h1[^>]*>Clases de alemán online en Barcelona<\/h1>/);
  assert.match(barcelona, /Barcelona/);
  assert.match(barcelona, /informarme%20sobre%20clases%20de%20alem%C3%A1n%20en%20Barcelona/);

  const german = renderCommercialPage({ locale: "de", citySlug: "barcelona" });
  const english = renderCommercialPage({ locale: "en", citySlug: "barcelona" });
  assert.match(german, /<h1[^>]*>Online-Deutschunterricht in Barcelona<\/h1>/);
  assert.match(english, /<h1[^>]*>Online German lessons in Barcelona<\/h1>/);
  assert.doesNotMatch(german, /Clases de alemán online/);
  assert.doesNotMatch(english, /Clases de alemán online/);
  assert.match(german, /wa\.me\/34644220965/);
  assert.match(english, /wa\.me\/34644220965/);
});

test("commercial output matrix covers three national and 75 city routes", () => {
  assert.equal(commercialOutputs.length, 78);
  assert.equal(commercialOutputs.filter((output) => output.citySlug === undefined).length, 3);
  assert.equal(new Set(commercialOutputs.map(({ locale, citySlug }) => `${locale}:${citySlug || "national"}`)).size, 78);
});

test("generated commercial routes expose reciprocal alternates and city area data", () => {
  const html = fs.readFileSync("barcelona/index.html", "utf8");
  assert.match(html, /hreflang="de" href="https:\/\/www\.samuelcoachdealeman\.com\/de\/barcelona\//);
  assert.match(html, /"areaServed"\s*:\s*\[\s*"Barcelona"\s*,\s*"Cataluña"\s*\]/);
  assert.match(fs.readFileSync("sitemap.xml", "utf8"), /https:\/\/www\.samuelcoachdealeman\.com\/en\/barcelona\//);
});
