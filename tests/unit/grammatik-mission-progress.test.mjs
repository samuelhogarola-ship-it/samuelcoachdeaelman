import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const progress = require("../../assets/js/grammatik-mission-progress.js");

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
  };
}

function sampleResults(count) {
  const modes = ["satzbau", "fehlerjaeger", "kasus", "verb"];
  return Array.from({ length: count }, (_, index) => ({
    exerciseId: `exercise-${index}`,
    mode: modes[index % modes.length],
    topic: `topic-${index % 3}`,
    correct: index % 3 !== 0,
    status: index % 3 === 0 ? "incorrect" : "correct",
    retry: false,
  }));
}

test("creates and restores safe versioned progress", () => {
  const storage = memoryStorage();
  const initial = progress.createDefaultProgress();

  assert.equal(initial.version, 1);
  assert.equal(initial.preferredLevel, "B1");
  assert.equal(initial.bestScore, 0);
  assert.equal(progress.saveProgress(storage, initial), true);
  assert.deepEqual(progress.loadProgress(storage), initial);
});

test("falls back without throwing for absent, corrupt or unavailable storage", () => {
  assert.deepEqual(progress.loadProgress(null), progress.createDefaultProgress());
  assert.deepEqual(progress.loadProgress(memoryStorage({ [progress.STORAGE_KEY]: "{" })), progress.createDefaultProgress());
  assert.equal(progress.saveProgress({ setItem() { throw new Error("blocked"); } }, progress.createDefaultProgress()), false);
});

test("sanitizes partial documents and ignores personal or unknown fields", () => {
  const storage = memoryStorage({
    [progress.STORAGE_KEY]: JSON.stringify({
      version: 1,
      preferredLevel: "B2",
      bestScore: -40,
      bestStreak: 6,
      email: "should-not-survive@example.com",
      unknown: true,
    }),
  });
  const restored = progress.loadProgress(storage);

  assert.equal(restored.preferredLevel, "B2");
  assert.equal(restored.bestScore, 0);
  assert.equal(restored.bestStreak, 6);
  assert.equal(Object.hasOwn(restored, "email"), false);
  assert.equal(Object.hasOwn(restored, "unknown"), false);
});

test("records a mission and caps recent, mode and topic histories", () => {
  const initial = progress.createDefaultProgress();
  const missionState = {
    level: "B1",
    score: 740,
    bestStreak: 4,
    results: sampleResults(80),
  };
  const diagnosis = { percentage: 66 };
  const recorded = progress.recordMission(initial, missionState, diagnosis);

  assert.equal(recorded.bestScore, 740);
  assert.equal(recorded.bestStreak, 4);
  assert.equal(recorded.lastDiagnosis.percentage, 66);
  assert.ok(recorded.recentExerciseIds.length <= 30);
  assert.ok(Object.values(recorded.modeHistory).every((items) => items.length <= 20));
  assert.ok(Object.values(recorded.topicHistory).every((items) => items.length <= 20));
  assert.equal(recorded.currentMission, null);
  assert.deepEqual(initial, progress.createDefaultProgress(), "recordMission must not mutate its input");
});

test("round-trips a resumable mission without trusting invalid shapes", () => {
  const initial = progress.createDefaultProgress();
  initial.currentMission = {
    level: "B1",
    exerciseIds: ["one", "two"],
    index: 1,
    score: 100,
    lives: 2,
    streak: 1,
    bestStreak: 1,
    attempts: {},
    results: [],
    pendingRetries: [],
    completed: false,
  };
  const storage = memoryStorage();
  progress.saveProgress(storage, initial);

  assert.deepEqual(progress.loadProgress(storage).currentMission, initial.currentMission);

  storage.setItem(progress.STORAGE_KEY, JSON.stringify({ ...initial, currentMission: { level: "B1" } }));
  assert.equal(progress.loadProgress(storage).currentMission, null);
});
