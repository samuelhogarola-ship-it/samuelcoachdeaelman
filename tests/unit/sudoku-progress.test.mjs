import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const progress = require("../../assets/js/sudoku-progress.js");

test("creates and safely parses a versioned five-life state", () => {
  const initial = progress.createInitialState();
  assert.equal(initial.version, 1);
  assert.equal(initial.lives, 5);
  assert.deepEqual(initial.gateProgress, { A1: 0, A2: 0, B1: 0, B2: 0 });
  assert.deepEqual(progress.parseState("not json"), initial);

  const parsed = progress.parseState(JSON.stringify({
    ...initial,
    lives: 99,
    recentQuestionIds: ["one", "two"],
  }));
  assert.equal(parsed.lives, 5);
  assert.deepEqual(parsed.recentQuestionIds, ["one", "two"]);
});

test("only first completions count and lower elapsed time becomes the best", () => {
  const initial = progress.createInitialState();
  const first = progress.recordCompletion(initial, "a1-01", "A1", 120);
  const replay = progress.recordCompletion(first.state, "a1-01", "A1", 90);
  const slowerReplay = progress.recordCompletion(replay.state, "a1-01", "A1", 150);

  assert.equal(first.openedGate, false);
  assert.equal(replay.state.gateProgress.A1, 1);
  assert.equal(replay.state.completed["a1-01"].bestSeconds, 90);
  assert.equal(slowerReplay.state.completed["a1-01"].bestSeconds, 90);
  assert.equal(initial.gateProgress.A1, 0, "input state stays immutable");
});

test("opens a persistent gate on every third new completion", () => {
  let state = progress.createInitialState();
  state = progress.recordCompletion(state, "a1-01", "A1", 100).state;
  state = progress.recordCompletion(state, "a1-02", "A1", 100).state;
  const third = progress.recordCompletion(state, "a1-03", "A1", 100);

  assert.equal(third.openedGate, true);
  assert.deepEqual(third.state.pendingGate, { level: "A1", question: null });
  assert.equal(third.state.gateProgress.A1, 0);
  assert.equal(progress.canStartPuzzle(third.state), false);
  assert.deepEqual(progress.parseState(JSON.stringify(third.state)).pendingGate, third.state.pendingGate);

  let unlocked = progress.answerGate(third.state, true, "grammar:17");
  assert.equal(unlocked.pendingGate, null);
  assert.equal(progress.canStartPuzzle(unlocked), true);

  unlocked.recentQuestionIds = [];
  for (const id of ["a1-04", "a1-05", "a1-06"]) {
    unlocked = progress.recordCompletion(unlocked, id, "A1", 100).state;
  }
  assert.equal(unlocked.pendingGate.level, "A1");
});

test("wrong answers consume lives while correct answers unlock the gate", () => {
  const gated = {
    ...progress.createInitialState(),
    pendingGate: { level: "B1", question: { id: "meaning:9" } },
  };
  let state = progress.answerGate(gated, false, "meaning:9");
  assert.equal(state.lives, 4);
  assert.equal(state.pendingGate.level, "B1");
  assert.deepEqual(state.recentQuestionIds, ["meaning:9"]);

  for (let index = 0; index < 4; index += 1) {
    state = progress.answerGate(state, false, `wrong:${index}`);
  }
  assert.equal(state.lives, 0);
  assert.equal(progress.canStartPuzzle(state), false);

  const correct = progress.answerGate({ ...gated, lives: 2 }, true, "meaning:9");
  assert.equal(correct.lives, 2);
  assert.equal(correct.pendingGate, null);
});

test("refills only after a confirmed local reward", async () => {
  const empty = { ...progress.createInitialState(), lives: 0 };
  assert.equal(progress.refillLives(empty, { rewarded: false }).lives, 0);

  const provider = progress.createLocalRewardedLifeProvider();
  const reward = await provider.show();
  assert.deepEqual(reward, { rewarded: true });
  assert.equal(progress.refillLives(empty, reward).lives, 5);
});
