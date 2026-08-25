import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const engine = require("../../assets/js/wordmaker-engine.js");

const entries = [
  { id: "haus", de: "das Haus", es: "casa", artikel: "", type: "Nomen", level: "A1" },
  { id: "maus", de: "die Maus", es: "ratón", artikel: "", type: "Nomen", level: "A1" },
  { id: "haut", de: "die Haut", es: "piel", artikel: "", type: "Nomen", level: "A1" },
  { id: "auge", de: "das Auge", es: "ojo", artikel: "", type: "Nomen", level: "A1" },
];

test("prepares playable words without changing transliterated letter sequences", () => {
  const prepared = engine.prepareEntries([
    { id: "1", de: "der Käse", es: "queso", artikel: "", type: "Nomen", level: "A1" },
    { id: "2", de: "die Baer", es: "oso", artikel: "", type: "Nomen", level: "A1" },
    { id: "3", de: "das Oel", es: "aceite", artikel: "", type: "Nomen", level: "A1" },
    { id: "4", de: "der Mueller", es: "molinero", artikel: "", type: "Nomen", level: "A1" },
    { id: "5", de: "die Strasse", es: "calle", artikel: "", type: "Nomen", level: "A1" },
  ]);

  assert.deepEqual(prepared.map((entry) => entry.word), ["käse", "baer", "oel", "mueller", "strasse"]);
  assert.deepEqual(prepared.map((entry) => entry.artikel), ["der", "die", "das", "der", "die"]);
  assert.deepEqual(prepared.map((entry) => entry.letters), [
    ["k", "ä", "s", "e"],
    ["b", "a", "e", "r"],
    ["o", "e", "l"],
    ["m", "u", "e", "l", "l", "e", "r"],
    ["s", "t", "r", "a", "s", "s", "e"],
  ]);
});

test("discards expressions, alternatives, punctuation, numbers and invalid lengths", () => {
  const prepared = engine.prepareEntries([
    { id: "expression", de: "am Morgen", es: "por la mañana", artikel: "", type: "Ausdruck", level: "A1" },
    { id: "slash", de: "anfangen / beginnen", es: "empezar", artikel: "", type: "Verb", level: "A1" },
    { id: "space", de: "gute Nacht", es: "buenas noches", artikel: "", type: "Phrase", level: "A1" },
    { id: "number", de: "U2", es: "grupo", artikel: "", type: "Nomen", level: "A1" },
    { id: "punctuation", de: "Bahn!", es: "tren", artikel: "", type: "Nomen", level: "A1" },
    { id: "short", de: "Öl", es: "aceite", artikel: "", type: "Nomen", level: "A1" },
    { id: "long", de: "abcdefghijklmn", es: "largo", artikel: "", type: "Nomen", level: "A1" },
    { id: "valid", de: "der Baum", es: "árbol", artikel: "", type: "Nomen", level: "A1" },
  ]);

  assert.deepEqual(prepared.map((entry) => entry.id), ["valid"]);
  assert.equal(prepared[0].word, "baum");
});

test("accepts umlaut and Eszett transliterations when validating answers", () => {
  assert.equal(engine.normalizeAnswer(" ÄPFEL "), "aepfel");
  assert.equal(engine.normalizeAnswer("Straße"), "strasse");
  assert.equal(engine.normalizeAnswer("MÜLLER"), "mueller");
  assert.equal(engine.isAnswerCorrect("aepfel", "Äpfel"), true);
  assert.equal(engine.isAnswerCorrect("strasse", "Straße"), true);
  assert.equal(engine.isAnswerCorrect("mueller", "Müller"), true);
  assert.equal(engine.isAnswerCorrect("apfel", "Äpfel"), false);
});

test("rejects empty answers and missing or empty solutions", () => {
  assert.equal(engine.isAnswerCorrect("", "Haus"), false);
  assert.equal(engine.isAnswerCorrect(" ", "Haus"), false);
  assert.equal(engine.isAnswerCorrect(null, "Haus"), false);
  assert.equal(engine.isAnswerCorrect("Haus", ""), false);
  assert.equal(engine.isAnswerCorrect("Haus", null), false);
  assert.equal(engine.isAnswerCorrect("", undefined), false);
  assert.equal(engine.isAnswerCorrect("", {}), false);
});

function assertConnectedPuzzle(puzzle, expectedCount) {
  assert.ok(puzzle);
  assert.equal(puzzle.words.length, expectedCount);
  assert.ok(puzzle.width > 0);
  assert.ok(puzzle.height > 0);
  assert.equal(puzzle.cells.length, new Set(puzzle.cells.map((cell) => `${cell.x},${cell.y}`)).size);
  assert.ok(puzzle.cells.some((cell) => cell.words.length > 1), "words must cross");

  const byWord = new Map(puzzle.words.map((word) => [word.id, word]));
  const seen = new Set([puzzle.words[0].id]);
  const pending = [puzzle.words[0].id];
  while (pending.length) {
    const current = byWord.get(pending.shift());
    for (const cell of current.cells) {
      for (const wordId of cell.words) {
        if (!seen.has(wordId)) {
          seen.add(wordId);
          pending.push(wordId);
        }
      }
    }
  }
  assert.equal(seen.size, expectedCount, "all words must form one connected component");
}

test("builds connected puzzles with the configured word count", () => {
  const prepared = engine.prepareEntries(entries);
  assert.deepEqual(engine.DIFFICULTY_WORD_COUNTS, { easy: 2, medium: 3, hard: 4 });

  assertConnectedPuzzle(engine.buildPuzzle(prepared, "easy", () => 0.2), 2);
  assertConnectedPuzzle(engine.buildPuzzle(prepared, "medium", () => 0.4), 3);
  assertConnectedPuzzle(engine.buildPuzzle(prepared, "hard", () => 0.6), 4);
});

test("only shares cells between perpendicular words", () => {
  const puzzle = engine.buildPuzzle([
    { id: "weinglas", de: "Weinglas", es: "copa de vino", artikel: "das", type: "Nomen", level: "A1" },
    { id: "gast", de: "Gast", es: "invitado", artikel: "der", type: "Nomen", level: "A1" },
    { id: "teller", de: "Teller", es: "plato", artikel: "der", type: "Nomen", level: "A1" },
    { id: "topf", de: "Topf", es: "olla", artikel: "der", type: "Nomen", level: "A1" },
  ], "hard", () => 0);

  assert.ok(puzzle);
  const byWord = new Map(puzzle.words.map((word) => [word.id, word]));
  const sharedCells = puzzle.cells.filter((cell) => cell.words.length > 1);
  assert.ok(sharedCells.length > 0);
  for (const cell of sharedCells) {
    const directions = cell.words.map((wordId) => byWord.get(wordId).direction).sort();
    assert.deepEqual(directions, ["horizontal", "vertical"], `invalid crossing at ${cell.x},${cell.y}`);
  }
});

test("returns null for an invalid difficulty", () => {
  assert.equal(engine.buildPuzzle(entries, "expert", () => 0), null);
});

test("returns null when the corpus cannot form a connected puzzle", () => {
  const impossible = [
    { id: "axt", de: "Axt", es: "hacha", artikel: "die", type: "Nomen", level: "A1" },
    { id: "oede", de: "Öde", es: "árido", artikel: "", type: "Adjektiv", level: "A1" },
  ];

  assert.equal(engine.buildPuzzle(impossible, "easy", () => 0), null);
});
