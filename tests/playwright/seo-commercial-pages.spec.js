const { test, expect } = require("@playwright/test");

const pages = [
  {
    path: "/resenas/",
    heading: /opiniones de alumnos de alemán/i,
    title: /opiniones de alumnos/i
  },
  {
    path: "/preparacion-goethe-online/",
    heading: /preparación goethe online/i,
    title: /preparación goethe online/i
  },
  {
    path: "/preparacion-telc-online/",
    heading: /preparación telc online/i,
    title: /preparación telc online/i
  }
];

test.describe("SEO commercial pages", () => {
  for (const pageDef of pages) {
    test(`${pageDef.path} is indexable and self-canonical`, async ({ page }) => {
      const response = await page.goto(pageDef.path);

      expect(response.ok()).toBeTruthy();
      await expect(page).toHaveTitle(pageDef.title);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toContainText(pageDef.heading);
      const description = await page.locator('meta[name="description"]').getAttribute("content");
      expect(description.trim().length).toBeGreaterThanOrEqual(100);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /index, follow/);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://www.samuelcoachdealeman.com${pageDef.path}`
      );
    });
  }

  test("homepage exposes local German-specialist intent without review rating schema", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/academia de alemán en fuengirola/i);
    await expect(page.locator('meta[name="keywords"]')).toHaveCount(0);

    const structuredData = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(structuredData.join(" ")).not.toContain("aggregateRating");
  });

  test("reviews remain visible and contained on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/resenas/");

    const firstReview = page.locator(".home-review-card").first();
    await firstReview.scrollIntoViewIfNeeded();
    await expect(firstReview).toBeVisible();
    await expect(page.locator(".home-review-card")).toHaveCount(6);

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasHorizontalOverflow).toBeFalsy();
  });
});
