# German Sudoku Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready German-learning sudoku at `/recursos/sudoku-aleman/` with A1–B2 boards, a mandatory Vokabel Lab question after every three first-time completions, five lives, and a replaceable rewarded-life adapter.

**Architecture:** Keep the page static and split pure domain logic from DOM orchestration. Commit a generated, public vocabulary snapshot so gameplay never depends on a remote API; persist one validated versioned state document in `localStorage`.

**Tech Stack:** Static HTML/CSS, browser JavaScript compatible with iOS 13, Node test runner, Playwright, Vokabel Lab JSON API, existing site shell and analytics helpers.

**Spec:** `docs/superpowers/specs/2026-08-24-sudoku-aleman-design.md`

## Global Constraints

- Route: `/recursos/sudoku-aleman/`.
- Levels: A1, A2, B1 and B2; twenty deterministic boards per level.
- The first completion of each board advances the gate; replays do not.
- A mandatory same-level question opens after every three new completions.
- Wrong language answers consume one of five lives; correct answers unlock the next block.
- Zero lives preserves progress and requires `rewardedLifeProvider.show()` before refill.
- The local provider grants the reward immediately; a real advertising SDK remains out of scope.
- Runtime gameplay must not depend on Vokabel Lab availability.
- No login, Supabase writes, personal data or new third-party runtime dependency.
- Browser JavaScript under `assets/js/` must not use optional chaining.

---

### Task 1: Sudoku Domain Engine

**Files:**
- Create: `assets/js/sudoku-engine.js`
- Create: `tests/unit/sudoku-engine.test.mjs`

**Interfaces:**
- Produces: `SudokuEngine.LEVELS`, `puzzles`, `getPuzzle(level, index)`, `canEdit`, `isMoveCorrect`, `setValue`, `isSolved`, `conflicts`, `sameValueIndexes`, `isGameLost`, `summarizeProgress`.
- Consumers: UI controller and state tests.

- [ ] **Step 1: Write the failing engine contract**

Create a Node test that imports the UMD module, asserts four levels with twenty unique 81-cell grids each, verifies fixed/editable cells, correct/incorrect moves, conflicts, three-mistake loss and progress summaries.

- [ ] **Step 2: Verify RED**

Run: `node --test tests/unit/sudoku-engine.test.mjs`

Expected: FAIL because `assets/js/sudoku-engine.js` does not exist.

- [ ] **Step 3: Implement the engine**

Adapt the tested Viking Fitness engine to four levels with blank counts `{ A1: 32, A2: 40, B1: 48, B2: 54 }`. Preserve pure helpers and deterministic IDs such as `a1-01`.

- [ ] **Step 4: Verify GREEN**

Run: `node --test tests/unit/sudoku-engine.test.mjs`

Expected: 1 test file passes with all eighty boards validated.

- [ ] **Step 5: Commit**

```bash
git add assets/js/sudoku-engine.js tests/unit/sudoku-engine.test.mjs
git commit -m "feat: add German sudoku engine"
```

### Task 2: Vokabel Question Bank and Selection Engine

**Files:**
- Create: `scripts/generate-sudoku-question-bank.mjs`
- Create: `assets/data/sudoku-german-questions.json`
- Create: `assets/js/sudoku-questions.js`
- Create: `tests/unit/sudoku-questions.test.mjs`

**Interfaces:**
- Generator consumes either `{ palabras: [...] }`, an array from a local JSON file, or `https://www.vokabellab.com/api/vocabulario`.
- Generator produces `{ version: 1, source, generatedAt, levels: { A1: Word[], A2: Word[], B1: Word[], B2: Word[] } }`.
- `Word` contains only `id`, `de`, `es`, `artikel`, `type`, `thema` and `level`.
- Runtime produces `SudokuQuestions.createQuestion(bank, level, recentIds, random)` and `isCorrect(question, answer)`.

- [ ] **Step 1: Write failing normalization and question tests**

Cover topic mapping (`1→A1`, `11→A2`, `21→B1`, `40→B2`), duplicate removal, invalid article rejection, article/grammar/meaning questions, four unique meaning options, injected deterministic randomness and recent-question exclusion.

- [ ] **Step 2: Verify RED**

Run: `node --test tests/unit/sudoku-questions.test.mjs`

Expected: FAIL because generator helpers and runtime module do not exist.

- [ ] **Step 3: Implement normalization and runtime selection**

Use a UMD runtime module. Normalize types to `Nomen`, `Verb`, `Adjektiv/Adverb` and `Ausdruck`; build only categories supported by each word; select a fallback category if distractors are insufficient.

- [ ] **Step 4: Generate and validate the committed snapshot**

Run:

```bash
node scripts/generate-sudoku-question-bank.mjs \
  --url https://www.vokabellab.com/api/vocabulario \
  --output assets/data/sudoku-german-questions.json
```

Assert each level has at least twelve usable words, every item contains German and Spanish text, and no service keys or private fields are emitted.

- [ ] **Step 5: Verify GREEN**

Run: `node --test tests/unit/sudoku-questions.test.mjs`

Expected: all normalization and question-generation assertions pass.

- [ ] **Step 6: Commit**

```bash
git add scripts/generate-sudoku-question-bank.mjs assets/data/sudoku-german-questions.json assets/js/sudoku-questions.js tests/unit/sudoku-questions.test.mjs
git commit -m "feat: generate leveled German question bank"
```

### Task 3: Progress, Gates and Lives

**Files:**
- Create: `assets/js/sudoku-progress.js`
- Create: `tests/unit/sudoku-progress.test.mjs`

**Interfaces:**
- Produces: `createInitialState()`, `parseState(value)`, `recordCompletion(state, puzzleId, level, elapsed)`, `answerGate(state, correct)`, `refillLives(state)`, `canStartPuzzle(state)` and `createLocalRewardedLifeProvider()`.
- `recordCompletion` returns `{ state, openedGate }` without mutating its input.
- Consumers: UI controller.

- [ ] **Step 1: Write failing state-machine tests**

Cover safe parsing, first completion counting, replay behavior, gate on completion 3/6/9, pending level persistence, wrong-answer life loss, zero-life lock, correct-answer unlock and refill only after a resolved reward promise.

- [ ] **Step 2: Verify RED**

Run: `node --test tests/unit/sudoku-progress.test.mjs`

Expected: FAIL because the progress module does not exist.

- [ ] **Step 3: Implement the immutable state machine**

Use schema version `1`, cap lives to `0..5`, retain the best lower time, keep `pendingGate` until a correct answer and expose a local provider whose `show()` resolves `{ rewarded: true }`.

- [ ] **Step 4: Verify GREEN**

Run: `node --test tests/unit/sudoku-progress.test.mjs`

Expected: all gate and life transitions pass.

- [ ] **Step 5: Commit**

```bash
git add assets/js/sudoku-progress.js tests/unit/sudoku-progress.test.mjs
git commit -m "feat: add sudoku gate and lives state"
```

### Task 4: Playable Page and Responsive UI

**Files:**
- Create: `recursos/sudoku-aleman/index.html`
- Create: `assets/css/sudoku-aleman.css`
- Create: `assets/js/sudoku-aleman.js`
- Create: `tests/playwright/sudoku-aleman.spec.js`

**Interfaces:**
- Consumes the three global modules and `assets/data/sudoku-german-questions.json`.
- Persists under `samuel_sudoku_de_v1`.
- Exposes stable selectors: `#sudokuBoard`, `#levelTabs`, `#puzzleSelect`, `#languageGate`, `#lives`, `#rewardLivesBtn`.

- [ ] **Step 1: Write the failing browser flow**

Test route load, 81 cells, four level tabs, keyboard entry, reset, persisted state after reload, forced three-completion gate through seeded localStorage, wrong-answer life decrement, correct-answer close and zero-life refill through the local adapter.

- [ ] **Step 2: Verify RED**

Run: `npx playwright test tests/playwright/sudoku-aleman.spec.js --reporter=line`

Expected: FAIL with route or selector not found.

- [ ] **Step 3: Build semantic HTML and controller**

Use the existing site header/footer patterns. Render the board as buttons with row/column labels, keep modal focus trapped, pause the timer while gated, use live regions for feedback and prevent changing boards while a gate is pending.

- [ ] **Step 4: Build responsive styling**

Use a restrained white/charcoal/green/yellow palette consistent with the site, a square board constrained by `min(92vw, 620px)`, stable 9-column tracks, 44px minimum touch controls, no nested cards and reduced-motion support.

- [ ] **Step 5: Verify GREEN**

Run: `npx playwright test tests/playwright/sudoku-aleman.spec.js --reporter=line`

Expected: the complete gameplay flow passes on Chromium.

- [ ] **Step 6: Commit**

```bash
git add recursos/sudoku-aleman/index.html assets/css/sudoku-aleman.css assets/js/sudoku-aleman.js tests/playwright/sudoku-aleman.spec.js
git commit -m "feat: build playable German sudoku"
```

### Task 5: Site Discovery, SEO and Backlog

**Files:**
- Modify: `practicar-aleman/index.html`
- Modify: `recursos/index.html`
- Modify: `sitemap.xml`
- Modify: `NEXT.md`
- Test: `tests/unit/sudoku-site-integration.test.mjs`

**Interfaces:**
- Produces internal links to `/recursos/sudoku-aleman/` and a sitemap entry.
- Leaves one explicit backlog item: replace the local reward provider with a consent-aware rewarded-ad provider.

- [ ] **Step 1: Write failing integration assertions**

Assert the game page contains canonical, description and `WebApplication` JSON-LD; both discovery pages link to it; sitemap contains it; `NEXT.md` marks the game delivered and only ads pending.

- [ ] **Step 2: Verify RED**

Run: `node --test tests/unit/sudoku-site-integration.test.mjs`

Expected: FAIL because discovery links and sitemap entry are absent.

- [ ] **Step 3: Add discovery and metadata**

Add one resource item to each existing list using its local markup pattern. Add the canonical URL to `sitemap.xml`. Replace the parked sudoku section in `NEXT.md` with the provider/consent/fraud-protection follow-up.

- [ ] **Step 4: Verify GREEN and site-wide checks**

Run:

```bash
node --test tests/unit/sudoku-site-integration.test.mjs
npm run lint
npm run check:links
npm run test:unit
```

Expected: all commands exit `0`; pre-existing lint warnings may remain, but no errors.

- [ ] **Step 5: Commit**

```bash
git add practicar-aleman/index.html recursos/index.html sitemap.xml NEXT.md tests/unit/sudoku-site-integration.test.mjs
git commit -m "feat: publish German sudoku resource"
```

### Task 6: Visual and End-to-End Verification

**Files:**
- Modify only files from Tasks 1–5 if verification finds a defect.

**Interfaces:**
- Validates the complete user story and final production artifact.

- [ ] **Step 1: Run the full verification suite**

```bash
npm run lint
npm run test:unit
npm run check:links
npx playwright test
```

- [ ] **Step 2: Start the existing local server**

Run the repository's static server on the first free port starting at `4173` and open `/recursos/sudoku-aleman/`.

- [ ] **Step 3: Capture desktop and mobile screenshots**

Verify at `1440x1000`, `390x844` and `360x800`: nonblank board, no horizontal overflow, no text overlap, usable number pad, visible next section and correctly framed gate/reward states.

- [ ] **Step 4: Exercise the final story manually**

Complete a seeded board, trigger the third-completion gate, answer incorrectly to lose one life, exhaust lives, recover five through the adapter, answer correctly and verify the next board unlocks after reload.

- [ ] **Step 5: Commit verification fixes if needed**

```bash
git add recursos/sudoku-aleman/index.html assets/css/sudoku-aleman.css assets/js/sudoku-aleman.js tests/playwright/sudoku-aleman.spec.js
git commit -m "fix: polish German sudoku gameplay"
```

- [ ] **Step 6: Push and open PR**

Push `codex/sudoku-aleman`, open a PR with test evidence and merge only after every required check is green.
