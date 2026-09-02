(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SudokuQuestions = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var CATEGORY_ORDER = ["meaning", "reverseMeaning", "article", "oddOneOut", "opposite", "fillBlank", "plural", "grammar"];
  var TYPE_LABELS = {
    Nomen: "Sustantivo",
    Verb: "Verbo",
    "Adjektiv/Adverb": "Adjetivo/adverbio",
    Ausdruck: "Expresión"
  };
  var TYPE_LABEL_ES = {
    Nomen: "un sustantivo",
    Verb: "un verbo",
    "Adjektiv/Adverb": "un adjetivo o adverbio",
    Ausdruck: "una expresión"
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

  function reverseMeaningQuestion(word, levelWords, random) {
    var preferred = levelWords.filter(function (candidate) {
      return candidate.id !== word.id && candidate.type === word.type && candidate.de !== word.de;
    });
    var remaining = levelWords.filter(function (candidate) {
      return candidate.id !== word.id && candidate.type !== word.type && candidate.de !== word.de;
    });
    var distractors = unique(shuffled(preferred, random).concat(shuffled(remaining, random)).map(function (item) {
      return item.de;
    })).slice(0, 3);
    if (distractors.length < 3) return null;

    return {
      id: "reverseMeaning:" + word.id,
      wordId: word.id,
      category: "reverseMeaning",
      level: word.level,
      prompt: "¿Cómo se dice «" + word.es + "» en alemán?",
      options: shuffled([word.de].concat(distractors), random),
      answer: word.de,
      explanation: "«" + word.es + "» en alemán es «" + word.de + "»."
    };
  }

  function oddOneOutQuestion(levelWords, random) {
    var types = Object.keys(TYPE_LABEL_ES);
    var mainType = types[Math.floor(random() * types.length)];
    var sameType = shuffled(levelWords.filter(function (w) { return w.type === mainType; }), random);
    if (sameType.length < 3) return null;

    var otherTypes = types.filter(function (t) { return t !== mainType; });
    var oddCandidates = [];
    otherTypes.forEach(function (t) {
      levelWords.forEach(function (w) { if (w.type === t) oddCandidates.push(w); });
    });
    if (!oddCandidates.length) return null;
    var oddWord = shuffled(oddCandidates, random)[0];

    var options = shuffled([sameType[0].de, sameType[1].de, sameType[2].de, oddWord.de], random);
    var label = TYPE_LABEL_ES[mainType] || mainType;

    return {
      id: "oddOneOut:" + oddWord.id + ":" + sameType[0].id,
      wordId: oddWord.id,
      category: "oddOneOut",
      level: oddWord.level,
      prompt: "¿Cuál de estas palabras NO es " + label + "?",
      options: options,
      answer: oddWord.de,
      explanation: "«" + oddWord.de + "» es " + (TYPE_LABEL_ES[oddWord.type] || oddWord.type) + ", no " + label + "."
    };
  }

  function oppositeQuestion(word, levelWords, random) {
    if (!word.gegenteil) return null;
    var distractors = unique(shuffled(levelWords, random).filter(function (w) {
      return w.de !== word.de && w.de !== word.gegenteil && w.type === word.type;
    }).map(function (w) { return w.de; })).slice(0, 3);
    if (distractors.length < 3) return null;

    return {
      id: "opposite:" + word.id,
      wordId: word.id,
      category: "opposite",
      level: word.level,
      prompt: "¿Cuál es lo contrario de «" + word.de + "»?",
      options: shuffled([word.gegenteil].concat(distractors), random),
      answer: word.gegenteil,
      explanation: "Lo contrario de «" + word.de + "» es «" + word.gegenteil + "»."
    };
  }

  function fillBlankQuestion(word, levelWords, random) {
    if (!word.beispiel) return null;
    var distractors = unique(shuffled(levelWords, random).filter(function (w) {
      return w.de !== word.de && w.type === word.type;
    }).map(function (w) {
      var clean = w.de.replace(/^(der|die|das)\s+/i, "");
      return clean;
    })).slice(0, 3);
    if (distractors.length < 3) return null;

    var answer = word.de.replace(/^(der|die|das)\s+/i, "");
    return {
      id: "fillBlank:" + word.id,
      wordId: word.id,
      category: "fillBlank",
      level: word.level,
      prompt: word.beispiel,
      options: shuffled([answer].concat(distractors), random),
      answer: answer,
      explanation: "«" + word.beispiel.replace("___", answer) + "» — " + word.es + "."
    };
  }

  function pluralQuestion(word, levelWords, random) {
    if (!word.plural || word.type !== "Nomen") return null;
    var otherPlurals = unique(shuffled(levelWords, random).filter(function (w) {
      return w.plural && w.id !== word.id && w.plural !== word.plural;
    }).map(function (w) { return w.plural; })).slice(0, 3);
    if (otherPlurals.length < 3) return null;

    var singular = word.de.replace(/^(der|die|das)\s+/i, "");
    return {
      id: "plural:" + word.id,
      wordId: word.id,
      category: "plural",
      level: word.level,
      prompt: "¿Cuál es el plural de «" + singular + "»?",
      options: shuffled([word.plural].concat(otherPlurals), random),
      answer: word.plural,
      explanation: "El plural de «" + singular + "» es «" + word.plural + "»."
    };
  }

  function buildQuestion(category, word, words, random) {
    if (category === "article") return articleQuestion(word, random);
    if (category === "meaning") return meaningQuestion(word, words, random);
    if (category === "reverseMeaning") return reverseMeaningQuestion(word, words, random);
    if (category === "oddOneOut") return oddOneOutQuestion(words, random);
    if (category === "opposite") return oppositeQuestion(word, words, random);
    if (category === "fillBlank") return fillBlankQuestion(word, words, random);
    if (category === "plural") return pluralQuestion(word, words, random);
    return grammarQuestion(word, random);
  }

  function categorySequence(preferredCategory, rng) {
    if (CATEGORY_ORDER.indexOf(preferredCategory) >= 0) {
      return [preferredCategory].concat(CATEGORY_ORDER.filter(function (category) {
        return category !== preferredCategory;
      }));
    }
    var start = Math.floor((rng || Math.random)() * CATEGORY_ORDER.length);
    var rotated = [];
    for (var i = 0; i < CATEGORY_ORDER.length; i++) {
      rotated.push(CATEGORY_ORDER[(start + i) % CATEGORY_ORDER.length]);
    }
    return rotated;
  }

  function createQuestion(bank, level, recentIds, random, preferredCategory) {
    var rng = typeof random === "function" ? random : Math.random;
    var words = bank && bank.levels && Array.isArray(bank.levels[level]) ? bank.levels[level] : [];
    if (!words.length) return null;
    var recent = Array.isArray(recentIds) ? recentIds : [];
    var categories = categorySequence(preferredCategory, rng);

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
