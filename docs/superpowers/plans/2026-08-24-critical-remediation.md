# Critical Security and Product Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminar el fallo critico de autorizacion premium y restaurar de forma verificable login, captacion, persistencia y reproducibilidad del build.

**Architecture:** Supabase mantiene Auth, RLS y datos de producto; las operaciones privilegiadas quedan limitadas a `service_role` y el canje de codigos a usuarios autenticados. Las Edge Functions son el backend canonico para contacto y newsletter, mientras Hostinger solo sirve el sitio estatico. Los contratos compartidos se validan con tests Node/Playwright y CI reconstruye el sitio para detectar deriva.

**Tech Stack:** HTML/CSS/JavaScript estatico, Node.js 20, Playwright, Supabase Postgres/RLS/Edge Functions, Cloudflare Turnstile, Resend, GitHub Actions.

**Spec:** `docs/audits/2026-08-24-security-product-audit.md`

## Global Constraints

- Mantener el sitio estatico y las rutas ES, DE y EN.
- No versionar `service_role`, Turnstile secret, Resend keys ni contrasenas.
- Conservar compatibilidad iOS 13 en `assets/js`: no usar optional chaining ni nullish coalescing.
- Escribir primero una prueba que demuestre cada regresion.
- No aplicar la migracion remota hasta revisar los registros premium existentes.
- Cada tarea termina en un commit independiente y revisable.

---

### Task 1: Close Premium Authorization Escalation

**Files:**
- Create: `supabase/migrations/20260824000001_lock_down_premium.sql`
- Create: `tests/security/premium-migration.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: tablas y funciones creadas por `20260701000001` a `20260701000003`.
- Produces: `redeem_premium_code(text) -> boolean` ejecutable solo por `authenticated`; RPC administrativas ejecutables solo por `service_role`.

- [ ] **Step 1: Add a failing static security test**

Crear un test Node que lea la nueva migracion y exija literalmente:

```js
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const sql = fs.readFileSync("supabase/migrations/20260824000001_lock_down_premium.sql", "utf8");

test("premium migration removes user writes and public admin RPC access", () => {
  assert.match(sql, /drop policy if exists "samuel_profiles_own_insert"/i);
  assert.match(sql, /drop policy if exists "samuel_profiles_own_update"/i);
  assert.match(sql, /revoke execute on function admin_set_premium\(uuid, int\) from public, anon, authenticated/i);
  assert.match(sql, /grant execute on function admin_set_premium\(uuid, int\) to service_role/i);
  assert.match(sql, /grant execute on function redeem_premium_code\(text\) to authenticated/i);
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `node --test tests/security/premium-migration.test.mjs`

Expected: FAIL because the corrective migration does not exist.

- [ ] **Step 3: Implement the corrective migration**

The migration must:

```sql
drop policy if exists "samuel_profiles_own_insert" on public.samuel_profiles;
drop policy if exists "samuel_profiles_own_update" on public.samuel_profiles;

revoke execute on function public.admin_set_premium(uuid, int) from public, anon, authenticated;
revoke execute on function public.generate_premium_code(int, text, text) from public, anon, authenticated;
grant execute on function public.admin_set_premium(uuid, int) to service_role;
grant execute on function public.generate_premium_code(int, text, text) to service_role;

revoke execute on function public.redeem_premium_code(text) from public, anon;
grant execute on function public.redeem_premium_code(text) to authenticated;
```

Replace `redeem_premium_code` with a `SECURITY DEFINER SET search_path = pg_catalog, public` implementation that performs one conditional `UPDATE ... WHERE redeemed_by IS NULL RETURNING id, duration_days INTO ...`; only grant premium when that `UPDATE` returned a row. Reject null users and blank codes.

- [ ] **Step 4: Add semantic assertions for atomic redemption**

Extend the test to require `UPDATE`, `redeemed_by IS NULL`, `RETURNING` and absence of the old `SELECT ... redeemed_by IS NULL` sequence.

- [ ] **Step 5: Run local verification**

Run: `node --test tests/security/premium-migration.test.mjs && npm run lint`

Expected: PASS, with no ESLint errors.

- [ ] **Step 6: Prepare the remote safety query**

Before applying the migration, run in Supabase SQL Editor and export the result:

```sql
select user_id, is_premium, premium_expires_at
from public.samuel_profiles
where is_premium = true
order by premium_expires_at desc nulls last;

select code, customer_email, redeemed_by, redeemed_at
from public.samuel_premium_codes
order by created_at desc;
```

- [ ] **Step 7: Commit**

```bash
git add supabase/migrations/20260824000001_lock_down_premium.sql tests/security/premium-migration.test.mjs package.json
git commit -m "fix: lock down premium authorization"
```

### Task 2: Reject External Login Redirects

**Files:**
- Create: `assets/js/auth-redirect.js`
- Create: `tests/unit/auth-redirect.test.mjs`
- Modify: `login/index.html`
- Modify: `de/login/index.html`
- Modify: `en/login/index.html`

**Interfaces:**
- Produces: `safeAuthRedirect(candidate: string | null, fallback: string, origin?: string): string`.

- [ ] **Step 1: Write failing URL validation tests**

Cover `/mi-cuenta/`, `/de/mi-cuenta/?tab=progreso`, `//evil.example`, `/\\evil.example`, `https://evil.example`, blank values and malformed encoding. Safe inputs return the relative path; all others return the fallback.

- [ ] **Step 2: Verify the tests fail**

Run: `node --test tests/unit/auth-redirect.test.mjs`

Expected: FAIL because `auth-redirect.js` does not exist.

- [ ] **Step 3: Implement the pure helper**

Use `new URL(candidate, origin)`, reject values not starting with exactly one `/`, reject backslashes, and require `parsed.origin === origin`. Return `parsed.pathname + parsed.search + parsed.hash`.

- [ ] **Step 4: Use the helper in all login variants**

Import `safeAuthRedirect` in each module script and replace every `startsWith('/')` redirect branch.

- [ ] **Step 5: Add a Playwright regression**

Intercept or mock the auth state so the login redirect function runs with `?redirect=//example.com`; assert the final URL remains on the local account route.

- [ ] **Step 6: Run tests and commit**

Run: `node --test tests/unit/auth-redirect.test.mjs && npx playwright test tests/playwright/site.spec.js && npm run lint`

```bash
git add assets/js/auth-redirect.js login de/login en/login tests/unit/auth-redirect.test.mjs tests/playwright/site.spec.js
git commit -m "fix: validate post-login redirects"
```

### Task 3: Make Contact Protection Server-Enforced

**Files:**
- Modify: `supabase/config.toml`
- Modify: `supabase/functions/contact/index.ts`
- Modify: `supabase/functions/contact/contact-handler.mjs`
- Modify: `supabase/functions/contact/index.test.mjs`
- Create: `supabase/migrations/20260824000002_contact_rate_limit.sql`
- Modify: `assets/js/main.js`
- Modify: `tests/playwright/contact-form.spec.js`
- Modify: `docs/contact-form-production.md`

**Interfaces:**
- Contact endpoint: `POST /functions/v1/contact` with JSON and mandatory `turnstileToken`.
- Success: `{ success: true, messageKey: "success", email_sent: boolean }`.
- Failure: status 400/429/500 with a stable `messageKey`.

- [ ] **Step 1: Add failing tests for missing token, oversized fields and repeated submissions**

Extend the contact service tests to reject a missing token, names over 120 chars, emails over 254 chars, free text over 5,000 chars, and a rate limiter returning `false`.

- [ ] **Step 2: Run the tests and verify the new cases fail**

Run: `node --test supabase/functions/contact/index.test.mjs`

- [ ] **Step 3: Implement server-side validation and rate-limit interface**

Add `checkRateLimit(ipHash)` to `createContactService`. The Edge adapter queries `leads` for the same hash during the previous 15 minutes and allows at most five accepted submissions. Return HTTP 429 with `messageKey: "retry"` before Turnstile/email when denied. Keep Turnstile mandatory regardless of frontend state. Add an index on `(ip_hash, created_at desc)` in `20260824000002_contact_rate_limit.sql` so the check does not scan the leads table.

- [ ] **Step 4: Fail closed in the frontend**

When the form contains `[data-turnstile-container]`, set `required: true`; if no site key exists, show `turnstileError` and never call `fetch` or `mailto:`.

- [ ] **Step 5: Configure the public Edge Function**

Add:

```toml
[functions.contact]
verify_jwt = false
```

Restrict CORS to `https://www.samuelcoachdealeman.com` and the explicit local Playwright origin supplied in development, rather than `*`.

- [ ] **Step 6: Update Playwright expectations**

Replace the current test that expects email fallback without Turnstile with an assertion that no endpoint request occurs and the controlled security error remains visible.

- [ ] **Step 7: Verify and commit**

Run: `node --test supabase/functions/contact/index.test.mjs && npx playwright test tests/playwright/contact-form.spec.js && npm run lint`

```bash
git add supabase/config.toml supabase/functions/contact assets/js/main.js tests/playwright/contact-form.spec.js docs/contact-form-production.md
git commit -m "fix: enforce contact anti-abuse checks"
```

### Task 4: Restore Newsletter End to End

**Files:**
- Modify: `supabase/config.toml`
- Modify: `supabase/functions/newsletter-subscribe/index.ts`
- Create: `supabase/functions/newsletter-subscribe/newsletter-handler.mjs`
- Modify: `supabase/functions/newsletter-confirm/index.ts`
- Create: `supabase/functions/newsletter-confirm/redirect-policy.mjs`
- Create: `supabase/functions/newsletter-unsubscribe/index.ts`
- Create: `tests/unit/newsletter-functions.test.mjs`
- Modify: `assets/js/newsletter.js`
- Create: `tests/playwright/newsletter.spec.js`
- Modify: `supabase/migrations/20260704000001_newsletter_subscribers.sql` only if not yet applied; otherwise create `20260824000003_newsletter_hardening.sql`.

**Interfaces:**
- Subscribe, confirm and unsubscribe use direct Supabase Function URLs derived from `SUPABASE_URL`.
- Public responses never reveal whether an email was already subscribed.
- Confirmation and unsubscribe tokens expire and rotate.

- [ ] **Step 1: Write failing unit tests for endpoint construction and privacy**

Move endpoint construction, response selection and resend eligibility to `newsletter-handler.mjs`; move redirect validation to `redirect-policy.mjs`. Require confirmation links to point to `https://hocdlmxzghwymamientc.supabase.co/functions/v1/newsletter-confirm`, identical subscribe responses for existing/new emails, safe same-origin final redirects, and an unsubscribe URL in every future newsletter payload.

- [ ] **Step 2: Write a failing Playwright test**

Mock the direct subscribe endpoint, submit the ES/DE/EN forms and assert the expected locale and success message. Assert non-2xx JSON keeps the email in the field and re-enables the button.

- [ ] **Step 3: Implement function configuration**

```toml
[functions.newsletter-subscribe]
verify_jwt = false
[functions.newsletter-confirm]
verify_jwt = false
[functions.newsletter-unsubscribe]
verify_jwt = false
```

- [ ] **Step 4: Harden subscriber state**

Add `confirmation_expires_at`, `unsubscribe_token` and `last_confirmation_sent_at`. Set confirmation expiry to 24 hours, rotate expired confirmation tokens, cap resends to one per 15 minutes, return `{ "status": "confirmation_sent" }` for both existing and new accepted addresses, and implement unsubscribe by an unguessable UUID token that sets `unsubscribed_at` and `confirmed = false`.

- [ ] **Step 5: Point the browser to the deployed function**

Define one constant direct endpoint in `newsletter.js`; check `response.ok` before parsing success and never reset the form on failure.

- [ ] **Step 6: Verify and commit**

Run: `node --test tests/unit/newsletter-functions.test.mjs && npx playwright test tests/playwright/newsletter.spec.js && npm run lint`

```bash
git add supabase/config.toml supabase/functions/newsletter-* supabase/migrations tests/unit/newsletter-functions.test.mjs assets/js/newsletter.js tests/playwright/newsletter.spec.js
git commit -m "fix: restore newsletter delivery flow"
```

### Task 5: Align Attempts, Progress and Message RLS

**Files:**
- Create: `supabase/migrations/20260824000004_product_data_contract.sql`
- Modify: `de/pruefungsvorbereitung-telc-goethe/ejercicio/index.html`
- Modify: `mi-cuenta/index.html`
- Modify: `de/mi-cuenta/index.html`
- Modify: `en/mi-cuenta/index.html`
- Modify: `assets/js/leseverstehen.js`
- Create: `tests/unit/product-data-contract.test.mjs`
- Create: `tests/playwright/account-data.spec.js`

**Interfaces:**
- Attempt input: `{ user_id, exercise_slug, exercise_type, nivel, answers, score, max_score, completed_at }`.
- Progress RPC accepts only known levels, known exercise types and score `0..100`.
- Users can mark only their own coach messages as read; they cannot edit content or sender.

- [ ] **Step 1: Write failing SQL contract tests**

Assert the migration adds the three exercise identity columns, makes `exercise_id` nullable for generated/static exercises or supplies a resolvable FK path, validates score ranges, validates levels/types, and creates a message update policy with both `USING` and `WITH CHECK` on `user_id = auth.uid()`.

- [ ] **Step 2: Implement the migration**

Choose one canonical attempt schema and update existing rows without deleting data. Add a dedicated `mark_samuel_messages_read(uuid[])` RPC if column-level `UPDATE` cannot be expressed safely through RLS; grant it only to authenticated users and constrain IDs by `auth.uid()` and `sender = 'coach'`.

- [ ] **Step 3: Update client payloads and error handling**

Use the canonical schema everywhere. Check every `fetch().ok`; display a visible retry state instead of empty arrays or silent catches.

- [ ] **Step 4: Remove dynamic `innerHTML` sinks**

Build challenge, progress and message rows with `createElement` and `textContent`; numeric widths must be clamped to `0..100` before assigning `style.width`.

- [ ] **Step 5: Add authenticated contract tests**

Use mocked REST responses in Playwright to prove attempts save, messages become read, malformed text renders literally, and failed calls produce a visible error.

- [ ] **Step 6: Verify and commit**

Run: `node --test tests/unit/product-data-contract.test.mjs && npx playwright test tests/playwright/account-data.spec.js && npm run lint`

```bash
git add supabase/migrations/20260824000004_product_data_contract.sql de/pruefungsvorbereitung-telc-goethe/ejercicio assets/js/leseverstehen.js mi-cuenta de/mi-cuenta en/mi-cuenta tests
git commit -m "fix: align product data persistence"
```

### Task 6: Make Generated Output Reproducible

**Files:**
- Modify: `scripts/generate-localized-pages.mjs`
- Modify: `generate-blog.js`
- Modify: source templates/data identified by the 31-file diff
- Create: `scripts/check-generated-clean.mjs`
- Modify: `package.json`
- Modify: `.github/workflows/ci.yml`

**Interfaces:**
- `npm run build` must be deterministic and preserve newsletter, contact config hooks, font loading and current SEO metadata.
- `npm run check:generated` exits 1 when build changes tracked files.

- [ ] **Step 1: Capture the current drift as a failing check**

Implement `check-generated-clean.mjs` to run `npm run build`, then `git diff --exit-code -- . ':(exclude)output'`. Add `"check:generated": "node scripts/check-generated-clean.mjs"`.

- [ ] **Step 2: Verify it fails with the current 31-file drift**

Run: `npm run check:generated`

Expected: FAIL and list generated files.

- [ ] **Step 3: Move hand-edited output into generator sources**

Update generators so they emit the current newsletter sections/scripts, asynchronous font loading, contact runtime hooks, canonical links and sitemap entries. Do not patch generated DE/EN HTML directly.

- [ ] **Step 4: Verify deterministic output twice**

Run: `npm run build && npm run build && git diff --exit-code`

Expected: both builds produce no tracked diff.

- [ ] **Step 5: Add the build gate to CI**

After `npm ci`, run `npm run check:generated` before Playwright. Add `node --test tests/unit/*.test.mjs tests/security/*.test.mjs` as a separate job or step.

- [ ] **Step 6: Commit**

```bash
git add scripts generate-blog.js package.json .github/workflows/ci.yml de en f sitemap.xml
git commit -m "build: enforce reproducible generated pages"
```

### Task 7: Close Dependency and Route Regressions

**Files:**
- Modify: `package-lock.json`
- Modify: `en/exam-preparation/index.html`
- Modify: `en/learn-german-alone/index.html`
- Modify: `en/work-in-germany/index.html`
- Create: `scripts/check-internal-links.mjs`
- Modify: `package.json`
- Modify: `.github/workflows/ci.yml`

**Interfaces:**
- Internal link checker exits nonzero for missing local targets and supports an explicit allowlist for template examples.

- [ ] **Step 1: Add the link checker and reproduce five real 404s**

Parse tracked HTML `href/src`, ignore external protocols and known template placeholders, resolve extensionless routes to `index.html`, and print source plus target.

- [ ] **Step 2: Correct the English links**

Map `/en/resources/` to `/en/recursos/`, `/en/services/` to `/en/servicios/`, and `/en/privacy/` to `/en/politica-de-privacidad/`.

- [ ] **Step 3: Upgrade the vulnerable dependency**

Run: `npm audit fix`

Review `package-lock.json`; do not accept major framework upgrades unrelated to `brace-expansion`.

- [ ] **Step 4: Add CI gates**

Add `npm run check:links` and `npm audit --audit-level=high` to CI.

- [ ] **Step 5: Run the complete local gate**

Run: `npm run lint && npm run check:links && npm audit --audit-level=high && npm run test:e2e && npm run check:generated`

Expected: zero failures; document any intentionally skipped E2E separately rather than hiding new skips.

- [ ] **Step 6: Commit**

```bash
git add package-lock.json en scripts/check-internal-links.mjs package.json .github/workflows/ci.yml
git commit -m "ci: block dependency and route regressions"
```

### Task 8: Production Rollout and Verification

**Files:**
- Modify: `docs/contact-form-production.md`
- Modify: `NEXT.md`
- Create: `docs/runbooks/critical-remediation-rollout.md`

**Interfaces:**
- Produces a rollback-ready deployment order and recorded evidence for Supabase, Edge Functions and Hostinger.

- [ ] **Step 1: Record prerequisites without secret values**

List required variable names, Turnstile hostname, Resend verified sender, Supabase project ref and function names. Never paste values into the runbook.

- [ ] **Step 2: Deploy in reversible order**

1. Back up premium/profile/code rows.
2. Apply migrations `20260824000001` through `00004`.
3. Deploy contact/newsletter Edge Functions.
4. Set public Turnstile site key and direct public endpoints in generated site configuration.
5. Deploy static files to Hostinger.

- [ ] **Step 3: Run production smoke tests**

Verify one real contact submission, subscribe/confirm/unsubscribe with a controlled address, safe login redirect, premium denial for a normal user, one code redemption, attempt persistence and message read state.

- [ ] **Step 4: Verify HTTP and browser behavior**

Check all endpoints return expected status, browser console has no errors, no secrets appear in page source, and the five English routes no longer return 404.

- [ ] **Step 5: Update operational documentation and commit**

Remove stale PR/migration claims from `NEXT.md`, record deployment date and known second-wave work.

```bash
git add docs NEXT.md
git commit -m "docs: add critical remediation rollout runbook"
```

## Second Wave, Kept Out of This Plan

- Migrate `informes-profesor` PII from `localStorage` to authenticated Supabase storage after deciding roles and retention.
- Replace the draft privacy policy after legal review and document Chatbase/Supabase/Resend/Cloudflare processing.
- Add consent gating or remove Chatbase.
- Add HSTS, a nonce/hash-based CSP, `frame-ancestors`, Referrer Policy and Permissions Policy after inventorying every third-party script.
- Remove iOS 13-incompatible syntax from `assets/js/auth.js` and enforce it in lint/CI.
