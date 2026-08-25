(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.WordmakerEngine = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  var DIFFICULTY_WORD_COUNTS = {
    easy: 2,
    medium: 3,
    hard: 4,
  };

  var ARTICLES = /^(der|die|das)\s+/i;
  var EXPRESSION_TYPES = /^(ausdruck|expression|phrase)$/i;

  function asText(value) {
    return value === null || value === undefined ? "" : String(value);
  }

  function isLetter(value) {
    return value.toLowerCase() !== value.toUpperCase();
  }

  function hasOnlyLetters(value) {
    var letters = Array.from(value);
    return letters.length > 0 && letters.every(isLetter);
  }

  function prepareEntry(entry) {
    if (!entry || typeof entry !== "object") return null;

    var source = asText(entry.de).trim();
    var type = asText(entry.type).trim();
    if (!source || EXPRESSION_TYPES.test(type)) return null;

    var article = asText(entry.artikel).trim().toLowerCase();
    var isNoun = /^(nomen|sustantivo)$/i.test(type);
    var articleMatch = isNoun ? source.match(ARTICLES) : null;
    if (articleMatch) {
      article = article || articleMatch[1].toLowerCase();
      source = source.slice(articleMatch[0].length);
    }

    var word = source.trim().toLowerCase();
    var letters = Array.from(word);
    if (letters.length < 3 || letters.length > 12 || !hasOnlyLetters(word)) return null;

    return Object.assign({}, entry, {
      artikel: article,
      word: word,
      answer: word,
      letters: letters,
    });
  }

  function prepareEntries(entries) {
    if (!Array.isArray(entries)) return [];
    return entries.map(prepareEntry).filter(Boolean);
  }

  function normalizeAnswer(value) {
    return asText(value)
      .normalize("NFKC")
      .trim()
      .toLowerCase()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss");
  }

  function isAnswerCorrect(value, answer) {
    var expected = answer && typeof answer === "object" ? answer.word || answer.answer : answer;
    return normalizeAnswer(value) === normalizeAnswer(expected);
  }

  function randomValue(random) {
    var value = Number(random());
    return Number.isFinite(value) && value >= 0 && value < 1 ? value : 0;
  }

  function shuffled(items, random) {
    var output = items.slice();
    for (var index = output.length - 1; index > 0; index -= 1) {
      var target = Math.floor(randomValue(random) * (index + 1));
      var value = output[index];
      output[index] = output[target];
      output[target] = value;
    }
    return output;
  }

  function coordinateKey(x, y) {
    return x + "," + y;
  }

  function makePlacement(entry, x, y, direction) {
    return {
      entry: entry,
      id: entry.id,
      word: entry.word,
      x: x,
      y: y,
      direction: direction,
      cells: Array.from(entry.word, function (letter, index) {
        return {
          x: x + (direction === "horizontal" ? index : 0),
          y: y + (direction === "vertical" ? index : 0),
          letter: letter,
          index: index,
        };
      }),
    };
  }

  function cloneBoard(board) {
    var copy = new Map();
    board.forEach(function (cell, key) {
      copy.set(key, {
        x: cell.x,
        y: cell.y,
        letter: cell.letter,
        words: cell.words.slice(),
      });
    });
    return copy;
  }

  function addPlacement(board, placement) {
    placement.cells.forEach(function (position) {
      var key = coordinateKey(position.x, position.y);
      var cell = board.get(key);
      if (!cell) {
        cell = {
          x: position.x,
          y: position.y,
          letter: position.letter,
          words: [],
        };
        board.set(key, cell);
      }
      if (cell.words.indexOf(placement.id) === -1) cell.words.push(placement.id);
    });
  }

  function canPlace(board, placement) {
    var intersections = 0;
    var newCells = 0;
    for (var index = 0; index < placement.cells.length; index += 1) {
      var position = placement.cells[index];
      var cell = board.get(coordinateKey(position.x, position.y));
      if (cell) {
        if (cell.letter !== position.letter) return false;
        intersections += 1;
      } else {
        newCells += 1;
      }
    }
    return intersections > 0 && newCells > 0;
  }

  function placementKey(placement) {
    return [placement.x, placement.y, placement.direction].join(":");
  }

  function possiblePlacements(board, placed, entry) {
    var candidates = [];
    var seen = new Set();

    placed.forEach(function (existing) {
      existing.cells.forEach(function (existingCell) {
        Array.from(entry.word).forEach(function (letter, index) {
          if (letter !== existingCell.letter) return;
          var direction = existing.direction === "horizontal" ? "vertical" : "horizontal";
          var x = direction === "horizontal" ? existingCell.x - index : existingCell.x;
          var y = direction === "vertical" ? existingCell.y - index : existingCell.y;
          var placement = makePlacement(entry, x, y, direction);
          var key = placementKey(placement);
          if (!seen.has(key) && canPlace(board, placement)) {
            seen.add(key);
            candidates.push(placement);
          }
        });
      });
    });

    return candidates;
  }

  function search(placed, board, remaining, count, random) {
    if (placed.length === count) return { placed: placed, board: board };

    var candidates = shuffled(remaining, random);
    for (var index = 0; index < candidates.length; index += 1) {
      var entry = candidates[index];
      var placements = shuffled(possiblePlacements(board, placed, entry), random);
      for (var placementIndex = 0; placementIndex < placements.length; placementIndex += 1) {
        var placement = placements[placementIndex];
        var nextBoard = cloneBoard(board);
        addPlacement(nextBoard, placement);
        var nextRemaining = remaining.filter(function (candidate) { return candidate !== entry; });
        var result = search(placed.concat(placement), nextBoard, nextRemaining, count, random);
        if (result) return result;
      }
    }
    return null;
  }

  function buildGrid(cells, bounds) {
    var grid = Array.from({ length: bounds.height }, function () {
      return Array.from({ length: bounds.width }, function () { return ""; });
    });
    cells.forEach(function (cell) {
      grid[cell.y - bounds.minY][cell.x - bounds.minX] = cell.letter;
    });
    return grid;
  }

  function buildPuzzle(entries, difficulty, random) {
    var count = DIFFICULTY_WORD_COUNTS[difficulty];
    if (!count) return null;

    var candidates = prepareEntries(entries);
    var unique = [];
    var seenWords = new Set();
    candidates.forEach(function (entry) {
      if (!seenWords.has(entry.word)) {
        seenWords.add(entry.word);
        unique.push(entry);
      }
    });
    if (unique.length < count) return null;

    var source = typeof random === "function" ? random : Math.random;
    var starts = shuffled(unique, source);
    for (var index = 0; index < starts.length; index += 1) {
      var first = makePlacement(starts[index], 0, 0, "horizontal");
      var board = new Map();
      addPlacement(board, first);
      var remaining = unique.filter(function (entry) { return entry !== starts[index]; });
      var result = search([first], board, remaining, count, source);
      if (!result) continue;

      var cells = Array.from(result.board.values()).sort(function (left, right) {
        return left.y - right.y || left.x - right.x;
      });
      var minX = Math.min.apply(null, cells.map(function (cell) { return cell.x; }));
      var maxX = Math.max.apply(null, cells.map(function (cell) { return cell.x; }));
      var minY = Math.min.apply(null, cells.map(function (cell) { return cell.y; }));
      var maxY = Math.max.apply(null, cells.map(function (cell) { return cell.y; }));
      var bounds = {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
        width: maxX - minX + 1,
        height: maxY - minY + 1,
      };

      var words = result.placed.map(function (placement) {
        return Object.assign({}, placement.entry, {
          x: placement.x,
          y: placement.y,
          row: placement.y,
          col: placement.x,
          direction: placement.direction,
          orientation: placement.direction === "horizontal" ? "across" : "down",
          cells: placement.cells.map(function (position) {
            return result.board.get(coordinateKey(position.x, position.y));
          }),
        });
      });

      return {
        difficulty: difficulty,
        words: words,
        cells: cells,
        grid: buildGrid(cells, bounds),
        board: buildGrid(cells, bounds),
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
        width: bounds.width,
        height: bounds.height,
      };
    }
    return null;
  }

  return {
    DIFFICULTY_WORD_COUNTS: DIFFICULTY_WORD_COUNTS,
    prepareEntries: prepareEntries,
    buildPuzzle: buildPuzzle,
    normalizeAnswer: normalizeAnswer,
    isAnswerCorrect: isAnswerCorrect,
  };
});
