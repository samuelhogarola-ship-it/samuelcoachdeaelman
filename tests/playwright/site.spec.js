const { test, expect } = require("@playwright/test");

const staticPages = [
  { path: "/", heading: /aprende alemán de verdad/i, hasAppsWidget: false },
  { path: "/servicios/", heading: /servicios de alemán online/i, hasAppsWidget: false },
  { path: "/sobre-mi/", heading: /sobre mí/i, hasAppsWidget: false },
  { path: "/metodologia/", heading: /metodología/i, hasAppsWidget: false },
  { path: "/practicar-aleman/", heading: /practicar alemán online con herramientas reales/i, hasAppsWidget: true },
  { path: "/recursos/", heading: /recursos para aprender alemán con mejor dirección/i, hasAppsWidget: true },
  { path: "/politica-de-privacidad/", heading: /política de privacidad/i, hasAppsWidget: false }
];

test.describe("static pages", () => {
  for (const pageDef of staticPages) {
    test(`${pageDef.path} loads core UI elements`, async ({ context, page }) => {
      await context.clearCookies();
      await page.goto(pageDef.path);

      await expect(page.getByRole("heading", { name: pageDef.heading }).first()).toBeVisible();
      await expect(page.locator("nav")).toBeVisible();
      if (pageDef.hasAppsWidget) {
        await expect(page.locator(".apps-widget-menu")).toBeVisible();
      }
      await expect(page.getByRole("heading", { name: /tu privacidad importa/i })).toBeVisible();
    });
  }
});

test.describe("exam prep seo pages", () => {
  test("german exam prep hub routes users to modality pages", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/de/pruefungsvorbereitung-telc-goethe/");
    await page.getByRole("button", { name: "Akzeptieren" }).click();

    await expect(page.getByRole("heading", { name: /prüfungsvorbereitung telc \/ goethe/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /leseverstehen goethe \/ telc prüfungsvorbereitung/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /sprachbausteine goethe \/ telc prüfungsvorbereitung/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /modalität wählen/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /modalität wählen/i }).nth(1)).toBeVisible();
  });
});

test.describe("home interactions", () => {
  test.beforeEach(async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/");
  });

  test("remembers cookie consent after accepting", async ({ page }) => {
    await page.getByRole("button", { name: "Aceptar" }).click();
    await expect(page.getByRole("heading", { name: /tu privacidad importa/i })).toHaveCount(0);

    await page.reload();
    await expect(page.getByRole("heading", { name: /tu privacidad importa/i })).toHaveCount(0);
  });
});

test.describe("leseverstehen", () => {
  test("exercise renders and reiniciar resets it", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/leseverstehen/a1/meine-familie/");

    // El JS cargó: hay botones de ejercicio
    await expect(page.locator(".lese-btn-richtig").first()).toBeVisible();

    // Responder todas las preguntas
    await page.evaluate(() => {
      document.querySelectorAll(".lese-pregunta").forEach(p => {
        p.querySelector(".lese-btn-richtig").click();
      });
    });

    // Aparece el resultado
    await expect(page.locator(".lese-resultado")).toBeVisible();

    // Reiniciar vuelve a dejar los botones activos
    await page.evaluate(() => document.querySelector(".lese-btn-reiniciar").click());
    await expect(page.locator(".lese-btn-richtig").first()).toBeEnabled();
    await expect(page.locator(".lese-resultado")).toBeHidden();
  });
});

test.describe.skip("lueckentext", () => {
  test("type 1 exercise checks answers and shows feedback", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/recursos/lueckentext/a1/meine-familie/");

    await page.getByRole("button", { name: "Aceptar" }).click();
    await expect(page.locator("h1")).toHaveText(/meine familie/i);
    await expect(page.locator(".lang-switch").first()).toBeVisible();
    await expect(page.locator(".lueck-option").first()).toBeVisible();

    const firstBlankOptions = await page.evaluate(() => {
      const exercise = window.LUECKENTEXTE.find((item) => item.slug === "meine-familie");
      return {
        answer: exercise.blanks[0].answer,
        options: exercise.blanks[0].options
      };
    });

    await page.getByRole("button", { name: firstBlankOptions.options[0], exact: true }).click();
    await page.getByRole("button", { name: /corregir/i }).click();

    await expect(page.locator(".lueck-result-text")).toBeVisible();
    expect(await page.locator(".lueck-option.is-correct").count()).toBeGreaterThan(0);
    await expect(page.locator(".lueck-blank").first()).toBeVisible();
  });

  test("type 2 exercise supports click placement and scoring", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/recursos/lueckentext/b1/reise-mit-dem-zug/");
    await page.getByRole("button", { name: "Aceptar" }).click();

    await expect(page.locator(".lueck-word-chip")).toHaveCount(15);

    const answers = await page.evaluate(() => {
      const exercise = window.LUECKENTEXTE.find((item) => item.slug === "reise-mit-dem-zug");
      return exercise.blanks.map((blank) => ({
        id: blank.id,
        answer: blank.answer
      }));
    });

    for (const answer of answers.slice(0, 3)) {
      await page.locator(`[data-blank-id="${answer.id}"]`).click();
      await page.getByRole("button", { name: answer.answer, exact: true }).first().click();
    }

    expect(await page.locator(".lueck-answer-current").filter({ hasText: answers[0].answer }).count()).toBeGreaterThan(0);

    await page.getByRole("button", { name: /corregir/i }).click();
    await expect(page.locator(".lueck-result-text")).toBeVisible();
    expect(await page.locator(".lueck-answer-card.is-correct").count()).toBeGreaterThan(0);
  });

  test("localized exercise keeps the language switcher available", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/de/recursos/lueckentext/a1/meine-familie/");
    await page.getByRole("button", { name: "Akzeptieren" }).click();

    await expect(page.locator(".lang-switch").first()).toBeVisible();
    await expect(page.locator(".lang-switch-link.is-active").first()).toHaveText("DE");
    await expect(page.locator("h1")).toHaveText(/meine familie/i);
    await expect(page.locator(".lueck-option").first()).toBeVisible();
  });
});
