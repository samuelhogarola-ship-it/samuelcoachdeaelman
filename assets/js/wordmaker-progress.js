(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.WordmakerProgress = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var VERSION = 1;
  var MAX_LIVES = 5;
  var STORAGE_KEY = "wordmaker-progress";
  var POINTS_PER_LETTER = 10;

  function createInitialState() {
    return {
      version: VERSION,
      lives: MAX_LIVES,
      score: 0,
      streak: 0,
      bestScore: 0,
      bestStreak: 0,
      completedWords: 0,
      preferences: {}
    };
  }

  function numberOrZero(value) {
    var number = Number(value);
    return Number.isFinite(number) ? number : 0;
  }

  function integerAtLeast(value, minimum) {
    return Math.max(minimum, Math.floor(numberOrZero(value)));
  }

  function clampLives(value) {
    return Math.min(MAX_LIVES, integerAtLeast(value, 0));
  }

  function clonePreferences(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return {};
    try {
      return JSON.parse(JSON.stringify(value));
    } catch {
      return {};
    }
  }

  function sanitizeState(value) {
    var initial = createInitialState();
    if (!value || typeof value !== "object" || value.version !== VERSION) return initial;

    var state = {
      version: VERSION,
      lives: clampLives(value.lives),
      score: integerAtLeast(value.score, 0),
      streak: integerAtLeast(value.streak, 0),
      bestScore: integerAtLeast(value.bestScore, 0),
      bestStreak: integerAtLeast(value.bestStreak, 0),
      completedWords: integerAtLeast(value.completedWords, 0),
      preferences: clonePreferences(value.preferences)
    };

    state.bestScore = Math.max(state.bestScore, state.score);
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    return state;
  }

  function parseState(serialized) {
    try {
      return sanitizeState(typeof serialized === "string" ? JSON.parse(serialized) : serialized);
    } catch {
      return createInitialState();
    }
  }

  function cloneState(state) {
    return sanitizeState(state);
  }

  function applyCorrectAnswer(state, wordLength) {
    var next = cloneState(state);
    var length = integerAtLeast(wordLength, 0);
    var points = length * POINTS_PER_LETTER;

    next.score += points;
    next.streak += 1;
    next.bestScore = Math.max(next.bestScore, next.score);
    next.bestStreak = Math.max(next.bestStreak, next.streak);
    next.completedWords += 1;
    return next;
  }

  function applyWrongAnswer(state) {
    var next = cloneState(state);
    next.lives = Math.max(0, next.lives - 1);
    next.streak = 0;
    return next;
  }

  function refillLives(state, reward) {
    var next = cloneState(state);
    if (reward && reward.rewarded === true) next.lives = MAX_LIVES;
    return next;
  }

  function resolveStorage(storage) {
    if (storage && typeof storage.getItem === "function" && typeof storage.setItem === "function") {
      return storage;
    }
    try {
      if (typeof window !== "undefined" && window.localStorage) return window.localStorage;
    } catch {
      return null;
    }
    return null;
  }

  function readStorage(storage) {
    if (!storage) return createInitialState();
    try {
      return parseState(storage.getItem(STORAGE_KEY));
    } catch {
      return createInitialState();
    }
  }

  function writeStorage(storage, state) {
    if (!storage) return;
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Private browsing and quota failures should not interrupt gameplay.
    }
  }

  function createProgressStore(storage) {
    var resolvedStorage = resolveStorage(storage);
    var current = readStorage(resolvedStorage);

    return {
      getState: function () {
        return cloneState(current);
      },
      setState: function (state) {
        current = cloneState(state);
        writeStorage(resolvedStorage, current);
        return cloneState(current);
      },
      reload: function () {
        current = readStorage(resolvedStorage);
        return cloneState(current);
      }
    };
  }

  function createLocalRewardAdapter() {
    return {
      requestReward: function () {
        return Promise.resolve({ rewarded: true });
      }
    };
  }

  return {
    createInitialState: createInitialState,
    parseState: parseState,
    createProgressStore: createProgressStore,
    applyCorrectAnswer: applyCorrectAnswer,
    applyWrongAnswer: applyWrongAnswer,
    refillLives: refillLives,
    createLocalRewardAdapter: createLocalRewardAdapter,
    MAX_LIVES: MAX_LIVES,
    STORAGE_KEY: STORAGE_KEY
  };
}));
