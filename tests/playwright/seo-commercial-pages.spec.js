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
    await expect(page.locator("h1")).toHaveText("Clases de alemán online desde Fuengirola");
    await expect(page.getByText("Individual desde 30 €/h", { exact: true })).toBeVisible();
    await expect(page.getByText("Pareja 40 €/h en total", { exact: true })).toBeVisible();
    await expect(page.getByText("Éxito 100% garantizado", { exact: true })).toHaveCount(0);

    const structuredData = await page.locator('script[type="application/ld+json"]').allTextContents();
    const joinedStructuredData = structuredData.join(" ");
    expect(joinedStructuredData).not.toContain("aggregateRating");
    expect(joinedStructuredData).toContain('"priceRange": "30–40 EUR por hora"');
  });

  test("commercial pages publish the approved prices and matching offers", async ({ page }) => {
    for (const path of [
      "/servicios/",
      "/preparacion-goethe-online/",
      "/preparacion-telc-online/"
    ]) {
      await page.goto(path);
      await expect(page.getByText("Individual desde 30 €/h", { exact: true })).toBeVisible();
      await expect(page.getByText("Pareja 40 €/h en total", { exact: true })).toBeVisible();

      const structuredData = await page.locator('script[type="application/ld+json"]').allTextContents();
      const parsed = structuredData.flatMap((entry) => {
        const data = JSON.parse(entry);
        return Array.isArray(data["@graph"]) ? data["@graph"] : [data];
      });
      const service = parsed.find((entry) => entry["@type"] === "Service");
      expect(service.offers).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "Clase individual", price: "30", priceCurrency: "EUR" }),
          expect.objectContaining({ name: "Clase en pareja", price: "40", priceCurrency: "EUR" })
        ])
      );
    }
  });

  test("reviews use verified public names without invented quotes or avatars", async ({ page }) => {
    const verifiedNames = ["Ana Muñoz", "Andrés Reyes Monge", "carmen delgado", "Unai", "Cris", "Toni"];

    for (const path of ["/", "/resenas/"]) {
      await page.goto(path);
      const reviewSection = page.locator("#opiniones, .home-reviews").first();
      await expect(reviewSection.locator(".home-review-card")).toHaveCount(6);
      await expect(reviewSection.locator(".home-review-avatar")).toHaveCount(0);

      const cardsText = await reviewSection.innerText();
      for (const name of verifiedNames) expect(cardsText).toContain(name);
      expect(cardsText).not.toMatch(/[“\"]Las clases|[“\"]Samuel explica|aprobé a la primera/i);
    }

    await page.goto("/");
    await expect(page.getByText("123 reseñas", { exact: true })).toBeVisible();
    await expect(page.getByText("48 opiniones", { exact: true })).toBeVisible();
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
