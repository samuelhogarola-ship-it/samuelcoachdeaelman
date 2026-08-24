const { test, expect } = require("@playwright/test");

const endpoint = "https://hocdlmxzghwymamientc.supabase.co/functions/v1/newsletter-subscribe";
const localizedPages = [
  { path: "/", locale: "es", success: /revisa tu email/i },
  { path: "/de/", locale: "de", success: /e-mail.*bestätigen|postfach/i },
  { path: "/en/", locale: "en", success: /check your email|confirm/i }
];

async function dismissCookies(page) {
  const button = page.locator(".cookie-banner button").first();
  if (await button.count()) await button.click();
}

test.describe("newsletter", () => {
  for (const pageDefinition of localizedPages) {
    test(`submits ${pageDefinition.locale} to the direct Edge Function`, async ({ page }) => {
      let requestBody = null;
      await page.route(endpoint, async (route) => {
        requestBody = route.request().postDataJSON();
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ status: "confirmation_sent" })
        });
      });

      await page.goto(pageDefinition.path);
      await dismissCookies(page);
      const section = page.locator(".newsletter-section");
      const form = section.locator(".newsletter-form");
      await form.locator('input[name="newsletter-email"]').fill("maria@example.com");
      await form.locator('button[type="submit"]').click();

      await expect(section.locator(".newsletter-msg")).toHaveText(pageDefinition.success);
      await expect(form.locator('input[name="newsletter-email"]')).toHaveValue("");
      expect(requestBody).toEqual({ email: "maria@example.com", locale: pageDefinition.locale });
    });
  }

  test("keeps the email and re-enables submit after a server error", async ({ page }) => {
    await page.route(endpoint, async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ error: "temporary_failure" })
      });
    });

    await page.goto("/");
    await dismissCookies(page);
    const section = page.locator(".newsletter-section");
    const form = section.locator(".newsletter-form");
    const input = form.locator('input[name="newsletter-email"]');
    const button = form.locator('button[type="submit"]');
    await input.fill("maria@example.com");
    await button.click();

    await expect(section.locator(".newsletter-msg")).toHaveText(/error|inténtalo|salió mal/i);
    await expect(input).toHaveValue("maria@example.com");
    await expect(button).toBeEnabled();
  });
});
