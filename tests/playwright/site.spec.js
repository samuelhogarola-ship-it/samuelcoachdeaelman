const { test, expect } = require("@playwright/test");

const staticPages = [
  { path: "/", heading: /clases de alemán online desde fuengirola/i },
  { path: "/servicios/", heading: /servicios de alemán online/i },
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
    await widgetClose.click();
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
