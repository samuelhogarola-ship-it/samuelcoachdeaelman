import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

import {
  buildQuestionBank,
  getLevelForThema,
  normalizeArticle,
  normalizeType,
} from "../../scripts/generate-sudoku-question-bank.mjs";

const require = createRequire(import.meta.url);
const questions = require("../../assets/js/sudoku-questions.js");

const sourceWords = [
  { id: 1, de: "Tisch", es: "mesa", artikel: "der", type: "Nomen", thema: 1 },
  { id: 2, de: "Lampe", es: "lámpara", artikel: "die", type: "noun", thema: 1 },
  { id: 3, de: "Haus", es: "casa", artikel: "das", type: "Substantiv", thema: 1 },
  { id: 4, de: "Stuhl", es: "silla", artikel: "der", type: "Nomen", thema: 1 },
  { id: 5, de: "gehen", es: "ir", type: "Verb", thema: 1 },
  { id: 6, de: "schnell", es: "rápido", type: "Adjektiv", thema: 1 },
  { id: 7, de: "Guten Morgen", es: "buenos días", type: "Redemittel", thema: 1 },
  { id: 8, de: "Arbeit", es: "trabajo", artikel: "die", type: "Nomen", thema: 11 },
  { id: 9, de: "Umwelt", es: "medio ambiente", artikel: "die", type: "Nomen", thema: 21 },
  { id: 10, de: "Gerechtigkeit", es: "justicia", artikel: "die", type: "Nomen", thema: 40 },
  { id: 11, de: "Tisch", es: "mesa", artikel: "der", type: "Nomen", thema: 1 },
  { id: 12, de: "", es: "vacío", artikel: "der", type: "Nomen", thema: 1 },
];

test("normalizes Vokabel Lab levels, types and articles", () => {
  assert.equal(getLevelForThema(1), "A1");
  assert.equal(getLevelForThema(10), "A1");
  assert.equal(getLevelForThema(11), "A2");
  assert.equal(getLevelForThema(21), "B1");
  assert.equal(getLevelForThema(40), "B2");
  assert.equal(getLevelForThema(0), null);
  assert.equal(normalizeType("Substantiv"), "Nomen");
  assert.equal(normalizeType("adjective"), "Adjektiv/Adverb");
  assert.equal(normalizeType("Redemittel"), "Ausdruck");
  assert.equal(normalizeArticle("DER"), "der");
  assert.equal(normalizeArticle("ein"), "");
});

test("builds a minimal, deduplicated bank grouped by level", () => {
  const bank = buildQuestionBank(sourceWords, "fixture");

  assert.equal(bank.version, 1);
  assert.equal(bank.source, "fixture");
  assert.equal(bank.levels.A1.length, 7);
  assert.equal(bank.levels.A2.length, 1);
  assert.equal(bank.levels.B1.length, 1);
  assert.equal(bank.levels.B2.length, 1);
  assert.deepEqual(Object.keys(bank.levels.A1[0]), [
    "id", "de", "es", "artikel", "type", "thema", "level",
  ]);
});

test("creates article, grammar and meaning questions with unique options", () => {
  const bank = buildQuestionBank(sourceWords, "fixture");
  const zero = () => 0;
  const article = questions.createQuestion(bank, "A1", [], zero, "article");
  const grammar = questions.createQuestion(bank, "A1", [], zero, "grammar");
  const meaning = questions.createQuestion(bank, "A1", [], zero, "meaning");

  assert.equal(article.category, "article");
  assert.deepEqual(new Set(article.options), new Set(["der", "die", "das"]));
  assert.equal(questions.isCorrect(article, article.answer), true);
  assert.equal(questions.isCorrect(article, "incorrecta"), false);

  assert.equal(grammar.category, "grammar");
  assert.equal(grammar.options.length, 4);
  assert.ok(grammar.options.includes(grammar.answer));

  assert.equal(meaning.category, "meaning");
  assert.equal(meaning.options.length, 4);
  assert.equal(new Set(meaning.options).size, 4);
  assert.ok(meaning.options.includes(meaning.answer));
});

test("avoids recent questions and falls back when a category is unavailable", () => {
  const bank = buildQuestionBank(sourceWords, "fixture");
  const first = questions.createQuestion(bank, "A2", [], () => 0, "meaning");
  const next = questions.createQuestion(bank, "A2", [first.id], () => 0, "meaning");

  assert.ok(first);
  assert.ok(next);
  assert.notEqual(next.id, first.id, "recent question should not repeat when another category exists");
  assert.notEqual(next.category, "meaning", "meaning falls back without enough distractors");
});
