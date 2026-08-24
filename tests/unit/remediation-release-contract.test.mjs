import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../../${path}`, import.meta.url), "utf8");

test("production docs match the deployed contact contract", async () => {
  const [contactSource, contactDocs, runbook] = await Promise.all([
    read("supabase/functions/contact/index.ts"),
    read("docs/contact-form-production.md"),
    read("docs/runbooks/critical-remediation-rollout.md")
  ]);

  assert.match(contactSource, /requireEnv\("CONTACT_EMAIL"\)/);
  assert.match(contactDocs, /`CONTACT_EMAIL`/);
  assert.doesNotMatch(contactDocs, /CONTACT_TO_EMAIL/);
  assert.match(runbook, /`CONTACT_EMAIL`/);
  assert.doesNotMatch(runbook, /CONTACT_TO_EMAIL|contact_leads|next=https:/);
  assert.match(runbook, /redirect=https:/);
  assert.match(runbook, /one `leads` row/i);
});

test("generated-output gate rebuilds authoritative generators", async () => {
  const [packageJson, checker] = await Promise.all([
    read("package.json"),
    read("scripts/check-generated-clean.mjs")
  ]);
  const scripts = JSON.parse(packageJson).scripts;

  assert.ok(scripts["build:generated"]);
  assert.match(checker, /npm", \["run", "build:generated"\]/);
  assert.doesNotMatch(checker, /npm", \["run", "build"\]/);
});

test("CI runs executable local Postgres policy tests", async () => {
  const workflow = await read(".github/workflows/ci.yml");
  assert.match(workflow, /supabase\/setup-cli@v2/);
  assert.match(workflow, /supabase db start/);
  assert.match(workflow, /supabase test db/);
});
