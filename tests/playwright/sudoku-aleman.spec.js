const { test, expect } = require("@playwright/test");

const path = "/recursos/sudoku-aleman/";
const storageKey = "samuel_sudoku_de_v1";

function initialState(overrides = {}) {
  return {
    version: 1,
    lives: 5,
    gateProgress: { A1: 0, A2: 0, B1: 0, B2: 0 },
    pendingGate: null,
    completed: {},
    recentQuestionIds: [],
    current: { level: "A1", puzzleId: "a1-01" },
    attempts: {},
    ...overrides,
  };
}

test("renders the playable board and persists an edited attempt", async ({ page }) => {
  await page.goto(path);

  await expect(page.getByRole("heading", { name: /sudoku alemán/i })).toBeVisible();
  await expect(page.locator("#sudokuBoard [role=gridcell]")).toHaveCount(81);
  await expect(page.locator("#levelTabs button")).toHaveCount(4);

  const editable = page.locator("#sudokuBoard [role=gridcell]:not([disabled])").first();
  await editable.focus();
  await page.keyboard.press("1");
  await expect(editable).toHaveText("1");
  await page.reload();
  await expect(page.locator("#sudokuBoard [role=gridcell]:not([disabled])").first()).toHaveText("1");

  await page.getByRole("button", { name: /reiniciar/i }).click();
  await expect(page.locator("#sudokuBoard [role=gridcell]:not([disabled])").first()).toHaveText("");

  await page.getByRole("tab", { name: "A2", exact: true }).click();
  await expect(page.locator("#levelTabs button[aria-selected=true]")).toHaveText("A2");
  await expect(page.locator("#puzzleSelect")).toHaveValue("a2-01");
});

test("enforces the language gate and decrements lives on a wrong answer", async ({ page }) => {
  await page.addInitScript(({ key, state }) => {
    localStorage.setItem(key, JSON.stringify(state));
  }, {
    key: storageKey,
    state: initialState({ pendingGate: { level: "A1", question: null } }),
  });
  await page.goto(path);

  await expect(page.locator("#languageGate")).toBeVisible();
  await expect.poll(() => page.locator("#languageGate .gate-option").count()).toBeGreaterThanOrEqual(3);
  const answer = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)).pendingGate.question.answer, storageKey);
  const wrong = page.locator("#languageGate .gate-option").filter({ hasNotText: answer }).first();
  await wrong.click();
  await expect(page.locator("#lives")).toContainText("4");
  await expect(page.locator("#languageGate")).toBeVisible();

  const nextAnswer = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)).pendingGate.question.answer, storageKey);
  await page.getByRole("button", { name: nextAnswer, exact: true }).click();
  await expect(page.locator("#languageGate")).toBeHidden();
});

test("recovers all lives through the pending reward-provider adapter", async ({ page }) => {
  await page.addInitScript(({ key, state }) => {
    localStorage.setItem(key, JSON.stringify(state));
  }, {
    key: storageKey,
    state: initialState({ lives: 0, pendingGate: { level: "B1", question: null } }),
  });
  await page.goto(path);

  await expect(page.locator("#rewardLivesBtn")).toBeVisible();
  await page.locator("#rewardLivesBtn").click();
  await expect(page.locator("#lives")).toContainText("5");
  await expect.poll(() => page.locator("#languageGate .gate-option").count()).toBeGreaterThanOrEqual(3);
});
