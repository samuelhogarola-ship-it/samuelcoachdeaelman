const { expect, test } = require("@playwright/test");

const landings = [
  "/",
  "/de/",
  "/en/",
  "/clases-aleman-malaga/",
  "/de/deutschunterricht-malaga/",
  "/en/german-lessons-malaga/",
  "/preparacion-examen-aleman-b1-b2/",
  "/de/pruefungsvorbereitung-pack/",
  "/en/german-exam-preparation-b1-b2/"
];

test.use({ viewport: { width: 390, height: 844 } });

test.describe("mobile commercial landings", () => {
  for (const path of landings) {
    test(`${path} remains readable and navigable`, async ({ page }) => {
      const response = await page.goto(path);

      expect(response?.ok()).toBeTruthy();
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator(".hamburger")).toBeVisible();

      const layout = await page.evaluate(() => ({
        h1Size: Number.parseFloat(getComputedStyle(document.querySelector("h1")).fontSize),
        hasOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        failedImages: [...document.images]
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src)
      }));

      expect(layout.h1Size).toBeLessThanOrEqual(48);
      expect(layout.hasOverflow).toBeFalsy();
      expect(layout.failedImages).toEqual([]);

      const hamburger = page.locator(".hamburger");
      await hamburger.click();
      await expect(hamburger).toHaveAttribute("aria-expanded", "true");
      await expect(page.locator(".mobile-menu")).toBeVisible();

      const visibleActions = page.locator("a.btn:visible, a.nav-cta:visible, a.mobile-cta:visible");
      expect(await visibleActions.count()).toBeGreaterThan(0);
      for (const action of await visibleActions.all()) {
        const box = await action.boundingBox();
        expect(box?.height || 0).toBeGreaterThanOrEqual(40);
      }
    });
  }
});
