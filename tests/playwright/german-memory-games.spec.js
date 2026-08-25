const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("samuelcoach_cookie_consent", "rejected");
  });
});

test("starts every memory mode when it becomes active", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/recursos/juegos-aleman/");

  await expect(page.locator("[data-board] .game-memory-card")).toHaveCount(6);
  await expect(page.locator("[data-start]")).toHaveText("Nueva ronda");

  await page.getByRole("tab", { name: "Contrabando", exact: true }).click();
  await expect(page.locator("[data-board] .game-suitcase-item")).toHaveCount(6);

  await page.getByRole("tab", { name: "Hotel", exact: true }).click();
  await expect(page.locator("[data-board] .game-room")).toHaveCount(4);

  await page.getByRole("button", { name: "Reiniciar", exact: true }).click();
  await expect(page.locator("[data-board] .game-room")).toHaveCount(4);
  await expect(page.locator("[data-score]")).toHaveText("0");
  expect(errors).toEqual([]);
});

test("replaces teacher copy with instructions for the three games", async ({ page }) => {
  await page.goto("/recursos/juegos-aleman/");

  const instructions = page.locator("[data-game-instructions]");
  await expect(instructions.getByRole("heading", { name: "Cómo jugar" })).toBeVisible();
  await expect(instructions).toContainText("Paquete Sospechoso");
  await expect(instructions).toContainText("Contrabando de Palabras");
  await expect(instructions).toContainText("Hotel Zimmer Chaos");
  await expect(instructions).not.toContainText("Cómo lo usaría en clase");
  await expect(page.locator('script[src$="juegos-aleman.js?v=20260825a"]')).toHaveCount(1);
});
