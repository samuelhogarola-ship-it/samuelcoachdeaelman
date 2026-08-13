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

test.describe("Spanish blog consolidation", () => {
  test("untranslated localized blog trees are not published", () => {
    expect(fs.existsSync(path.join(root, "de/f"))).toBeFalsy();
    expect(fs.existsSync(path.join(root, "en/f"))).toBeFalsy();

    const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
    expect(sitemap).not.toContain("/de/f/");
    expect(sitemap).not.toContain("/en/f/");
    expect(sitemap).not.toContain("BLOG-I18N");
  });

  test("legacy duplicate slugs are redirects instead of indexable pages", () => {
    const htaccess = fs.readFileSync(path.join(root, ".htaccess"), "utf8");

    for (const slug of legacyAliases) {
      expect(fs.existsSync(path.join(root, "f", slug))).toBeFalsy();
      expect(htaccess).toContain(`f/${slug}/?$`);
    }
  });

  test("Spanish blog pages do not advertise untranslated alternates", () => {
    const blogFiles = [];
    const walk = (directory) => {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const entryPath = path.join(directory, entry.name);
        if (entry.isDirectory()) walk(entryPath);
        if (entry.isFile() && entry.name === "index.html") blogFiles.push(entryPath);
      }
    };

    walk(path.join(root, "f"));
    expect(blogFiles.length).toBeGreaterThan(40);

    for (const file of blogFiles) {
      const html = fs.readFileSync(file, "utf8");
      expect(html).not.toMatch(/hreflang="(?:de|en)"[^>]+\/(?:de|en)\/f\//);
    }
  });

  test("localized homepages link to the canonical Spanish blog", async ({ page }) => {
    for (const locale of ["de", "en"]) {
      await page.goto(`/${locale}/`);
      const blogLinks = page.getByRole("link", { name: "Blog", exact: true });
      await expect(blogLinks.first()).toHaveAttribute("href", "/f/");
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

  test("Apache redirects legacy locale paths to Spanish", () => {
    const htaccess = fs.readFileSync(path.join(root, ".htaccess"), "utf8");
    expect(htaccess).toContain("RedirectMatch 301 ^/(de|en)/f/?$ /f/");
    expect(htaccess).toContain("RedirectMatch 301 ^/(de|en)/f/(.*)$ /f/$2");
  });
});
