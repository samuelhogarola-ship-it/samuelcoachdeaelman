(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.GrammatikMissionProgress = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var STORAGE_KEY = "samuel-grammatik-mission-v1";
  var MODES = ["satzbau", "fehlerjaeger", "kasus", "verb"];
  var LEVELS = ["A1", "A2", "B1", "B2"];
  var RESULT_STATUSES = ["correct", "incorrect", "skipped", "recovered", "unresolved"];
  var RECENT_LIMIT = 30;
  var HISTORY_LIMIT = 20;

  function emptyModeHistory() {
    return {
      satzbau: [],
      fehlerjaeger: [],
      kasus: [],
      verb: []
    };
  }

  function createDefaultProgress() {
    return {
      version: 1,
      preferredLevel: "B1",
      currentMission: null,
      recentExerciseIds: [],
      modeHistory: emptyModeHistory(),
      topicHistory: {},
      bestScore: 0,
      bestStreak: 0,
      lastDiagnosis: null
    };
  }

  function safeInteger(value, fallback, maximum) {
    if (!Number.isInteger(value) || value < 0) return fallback;
    if (Number.isInteger(maximum)) return Math.min(value, maximum);
    return value;
  }

  function stringList(value, limit) {
    if (!Array.isArray(value)) return [];
    return value.filter(function (item) { return typeof item === "string" && item.length > 0; }).slice(-limit);
  }

  function booleanList(value) {
    if (!Array.isArray(value)) return [];
    return value.filter(function (item) { return typeof item === "boolean"; }).slice(-HISTORY_LIMIT);
  }

  function safeInternalPath(value) {
    return typeof value === "string" && /^\/(?!\/)[^\s]*$/.test(value) ? value : "";
  }

  function sanitizeAttempts(value, exerciseIds) {
    var result = {};
    var allowed = new Set(exerciseIds.concat(exerciseIds.map(function (id) { return "retry:" + id; })));
    Object.keys(value).slice(0, RECENT_LIMIT * 2).forEach(function (key) {
      if (allowed.has(key) && Number.isInteger(value[key]) && value[key] >= 0 && value[key] <= 2) result[key] = value[key];
    });
    return result;
  }

  function sanitizeMissionResult(value, exerciseIds) {
    if (!value || typeof value !== "object" || exerciseIds.indexOf(value.exerciseId) < 0) return null;
    if (MODES.indexOf(value.mode) < 0 || RESULT_STATUSES.indexOf(value.status) < 0) return null;
    if (typeof value.topic !== "string" || !value.topic.trim() || value.topic.length > 200) return null;
    var sourceUrl = safeInternalPath(value.sourceUrl);
    if (!sourceUrl) return null;
    var isRetry = value.status === "recovered" || value.status === "unresolved";
    return {
      exerciseId: value.exerciseId,
      mode: value.mode,
      topic: value.topic,
      sourceUrl: sourceUrl,
      status: value.status,
      correct: value.status === "correct" || value.status === "recovered",
      retry: isRetry
    };
  }

  function sanitizeMission(value) {
    if (!value || typeof value !== "object") return null;
    if (LEVELS.indexOf(value.level) < 0 || !Array.isArray(value.exerciseIds) || !value.exerciseIds.length) return null;
    if (!value.exerciseIds.every(function (id) { return typeof id === "string" && id.length > 0; })) return null;
    if (!Number.isInteger(value.index) || value.index < 0 || value.index > value.exerciseIds.length) return null;
    if (!Number.isInteger(value.score) || value.score < 0 || !Number.isInteger(value.lives) || value.lives < 0 || value.lives > 3) return null;
    if (!Number.isInteger(value.streak) || value.streak < 0 || !Number.isInteger(value.bestStreak) || value.bestStreak < 0) return null;
    if (!value.attempts || typeof value.attempts !== "object" || Array.isArray(value.attempts)) return null;
    if (!Array.isArray(value.results) || !Array.isArray(value.pendingRetries) || typeof value.completed !== "boolean") return null;
    var exerciseIds = Array.from(new Set(value.exerciseIds));
    var results = value.results.map(function (result) { return sanitizeMissionResult(result, exerciseIds); }).filter(Boolean).slice(-RECENT_LIMIT);
    var pendingRetries = Array.from(new Set(stringList(value.pendingRetries, RECENT_LIMIT))).filter(function (id) {
      return exerciseIds.indexOf(id) >= 0;
    });
    return {
      level: value.level,
      exerciseIds: exerciseIds,
      index: value.index,
      score: value.score,
      lives: value.lives,
      streak: value.streak,
      bestStreak: value.bestStreak,
      attempts: sanitizeAttempts(value.attempts, exerciseIds),
      results: results,
      pendingRetries: pendingRetries,
      completed: value.completed
    };
  }

  function sanitizeDiagnosis(value) {
    if (!value || typeof value !== "object") return null;
    return {
      total: safeInteger(value.total, 0),
      correct: safeInteger(value.correct, 0),
      percentage: safeInteger(value.percentage, 0, 100),
      byMode: value.byMode && typeof value.byMode === "object" ? JSON.parse(JSON.stringify(value.byMode)) : {},
      weakTopics: Array.isArray(value.weakTopics) ? value.weakTopics.slice(0, 2).map(function (topic) {
        return {
          topic: typeof topic.topic === "string" ? topic.topic : "",
          failures: safeInteger(topic.failures, 0),
          sourceUrl: safeInternalPath(topic.sourceUrl)
        };
      }) : []
    };
  }

  function sanitizeProgress(value) {
    var defaults = createDefaultProgress();
    if (!value || value.version !== 1) return defaults;
    var result = createDefaultProgress();
    result.preferredLevel = LEVELS.indexOf(value.preferredLevel) >= 0 ? value.preferredLevel : defaults.preferredLevel;
    result.currentMission = sanitizeMission(value.currentMission);
    result.recentExerciseIds = stringList(value.recentExerciseIds, RECENT_LIMIT);
    MODES.forEach(function (mode) {
      result.modeHistory[mode] = booleanList(value.modeHistory && value.modeHistory[mode]);
    });
    if (value.topicHistory && typeof value.topicHistory === "object" && !Array.isArray(value.topicHistory)) {
      Object.keys(value.topicHistory).slice(0, 100).forEach(function (topic) {
        if (typeof topic === "string" && topic.length > 0) result.topicHistory[topic] = booleanList(value.topicHistory[topic]);
      });
    }
    result.bestScore = safeInteger(value.bestScore, 0);
    result.bestStreak = safeInteger(value.bestStreak, 0);
    result.lastDiagnosis = sanitizeDiagnosis(value.lastDiagnosis);
    return result;
  }

  function loadProgress(storage) {
    if (!storage || typeof storage.getItem !== "function") return createDefaultProgress();
    try {
      var raw = storage.getItem(STORAGE_KEY);
      if (!raw) return createDefaultProgress();
      return sanitizeProgress(JSON.parse(raw));
    } catch {
      return createDefaultProgress();
    }
  }

  function saveProgress(storage, progress) {
    if (!storage || typeof storage.setItem !== "function") return false;
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(sanitizeProgress(progress)));
      return true;
    } catch {
      return false;
    }
  }

  function copyProgress(progress) {
    return sanitizeProgress(JSON.parse(JSON.stringify(progress || createDefaultProgress())));
  }

  function recordMission(progress, missionState, diagnosis) {
    var next = copyProgress(progress);
    var results = Array.isArray(missionState && missionState.results) ? missionState.results.filter(function (result) {
      return result && !result.retry && typeof result.exerciseId === "string";
    }) : [];
    next.preferredLevel = LEVELS.indexOf(missionState && missionState.level) >= 0 ? missionState.level : next.preferredLevel;
    next.bestScore = Math.max(next.bestScore, safeInteger(missionState && missionState.score, 0));
    next.bestStreak = Math.max(next.bestStreak, safeInteger(missionState && missionState.bestStreak, 0));
    next.recentExerciseIds = next.recentExerciseIds.concat(results.map(function (result) { return result.exerciseId; })).slice(-RECENT_LIMIT);

    results.forEach(function (result) {
      var correct = result.correct === true;
      if (MODES.indexOf(result.mode) >= 0) {
        next.modeHistory[result.mode] = next.modeHistory[result.mode].concat(correct).slice(-HISTORY_LIMIT);
      }
      if (typeof result.topic === "string" && result.topic.length > 0) {
        var topicValues = next.topicHistory[result.topic] || [];
        next.topicHistory[result.topic] = topicValues.concat(correct).slice(-HISTORY_LIMIT);
      }
    });

    next.currentMission = null;
    next.lastDiagnosis = sanitizeDiagnosis(diagnosis);
    return next;
  }

  return {
    STORAGE_KEY: STORAGE_KEY,
    createDefaultProgress: createDefaultProgress,
    loadProgress: loadProgress,
    saveProgress: saveProgress,
    recordMission: recordMission
  };
}));
