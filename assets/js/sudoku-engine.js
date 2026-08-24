(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SudokuEngine = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  var LEVELS = {
    A1: { label: "A1", blanks: 32 },
    A2: { label: "A2", blanks: 40 },
    B1: { label: "B1", blanks: 48 },
    B2: { label: "B2", blanks: 54 },
  };

  function shuffled(items, seed) {
    var output = items.slice();
    var state = (seed >>> 0) || 1;
    function random() {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    }
    for (var index = output.length - 1; index > 0; index -= 1) {
      var target = Math.floor(random() * (index + 1));
      var value = output[index];
      output[index] = output[target];
      output[target] = value;
    }
    return output;
  }

  function pattern(row, col) {
    return (row * 3 + Math.floor(row / 3) + col) % 9;
  }

  function shuffledUnits(seed) {
    var bands = shuffled([0, 1, 2], seed + 1);
    var stacks = shuffled([0, 1, 2], seed + 101);
    var rows = [];
    var cols = [];

    bands.forEach(function (band, index) {
      shuffled([0, 1, 2], seed + 11 + index).forEach(function (row) {
        rows.push(band * 3 + row);
      });
    });
    stacks.forEach(function (stack, index) {
      shuffled([0, 1, 2], seed + 211 + index).forEach(function (col) {
        cols.push(stack * 3 + col);
      });
    });

    return { rows: rows, cols: cols };
  }

  function makeSolution(seed) {
    var units = shuffledUnits(seed);
    var digits = shuffled([1, 2, 3, 4, 5, 6, 7, 8, 9], seed + 307);
    var output = "";

    units.rows.forEach(function (row) {
      units.cols.forEach(function (col) {
        output += digits[pattern(row, col) % 9];
      });
    });

    return output;
  }

  function greatestCommonDivisor(a, b) {
    var left = a;
    var right = b;
    while (right) {
      var next = left % right;
      left = right;
      right = next;
    }
    return left;
  }

  function makeGrid(solution, blanks, seed) {
    var values = solution.split("");
    var hidden = {};
    var hiddenCount = 0;
    var cursor = (seed * 17 + 11) % 81;
    var stride = 37 + (seed % 8) * 2;

    while (greatestCommonDivisor(stride, 81) !== 1) stride += 2;
    while (hiddenCount < blanks) {
      if (!hidden[cursor]) {
        hidden[cursor] = true;
        hiddenCount += 1;
      }
      var mirror = 80 - cursor;
      if (hiddenCount < blanks && !hidden[mirror]) {
        hidden[mirror] = true;
        hiddenCount += 1;
      }
      cursor = (cursor + stride) % 81;
    }

    Object.keys(hidden).forEach(function (index) {
      values[Number(index)] = "0";
    });
    return values.join("");
  }

  function buildPuzzles() {
    var bank = {};
    Object.keys(LEVELS).forEach(function (level, levelIndex) {
      bank[level] = Array.from({ length: 20 }, function (_, index) {
        var seed = levelIndex * 211 + index * 17 + 7;
        var solution = makeSolution(seed);
        return {
          id: level.toLowerCase() + "-" + String(index + 1).padStart(2, "0"),
          level: level,
          number: index + 1,
          grid: makeGrid(solution, LEVELS[level].blanks, seed),
          solution: solution,
        };
      });
    });
    return bank;
  }

  var puzzles = buildPuzzles();

  function getPuzzle(level, index) {
    var list = puzzles[level] || puzzles.A1;
    var safeIndex = Math.max(0, Math.min(list.length - 1, Number(index) || 0));
    return list[safeIndex];
  }

  function canEdit(puzzle, index) {
    return Boolean(puzzle && puzzle.grid[index] === "0");
  }

  function isMoveCorrect(puzzle, index, value) {
    return canEdit(puzzle, index) && String(value) === puzzle.solution[index];
  }

  function setValue(state, puzzle, index, value) {
    if (!canEdit(puzzle, index)) return state;
    var values = state.split("");
    values[index] = value ? String(value) : "0";
    return values.join("");
  }

  function isSolved(state, puzzle) {
    return Boolean(puzzle && state === puzzle.solution);
  }

  function conflicts(state, index) {
    var value = state[index];
    if (!value || value === "0") return [];
    var row = Math.floor(index / 9);
    var col = index % 9;
    var boxRow = Math.floor(row / 3) * 3;
    var boxCol = Math.floor(col / 3) * 3;
    var found = {};

    function add(other) {
      if (other !== index && state[other] === value) found[other] = true;
    }

    for (var offset = 0; offset < 9; offset += 1) {
      add(row * 9 + offset);
      add(offset * 9 + col);
    }
    for (var r = boxRow; r < boxRow + 3; r += 1) {
      for (var c = boxCol; c < boxCol + 3; c += 1) add(r * 9 + c);
    }
    return Object.keys(found).map(Number);
  }

  function sameValueIndexes(state, index) {
    var value = state[index];
    var matches = [];
    if (!value || value === "0") return matches;
    for (var current = 0; current < state.length; current += 1) {
      if (state[current] === value) matches.push(current);
    }
    return matches;
  }

  function isGameLost(mistakes) {
    return Number(mistakes) >= 3;
  }

  function summarizeProgress(progress) {
    var completed = progress && typeof progress.completed === "object" ? progress.completed : {};
    var best = progress && typeof progress.best === "object" ? progress.best : {};
    var byLevel = {};

    Object.keys(LEVELS).forEach(function (level) {
      var prefix = level.toLowerCase() + "-";
      var count = Object.keys(completed).filter(function (id) {
        return id.indexOf(prefix) === 0 && completed[id];
      }).length;
      byLevel[level] = { completed: count, total: puzzles[level].length };
    });

    var times = Object.keys(best).map(function (id) { return best[id]; }).filter(Number.isFinite);
    return {
      completedTotal: Object.keys(completed).filter(function (id) { return completed[id]; }).length,
      bestOverall: times.length ? Math.min.apply(Math, times) : null,
      byLevel: byLevel,
    };
  }

  return {
    LEVELS: LEVELS,
    puzzles: puzzles,
    getPuzzle: getPuzzle,
    canEdit: canEdit,
    isMoveCorrect: isMoveCorrect,
    setValue: setValue,
    isSolved: isSolved,
    conflicts: conflicts,
    sameValueIndexes: sameValueIndexes,
    isGameLost: isGameLost,
    summarizeProgress: summarizeProgress,
  };
});
