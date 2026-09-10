(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.GrammatikMissionEngine = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var MODES = ["satzbau", "fehlerjaeger", "kasus", "verb"];
  var LEVELS = ["A1", "A2", "B1", "B2"];
  var MISSION_LENGTH = 10;
  var STARTING_LIVES = 3;
  var BASE_SCORE = 100;

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function requireCondition(condition, message) {
    if (!condition) throw new TypeError(message);
  }

  function hasUniqueIds(items) {
    var ids = items.map(function (item) { return item && item.id; });
    return ids.every(isNonEmptyString) && new Set(ids).size === ids.length;
  }

  function validateCommon(exercise) {
    requireCondition(exercise && typeof exercise === "object", "Invalid exercise");
    ["id", "mode", "level", "topic", "instruction", "hint", "explanation", "status"].forEach(function (key) {
      requireCondition(isNonEmptyString(exercise[key]), "Invalid exercise: missing " + key);
    });
    requireCondition(MODES.indexOf(exercise.mode) >= 0, "Invalid exercise mode");
    requireCondition(LEVELS.indexOf(exercise.level) >= 0, "Invalid exercise level");
    requireCondition(exercise.status === "reviewed", "Invalid exercise status");
    requireCondition(exercise.source && isNonEmptyString(exercise.source.kind) && isNonEmptyString(exercise.source.slug) && isNonEmptyString(exercise.source.url), "Invalid exercise source");
  }

  function validateOptionList(options, label) {
    requireCondition(Array.isArray(options) && options.length >= 2, "Invalid " + label + " options");
    requireCondition(hasUniqueIds(options), "Invalid " + label + " option ids");
    requireCondition(options.every(function (option) { return isNonEmptyString(option.text); }), "Invalid " + label + " option text");
  }

  function validateSatzbau(exercise) {
    requireCondition(Array.isArray(exercise.blocks) && exercise.blocks.length >= 3, "Invalid Satzbau blocks");
    requireCondition(hasUniqueIds(exercise.blocks), "Invalid Satzbau block ids");
    requireCondition(exercise.blocks.every(function (block) { return isNonEmptyString(block.text); }), "Invalid Satzbau block text");
    requireCondition(Array.isArray(exercise.canonicalOrder) && exercise.canonicalOrder.length === exercise.blocks.length, "Invalid Satzbau order");
    var blockIds = new Set(exercise.blocks.map(function (block) { return block.id; }));
    requireCondition(new Set(exercise.canonicalOrder).size === blockIds.size && exercise.canonicalOrder.every(function (id) { return blockIds.has(id); }), "Invalid Satzbau order ids");
    requireCondition(Array.isArray(exercise.acceptedOrders), "Invalid Satzbau alternatives");
  }

  function validateFehlerjaeger(exercise) {
    requireCondition(Array.isArray(exercise.segments) && exercise.segments.length >= 2 && hasUniqueIds(exercise.segments), "Invalid Fehlerjäger segments");
    requireCondition(exercise.segments.some(function (segment) { return segment.id === exercise.errorSegmentId; }), "Invalid Fehlerjäger error segment");
    validateOptionList(exercise.correctionOptions, "Fehlerjäger");
    requireCondition(exercise.correctionOptions.some(function (option) { return option.id === exercise.answer; }), "Invalid Fehlerjäger answer");
    requireCondition(isNonEmptyString(exercise.correctedSentence), "Invalid Fehlerjäger corrected sentence");
  }

  function validateKasus(exercise) {
    requireCondition(Array.isArray(exercise.promptParts) && exercise.promptParts.length === 2, "Invalid Kasus prompt");
    validateOptionList(exercise.options, "Kasus");
    requireCondition(exercise.options.some(function (option) { return option.id === exercise.answer; }), "Invalid Kasus answer");
    requireCondition(Array.isArray(exercise.reasoningSteps) && exercise.reasoningSteps.length >= 3 && exercise.reasoningSteps.every(isNonEmptyString), "Invalid Kasus reasoning");
  }

  function validateVerb(exercise) {
    requireCondition(isNonEmptyString(exercise.infinitive), "Invalid Verb infinitive");
    requireCondition(Array.isArray(exercise.promptParts) && exercise.promptParts.length >= 2, "Invalid Verb prompt");
    requireCondition(Array.isArray(exercise.optionsBySlot) && exercise.optionsBySlot.length >= 1, "Invalid Verb slots");
    exercise.optionsBySlot.forEach(function (options) { validateOptionList(options, "Verb"); });
    requireCondition(Array.isArray(exercise.answers) && exercise.answers.length === exercise.optionsBySlot.length, "Invalid Verb answers");
    exercise.answers.forEach(function (answer, index) {
      requireCondition(exercise.optionsBySlot[index].some(function (option) { return option.id === answer; }), "Invalid Verb answer");
    });
  }

  function validateExercise(exercise) {
    validateCommon(exercise);
    if (exercise.mode === "satzbau") validateSatzbau(exercise);
    if (exercise.mode === "fehlerjaeger") validateFehlerjaeger(exercise);
    if (exercise.mode === "kasus") validateKasus(exercise);
    if (exercise.mode === "verb") validateVerb(exercise);
  }

  function validateBank(bank) {
    requireCondition(bank && bank.version === 1 && Array.isArray(bank.exercises), "Invalid bank");
    var ids = new Set();
    bank.exercises.forEach(function (exercise) {
      validateExercise(exercise);
      requireCondition(!ids.has(exercise.id), "Duplicate exercise id");
      ids.add(exercise.id);
    });
    return { version: bank.version, exercises: bank.exercises.slice() };
  }

  function sameArray(actual, expected) {
    return Array.isArray(actual) && actual.length === expected.length && actual.every(function (value, index) {
      return value === expected[index];
    });
  }

  function getCanonicalResponse(exercise) {
    if (!exercise || MODES.indexOf(exercise.mode) < 0) return null;
    if (exercise.mode === "satzbau") return exercise.canonicalOrder.slice();
    if (exercise.mode === "verb") return exercise.answers.slice();
    return exercise.answer;
  }

  function validateAnswer(exercise, response) {
    var canonical = getCanonicalResponse(exercise);
    if (canonical === null) return false;
    if (exercise.mode === "satzbau") {
      var orders = [canonical].concat(Array.isArray(exercise.acceptedOrders) ? exercise.acceptedOrders : []);
      return orders.some(function (order) { return sameArray(response, order); });
    }
    if (exercise.mode === "verb") return sameArray(response, canonical);
    return response === canonical;
  }

  function shuffled(values, random) {
    var rng = typeof random === "function" ? random : Math.random;
    var result = values.slice();
    for (var index = result.length - 1; index > 0; index -= 1) {
      var target = Math.floor(rng() * (index + 1));
      var swap = result[index];
      result[index] = result[target];
      result[target] = swap;
    }
    return result;
  }

  function createMission(exercises, options) {
    var config = options || {};
    var level = config.level || "B1";
    var levelIndex = LEVELS.indexOf(level);
    if (levelIndex < 0 || !Array.isArray(exercises)) throw new RangeError("Level unavailable");

    var eligible = exercises.filter(function (exercise) {
      return LEVELS.indexOf(exercise.level) <= levelIndex;
    });
    var hasTargetLevel = eligible.some(function (exercise) { return exercise.level === level; });
    var recentIds = new Set(Array.isArray(config.recentIds) ? config.recentIds : []);
    var mastery = config.mastery && typeof config.mastery === "object" ? config.mastery : {};
    if (!hasTargetLevel || eligible.length < MISSION_LENGTH) throw new RangeError("Level unavailable");

    var selected = [];
    MODES.forEach(function (mode) {
      var candidates = shuffled(eligible.filter(function (exercise) { return exercise.mode === mode; }), config.random);
      candidates.sort(function (left, right) {
        return Number(recentIds.has(left.id)) - Number(recentIds.has(right.id));
      });
      if (candidates.length < 2) throw new RangeError("Level unavailable");
      selected.push(candidates[0], candidates[1]);
    });

    var selectedIds = new Set(selected.map(function (exercise) { return exercise.id; }));
    var remaining = shuffled(eligible.filter(function (exercise) { return !selectedIds.has(exercise.id); }), config.random);
    remaining.sort(function (left, right) {
      var leftMastery = Number.isFinite(mastery[left.mode]) ? mastery[left.mode] : 0;
      var rightMastery = Number.isFinite(mastery[right.mode]) ? mastery[right.mode] : 0;
      return leftMastery - rightMastery;
    });
    selected = selected.concat(remaining.slice(0, MISSION_LENGTH - selected.length));
    if (selected.length !== MISSION_LENGTH) throw new RangeError("Level unavailable");

    return {
      level: level,
      exercises: selected,
      exerciseIds: selected.map(function (exercise) { return exercise.id; })
    };
  }

  function createMissionState(mission) {
    requireCondition(mission && Array.isArray(mission.exercises) && mission.exercises.length === MISSION_LENGTH, "Invalid mission");
    return {
      version: 1,
      level: mission.level,
      exerciseIds: mission.exerciseIds.slice(),
      index: 0,
      score: 0,
      lives: STARTING_LIVES,
      streak: 0,
      bestStreak: 0,
      attempts: {},
      results: [],
      pendingRetries: [],
      completed: false
    };
  }

  function copyState(state) {
    return {
      version: state.version,
      level: state.level,
      exerciseIds: state.exerciseIds.slice(),
      index: state.index,
      score: state.score,
      lives: state.lives,
      streak: state.streak,
      bestStreak: state.bestStreak,
      attempts: Object.assign({}, state.attempts),
      results: state.results.slice(),
      pendingRetries: state.pendingRetries.slice(),
      completed: state.completed
    };
  }

  function resultFor(exercise, status) {
    return {
      exerciseId: exercise.id,
      mode: exercise.mode,
      topic: exercise.topic,
      sourceUrl: exercise.source.url,
      status: status,
      correct: status === "correct",
      retry: false
    };
  }

  function finalizeTransition(next, feedback, shouldAdvance) {
    next.completed = next.lives <= 0 || next.index >= MISSION_LENGTH;
    return {
      state: next,
      feedback: feedback,
      shouldAdvance: shouldAdvance,
      shouldEnd: next.completed
    };
  }

  function submitAnswer(state, exercise, response) {
    requireCondition(state && exercise, "Invalid answer submission");
    var next = copyState(state);
    var attempts = Number(next.attempts[exercise.id]) || 0;

    if (validateAnswer(exercise, response)) {
      var nextStreak = attempts > 0 ? 1 : next.streak + 1;
      var bonus = Math.min(Math.max(nextStreak - 1, 0) * 10, 50);
      next.score += BASE_SCORE + bonus;
      next.streak = nextStreak;
      next.bestStreak = Math.max(next.bestStreak, nextStreak);
      delete next.attempts[exercise.id];
      next.results.push(resultFor(exercise, "correct"));
      next.index += 1;
      return finalizeTransition(next, {
        kind: "correct",
        explanation: exercise.explanation,
        points: BASE_SCORE + bonus
      }, true);
    }

    next.streak = 0;
    next.attempts[exercise.id] = attempts + 1;
    if (attempts === 0) {
      next.lives = Math.max(0, next.lives - 1);
      if (next.lives > 0) {
        return finalizeTransition(next, { kind: "hint", hint: exercise.hint }, false);
      }
    }

    delete next.attempts[exercise.id];
    next.results.push(resultFor(exercise, "incorrect"));
    next.index += 1;
    if (next.lives > 0 && next.pendingRetries.indexOf(exercise.id) < 0) next.pendingRetries.push(exercise.id);
    return finalizeTransition(next, {
      kind: "reveal",
      answer: getCanonicalResponse(exercise),
      explanation: exercise.explanation
    }, true);
  }

  function skipExercise(state, exercise) {
    requireCondition(state && exercise, "Invalid skip");
    var next = copyState(state);
    next.lives = Math.max(0, next.lives - 1);
    next.streak = 0;
    delete next.attempts[exercise.id];
    next.results.push(resultFor(exercise, "skipped"));
    next.index += 1;
    if (next.lives > 0 && next.pendingRetries.indexOf(exercise.id) < 0) next.pendingRetries.push(exercise.id);
    return finalizeTransition(next, {
      kind: "reveal",
      answer: getCanonicalResponse(exercise),
      explanation: exercise.explanation
    }, true);
  }

  function emptyModeDiagnosis() {
    return { total: 0, correct: 0, percentage: 0 };
  }

  function buildDiagnosis(state) {
    var scored = Array.isArray(state && state.results) ? state.results.filter(function (result) { return !result.retry; }) : [];
    var byMode = {};
    MODES.forEach(function (mode) { byMode[mode] = emptyModeDiagnosis(); });
    var weakByTopic = {};

    scored.forEach(function (result) {
      var modeSummary = byMode[result.mode] || emptyModeDiagnosis();
      modeSummary.total += 1;
      if (result.correct) modeSummary.correct += 1;
      byMode[result.mode] = modeSummary;
      if (!result.correct) {
        if (!weakByTopic[result.topic]) {
          weakByTopic[result.topic] = { topic: result.topic, failures: 0, sourceUrl: result.sourceUrl };
        }
        weakByTopic[result.topic].failures += 1;
      }
    });

    MODES.forEach(function (mode) {
      var summary = byMode[mode];
      summary.percentage = summary.total ? Math.round((summary.correct / summary.total) * 100) : 0;
    });

    var correct = scored.filter(function (result) { return result.correct; }).length;
    return {
      total: scored.length,
      correct: correct,
      percentage: scored.length ? Math.round((correct / scored.length) * 100) : 0,
      byMode: byMode,
      weakTopics: Object.keys(weakByTopic).map(function (topic) { return weakByTopic[topic]; }).sort(function (left, right) {
        return right.failures - left.failures;
      }).slice(0, 2)
    };
  }

  return {
    MODES: MODES,
    LEVELS: LEVELS,
    MISSION_LENGTH: MISSION_LENGTH,
    STARTING_LIVES: STARTING_LIVES,
    BASE_SCORE: BASE_SCORE,
    validateBank: validateBank,
    validateAnswer: validateAnswer,
    getCanonicalResponse: getCanonicalResponse,
    createMission: createMission,
    createMissionState: createMissionState,
    submitAnswer: submitAnswer,
    skipExercise: skipExercise,
    buildDiagnosis: buildDiagnosis
  };
}));
