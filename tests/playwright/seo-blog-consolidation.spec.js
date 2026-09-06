const fs = require("fs");
const path = require("path");
const { test, expect } = require("@playwright/test");

const root = path.resolve(__dirname, "../..");
const legacyAliases = [
  "demonstrativpronomen-los-pronombres-demostrativos-en-aleman",
  "el-imperativo-en-aleman",
  "haeufigkeitsadverbien-en-aleman",
  "la-voz-pasiva-con-verbos-modales-en-aleman-passiv-mit-modalverben",
  "las-w-fragen-en-aleman",
  "los-articulos-posesivos-en-aleman-possessivartikel-auf-deutsch",
  "partizip-1-vs-partizip-2-en-aleman",
  "partizip-2-en-aleman-la-formacion-del-participio",
  "tekamolo-2-0-en-aleman-satzbau",
  "trennbare-verben-en-aleman-verbos-separables-y-no-separables",
];

test.describe("blog consolidation", () => {
  test("localized blog trees exist with real content", () => {
    expect(fs.existsSync(path.join(root, "de/f"))).toBeTruthy();
    expect(fs.existsSync(path.join(root, "en/f"))).toBeTruthy();
    expect(fs.existsSync(path.join(root, "de/f/index.html"))).toBeTruthy();
    expect(fs.existsSync(path.join(root, "en/f/index.html"))).toBeTruthy();
  });

  test("legacy duplicate slugs are redirects instead of indexable pages", () => {
    const htaccess = fs.readFileSync(path.join(root, ".htaccess"), "utf8");

    for (const slug of legacyAliases) {
      expect(fs.existsSync(path.join(root, "f", slug))).toBeFalsy();
      expect(htaccess).toContain(`f/${slug}/?$`);
    }
  });

  test("localized homepages link to their own blog", async ({ page }) => {
    for (const locale of ["de", "en"]) {
      await page.goto(`/${locale}/`);
      const blogLinks = page.getByRole("link", { name: "Blog", exact: true });
      await expect(blogLinks.first()).toHaveAttribute("href", `/${locale}/f/`);
    }
  });

  test("localized homepages use an existing hero and social image", async ({ page }) => {
    const heroPath = "/assets/img/hero-photo.webp";
    expect(fs.existsSync(path.join(root, heroPath))).toBeTruthy();

    for (const locale of ["de", "en"]) {
      await page.goto(`/${locale}/`);
      await expect(page.locator(".hero-photo img")).toHaveAttribute("src", heroPath);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        "content",
        `https://www.samuelcoachdealeman.com${heroPath}`
      );
    }
  });

  test("catch-all locale blog redirects are removed", () => {
    const htaccess = fs.readFileSync(path.join(root, ".htaccess"), "utf8");
    expect(htaccess).not.toContain("RedirectMatch 301 ^/(de|en)/f/?$ /f/");
    expect(htaccess).not.toContain("RedirectMatch 301 ^/(de|en)/f/(.*)$ /f/$2");
  });
});
