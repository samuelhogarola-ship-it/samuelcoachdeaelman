const { test, expect } = require("@playwright/test");

const staticPages = [
  { path: "/", heading: /clases de alemán online desde fuengirola/i },
  { path: "/servicios/", heading: /clases de alemán online para objetivos reales/i },
  { path: "/sobre-mi/", heading: /sobre mí/i },
  { path: "/metodologia/", heading: /metodología/i },
  { path: "/practicar-aleman/", heading: /practicar alemán online con herramientas reales/i },
  { path: "/politica-de-privacidad/", heading: /política de privacidad/i }
];

test.describe("static pages", () => {
  for (const pageDef of staticPages) {
    test(`${pageDef.path} loads core UI elements`, async ({ context, page }) => {
      await context.clearCookies();
      await page.goto(pageDef.path);

      await expect(page.getByRole("heading", { name: pageDef.heading })).toBeVisible();
      await expect(page.locator("nav")).toBeVisible();
      await expect(page.locator(".apps-widget-menu")).toBeVisible();
      await expect(page.getByRole("heading", { name: /tu privacidad importa/i })).toBeVisible();
    });
  }
});

test.describe("home interactions", () => {
  test.beforeEach(async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/");
  });

  test("persists the apps widget as closed after the user closes it", async ({ page }) => {
    const widgetToggle = page.locator("#apps-widget-toggle");
    const widgetClose = page.locator(".apps-widget-close");

    await expect(widgetToggle).toBeChecked();
    await widgetClose.dispatchEvent('click');
    await expect(widgetToggle).not.toBeChecked();

    await page.reload();
    await expect(widgetToggle).not.toBeChecked();
  });

  test("remembers cookie consent after accepting", async ({ page }) => {
    await page.getByRole("button", { name: "Aceptar" }).click();
    await expect(page.getByRole("heading", { name: /tu privacidad importa/i })).toHaveCount(0);

    await page.reload();
    await expect(page.getByRole("heading", { name: /tu privacidad importa/i })).toHaveCount(0);
  });
});

test.describe("leseverstehen", () => {
  test("index page renders level groups and cards", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/leseverstehen/");

    await expect(page.getByRole("heading", { name: /leseverstehen/i, level: 1 })).toBeVisible();
    // Los cuatro niveles deben aparecer como enlaces
    for (const nivel of ["A1", "A2", "B1", "B2"]) {
      await expect(page.getByRole("link", { name: new RegExp(`Nivel ${nivel}`) })).toBeVisible();
    }
    // Al menos una tarjeta de texto renderizada
    await expect(page.locator(".lese-card").first()).toBeVisible();
  });

  test("level page renders cards for that level only", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/leseverstehen/a1/");

    await expect(page.getByRole("heading", { name: /leseverstehen a1/i, level: 1 })).toBeVisible();
    await expect(page.locator(".lese-card").first()).toBeVisible();
    // Las tarjetas deben llevar el badge A1
    const badges = page.locator(".lese-card-nivel");
    await expect(badges.first()).toHaveText("A1");
  });

  test("text page renders the reading and exercise buttons", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/leseverstehen/a1/meine-familie/");

    // El texto y el ejercicio deben estar visibles
    await expect(page.locator(".lese-cuerpo")).toBeVisible();
    await expect(page.locator(".lese-preguntas")).toBeVisible();
    // Debe haber botones Richtig y Falsch
    await expect(page.locator(".lese-btn-richtig").first()).toBeVisible();
    await expect(page.locator(".lese-btn-falsch").first()).toBeVisible();
  });

  test("richtig/falsch buttons work and show result", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/leseverstehen/a1/meine-familie/");

    await expect(page.locator(".lese-pregunta").first()).toBeVisible();

    // Responder todas las preguntas via DOM para que el event listener del container reciba el click
    await page.evaluate(() => {
      document.querySelectorAll(".lese-pregunta").forEach(p => {
        p.querySelector(".lese-btn-richtig").click();
      });
    });

    // El resultado final debe aparecer
    await expect(page.locator(".lese-resultado")).toBeVisible();
    await expect(page.locator(".lese-resultado-texto")).toContainText(/\d de \d/);
  });

  test("reiniciar button re-renders the exercise", async ({ context, page }) => {
    await context.clearCookies();
    await page.goto("/leseverstehen/a1/meine-familie/");

    await expect(page.locator(".lese-pregunta").first()).toBeVisible();

    // Responder todas las preguntas
    await page.evaluate(() => {
      document.querySelectorAll(".lese-pregunta").forEach(p => {
        p.querySelector(".lese-btn-richtig").click();
      });
    });

    await expect(page.locator(".lese-btn-reiniciar")).toBeVisible();
    await page.evaluate(() => document.querySelector(".lese-btn-reiniciar").click());

    // Tras reiniciar el container se re-renderiza: botones nuevos habilitados, resultado oculto
    await expect(page.locator(".lese-btn-richtig").first()).toBeEnabled();
    await expect(page.locator(".lese-resultado")).toBeHidden();
  });
});
