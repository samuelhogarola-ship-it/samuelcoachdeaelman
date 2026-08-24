import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { clampPercent } from "../../assets/js/account-ui.mjs";

const read = (path) => readFile(new URL(`../../${path}`, import.meta.url), "utf8");

test("percentage widths are clamped to the visible range", () => {
  assert.equal(clampPercent(-20), 0);
  assert.equal(clampPercent(47.6), 48);
  assert.equal(clampPercent(140), 100);
  assert.equal(clampPercent("invalid"), 0);
});

test("product migration aligns attempts, progress and read receipts", async () => {
  const sql = await read("supabase/migrations/20260824000004_product_data_contract.sql");
  assert.match(sql, /add column if not exists exercise_slug text/i);
  assert.match(sql, /add column if not exists exercise_type text/i);
  assert.match(sql, /add column if not exists nivel text/i);
  assert.match(sql, /alter column exercise_id drop not null/i);
  assert.match(sql, /score[^;]+score <= max_score/is);
  assert.match(sql, /v_nivel not in \('a1', 'a2', 'b1', 'b2', 'c1'\)/i);
  assert.match(sql, /mark_samuel_messages_read\(uuid\[\]\)/i);
  assert.match(sql, /user_id = auth\.uid\(\)[^;]+sender = 'coach'/is);
  assert.match(sql, /grant execute[^;]+authenticated/is);
});

test("exercise attempts send the canonical payload and surface failures", async () => {
  const html = await read("de/pruefungsvorbereitung-telc-goethe/ejercicio/index.html");
  for (const field of [
    "user_id", "exercise_id", "exercise_slug", "exercise_type", "nivel",
    "answers", "score", "max_score", "completed_at"
  ]) {
    assert.match(html, new RegExp(`${field}:`));
  }
  assert.match(html, /if \(!saveRes\.ok\)/);
  assert.match(html, /save-status/);
});

test("localized account pages use safe shared rendering and the read RPC", async () => {
  for (const path of ["mi-cuenta/index.html", "de/mi-cuenta/index.html", "en/mi-cuenta/index.html"]) {
    const html = await read(path);
    assert.match(html, /account-ui\.mjs/);
    assert.match(html, /markMessagesRead/);
    assert.match(html, /no se pudo cargar|konnte nicht geladen|could not be loaded/i);
    assert.doesNotMatch(html, /samuel_messages\?id=in\./);
    assert.doesNotMatch(html, /container\.innerHTML = html/);
  }
});
