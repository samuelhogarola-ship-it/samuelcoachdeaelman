import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const bank = require('../../assets/js/leseverstehen-data.js');
const rescued = {
  A1: ['beim-baecker', 'das-postamt'],
  A2: ['der-campingurlaub', 'taschengeld'],
  B1: ['jugendherbergen-in-deutschland', 'schlafprobleme-bei-jugendlichen'],
  B2: ['altersarmut-in-deutschland', 'buergerbeteiligung-und-demokratie']
};

test('reading data used by the browser has no duplicate routes', () => {
  assert.equal(new Set(bank.map((entry) => entry.slug)).size, bank.length);
});

test('rescued reading batch respects level, length and question contracts', () => {
  const ranges = { A1: [75, 130], A2: [110, 180], B1: [150, 230], B2: [170, 250] };
  for (const [level, slugs] of Object.entries(rescued)) {
    for (const slug of slugs) {
      const item = bank.find((entry) => entry.slug === slug);
      assert.ok(item, slug);
      assert.equal(item.nivel, level, slug);
      const length = item.texto.trim().split(/\s+/u).length;
      assert.ok(length >= ranges[level][0] && length <= ranges[level][1], `${slug}: ${length} words`);
      assert.equal(item.preguntas.length, 5, slug);
      assert.equal(new Set(item.preguntas.map((question) => question.enunciado)).size, 5, slug);
      assert.ok(item.preguntas.every((question) => question.enunciado.trim() && typeof question.respuesta === 'boolean'), slug);
      assert.equal(new Set(item.preguntas.map((question) => question.respuesta)).size, 2, slug);
    }
  }
});
