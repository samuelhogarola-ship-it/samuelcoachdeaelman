# Production deployment

This document consolidates the current production setup for Samuel Coach de Alemán.

## Current scope

Deployed stack expected by the current codebase:

- static frontend
- Supabase Auth
- Supabase Postgres + RLS
- Supabase Storage for profile avatars
- Supabase Edge Functions for contact, admin, account privacy flows and lead retention
- Resend for contact notifications
- Cloudflare Turnstile for public contact protection

## 1. Public frontend configuration

Public browser config is expected through `window.__SAMUEL_AUTH_CONFIG__` and `window.__SAMUEL_CONTACT_CONFIG__`, or equivalent `<meta>` tags.

Required public values:

- Supabase project URL
- Supabase anon key
- Turnstile site key
- contact endpoint if not using a same-origin rewrite

The private account area also supports `window.__SAMUEL_ACCOUNT_CONFIG__` or equivalent `<meta>` tags for:

- `account-leads`
- `account-export`
- `account-delete`

The admin area also supports `window.__SAMUEL_ADMIN_CONFIG__` or equivalent `<meta>` tags for:

- `admin-users`
- `admin-leads`
- `admin-reviews`

Recommended pattern:

```html
<script>
  window.__SAMUEL_AUTH_CONFIG__ = Object.assign(
    {
      supabaseUrl: "https://YOUR_PROJECT.supabase.co",
      supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY"
    },
    window.__SAMUEL_AUTH_CONFIG__ || {}
  );

  window.__SAMUEL_CONTACT_CONFIG__ = Object.assign(
    {
      turnstileSiteKey: "YOUR_REAL_TURNSTILE_SITE_KEY",
      contactEndpoint: "/functions/v1/contact"
    },
    window.__SAMUEL_CONTACT_CONFIG__ || {}
  );

  window.__SAMUEL_ACCOUNT_CONFIG__ = Object.assign(
    {
      leadsEndpoint: "/functions/v1/account-leads",
      exportEndpoint: "/functions/v1/account-export",
      deleteEndpoint: "/functions/v1/account-delete"
    },
    window.__SAMUEL_ACCOUNT_CONFIG__ || {}
  );

  window.__SAMUEL_ADMIN_CONFIG__ = Object.assign(
    {
      usersEndpoint: "/functions/v1/admin-users",
      leadsEndpoint: "/functions/v1/admin-leads",
      reviewsEndpoint: "/functions/v1/admin-reviews"
    },
    window.__SAMUEL_ADMIN_CONFIG__ || {}
  );
</script>
```

## 2. Required Supabase secrets

Set these in Supabase before deploying the Edge Functions:

```bash
supabase secrets set \
  TURNSTILE_SECRET_KEY=... \
  RESEND_API_KEY=... \
  RESEND_FROM_EMAIL="Samuel Coach de Alemán <hola@your-domain.com>" \
  CONTACT_EMAIL=... \
  SUPABASE_URL=... \
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

Notes:

- `ADMIN_BOOTSTRAP_EMAILS` is only a temporary fallback for admin recovery/bootstrap
- `RETENTION_JOB_SECRET` is required only for the lead-retention job

## 3. Database migrations

Apply migrations before deploying or calling the functions:

```bash
supabase db push
```

Important current migrations:

- `20260627000100_contact_leads.sql`
- `20260627000200_profiles_and_roles.sql`
- `20260627000300_reviews_catalog.sql`
- `20260627000400_profile_avatars_storage.sql`
- `20260628000100_leads_retention.sql`
- `20260628000200_leads_answered_status.sql`

## 4. Edge Functions to deploy

Deploy the currently used functions:

```bash
supabase functions deploy contact --no-verify-jwt
supabase functions deploy public-reviews --no-verify-jwt
supabase functions deploy admin-users
supabase functions deploy admin-leads
supabase functions deploy admin-reviews
supabase functions deploy account-export
supabase functions deploy account-delete
supabase functions deploy account-leads
supabase functions deploy leads-retention
```

Notes:

- `contact` is public and intentionally deployed with `--no-verify-jwt`
- `public-reviews` is also public and should remain callable without a user session
- admin/account functions verify the session token server-side

## 5. Hosting and rewrites

The frontend expects same-origin function routes unless you override them explicitly.

Routes currently used by the browser:

- `/functions/v1/contact`
- `/functions/v1/public-reviews`
- `/functions/v1/admin-users`
- `/functions/v1/admin-leads`
- `/functions/v1/admin-reviews`
- `/functions/v1/account-export`
- `/functions/v1/account-delete`
- `/functions/v1/account-leads`

Recommended options:

- preferred: add hosting rewrites/proxy from `/functions/v1/*` to Supabase
- fallback: configure direct function URLs in the relevant page config

If you do not add rewrites, at minimum configure:

- `window.__SAMUEL_CONTACT_CONFIG__.contactEndpoint`
- `window.__SAMUEL_ACCOUNT_CONFIG__.leadsEndpoint`
- `window.__SAMUEL_ACCOUNT_CONFIG__.exportEndpoint`
- `window.__SAMUEL_ACCOUNT_CONFIG__.deleteEndpoint`
- `window.__SAMUEL_ADMIN_CONFIG__.usersEndpoint`
- `window.__SAMUEL_ADMIN_CONFIG__.leadsEndpoint`
- `window.__SAMUEL_ADMIN_CONFIG__.reviewsEndpoint`

## 6. Storage

Avatar upload depends on the `profile-avatars` bucket created by migration.

Expected behavior:

- public read
- authenticated users can only write inside `<auth.uid()>/...`

## 7. Admin bootstrap

Preferred bootstrap path:

```sql
insert into public.user_roles (user_id, role)
values ('USER_UUID_HERE', 'admin')
on conflict (user_id, role) do nothing;
```

Current admin routes:

- `/admin/`
- `/admin/users/`
- `/admin/leads/`
- `/admin/reviews/`

## 8. Privacy operations

Current user privacy flows already implemented:

- self-service data export from `/mi-cuenta/`
- self-service account deletion from `/mi-cuenta/`
- own contact request history from `/mi-cuenta/`
- lead retention job with dry-run support

Lead retention policy currently implemented:

- `spam` older than `30` days: deleted
- `new`, `reviewed` or `answered` older than `365` days: anonymized

## 9. GitHub Actions secrets

The scheduled retention workflow expects these repository secrets:

- `LEADS_RETENTION_URL`
- `RETENTION_JOB_SECRET`

Manual workflow runs default to preview mode.

## 10. Production checklist

Before launch:

- set the real Turnstile site key in frontend config
- set all required Supabase secrets
- verify `RESEND_FROM_EMAIL` is valid in Resend
- apply migrations with `supabase db push`
- deploy all listed Edge Functions
- configure hosting rewrites or direct function URLs
- assign the first real admin role in `public.user_roles`
- verify avatar upload works in `mi-cuenta`
- verify contact form submission works end to end
- verify public reviews load from the live function
- verify admin leads, reviews and users screens with an admin account
- verify account leads, account export and account deletion from `mi-cuenta`
- run one manual retention `dry_run`

After launch:

- monitor contact function logs
- monitor Resend delivery/errors
- monitor retention job output counts
- remove or reduce temporary bootstrap email fallback if no longer needed

## Related docs

- `docs/contact-form-production.md`
- `docs/auth-production.md`
- `docs/admin-operations.md`
- `docs/deployment-runbook.md`
- `docs/frontend-runtime-config.md`
- `docs/leads-admin.md`
- `docs/leads-retention.md`
- `docs/release-checklist.md`
