import test from "node:test";
import assert from "node:assert/strict";
import {
  cities,
  citySlugs,
  getCommercialRoute,
  localeCopy,
  locales,
  nationalCopy
} from "../../scripts/commercial-page-data.mjs";

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
