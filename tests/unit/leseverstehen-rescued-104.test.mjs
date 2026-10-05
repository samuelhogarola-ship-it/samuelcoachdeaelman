import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const bank = require('../../assets/js/leseverstehen-data.js');
const rescued = {
  A1: ['der-wochenplan', 'lisas-lieblingsfarben'],
  A2: ['der-sprachkurs', 'das-familientreffen', 'sabines-verlorener-schluessel'],
  B1: ['der-schueleraustausch', 'die-neue-wohngemeinschaft', 'das-strassenfest-im-viertel'],
  B2: ['die-mietpreisbremse', 'rentensystem-und-demografischer-wandel', 'cybermobbing-und-digitale-verantwortung', 'digitale-kluft-zwischen-generationen']
};

test('PR 104 rescue preserves the established Ben and Julia routes and creates distinct Lisa and Sabine stories', () => {
  assert.equal(new Set(bank.map((item) => item.slug)).size, bank.length);
  const item = (slug) => bank.find((entry) => entry.slug === slug);
  assert.match(item('meine-lieblingsfarbe').texto, /Ich heiße Ben/);
  assert.match(item('der-verlorene-schluessel').texto, /Julia/);
  assert.match(item('lisas-lieblingsfarben').texto, /Lisa/);
  assert.match(item('sabines-verlorener-schluessel').texto, /Sabine/);
  assert.notEqual(item('meine-lieblingsfarbe').texto, item('lisas-lieblingsfarben').texto);
  assert.notEqual(item('der-verlorene-schluessel').texto, item('sabines-verlorener-schluessel').texto);
  assert.equal(item('bens-lieblingsfarbe'), undefined);
  assert.equal(item('julias-verlorener-schluessel'), undefined);
});

test('all twelve rescued PR 104 readings meet the editorial contract', () => {
  const ranges = { A1: [75, 130], A2: [110, 180], B1: [150, 230], B2: [170, 250] };
  assert.equal(Object.values(rescued).flat().length, 12);
  for (const [level, slugs] of Object.entries(rescued)) {
    for (const slug of slugs) {
      const item = bank.find((entry) => entry.slug === slug);
      assert.ok(item, slug);
      assert.equal(item.nivel, level, slug);
      const words = item.texto.trim().split(/\s+/u).length;
      assert.ok(words >= ranges[level][0] && words <= ranges[level][1], `${slug}: ${words} words`);
      assert.equal(item.preguntas.length, 5, slug);
      assert.equal(new Set(item.preguntas.map((question) => question.enunciado)).size, 5, slug);
      assert.ok(item.preguntas.every((question) => question.enunciado.trim() && typeof question.respuesta === 'boolean'), slug);
      assert.equal(new Set(item.preguntas.map((question) => question.respuesta)).size, 2, slug);
    }
  }
});
