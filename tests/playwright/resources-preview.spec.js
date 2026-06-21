const { test, expect } = require("@playwright/test");

const resourcePages = [
  {
    path: "/recursos/",
    heading: /recursos para aprender alemán con mejor dirección/i,
    cookieHeading: /tu privacidad importa/i,
    expectsAppsWidget: false
  },
  {
    path: "/recursos/schreiben/",
    heading: /^schreiben$/i,
    cookieHeading: /tu privacidad importa/i,
    expectsAppsWidget: false
  },
  {
    path: "/recursos/hoerverstehen/",
    heading: /^hörverstehen$/i,
    cookieHeading: /tu privacidad importa/i
  },
  {
    path: "/de/recursos/",
    heading: /ressourcen für telc und goethe/i,
    cookieHeading: /deine privatsphäre ist wichtig/i,
    expectsAppsWidget: false
  },
  {
    path: "/de/recursos/schreiben/",
    heading: /^schreiben$/i,
    cookieHeading: /deine privatsphäre ist wichtig/i,
    expectsAppsWidget: false
  },
  {
    path: "/de/recursos/hoerverstehen/",
    heading: /^hörverstehen$/i,
    cookieHeading: /deine privatsphäre ist wichtig/i
  },
  {
    path: "/en/recursos/",
    heading: /resources for telc and goethe/i,
    cookieHeading: /your privacy matters/i,
    expectsAppsWidget: false
  },
  {
    path: "/en/recursos/schreiben/",
    heading: /^writing$/i,
    cookieHeading: /your privacy matters/i,
    expectsAppsWidget: false
  },
  {
    path: "/en/recursos/hoerverstehen/",
    heading: /^listening$/i,
    cookieHeading: /your privacy matters/i
  }
];

test.describe("resource preview smoke", () => {
  for (const pageDef of resourcePages) {
    test(`${pageDef.path} loads and exposes preview metadata`, async ({ context, page, request }) => {
      await context.clearCookies();
      await page.goto(pageDef.path);

      await expect(page.locator("h1")).toHaveText(pageDef.heading);
      await expect(page.locator("nav")).toBeVisible();
      if (pageDef.expectsAppsWidget !== false) {
        await expect(page.locator(".apps-widget-menu")).toBeVisible();
      }
      await expect(page.getByRole("heading", { name: pageDef.cookieHeading })).toBeVisible();

      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /max-image-preview:large/
      );
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        "content",
        "summary_large_image"
      );
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://www.samuelcoachdealeman.com${pageDef.path}`
      );

      const ogImage = page.locator('meta[property="og:image"]');
      const twitterImage = page.locator('meta[name="twitter:image"]');

      await expect(ogImage).toHaveCount(1);
      await expect(ogImage).toHaveAttribute(
        "content",
        /https:\/\/www\.samuelcoachdealeman\.com\/assets\/img\/.+\.(webp|jpg)/
      );
      await expect(twitterImage).toHaveCount(1);
      await expect(twitterImage).toHaveAttribute(
        "content",
        /https:\/\/www\.samuelcoachdealeman\.com\/assets\/img\/.+\.(webp|jpg)/
      );

      const ogImageUrl = await ogImage.getAttribute("content");
      const previewAssetPath = new URL(ogImageUrl).pathname;
      const previewAssetResponse = await request.get(previewAssetPath);

      expect(previewAssetResponse.ok()).toBeTruthy();
    });
  }

  test("/recursos/sprachbausteine/a1/meine-familie/ uses sprachbausteine meta urls", async ({ page }) => {
    const path = "/recursos/sprachbausteine/a1/meine-familie/";
    const expectedUrl = `https://www.samuelcoachdealeman.com${path}`;

    await page.goto(path);

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", expectedUrl);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", expectedUrl);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
      "href",
      expectedUrl
    );
  });
});
