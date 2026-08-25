const { test, expect } = require("@playwright/test");

const path = "/recursos/wordmaker-aleman/";

function installGameEventRecorder(page) {
  return page.addInitScript(() => {
    localStorage.setItem("samuelcoach_cookie_consent", "rejected");
    localStorage.removeItem("wordmaker-progress");
    window.__wordmakerEvents = [];
    document.addEventListener("wordmaker:round", (event) => {
      window.__wordmakerEvents.push({ type: event.type, detail: event.detail });
    });
    document.addEventListener("wordmaker:active-word", (event) => {
      window.__wordmakerEvents.push({ type: event.type, detail: event.detail });
    });
  });
}

async function activeWord(page) {
  return page.evaluate(() => {
    const events = window.__wordmakerEvents.filter((event) => event.type === "wordmaker:active-word");
    return events.at(-1).detail.word;
  });
}

async function waitForBoard(page) {
  await expect.poll(() => page.locator("#wordmakerBoard [role=gridcell]").count()).toBeGreaterThan(0);
}

async function solveActiveWordWithTray(page) {
  const word = await activeWord(page);

  for (const cell of word.cells) {
    const boardCell = page.locator(`[data-coordinate="${cell.x},${cell.y}"]`);
    if ((await boardCell.textContent()).trim()) continue;
    await page.locator(`#letterTray button[data-letter="${cell.letter}"]:not([disabled])`).first().click();
  }

  await page.getByRole("button", { name: "Comprobar", exact: true }).click();
}

async function submitIncorrectAnswer(page) {
  const word = await activeWord(page);
  const letters = Array.from(word.word);
  const differentLetterIndex = letters.findIndex((letter, index) => index > 0 && letter !== letters[0]);
  const firstLetter = letters[0];
  letters[0] = letters[differentLetterIndex];
  letters[differentLetterIndex] = firstLetter;

  for (const letter of letters) {
    await page.locator(`#letterTray button[data-letter="${letter}"]:not([disabled])`).first().click();
  }

  await page.getByRole("button", { name: "Comprobar", exact: true }).click();
}

test("plays a medium round through the letter tray and starts a new round", async ({ page }) => {
  await installGameEventRecorder(page);
  await page.goto(path);

  await expect(page.getByRole("heading", { name: /wordmaker alemán/i })).toBeVisible();
  await waitForBoard(page);
  await expect(page.locator("#levelTabs [role=tab]")).toHaveCount(4);

  await page.getByRole("button", { name: "Medio", exact: true }).click();
  await expect(page.locator("#difficultyControls button[aria-pressed=true]")).toHaveText("Medio");
  await expect.poll(() => page.evaluate(() => window.__wordmakerEvents.filter((event) => event.type === "wordmaker:round").at(-1).detail.difficulty)).toBe("medium");

  await solveActiveWordWithTray(page);
  await expect(page.locator("#gameMessage")).toContainText(/correcta/i);
  await expect(page.locator("#score")).not.toHaveText("0");

  const previousRound = await page.evaluate(() => window.__wordmakerEvents.filter((event) => event.type === "wordmaker:round").at(-1).detail.round);
  await page.getByRole("button", { name: "Nueva ronda", exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.__wordmakerEvents.filter((event) => event.type === "wordmaker:round").at(-1).detail.round)).toBeGreaterThan(previousRound);
});

test("announces victory after both words in an easy round are completed", async ({ page }) => {
  await installGameEventRecorder(page);
  await page.goto(path);
  await waitForBoard(page);

  await solveActiveWordWithTray(page);
  await solveActiveWordWithTray(page);

  await expect(page.locator("#gameOverDialog")).toBeVisible();
  await expect(page.getByRole("heading", { name: /ronda superada/i })).toBeVisible();
});

test("keeps the empty crossword spaces visually unframed", async ({ page }) => {
  await installGameEventRecorder(page);
  await page.goto(path);
  await waitForBoard(page);

  await expect(page.locator(".board-gap").first()).toBeVisible();
  const boardBackground = await page.locator("#wordmakerBoard").evaluate((element) => getComputedStyle(element).backgroundColor);
  expect(boardBackground).toBe("rgba(0, 0, 0, 0)");
});

test("keeps crossword cells compact when a puzzle has a single long axis", async ({ page }) => {
  await installGameEventRecorder(page);
  await page.goto(path);
  await waitForBoard(page);

  const cellBox = await page.locator("#wordmakerBoard [role=gridcell]").first().evaluate((element) => {
    const box = element.getBoundingClientRect();
    return { width: box.width, height: box.height };
  });
  expect(cellBox.width).toBeLessThanOrEqual(60);
  expect(cellBox.height).toBeLessThanOrEqual(60);
});

test("supports keyboard correction, defeat, and the clearly labelled demo refill on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await installGameEventRecorder(page);
  await page.goto(path);

  await expect(page.locator("#wordmakerBoard")).toBeVisible();
  await waitForBoard(page);
  const word = await activeWord(page);
  await page.keyboard.press(word.word[0]);
  await expect(page.locator("#wordmakerBoard [role=gridcell]").filter({ hasText: word.word[0] }).first()).toBeVisible();
  await page.keyboard.press("Backspace");
  await expect(page.locator("#letterTray button:not([disabled])")).toHaveCount(word.word.length);

  for (let attempt = 0; attempt < 5; attempt += 1) await submitIncorrectAnswer(page);

  await expect(page.locator("#gameOverDialog")).toBeVisible();
  await expect(page.getByRole("button", { name: "Recargar 5 vidas (demostración)", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Recargar 5 vidas (demostración)", exact: true }).click();
  await expect(page.locator("#gameOverDialog")).toBeHidden();
  await expect(page.locator("#lives")).toContainText("5");
});
