const { test, expect } = require("@playwright/test");

function buildAdminAuthModule() {
  return `
    export async function requireAuth() {
      return { email: "admin@example.com" };
    }

    export const supabase = {
      auth: {
        async getSession() {
          return {
            data: {
              session: {
                access_token: "admin-access-token"
              }
            }
          };
        }
      }
    };
  `;
}

test.describe("admin leads", () => {
  test("loads leads and allows status updates with mocked endpoint", async ({ context, page }) => {
    await context.clearCookies();

    await page.route("**/assets/js/auth.js", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/javascript",
        body: buildAdminAuthModule()
      });
    });

    let patchPayload = null;
    await page.route("**/functions/v1/admin-leads**", async (route) => {
      const request = route.request();

      if (request.method() === "GET") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            success: true,
            leads: [
              {
                id: "lead-1",
                created_at: "2026-06-27T18:00:00.000Z",
                name: "Maria Gomez",
                email: "maria@example.com",
                phone: "+34644220965",
                age_band: "18+",
                goal: "Trabajo",
                current_level: "B1",
                availability: "Tardes",
                message: "Necesito preparar entrevistas.",
                risk_score: 12,
                turnstile_success: true,
                status: "new"
              }
            ]
          })
        });
        return;
      }

      if (request.method() === "PATCH") {
        patchPayload = request.postDataJSON();
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            success: true,
            lead: {
              id: "lead-1",
              status: patchPayload.status
            }
          })
        });
        return;
      }

      await route.abort();
    });

    await page.goto("/admin/leads/");

    await expect(page.getByRole("heading", { name: /leads/i })).toBeVisible();
    await expect(page.locator("#admin-email")).toHaveText("admin@example.com");
    await expect(page.locator("#stat-total")).toHaveText("1");
    await expect(page.locator("#leads-list")).toContainText("Maria Gomez");
    await expect(page.locator("#leads-list")).toContainText("Necesito preparar entrevistas.");

    await page.getByRole("button", { name: /marcar respondido/i }).click();

    await expect(page.locator("#leads-status")).toHaveText(/estado actualizado/i);
    expect(patchPayload).toEqual({
      id: "lead-1",
      status: "answered"
    });
  });
});
