const { test, expect } = require("@playwright/test");

async function acceptCookiesIfVisible(page) {
  const acceptButton = page.getByRole("button", { name: /aceptar/i });
  if (await acceptButton.count()) {
    await acceptButton.first().click();
  }
}

async function fillHomeContactForm(page) {
  await page.locator('input[name="name"]').fill("Maria Gomez");
  await page.locator('input[name="email"]').fill("maria.gomez@example.com");
  await page.locator('input[name="phone"]').fill("+34 644 220 965");
  await page.locator('select[name="age_band"]').selectOption("18+");
  await page.locator('select[name="goal"]').selectOption("Trabajo");
  await page.locator('select[name="current_level"]').selectOption("B1");
  await page.locator('select[name="availability"]').selectOption("Tardes");
}

test.describe("contact form", () => {
  test("shows validation feedback for incomplete submissions", async ({ page }) => {
    await page.goto("/#valoracion");
    await acceptCookiesIfVisible(page);

    await expect(page.locator(".offer-form")).toBeVisible();
    await page.getByRole("button", { name: /quiero mi plan personalizado/i }).click();

    await expect(page.locator(".form-status")).toHaveText(
      /Revisa los campos marcados e inténtalo de nuevo/i
    );
  });

  test("shows a controlled fallback when Turnstile cannot load", async ({ page }) => {
    await page.addInitScript(() => {
      window.__SAMUEL_CONTACT_CONFIG__ = {
        turnstileSiteKey: "production-site-key",
        contactEndpoint: "/functions/v1/contact"
      };
    });

    await page.route("https://challenges.cloudflare.com/turnstile/**", async (route) => {
      await route.abort();
    });

    await page.goto("/#valoracion");
    await acceptCookiesIfVisible(page);
    await fillHomeContactForm(page);

    await expect(page.locator("[data-turnstile-container]")).toBeVisible();
    await page.getByRole("button", { name: /quiero mi plan personalizado/i }).click();

    await expect(page.locator(".form-status")).toHaveText(
      /No se pudo cargar la comprobación de seguridad/i
    );
  });

  test("falls back to a prepared email when the contact endpoint is unavailable", async ({ page }) => {
    await page.route("**/functions/v1/contact", async (route) => {
      await route.fulfill({
        status: 404,
        contentType: "application/json",
        body: JSON.stringify({
          success: false,
          message: "Requested function was not found"
        })
      });
    });

    await page.goto("/#valoracion");
    await acceptCookiesIfVisible(page);
    await fillHomeContactForm(page);

    await page.getByRole("button", { name: /quiero mi plan personalizado/i }).click();

    await expect(page.locator(".form-status")).toHaveText(
      /he preparado el email con tus datos/i
    );
  });

  test("submits successfully with a mocked endpoint and mocked Turnstile", async ({ page }) => {
    let requestBody = null;

    await page.addInitScript(() => {
      window.__SAMUEL_CONTACT_CONFIG__ = {
        turnstileSiteKey: "production-site-key",
        contactEndpoint: "/functions/v1/contact"
      };

      window.__turnstileToken = "mock-turnstile-token";
      window.turnstile = {
        render(element, options) {
          element.setAttribute("data-turnstile-ready", "true");
          window.setTimeout(() => {
            if (options.callback) options.callback(window.__turnstileToken);
          }, 0);
          return "widget-1";
        },
        getResponse() {
          return window.__turnstileToken;
        },
        reset() {
          window.__turnstileToken = "";
        }
      };
    });

    await page.route("**/functions/v1/contact", async (route) => {
      requestBody = route.request().postDataJSON();
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          messageKey: "success"
        })
      });
    });

    await page.goto("/#valoracion");
    await acceptCookiesIfVisible(page);
    await fillHomeContactForm(page);

    await expect(page.locator(".form-turnstile-widget")).toHaveAttribute(
      "data-turnstile-ready",
      "true"
    );

    await page.getByRole("button", { name: /quiero mi plan personalizado/i }).click();

    await expect(page.locator(".form-status")).toHaveText(
      /Mensaje enviado\. Te responderé lo antes posible\./i
    );
    expect(requestBody).toMatchObject({
      name: "Maria Gomez",
      email: "maria.gomez@example.com",
      turnstileToken: "mock-turnstile-token"
    });
  });
});
