const { test, expect } = require("@playwright/test");

test.describe("Home hero layout", () => {
  test("desktop headline does not overlap the portrait", async ({ page }) => {
    await page.setViewportSize({ width: 1657, height: 862 });
    await page.goto("/");

    const layout = await page.evaluate(() => {
      const heading = document.querySelector(".home-hero-copy h1");
      const portrait = document.querySelector(".home-hero-photo");
      const range = document.createRange();
      range.selectNodeContents(heading);

      const text = range.getBoundingClientRect();
      const image = portrait.getBoundingClientRect();

      return {
        textRight: text.right,
        imageLeft: image.left,
        textBottom: text.bottom,
        imageTop: image.top
      };
    });

    const overlaps =
      layout.textRight > layout.imageLeft &&
      layout.textBottom > layout.imageTop;

    expect(overlaps, JSON.stringify(layout)).toBe(false);
  });

  test("tablet headline does not overlap the portrait", async ({ page }) => {
    for (const width of [641, 720, 829, 860]) {
      await page.setViewportSize({ width, height: 862 });
      await page.goto("/");

      const overlap = await page.evaluate(() => {
        const heading = document.querySelector(".home-hero-copy h1");
        const portrait = document.querySelector(".home-hero-photo");
        const image = portrait.getBoundingClientRect();
        const range = document.createRange();
        range.selectNodeContents(heading);

        return Array.from(range.getClientRects()).some((line) => (
          line.right > image.left &&
          line.left < image.right &&
          line.bottom > image.top &&
          line.top < image.bottom
        ));
      });

      expect(overlap, `viewport ${width}px`).toBe(false);
    }
  });
});
