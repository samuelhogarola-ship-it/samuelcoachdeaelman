import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const files = {
  game: new URL("../../recursos/grammatik-mission/index.html", import.meta.url),
  resources: new URL("../../recursos/index.html", import.meta.url),
  practice: new URL("../../practicar-aleman/index.html", import.meta.url),
  sitemap: new URL("../../sitemap.xml", import.meta.url),
};

test("publishes an indexable and accessible Grammatik Mission shell", async () => {
  const html = await readFile(files.game, "utf8");

  assert.match(html, /<link rel="canonical" href="https:\/\/www\.samuelcoachdealeman\.com\/recursos\/grammatik-mission\/">/);
  assert.match(html, /<meta name="description" content="[^"]*Grammatik-Mission[^"]*">/i);
  assert.match(html, /"@type": "LearningResource"/);
  assert.match(html, /"learningResourceType": "Juego educativo"/);
  assert.match(html, /data-grammatik-mission/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /grammatik-mission-engine\.js/);
  assert.match(html, /grammatik-mission-progress\.js/);
  assert.match(html, /grammatik-mission\.js/);
});

test("marks unavailable levels as disabled and keeps B1 selectable", async () => {
  const html = await readFile(files.game, "utf8");

  for (const level of ["A1", "A2", "B2"]) {
    assert.match(html, new RegExp(`data-level="${level}"[^>]*disabled[^>]*>[^<]*${level}[^<]*En preparación`, "i"));
  }
  assert.match(html, /data-level="B1"[^>]*aria-pressed="true"/);
});

test("exposes controls and live regions for a complete mission", async () => {
  const html = await readFile(files.game, "utf8");

  assert.match(html, /data-start-mission/);
  assert.match(html, /data-challenge/);
  assert.match(html, /data-progress-text/);
  assert.match(html, /data-feedback[^>]*aria-live="polite"/);
  assert.match(html, /data-summary/);
  assert.match(html, /data-action="hint"/);
  assert.match(html, /data-action="check"/);
  assert.match(html, /data-action="skip"/);
});

test("links Grammatik Mission from both Spanish discovery hubs", async () => {
  const [resources, practice] = await Promise.all([
    readFile(files.resources, "utf8"),
    readFile(files.practice, "utf8"),
  ]);

  for (const html of [resources, practice]) {
    assert.match(html, /href="\/recursos\/grammatik-mission\/"/);
    assert.match(html, />Grammatik-Mission</);
  }
});

test("adds the canonical Grammatik Mission route to the sitemap", async () => {
  const sitemap = await readFile(files.sitemap, "utf8");

  assert.match(sitemap, /<loc>https:\/\/www\.samuelcoachdealeman\.com\/recursos\/grammatik-mission\/<\/loc>/);
});

export { files };
