import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const progress = require("../../assets/js/wordmaker-progress.js");

function createMemoryStorage(initialEntries = {}) {
  const entries = new Map(Object.entries(initialEntries));
  return {
    getItem(key) {
      return entries.has(key) ? entries.get(key) : null;
    },
    setItem(key, value) {
      entries.set(key, String(value));
    },
  };
}

test("starts with five lives and zeroed progress", () => {
  const store = progress.createProgressStore(createMemoryStorage());
  const state = store.getState();

  assert.equal(state.lives, 5);
  assert.equal(state.score, 0);
  assert.equal(state.streak, 0);
  assert.equal(state.bestScore, 0);
  assert.equal(state.bestStreak, 0);
  assert.equal(state.completedWords, 0);
});

test("a correct answer scores by word length and grows the streak", () => {
  const initial = progress.createProgressStore(createMemoryStorage()).getState();
  const first = progress.applyCorrectAnswer(initial, 4);
  const second = progress.applyCorrectAnswer(first, 7);

  assert.equal(first.score, 40);
  assert.equal(first.streak, 1);
  assert.equal(first.bestScore, 40);
  assert.equal(first.bestStreak, 1);
  assert.equal(first.completedWords, 1);
  assert.equal(second.score, 110);
  assert.equal(second.streak, 2);
  assert.equal(second.bestScore, 110);
  assert.equal(second.bestStreak, 2);
  assert.equal(initial.score, 0, "answer transitions do not mutate their input");
});

test("a wrong answer costs one life and resets the streak", () => {
  const state = progress.applyCorrectAnswer(
    progress.applyCorrectAnswer(progress.createProgressStore().getState(), 5),
    3,
  );
  const next = progress.applyWrongAnswer(state);

  assert.equal(next.lives, 4);
  assert.equal(next.streak, 0);
  assert.equal(next.score, state.score);
  assert.equal(next.completedWords, state.completedWords);
  assert.equal(progress.applyWrongAnswer({ ...next, lives: 0 }).lives, 0);
});

test("persists state and reloads it from compatible storage", () => {
  const storage = createMemoryStorage();
  const store = progress.createProgressStore(storage);
  const saved = progress.applyCorrectAnswer(store.getState(), 6);

  store.setState(saved);

  const reloaded = progress.createProgressStore(storage);
  assert.deepEqual(reloaded.getState(), saved);
});

test("reload refreshes an existing store from storage", () => {
  const storage = createMemoryStorage();
  const store = progress.createProgressStore(storage);
  const saved = progress.applyCorrectAnswer(store.getState(), 5);

  storage.setItem(progress.STORAGE_KEY, JSON.stringify(saved));

  assert.deepEqual(store.reload(), saved);
});

test("falls back to a fresh state when storage is absent or corrupt", () => {
  const absent = progress.createProgressStore(null);
  assert.equal(absent.getState().lives, 5);

  const corrupt = progress.createProgressStore(createMemoryStorage({
    "wordmaker-progress": "{not-json",
  }));
  assert.equal(corrupt.getState().lives, 5);
  assert.equal(corrupt.getState().score, 0);

  const unavailable = progress.createProgressStore({
    getItem() {
      throw new Error("storage unavailable");
    },
    setItem() {
      throw new Error("storage unavailable");
    },
  });
  assert.doesNotThrow(() => unavailable.setState(progress.applyWrongAnswer(unavailable.getState())));
  assert.equal(unavailable.getState().lives, 4);
});

test("recovers safe defaults per field from a partial state", () => {
  const storage = createMemoryStorage({
    "wordmaker-progress": JSON.stringify({
      version: 1,
      score: "not-a-score",
      bestScore: 25,
      streak: null,
      bestStreak: "not-a-streak",
      completedWords: 3,
      preferences: "not-preferences",
    }),
  });

  const state = progress.createProgressStore(storage).getState();

  assert.equal(state.lives, 5);
  assert.equal(state.score, 0);
  assert.equal(state.bestScore, 25);
  assert.equal(state.streak, 0);
  assert.equal(state.bestStreak, 0);
  assert.equal(state.completedWords, 3);
  assert.deepEqual(state.preferences, {});

  const invalidLives = progress.createProgressStore(createMemoryStorage({
    "wordmaker-progress": JSON.stringify({ version: 1, lives: "not-lives" }),
  })).getState();
  assert.equal(invalidLives.lives, 5);
});

test("local reward adapter exposes a replaceable request interface", async () => {
  const adapter = progress.createLocalRewardAdapter();

  assert.equal(typeof adapter.requestReward, "function");
  const reward = await adapter.requestReward();
  assert.deepEqual(reward, { rewarded: true, provider: "local-demo" });
  assert.equal(progress.refillLives({ ...progress.createProgressStore().getState(), lives: 0 }, reward).lives, 5);
});
