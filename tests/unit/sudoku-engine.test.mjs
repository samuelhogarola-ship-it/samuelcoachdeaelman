import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const engine = require("../../assets/js/sudoku-engine.js");

const levels = ["A1", "A2", "B1", "B2"];

function assertValidSolution(solution, label) {
  const expected = "123456789";
  assert.equal(solution.length, 81, `${label} solution length`);

  for (let row = 0; row < 9; row += 1) {
    assert.equal(
      [...solution.slice(row * 9, row * 9 + 9)].sort().join(""),
      expected,
      `${label} row ${row + 1}`
    );
  }

  for (let col = 0; col < 9; col += 1) {
    const values = [];
    for (let row = 0; row < 9; row += 1) values.push(solution[row * 9 + col]);
    assert.equal(values.sort().join(""), expected, `${label} column ${col + 1}`);
  }
}

test("builds twenty valid and unique boards for every German level", () => {
  const allGrids = [];

  for (const level of levels) {
    assert.equal(engine.puzzles[level].length, 20, `${level} puzzle count`);
    for (const puzzle of engine.puzzles[level]) {
      assert.match(puzzle.id, new RegExp(`^${level.toLowerCase()}-\\d{2}$`));
      assert.match(puzzle.grid, /^[0-9]{81}$/);
      assert.match(puzzle.solution, /^[1-9]{81}$/);
      assertValidSolution(puzzle.solution, puzzle.id);
      assert.equal(engine.isSolved(puzzle.solution, puzzle), true);
      allGrids.push(puzzle.grid);
    }
  }

  assert.equal(new Set(allGrids).size, 80, "all puzzle grids must be unique");
});

test("applies moves, conflicts, mistakes and progress summaries", () => {
  const puzzle = engine.getPuzzle("A1", 0);
  const firstBlank = puzzle.grid.indexOf("0");
  const correct = Number(puzzle.solution[firstBlank]);
  const wrong = correct === 9 ? 1 : correct + 1;

  assert.equal(engine.canEdit(puzzle, firstBlank), true);
  assert.equal(engine.isMoveCorrect(puzzle, firstBlank, correct), true);
  assert.equal(engine.isMoveCorrect(puzzle, firstBlank, wrong), false);
  assert.equal(engine.isSolved(puzzle.grid, puzzle), false);
  assert.equal(engine.setValue(puzzle.grid, puzzle, firstBlank, correct)[firstBlank], String(correct));
  assert.deepEqual(engine.sameValueIndexes("100200100", 0), [0, 6]);
  assert.deepEqual(engine.sameValueIndexes("100200100", 1), []);
  assert.equal(engine.isGameLost(2), false);
  assert.equal(engine.isGameLost(3), true);

  const state = engine.setValue(puzzle.grid, puzzle, firstBlank, wrong);
  assert.ok(engine.conflicts(state, firstBlank).length >= 0);

  const summary = engine.summarizeProgress({
    completed: { "a1-01": true, "a1-02": true, "b1-01": true },
    best: { "a1-01": 300, "a1-02": 240, "b1-01": 600 },
  });

  assert.equal(summary.completedTotal, 3);
  assert.equal(summary.byLevel.A1.completed, 2);
  assert.equal(summary.byLevel.B1.completed, 1);
  assert.equal(summary.byLevel.B2.completed, 0);
  assert.equal(summary.bestOverall, 240);
});
