# Deployment runbook

This runbook is the step-by-step sequence to move the current Samuel Coach de Alemán stack to production.

It assumes the code already present in this repository:

- static frontend
- Supabase Auth + Postgres + RLS
- Supabase Storage for avatars
- Supabase Edge Functions for contact, admin, account and retention flows
- Resend for contact notifications
- Cloudflare Turnstile for public contact protection

This guide is intentionally operational. It focuses on order, commands and checkpoints.

## 0. Preflight

Before touching production, make sure you have:

- Supabase CLI installed and authenticated
- access to the target Supabase project
- access to the production hosting setup
- the real Turnstile site key
- the real Turnstile secret key
- the Resend API key
- a verified `RESEND_FROM_EMAIL`
- a production inbox for `CONTACT_EMAIL`

## 1. Decide the frontend routing mode

Pick one of these two modes before configuring the frontend:

- `rewrite mode`: your hosting proxies `/functions/v1/*` to Supabase
- `direct mode`: the frontend calls Supabase Function URLs directly

If this is still undecided, stop here and decide it first. The public runtime config depends on it.

Reference:

- `docs/frontend-runtime-config.md`

## 2. Link the local project to Supabase

```bash
supabase link --project-ref YOUR_PROJECT_REF
```

Checkpoint:

- the command succeeds against the intended production project

## 3. Set required Supabase secrets

```bash
supabase secrets set \
  TURNSTILE_SECRET_KEY=... \
  RESEND_API_KEY=... \
  RESEND_FROM_EMAIL="Samuel Coach de Alemán <hola@your-domain.com>" \
  CONTACT_EMAIL=... \
  SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co \
  SUPABASE_SERVICE_ROLE_KEY=...
```

Optional operational secrets:

```bash
supabase secrets set \
  ADMIN_BOOTSTRAP_EMAILS="admin1@example.com,admin2@example.com" \
  RETENTION_JOB_SECRET=... \
  LEADS_SPAM_RETENTION_DAYS=30 \
  LEADS_PII_RETENTION_DAYS=365 \
  LEADS_RETENTION_BATCH_SIZE=500
```

Checkpoint:

- all required values are loaded in Supabase
- `RESEND_FROM_EMAIL` belongs to a verified sender/domain in Resend

## 4. Apply database migrations

```bash
supabase db push
```

Expected migrations in the current stack:

- `20260627000100_contact_leads.sql`
- `20260627000200_profiles_and_roles.sql`
- `20260627000300_reviews_catalog.sql`
- `20260627000400_profile_avatars_storage.sql`
- `20260628000100_leads_retention.sql`
- `20260628000200_leads_answered_status.sql`

Checkpoint:

- all migrations apply cleanly
- `public.leads`, `public.profiles`, `public.user_roles`, `public.review_sources`, `public.reviews` exist as expected
- the `profile-avatars` bucket exists

## 5. Deploy Edge Functions

Deploy the public functions:

```bash
supabase functions deploy contact --no-verify-jwt
supabase functions deploy public-reviews --no-verify-jwt
```

Deploy the protected functions:

```bash
supabase functions deploy admin-users
supabase functions deploy admin-leads
supabase functions deploy admin-reviews
supabase functions deploy account-leads
supabase functions deploy account-export
supabase functions deploy account-delete
supabase functions deploy leads-retention
```

Checkpoint:

- all listed functions deploy successfully
- `contact` and `public-reviews` remain public
- admin/account functions remain JWT-protected

## 6. Configure frontend runtime values

Inject the public browser config in production.

If you use rewrites, start from the snippet in:

- `docs/frontend-runtime-config.md` → `Option A`

If you use direct Supabase URLs, start from:

- `docs/frontend-runtime-config.md` → `Option B`

Minimum public values required:

- `window.__SAMUEL_AUTH_CONFIG__.supabaseUrl`
- `window.__SAMUEL_AUTH_CONFIG__.supabaseAnonKey`
- `window.__SAMUEL_CONTACT_CONFIG__.turnstileSiteKey`
- `window.__SAMUEL_CONTACT_CONFIG__.contactEndpoint`
- `window.__SAMUEL_ACCOUNT_CONFIG__.*`
- `window.__SAMUEL_ADMIN_CONFIG__.*`
- if using direct mode: `window.__SAMUEL_HOME_CONFIG__.publicReviewsEndpoint`

Checkpoint:

- no test Turnstile key remains
- no placeholder values remain
- endpoints match the chosen routing mode

## 7. Configure hosting

If you use rewrite mode, configure your hosting to proxy at least:

- `/functions/v1/contact`
- `/functions/v1/public-reviews`
- `/functions/v1/account-leads`
- `/functions/v1/account-export`
- `/functions/v1/account-delete`
- `/functions/v1/admin-users`
- `/functions/v1/admin-leads`
- `/functions/v1/admin-reviews`

If you use direct mode:

- do not rely on `/functions/v1/*` being served by the site host
- verify all runtime-configured URLs point to `https://YOUR_PROJECT_REF.supabase.co/functions/v1/...`

Checkpoint:

- the chosen routing mode is actually implemented, not only documented

## 8. Bootstrap the first real admin

Preferred path:

```sql
insert into public.user_roles (user_id, role)
values ('USER_UUID_HERE', 'admin')
on conflict (user_id, role) do nothing;
```

Use `ADMIN_BOOTSTRAP_EMAILS` only as a temporary recovery/bootstrap fallback.

Checkpoint:

- at least one real production user can access `/admin/`

## 9. Validate the public contact flow

Run a real end-to-end test in production or staging:

1. Open the public contact form.
2. Confirm Turnstile loads and can be solved.
3. Submit a valid contact request.
4. Confirm success feedback in the browser.
5. Confirm the lead is stored in `public.leads`.
6. Confirm the Resend email arrives at `CONTACT_EMAIL`.

Checkpoint:

- Turnstile validation works server-side
- lead persistence works
- Resend delivery works

## 10. Validate public reviews

1. Open the home page.
2. Confirm the public reviews block loads.
3. Confirm no broken request is hitting a missing local `/functions/v1/public-reviews`.
4. Confirm content matches real rows in `public.review_sources` and `public.reviews`.

Checkpoint:

- home social proof works with the chosen routing mode

## 11. Validate `mi-cuenta`

With a real authenticated user:

1. Sign in.
2. Open `/mi-cuenta/`.
3. Save a profile name.
4. Upload an avatar.
5. Confirm own leads load.
6. Trigger account export.
7. Trigger password reset mail.
8. If testing on a disposable user, validate account deletion.

Checkpoint:

- profile writes succeed
- avatar upload succeeds
- protected functions return data correctly

## 12. Validate admin routes

With a real admin user:

1. Open `/admin/`.
2. Open `/admin/users/` and confirm user list loads.
3. Open `/admin/leads/` and confirm statuses can be updated.
4. Open `/admin/reviews/` and confirm publish/archive/featured actions work.

Checkpoint:

- JWT verification works
- role checks work
- service-role backed reads/writes work behind the functions

## 13. Validate retention safely

Run a manual preview first:

```bash
curl -s \
  -H "Authorization: Bearer YOUR_RETENTION_JOB_SECRET" \
  "https://YOUR_PROJECT_REF.supabase.co/functions/v1/leads-retention?dry_run=1"
```

Then review the output counts before scheduling or relying on automation.

Checkpoint:

- dry run succeeds
- counts look plausible for production data

## 14. Configure GitHub Actions secrets

For the scheduled retention workflow, configure:

- `LEADS_RETENTION_URL`
- `RETENTION_JOB_SECRET`

Checkpoint:

- manual workflow execution works in preview mode

## 15. Launch checklist

Before calling the launch complete, verify all of these are true:

- Turnstile uses the real public site key
- Supabase secrets are loaded
- migrations are applied
- all active functions are deployed
- routing mode is implemented
- first admin is assigned
- contact flow is working
- public reviews are working
- `mi-cuenta` is working
- admin routes are working
- retention dry run is working

## 16. Immediate post-launch checks

During the first production window:

- review Supabase Function logs
- review Resend delivery results
- confirm no auth/RLS surprises appear in admin/account flows
- reduce or remove `ADMIN_BOOTSTRAP_EMAILS` if no longer needed

## Related docs

- `docs/frontend-runtime-config.md`
- `docs/production-deployment.md`
- `docs/release-checklist.md`
