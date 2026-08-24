(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SudokuProgress = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var LEVELS = ["A1", "A2", "B1", "B2"];
  var MAX_LIVES = 5;
  var MAX_RECENT_QUESTIONS = 12;

  function createInitialState() {
    return {
      version: 1,
      lives: MAX_LIVES,
      gateProgress: { A1: 0, A2: 0, B1: 0, B2: 0 },
      pendingGate: null,
      completed: {},
      recentQuestionIds: [],
      current: { level: "A1", puzzleId: "a1-01" },
      attempts: {}
    };
  }

  function clamp(value, minimum, maximum) {
    return Math.min(maximum, Math.max(minimum, Number(value) || 0));
  }

  function validLevel(value) {
    return LEVELS.indexOf(value) >= 0 ? value : "A1";
  }

  function sanitizeQuestion(value) {
    if (!value || typeof value !== "object" || !value.id) return null;
    return JSON.parse(JSON.stringify(value));
  }

  function sanitizeState(value) {
    var initial = createInitialState();
    if (!value || value.version !== 1) return initial;
    var pending = value.pendingGate && typeof value.pendingGate === "object" ? {
      level: validLevel(value.pendingGate.level),
      question: sanitizeQuestion(value.pendingGate.question)
    } : null;
    var gateProgress = {};
    LEVELS.forEach(function (level) {
      gateProgress[level] = Math.floor(clamp(value.gateProgress && value.gateProgress[level], 0, 2));
    });

    return {
      version: 1,
      lives: Math.floor(clamp(value.lives, 0, MAX_LIVES)),
      gateProgress: gateProgress,
      pendingGate: pending,
      completed: value.completed && typeof value.completed === "object" ?
        JSON.parse(JSON.stringify(value.completed)) : {},
      recentQuestionIds: Array.isArray(value.recentQuestionIds) ?
        value.recentQuestionIds.filter(function (id) { return typeof id === "string"; }).slice(-MAX_RECENT_QUESTIONS) : [],
      current: {
        level: validLevel(value.current && value.current.level),
        puzzleId: value.current && typeof value.current.puzzleId === "string" ?
          value.current.puzzleId : initial.current.puzzleId
      },
      attempts: value.attempts && typeof value.attempts === "object" ?
        JSON.parse(JSON.stringify(value.attempts)) : {}
    };
  }

  function parseState(serialized) {
    try {
      return sanitizeState(typeof serialized === "string" ? JSON.parse(serialized) : serialized);
    } catch (error) {
      return createInitialState();
    }
  }

  function cloneState(state) {
    return sanitizeState(state);
  }

  function recordCompletion(state, puzzleId, level, elapsedSeconds) {
    var next = cloneState(state);
    var safeLevel = validLevel(level);
    var elapsed = Math.max(0, Math.floor(Number(elapsedSeconds) || 0));
    var previous = next.completed[puzzleId];
    var isNew = !previous;
    next.completed[puzzleId] = {
      level: safeLevel,
      bestSeconds: previous ? Math.min(previous.bestSeconds, elapsed) : elapsed
    };

    if (!isNew || next.pendingGate) return { state: next, openedGate: false };

    next.gateProgress[safeLevel] += 1;
    if (next.gateProgress[safeLevel] < 3) return { state: next, openedGate: false };

    next.gateProgress[safeLevel] = 0;
    next.pendingGate = { level: safeLevel, question: null };
    return { state: next, openedGate: true };
  }

  function rememberQuestion(state, questionId) {
    if (!questionId) return;
    state.recentQuestionIds = state.recentQuestionIds.filter(function (id) {
      return id !== questionId;
    });
    state.recentQuestionIds.push(questionId);
    state.recentQuestionIds = state.recentQuestionIds.slice(-MAX_RECENT_QUESTIONS);
  }

  function answerGate(state, correct, questionId) {
    var next = cloneState(state);
    if (!next.pendingGate) return next;
    rememberQuestion(next, questionId);
    if (correct) {
      next.pendingGate = null;
    } else {
      next.lives = Math.max(0, next.lives - 1);
      if (next.pendingGate) next.pendingGate.question = null;
    }
    return next;
  }

  function refillLives(state, reward) {
    var next = cloneState(state);
    if (reward && reward.rewarded === true) next.lives = MAX_LIVES;
    return next;
  }

  function canStartPuzzle(state) {
    var safe = sanitizeState(state);
    return safe.lives > 0 && !safe.pendingGate;
  }

  function createLocalRewardedLifeProvider() {
    return {
      show: function () {
        return Promise.resolve({ rewarded: true });
      }
    };
  }

  return {
    createInitialState: createInitialState,
    parseState: parseState,
    recordCompletion: recordCompletion,
    answerGate: answerGate,
    refillLives: refillLives,
    canStartPuzzle: canStartPuzzle,
    createLocalRewardedLifeProvider: createLocalRewardedLifeProvider
  };
}));
