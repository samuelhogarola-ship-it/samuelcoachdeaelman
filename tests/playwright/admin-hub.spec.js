const { test, expect } = require("@playwright/test");

function buildAdminAuthModule() {
  return `
    export async function requireAuth() {
      return { email: "admin@example.com" };
    }

    export async function isAdminUser() {
      return true;
    }
  `;
}

test.describe("admin hub", () => {
  test("shows admin entry points for an allowed admin user", async ({ context, page }) => {
    await context.clearCookies();

    await page.route("**/assets/js/auth.js", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/javascript",
        body: buildAdminAuthModule()
      });
    });

    await page.goto("/admin/");

    await expect(page.getByRole("heading", { name: /panel admin/i })).toBeVisible();
    await expect(page.locator("#admin-email")).toHaveText("admin@example.com");
    await expect(page.getByRole("link", { name: /revisar leads/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /gestionar reseñas/i })).toBeVisible();
    await expect(page.locator("#admin-overview")).toContainText(/admin activo/i);
  });
});
