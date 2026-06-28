# Release checklist

This checklist reflects the current real state of Samuel Coach de Alemán in this repository.

It is intentionally split into:

- `P0`: blockers before production launch
- `P1`: recommended right after deploy or during launch hardening
- `P2`: next improvements that are valuable but not launch blockers

## P0

These items should be completed before considering the current stack production-ready.

- Set the real public Turnstile site key in frontend runtime config.
- Set all required Supabase secrets:
  - `TURNSTILE_SECRET_KEY`
  - `RESEND_API_KEY`
  - `RESEND_FROM_EMAIL`
  - `CONTACT_EMAIL`
  - `SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`
- Decide the hosting strategy for Edge Functions:
  - same-origin rewrite for `/functions/v1/*`, or
  - direct Supabase Function URLs in runtime config
- Apply database migrations with `supabase db push`.
- Deploy the active Edge Functions:
  - `contact`
  - `public-reviews`
  - `admin-users`
  - `admin-leads`
  - `admin-reviews`
  - `account-leads`
  - `account-export`
  - `account-delete`
  - `leads-retention`
- Assign the first real `admin` role in `public.user_roles`.
- Validate the contact flow end to end against the live backend:
  - Turnstile passes
  - lead is stored
  - Resend notification is delivered
- Validate the public reviews flow against the live backend.
- Validate `/mi-cuenta/` against the live backend:
  - profile save
  - avatar upload
  - own leads list
  - account export
  - account deletion
- Validate `/admin/`, `/admin/users/`, `/admin/leads/` and `/admin/reviews/` with a real admin session.
- Run one manual `dry_run` of `leads-retention`.

## P1

These items are not hard blockers for first launch, but they should be scheduled immediately after deploy.

- Remove or reduce `ADMIN_BOOTSTRAP_EMAILS` once the first real admins are assigned.
- Verify `RESEND_FROM_EMAIL` with the final production domain and watch initial delivery results.
- Review Supabase Function logs for:
  - contact errors
  - admin auth failures
  - account export/delete failures
  - retention job output
- Confirm the final retention policy with production stakeholders:
  - `spam` deletion window
  - anonymization window for `new`, `reviewed`, `answered`
- Seed or review real public testimonials in `public.reviews` and `public.review_sources`.
- Confirm the production privacy policy text matches the implemented account export, deletion and lead retention behavior.

## P2

These are the next worthwhile improvements after launch stabilization.

- Replace temporary operational docs with a tighter runbook for admin tasks and privacy requests.
- Add a live staging or smoke script for the deployed Edge Functions, not only local mocked E2E coverage.
- Add stronger monitoring or alerting around:
  - failed contact submissions
  - failed Resend sends
  - failed retention runs
- Tighten the admin/account/public-reviews deployment verification into one repeatable launch checklist command set.
- Continue the broader product roadmap outside this release:
  - richer reviews operations
  - account/dashboard evolution
  - premium/resources architecture

## Current evidence behind this checklist

The codebase already contains:

- Supabase Auth + RLS frontend integration
- server-side contact handling with Turnstile and Resend
- admin routes for users, leads and reviews
- account export, deletion and own-leads flows
- lead retention workflow
- runtime-configurable frontend endpoints for contact, account and admin areas
- local QA coverage for key dashboard/admin/contact flows

The main remaining work is operational production setup and live environment verification, not a missing core implementation in the repository.

## Related docs

- `docs/production-deployment.md`
- `docs/frontend-runtime-config.md`
- `docs/contact-form-production.md`
- `docs/auth-production.md`
- `docs/admin-operations.md`
- `docs/leads-retention.md`
- `docs/pr-scope-production.md`
- `docs/production-handoff.md`
