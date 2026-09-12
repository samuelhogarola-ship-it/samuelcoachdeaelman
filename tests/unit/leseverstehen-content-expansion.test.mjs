import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const expected = {
  A1: ['fruehstueck-am-sonntag', 'in-der-bibliothek', 'der-neue-rucksack', 'besuch-bei-oma', 'ein-regentag', 'auf-dem-spielplatz', 'meine-geburtstagsfeier', 'der-weg-zur-arbeit', 'schwimmkurs-am-samstag', 'ein-paket-fuer-lena'],
  A2: ['umzug-in-die-neue-wohnung', 'fahrradpanne-auf-dem-weg', 'kochabend-mit-freunden', 'ein-kurs-an-der-volkshochschule', 'verspaetung-am-bahnhof', 'wochenmarkt-ohne-plastik', 'praktikum-im-tierheim', 'eine-ueberraschungsparty', 'wandertag-mit-umweg', 'handy-im-fundbuero'],
  B1: ['wohngemeinschaft-mit-regeln', 'ehrenamt-in-der-stadtbibliothek', 'digitale-pause-am-wochenende', 'ausbildung-oder-studium', 'beschwerde-im-hotel', 'nachhaltig-reisen', 'projektwoche-an-der-schule', 'arbeiten-im-homeoffice', 'ein-familienrezept', 'neuanfang-in-einer-fremden-stadt'],
  B2: ['viertagewoche-im-praxistest', 'tourismus-und-lebensqualitaet', 'geraete-laenger-nutzen', 'sprachwandel-durch-soziale-medien', 'urban-gardening', 'personalisierte-werbung', 'pflichtjahr-fuer-junge-menschen', 'bibliotheken-der-zukunft', 'lebensmittelverschwendung-im-handel', 'anonyme-bewerbungen']
};

const bank = JSON.parse(await readFile(new URL('../../assets/data/leseverstehen-data.json', import.meta.url), 'utf8'));
const wordCount = (text) => text.trim().split(/\s+/u).length;

test('incluye diez textos nuevos y únicos en cada nivel', () => {
  const allSlugs = bank.map((item) => item.slug);
  assert.equal(new Set(allSlugs).size, allSlugs.length, 'Hay slugs duplicados');
  for (const [level, slugs] of Object.entries(expected)) {
    assert.equal(slugs.length, 10);
    for (const slug of slugs) {
      const item = bank.find((entry) => entry.slug === slug);
      assert.ok(item, `Falta ${level}/${slug}`);
      assert.equal(item.nivel, level, `${slug} tiene un nivel incorrecto`);
    }
  }
});

test('los textos nuevos cumplen el contrato editorial', () => {
  const ranges = { A1: [75, 130], A2: [110, 180], B1: [150, 230], B2: [170, 250] };
  for (const [level, slugs] of Object.entries(expected)) {
    for (const slug of slugs) {
      const item = bank.find((entry) => entry.slug === slug);
      assert.ok(item, `Falta ${level}/${slug}`);
      assert.ok(item.titulo?.trim());
      assert.ok(item.descripcion?.trim());
      const words = wordCount(item.texto);
      assert.ok(words >= ranges[level][0] && words <= ranges[level][1], `${slug}: ${words} palabras`);
      assert.equal(item.preguntas?.length, 5, `${slug}: deben ser 5 preguntas`);
      assert.ok(item.preguntas.every((q) => q.enunciado?.trim() && typeof q.respuesta === 'boolean'));
      const answers = new Set(item.preguntas.map((q) => q.respuesta));
      assert.equal(answers.size, 2, `${slug}: debe mezclar respuestas verdaderas y falsas`);
    }
  }
});
