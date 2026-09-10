const { test, expect } = require("@playwright/test");

const path = "/recursos/grammatik-mission/";

async function preparePage(page) {
  await page.addInitScript(() => {
    localStorage.setItem("samuelcoach_cookie_consent", "rejected");
    localStorage.removeItem("samuel-grammatik-mission-v1");
    window.__grammatikChallenges = [];
    document.addEventListener("grammatik:challenge", (event) => {
      window.__grammatikChallenges.push(event.detail);
    });
  });
  await page.goto(path);
  await expect(page.getByRole("button", { name: "Empezar misión", exact: true })).toBeVisible();
}

async function currentExercise(page) {
  return page.evaluate(async () => {
    const challenge = window.__grammatikChallenges.at(-1);
    const bank = await fetch("/assets/data/grammatik-mission-exercises.json").then((response) => response.json());
    return bank.exercises.find((exercise) => exercise.id === challenge.id);
  });
}

async function solveCurrent(page) {
  const exercise = await currentExercise(page);
  if (exercise.mode === "satzbau") {
    for (const id of exercise.canonicalOrder) {
      await page.locator(`[data-add-block="${id}"]`).click();
    }
  }
  if (exercise.mode === "fehlerjaeger") {
    await page.locator(`[data-segment="${exercise.errorSegmentId}"]`).click();
    await page.locator(`[data-option="${exercise.answer}"]`).click();
  }
  if (exercise.mode === "kasus") {
    await page.locator(`[data-option="${exercise.answer}"]`).click();
  }
  if (exercise.mode === "verb") {
    for (let index = 0; index < exercise.answers.length; index += 1) {
      await page.locator(`[data-slot="${index}"][data-slot-option="${exercise.answers[index]}"]`).click();
    }
  }
  await page.getByRole("button", { name: "Comprobar", exact: true }).click();
  await expect(page.locator("[data-feedback]")).toContainText(/Correcto|Recuperado/);
}

async function chooseWrongSatzbauOrder(page) {
  const exercise = await currentExercise(page);
  for (const id of exercise.canonicalOrder.slice().reverse()) {
    await page.locator(`[data-add-block="${id}"]`).click();
  }
}

test("plays all ten mixed challenges and shows the diagnosis", async ({ page }) => {
  await preparePage(page);
  await expect(page.getByRole("button", { name: /A1.*En preparación/ })).toBeDisabled();
  await expect(page.getByRole("button", { name: /A2.*En preparación/ })).toBeDisabled();
  await expect(page.getByRole("button", { name: /B2.*En preparación/ })).toBeDisabled();

  await page.getByRole("button", { name: "Empezar misión", exact: true }).click();
  await expect(page.locator("[data-progress-text]")).toHaveText("1 de 10");

  for (let index = 0; index < 10; index += 1) {
    await solveCurrent(page);
    await page.getByRole("button", { name: index === 9 ? "Ver resultados" : "Siguiente reto", exact: true }).click();
  }

  await expect(page.locator("[data-summary]")).toBeVisible();
  await expect(page.locator("[data-summary-lead]")).toContainText("10 de 10");
  await expect(page.locator("[data-summary-score]")).not.toHaveText("0");
  await expect(page.locator("[data-summary-modes] .gm-result-card")).toHaveCount(4);
});

test("turns a repeated error into a later unscored recovery challenge", async ({ page }) => {
  await preparePage(page);
  await page.getByRole("button", { name: "Empezar misión", exact: true }).click();

  await chooseWrongSatzbauOrder(page);
  await page.getByRole("button", { name: "Comprobar", exact: true }).click();
  await expect(page.locator("[data-feedback]")).toContainText("Pista");
  await expect(page.locator("[data-lives]")).toContainText("♡");

  await page.getByRole("button", { name: "Comprobar", exact: true }).click();
  await expect(page.locator("[data-feedback]")).toContainText("Solución");
  await page.getByRole("button", { name: "Siguiente reto", exact: true }).click();

  await solveCurrent(page);
  const scoreBeforeRetry = await page.locator("[data-score]").textContent();
  await page.getByRole("button", { name: "Siguiente reto", exact: true }).click();
  await expect(page.locator("[data-progress-text]")).toHaveText("Repaso de un error");

  await solveCurrent(page);
  await expect(page.locator("[data-score]")).toHaveText(scoreBeforeRetry);
});

test("runs a focused Verb practice and fits the mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await preparePage(page);
  await page.getByRole("button", { name: /Verb Conjuga y coloca/ }).click();
  await expect(page.locator("[data-session-label]")).toContainText("Práctica Verb");

  await solveCurrent(page);
  await page.getByRole("button", { name: "Siguiente reto", exact: true }).click();
  await solveCurrent(page);
  await page.getByRole("button", { name: "Ver resultados", exact: true }).click();

  await expect(page.locator("[data-summary]")).toBeVisible();
  const widths = await page.evaluate(() => ({ page: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  expect(widths.page).toBeLessThanOrEqual(widths.viewport);
  await page.screenshot({ path: test.info().outputPath("grammatik-mission-mobile.png"), fullPage: true });
});
