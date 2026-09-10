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

  return {
    MODES: MODES,
    LEVELS: LEVELS,
    MISSION_LENGTH: MISSION_LENGTH,
    STARTING_LIVES: STARTING_LIVES,
    BASE_SCORE: BASE_SCORE,
    validateBank: validateBank,
    validateAnswer: validateAnswer,
    getCanonicalResponse: getCanonicalResponse
  };
}));
