import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const engine = require("../../assets/js/grammatik-mission-engine.js");
const bank = require("../../assets/data/grammatik-mission-exercises.json");

test("accepts the reviewed ten-exercise bank", () => {
  const result = engine.validateBank(bank);

  assert.equal(result.version, 1);
  assert.equal(result.exercises.length, 10);
  assert.deepEqual(new Set(result.exercises.map((item) => item.mode)), new Set(engine.MODES));
  assert.ok(result.exercises.every((item) => item.status === "reviewed"));
});

test("rejects malformed, duplicate and non-reviewed exercises", () => {
  assert.throws(() => engine.validateBank(null), /invalid bank/i);
  assert.throws(() => engine.validateBank({ version: 2, exercises: [] }), /invalid bank/i);
  assert.throws(() => engine.validateBank({ version: 1, exercises: [{ id: "x", mode: "kasus", status: "draft" }] }), /invalid exercise/i);

  const first = bank.exercises[0];
  assert.throws(() => engine.validateBank({ version: 1, exercises: [first, first] }), /duplicate exercise id/i);
});

test("validates every interaction using stable answer identifiers", () => {
  const exercises = engine.validateBank(bank).exercises;
  const byMode = Object.fromEntries(engine.MODES.map((mode) => [mode, exercises.find((item) => item.mode === mode)]));

  assert.equal(engine.validateAnswer(byMode.satzbau, byMode.satzbau.canonicalOrder), true);
  assert.equal(engine.validateAnswer(byMode.satzbau, byMode.satzbau.canonicalOrder.slice().reverse()), false);
  assert.equal(engine.validateAnswer(byMode.fehlerjaeger, byMode.fehlerjaeger.answer), true);
  assert.equal(engine.validateAnswer(byMode.fehlerjaeger, "wrong-option"), false);
  assert.equal(engine.validateAnswer(byMode.kasus, byMode.kasus.answer), true);
  assert.equal(engine.validateAnswer(byMode.kasus, "wrong-option"), false);
  assert.equal(engine.validateAnswer(byMode.verb, byMode.verb.answers), true);
  assert.equal(engine.validateAnswer(byMode.verb, ["wrong-option"]), false);
});

test("accepts an explicitly declared alternative Satzbau order", () => {
  const exercise = {
    ...bank.exercises.find((item) => item.mode === "satzbau"),
    acceptedOrders: [["subject", "verb", "local", "temporal"]],
  };

  assert.equal(engine.validateAnswer(exercise, ["subject", "verb", "local", "temporal"]), true);
});
