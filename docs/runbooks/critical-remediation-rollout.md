# Critical Remediation Production Rollout

Date prepared: 2026-08-24  
Supabase project ref: `hocdlmxzghwymamientc`  
Production hosts: `samuelcoachdealeman.com`, `www.samuelcoachdealeman.com`

This runbook deploys the premium authorization, redirect, contact, newsletter and product-data remediations. Record timestamps, operator and result in the evidence table. Never record secret values.

## Release prerequisites

- A recent database backup or point-in-time recovery window is confirmed.
- Supabase CLI is authenticated and linked to `hocdlmxzghwymamientc`.
- Hostinger rollback can restore the previous static release.
- The Turnstile widget allows both production hostnames.
- Resend has a verified `RESEND_FROM_EMAIL` sender.
- A controlled test email and a normal non-premium test user are available.
- Required Edge Function variables exist: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `TURNSTILE_SECRET_KEY`, `CONTACT_EMAIL`, `SITE_URL`.
- The public Turnstile site key is available for the static release. It is public configuration, but its value is not stored in this runbook.

## Backup

Before migrations, export the affected data with access restricted to the operator:

- `profiles` fields related to `is_premium`;
- premium/access code tables and redemption history;
- `user_progress`, attempts/exercise attempts and messages;
- newsletter subscribers and contact rate-limit records if present.

Record the backup identifier and verify that it can be restored. Do not commit exports to Git.

Before migration `20260824000004`, count historical attempt rows that do not satisfy the new contract:

```sql
select count(*) as invalid_attempt_rows
from public.samuel_attempts
where score is not null
  and (score < 0 or max_score is null or max_score <= 0 or score > max_score);
```

The migration adds the score, level and type constraints as `NOT VALID`: new writes are protected without aborting on historical rows. Record the count, agree a correction rule before changing historical results, then validate each constraint in a later controlled migration.

## Deployment order

1. Confirm `git status --short` is empty and the merged commit matches the approved PR.
2. Run `supabase db push --linked` and verify migrations `20260824000001` through `20260824000004` appear in remote migration history.
3. Deploy `contact`, `newsletter-subscribe`, `newsletter-confirm` and `newsletter-unsubscribe` with JWT verification disabled as declared in `supabase/config.toml`.
4. Verify required secret names exist in Supabase without printing their values.
5. Replace `REPLACE_WITH_PRODUCTION_TURNSTILE_SITE_KEY` during the static release build/deployment. Do not commit the production key if hosting provides runtime injection.
6. Deploy the static site to Hostinger. The contact and newsletter clients use direct public Supabase Function URLs.
7. Purge the Hostinger/CDN cache and wait for both production hostnames to serve the new asset version.

Stop the rollout on any failed step. Do not continue to static deployment if migrations, functions, sender verification or Turnstile configuration are incomplete.

## Production smoke tests

- Submit one complete contact form with Turnstile. Expect one success response, one `leads` row and one email to `CONTACT_EMAIL`.
- Submit the same contact form more than five times inside 15 minutes from the test source. Expect throttling without duplicate delivery.
- Subscribe a controlled new address. Expect the same public response used for an existing address, one confirmation email and no active subscription before confirmation.
- Open the confirmation link, then the unsubscribe link. Expect idempotent success and correct database state.
- Attempt login with `redirect=https://example.com`. Expect a same-origin fallback, never an external redirect.
- With a normal user, attempt direct premium updates/RPC access. Expect denial.
- Redeem one controlled premium code once. Expect one atomic redemption; a second redemption must fail without changing state.
- Complete one exercise attempt. Expect canonical attempt fields and progress update.
- Mark one own message read. Expect success; attempt another user's message and expect denial.
- Open the corrected English routes from the internal-link report and confirm HTTP 200.
- Inspect browser console/network on homepage, contact, login and account pages. Expect no uncaught errors and no secret values in HTML or responses.

## Rollback

1. Restore the previous Hostinger static release first if forms or account flows regress.
2. Roll back Edge Functions to the previously recorded deployment versions.
3. Prefer a forward SQL fix. Restore the pre-release database backup only for confirmed data corruption and with a maintenance window.
4. Keep the hardened premium policies unless they are proven to block legitimate access; never restore client-side premium mutation.
5. Record the incident, affected requests and final data state.

## Evidence

| Check | Timestamp UTC | Operator | Result / reference |
| --- | --- | --- | --- |
| Backup verified |  |  |  |
| Migrations `00001`-`00004` applied |  |  |  |
| Four Edge Functions deployed |  |  |  |
| Turnstile hostnames and public key verified |  |  |  |
| Hostinger release deployed |  |  |  |
| Contact smoke test |  |  |  |
| Newsletter lifecycle smoke test |  |  |  |
| Auth/premium negative tests |  |  |  |
| Attempts/messages persistence tests |  |  |  |
| HTTP, links, console and secret inspection |  |  |  |

## Second wave

- Move teacher-report PII from `localStorage` to authenticated storage after roles and retention are agreed.
- Complete legal review and consent handling for Chatbase, Supabase, Resend and Cloudflare.
- Add HSTS and a nonce/hash-based CSP plus `frame-ancestors`, Referrer Policy and Permissions Policy.
- Remove iOS 13-incompatible syntax and enforce compatibility in CI.
