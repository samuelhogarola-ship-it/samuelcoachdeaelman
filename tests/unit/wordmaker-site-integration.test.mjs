import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const files = {
  game: new URL("../../recursos/wordmaker-aleman/index.html", import.meta.url),
  resources: new URL("../../recursos/index.html", import.meta.url),
  practice: new URL("../../practicar-aleman/index.html", import.meta.url),
  sitemap: new URL("../../sitemap.xml", import.meta.url),
};

test("publishes indexable Wordmaker metadata and structured data", async () => {
  const html = await readFile(files.game, "utf8");
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.samuelcoachdealeman\.com\/recursos\/wordmaker-aleman\/">/);
  assert.match(html, /<meta name="description" content="[^"]*(?:Wordmaker|crucigramas)[^"]*">/i);
  assert.match(html, /"@type": "LearningResource"/);
  assert.match(html, /"learningResourceType": "Juego educativo"/);
});

test("links Wordmaker from both Spanish discovery hubs", async () => {
  const [resources, practice] = await Promise.all([
    readFile(files.resources, "utf8"),
    readFile(files.practice, "utf8"),
  ]);
  for (const html of [resources, practice]) {
    assert.match(html, /href="\/recursos\/wordmaker-aleman\/"/);
    assert.match(html, />Wordmaker Alemán</);
  }
  assert.match(resources, /siete (?:accesos|recursos)/i);
  assert.match(practice, /5 apps/i);
});

test("adds the canonical Wordmaker route to the sitemap", async () => {
  const sitemap = await readFile(files.sitemap, "utf8");
  assert.match(sitemap, /<loc>https:\/\/www\.samuelcoachdealeman\.com\/recursos\/wordmaker-aleman\/<\/loc>/);
});
