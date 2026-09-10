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

test("builds a ten-item B1 review mission with every mode represented twice", () => {
  const exercises = engine.validateBank(bank).exercises;
  const mission = engine.createMission(exercises, {
    level: "B1",
    recentIds: [],
    mastery: {},
    random: () => 0.25,
  });

  assert.equal(mission.level, "B1");
  assert.equal(mission.exercises.length, 10);
  assert.equal(new Set(mission.exercises.map((item) => item.id)).size, 10);
  for (const mode of engine.MODES) {
    assert.ok(mission.exercises.filter((item) => item.mode === mode).length >= 2);
  }
});

test("rejects levels without their own complete mission", () => {
  const exercises = engine.validateBank(bank).exercises;

  assert.throws(() => engine.createMission(exercises, { level: "A1" }), /level unavailable/i);
  assert.throws(() => engine.createMission(exercises, { level: "A2" }), /level unavailable/i);
  assert.throws(() => engine.createMission(exercises, { level: "B2" }), /level unavailable/i);
});

test("scores correct answers and caps the consecutive-answer bonus", () => {
  const mission = engine.createMission(engine.validateBank(bank).exercises, { level: "B1", random: () => 0 });
  let state = engine.createMissionState(mission);

  for (let index = 0; index < 7; index += 1) {
    const exercise = mission.exercises[index];
    const transition = engine.submitAnswer(state, exercise, engine.getCanonicalResponse(exercise));
    state = transition.state;
    assert.equal(transition.feedback.kind, "correct");
    assert.equal(transition.shouldAdvance, true);
  }

  assert.equal(state.score, 900);
  assert.equal(state.streak, 7);
  assert.equal(state.bestStreak, 7);
  assert.equal(state.lives, 3);
});

test("shows a hint on the first error and reveals plus queues a retry on the second", () => {
  const mission = engine.createMission(engine.validateBank(bank).exercises, { level: "B1", random: () => 0 });
  const initial = engine.createMissionState(mission);
  const exercise = mission.exercises[0];

  const first = engine.submitAnswer(initial, exercise, "wrong");
  assert.equal(first.state.lives, 2);
  assert.equal(first.state.streak, 0);
  assert.equal(first.feedback.kind, "hint");
  assert.equal(first.shouldAdvance, false);

  const second = engine.submitAnswer(first.state, exercise, "still-wrong");
  assert.equal(second.state.lives, 2);
  assert.equal(second.feedback.kind, "reveal");
  assert.equal(second.shouldAdvance, true);
  assert.deepEqual(second.state.pendingRetries, [exercise.id]);
  assert.equal(second.state.results[0].status, "incorrect");
});

test("skip consumes one life, reveals the answer and records a retry", () => {
  const mission = engine.createMission(engine.validateBank(bank).exercises, { level: "B1", random: () => 0 });
  const initial = engine.createMissionState(mission);
  const exercise = mission.exercises[0];
  const transition = engine.skipExercise(initial, exercise);

  assert.equal(transition.state.lives, 2);
  assert.equal(transition.feedback.kind, "reveal");
  assert.equal(transition.shouldAdvance, true);
  assert.deepEqual(transition.state.pendingRetries, [exercise.id]);
  assert.equal(transition.state.results[0].status, "skipped");
});

test("builds a diagnosis from scored challenges without treating retries as new marks", () => {
  const mission = engine.createMission(engine.validateBank(bank).exercises, { level: "B1", random: () => 0 });
  let state = engine.createMissionState(mission);
  const first = mission.exercises[0];
  const second = mission.exercises[1];

  state = engine.submitAnswer(state, first, engine.getCanonicalResponse(first)).state;
  state = engine.skipExercise(state, second).state;
  const diagnosis = engine.buildDiagnosis(state);

  assert.equal(diagnosis.total, 2);
  assert.equal(diagnosis.correct, 1);
  assert.equal(diagnosis.byMode.satzbau.total, 2);
  assert.equal(diagnosis.byMode.satzbau.percentage, 50);
  assert.equal(diagnosis.weakTopics[0].topic, second.topic);
  assert.equal(diagnosis.weakTopics[0].sourceUrl, second.source.url);
});
