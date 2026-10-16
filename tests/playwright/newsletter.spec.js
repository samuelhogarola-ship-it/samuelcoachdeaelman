const { test, expect } = require("@playwright/test");

const localizedPages = [
  "/",
  "/de/",
  "/en/"
];

test.describe("newsletter disabled", () => {
  for (const path of localizedPages) {
    test(`does not expose newsletter collection on ${path}`, async ({ page }) => {
      const requests = [];
      page.on("request", request => {
        if (request.url().includes("newsletter")) requests.push(request.url());
      });
      await page.goto(path);
      await expect(page.locator(".newsletter-section, .newsletter-form")).toHaveCount(0);
      await expect(page.locator('script[src*="newsletter"]')).toHaveCount(0);
      expect(requests).toEqual([]);
    });
  }
});
