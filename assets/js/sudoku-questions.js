(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SudokuQuestions = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var CATEGORY_ORDER = ["article", "grammar", "meaning"];
  var TYPE_LABELS = {
    Nomen: "Sustantivo",
    Verb: "Verbo",
    "Adjektiv/Adverb": "Adjetivo/adverbio",
    Ausdruck: "Expresión"
  };

  function shuffled(values, random) {
    var result = values.slice();
    for (var index = result.length - 1; index > 0; index -= 1) {
      var target = Math.floor(random() * (index + 1));
      var swap = result[index];
      result[index] = result[target];
      result[target] = swap;
    }
    return result;
  }

  function unique(values) {
    return values.filter(function (value, index) {
      return value && values.indexOf(value) === index;
    });
  }

  function articleQuestion(word, random) {
    if (!word.artikel) return null;
    return {
      id: "article:" + word.id,
      wordId: word.id,
      category: "article",
      level: word.level,
      prompt: "¿Qué artículo lleva «" + word.de + "»?",
      options: shuffled(["der", "die", "das"], random),
      answer: word.artikel,
      explanation: word.artikel + " " + word.de + " significa «" + word.es + "»."
    };
  }

  function grammarQuestion(word, random) {
    var answer = TYPE_LABELS[word.type] || TYPE_LABELS.Ausdruck;
    return {
      id: "grammar:" + word.id,
      wordId: word.id,
      category: "grammar",
      level: word.level,
      prompt: "¿Qué tipo de palabra o expresión es «" + word.de + "»?",
      options: shuffled(Object.values(TYPE_LABELS), random),
      answer: answer,
      explanation: "«" + word.de + "» es " + answer.toLocaleLowerCase("es") + "."
    };
  }

  function meaningQuestion(word, levelWords, random) {
    var preferred = levelWords.filter(function (candidate) {
      return candidate.id !== word.id && candidate.type === word.type && candidate.es !== word.es;
    });
    var remaining = levelWords.filter(function (candidate) {
      return candidate.id !== word.id && candidate.type !== word.type && candidate.es !== word.es;
    });
    var distractors = unique(shuffled(preferred, random).concat(shuffled(remaining, random)).map(function (item) {
      return item.es;
    })).slice(0, 3);
    if (distractors.length < 3) return null;

    return {
      id: "meaning:" + word.id,
      wordId: word.id,
      category: "meaning",
      level: word.level,
      prompt: "¿Qué significa «" + word.de + "»?",
      options: shuffled([word.es].concat(distractors), random),
      answer: word.es,
      explanation: "«" + word.de + "» significa «" + word.es + "»."
    };
  }

  function buildQuestion(category, word, words, random) {
    if (category === "article") return articleQuestion(word, random);
    if (category === "meaning") return meaningQuestion(word, words, random);
    return grammarQuestion(word, random);
  }

  function categorySequence(preferredCategory) {
    if (CATEGORY_ORDER.indexOf(preferredCategory) < 0) return CATEGORY_ORDER.slice();
    return [preferredCategory].concat(CATEGORY_ORDER.filter(function (category) {
      return category !== preferredCategory;
    }));
  }

  function createQuestion(bank, level, recentIds, random, preferredCategory) {
    var rng = typeof random === "function" ? random : Math.random;
    var words = bank && bank.levels && Array.isArray(bank.levels[level]) ? bank.levels[level] : [];
    if (!words.length) return null;
    var recent = Array.isArray(recentIds) ? recentIds : [];
    var categories = categorySequence(preferredCategory);

    for (var pass = 0; pass < 2; pass += 1) {
      for (var categoryIndex = 0; categoryIndex < categories.length; categoryIndex += 1) {
        var category = categories[categoryIndex];
        var candidates = shuffled(words, rng);
        for (var wordIndex = 0; wordIndex < candidates.length; wordIndex += 1) {
          var question = buildQuestion(category, candidates[wordIndex], words, rng);
          if (question && (pass === 1 || recent.indexOf(question.id) < 0)) return question;
        }
      }
    }
    return null;
  }

  function isCorrect(question, answer) {
    if (!question) return false;
    return String(answer || "").trim().toLocaleLowerCase("es") ===
      String(question.answer || "").trim().toLocaleLowerCase("es");
  }

  return {
    createQuestion: createQuestion,
    isCorrect: isCorrect
  };
}));
