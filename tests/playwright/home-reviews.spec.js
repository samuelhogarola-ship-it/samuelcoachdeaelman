const { test, expect } = require("@playwright/test");

async function acceptCookiesIfVisible(page) {
  const acceptButton = page.getByRole("button", { name: /aceptar/i });
  if (await acceptButton.count()) {
    await acceptButton.first().click();
  }
}

test.describe("home reviews", () => {
  test("renders public review stats and featured reviews from the endpoint", async ({ page }) => {
    await page.addInitScript(() => {
      window.__SAMUEL_HOME_CONFIG__ = {
        publicReviewsEndpoint: "/functions/v1/public-reviews"
      };
    });

    await page.route("**/functions/v1/public-reviews", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          summary: {
            totalReviewCount: 171,
            averageRating: 5,
            featuredCount: 2
          },
          sources: [
            {
              source: "google",
              label: "Google",
              profile_url: "https://example.com/google",
              rating_value: 5,
              review_count: 124
            },
            {
              source: "superprof",
              label: "Superprof",
              profile_url: "https://example.com/superprof",
              rating_value: 5,
              review_count: 47
            }
          ],
          reviews: [
            {
              id: "review-1",
              source: "google",
              reviewer_name: "Ana M.",
              reviewer_role: "Alemán conversacional",
              review_text: "Muy recomendable.",
              rating: 5
            },
            {
              id: "review-2",
              source: "superprof",
              reviewer_name: "Javier R.",
              reviewer_role: "Goethe B2",
              review_text: "Aprobé a la primera.",
              rating: 5
            }
          ]
        })
      });
    });

    await page.goto("/");
    await acceptCookiesIfVisible(page);

    await expect(page.locator("[data-review-total-count]")).toHaveText("171");
    await expect(page.locator("[data-reviews-proof-title]")).toHaveText(/171 reseñas verificadas/i);
    await expect(page.locator("[data-review-link='google']")).toHaveText(/124 reseñas en Google/i);
    await expect(page.locator("[data-review-link='superprof']")).toHaveText(/47 opiniones en Superprof/i);
    await expect(page.locator(".home-review-card")).toHaveCount(2);
    await expect(page.locator(".home-review-card").first()).toContainText("Ana M.");
  });

  test("shows a controlled empty state when public reviews cannot load", async ({ page }) => {
    await page.addInitScript(() => {
      window.__SAMUEL_HOME_CONFIG__ = {
        publicReviewsEndpoint: "/functions/v1/public-reviews"
      };
    });

    await page.route("**/functions/v1/public-reviews", async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({
          success: false
        })
      });
    });

    await page.goto("/");
    await acceptCookiesIfVisible(page);

    await expect(page.locator("[data-reviews-empty]")).toBeVisible();
    await expect(page.locator(".home-review-card")).toHaveCount(0);
  });
});
