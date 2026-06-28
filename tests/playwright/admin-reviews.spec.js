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

test.describe("admin reviews", () => {
  test("loads reviews and allows status updates with mocked endpoint", async ({ context, page }) => {
    await context.clearCookies();

    await page.route("**/assets/js/auth.js", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/javascript",
        body: buildAdminAuthModule()
      });
    });

    let patchPayload = null;
    await page.route("**/functions/v1/admin-reviews**", async (route) => {
      const request = route.request();

      if (request.method() === "GET") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            success: true,
            reviewSources: [
              {
                source: "google",
                label: "Google",
                review_count: 124,
                rating_value: 5
              }
            ],
            reviews: [
              {
                id: "review-1",
                created_at: "2026-06-27T18:00:00.000Z",
                source: "google",
                reviewer_name: "Maria Gomez",
                reviewer_role: "Goethe B1",
                review_text: "Muy recomendable.",
                rating: 5,
                status: "draft",
                is_featured: false,
                sort_order: 10
              },
              {
                id: "review-2",
                created_at: "2026-06-26T18:00:00.000Z",
                source: "superprof",
                reviewer_name: "Pablo Ruiz",
                reviewer_role: "TELC B1",
                review_text: "Muy claro y cercano.",
                rating: 5,
                status: "published",
                is_featured: true,
                sort_order: 20
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
            review: {
              id: "review-1",
              status: patchPayload.status || "draft",
              is_featured: patchPayload.is_featured ?? false
            }
          })
        });
        return;
      }

      await route.abort();
    });

    await page.goto("/admin/reviews/");

    await expect(page.getByRole("heading", { name: /reseñas/i })).toBeVisible();
    await expect(page.locator("#admin-email")).toHaveText("admin@example.com");
    await expect(page.locator("#review-sources")).toContainText("124");
    await expect(page.locator("#stat-reviews-total")).toHaveText("2");
    await expect(page.locator("#stat-reviews-published")).toHaveText("1");
    await expect(page.locator("#stat-reviews-featured")).toHaveText("1");
    await expect(page.locator("#reviews-list")).toContainText("Maria Gomez");
    await expect(page.locator("#reviews-list")).toContainText("Muy recomendable.");
    await expect(page.locator("#reviews-list")).toContainText("Pablo Ruiz");

    await page.getByRole("button", { name: /^Destacadas$/i }).click();
    await expect(page.locator("#reviews-list")).toContainText("Pablo Ruiz");
    await expect(page.locator("#reviews-list")).not.toContainText("Maria Gomez");

    await page.getByPlaceholder(/buscar por nombre o texto/i).fill("maria");
    await page.getByRole("button", { name: /^Todas$/i }).click();
    await expect(page.locator("#reviews-list")).toContainText("Maria Gomez");
    await expect(page.locator("#reviews-list")).not.toContainText("Pablo Ruiz");

    await page.getByRole("button", { name: /publicar/i }).click();

    await expect(page.locator("#reviews-status")).toHaveText(/reseña actualizada/i);
    expect(patchPayload).toEqual({
      id: "review-1",
      status: "published"
    });
  });
});
