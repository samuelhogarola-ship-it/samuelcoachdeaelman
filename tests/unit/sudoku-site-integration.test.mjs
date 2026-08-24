import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const files = {
  game: new URL("../../recursos/sudoku-aleman/index.html", import.meta.url),
  resources: new URL("../../recursos/index.html", import.meta.url),
  practice: new URL("../../practicar-aleman/index.html", import.meta.url),
  sitemap: new URL("../../sitemap.xml", import.meta.url),
  next: new URL("../../NEXT.md", import.meta.url),
};

test("publishes indexable metadata and WebApplication structured data", async () => {
  const html = await readFile(files.game, "utf8");
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.samuelcoachdealeman\.com\/recursos\/sudoku-aleman\/">/);
  assert.match(html, /<meta name="description" content="[^"]*sudoku alemán[^"]*">/i);
  assert.match(html, /"@type": "WebApplication"/);
  assert.match(html, /"applicationCategory": "EducationalApplication"/);
});

test("links the game from both Spanish resource discovery pages", async () => {
  const [resources, practice] = await Promise.all([
    readFile(files.resources, "utf8"),
    readFile(files.practice, "utf8"),
  ]);
  assert.match(resources, /href="\/recursos\/sudoku-aleman\/"/);
  assert.match(practice, /href="\/recursos\/sudoku-aleman\/"/);
  assert.match(resources, />Sudoku Alemán</);
  assert.match(practice, />Sudoku Alemán</);
});

test("adds the canonical route to sitemap and records only the ad integration as pending", async () => {
  const [sitemap, next] = await Promise.all([
    readFile(files.sitemap, "utf8"),
    readFile(files.next, "utf8"),
  ]);
  assert.match(sitemap, /<loc>https:\/\/www\.samuelcoachdealeman\.com\/recursos\/sudoku-aleman\/<\/loc>/);
  assert.match(next, /Sudoku Alemán.*entregado/i);
  assert.match(next, /anuncios recompensados.*consentimiento.*antifraude/i);
});
