import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const sourceBlogDir = path.join(rootDir, "f");
const sitemapFile = path.join(rootDir, "sitemap.xml");
const unsupportedLocales = ["de", "en"];
const legacyBlogAliases = [
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

function findBlogFiles() {
  const files = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(entryPath);
      } else if (entry.name === "index.html") {
        files.push(entryPath);
      }
    }
  }

  walk(sourceBlogDir);
  return files.sort();
}

function removeUnsupportedAlternates(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const consolidated = source.replace(
    /\n\s*<link rel="alternate" hreflang="(?:de|en)" href="https:\/\/www\.samuelcoachdealeman\.com\/(?:de|en)\/f\/[^"]*">/g,
    ""
  );

  if (consolidated !== source) {
    fs.writeFileSync(filePath, consolidated, "utf8");
  }
}

function removeGeneratedLocaleTrees() {
  for (const locale of unsupportedLocales) {
    fs.rmSync(path.join(rootDir, locale, "f"), { recursive: true, force: true });
  }
}

function removeLegacyBlogAliases() {
  for (const slug of legacyBlogAliases) {
    fs.rmSync(path.join(sourceBlogDir, slug), { recursive: true, force: true });
  }
}

function removeLocalizedBlogSitemapBlock() {
  if (!fs.existsSync(sitemapFile)) return;

  const source = fs.readFileSync(sitemapFile, "utf8");
  const consolidated = source.replace(
    /\s*<!-- BLOG-I18N:START -->[\s\S]*?<!-- BLOG-I18N:END -->\s*/g,
    "\n"
  );

  if (consolidated !== source) {
    fs.writeFileSync(sitemapFile, consolidated, "utf8");
  }
}

const blogFiles = findBlogFiles();
blogFiles.forEach(removeUnsupportedAlternates);
removeGeneratedLocaleTrees();
removeLegacyBlogAliases();
removeLocalizedBlogSitemapBlock();

console.log(
  `Consolidated ${blogFiles.length} Spanish blog pages; removed ${legacyBlogAliases.length} legacy aliases and untranslated /de/f/ and /en/f/ outputs.`
);
