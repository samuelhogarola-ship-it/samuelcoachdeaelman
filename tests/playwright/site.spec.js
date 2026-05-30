const { test, expect } = require("@playwright/test");

const staticPages = [
  { path: "/", heading: /clases de alemán online desde fuengirola/i },
  { path: "/servicios/", heading: /clases de alemán online para objetivos reales/i },
  { path: "/sobre-mi/", heading: /sobre mí/i },
  { path: "/metodologia/", heading: /metodología/i },
  { path: "/practicar-aleman/", heading: /practicar alemán online con herramientas reales/i },
  { path: "/recursos/", heading: /recursos para preparar telc y goethe/i },
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
