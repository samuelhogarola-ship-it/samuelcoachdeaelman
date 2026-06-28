# Frontend runtime config

This guide centralizes the public runtime configuration expected by the Samuel Coach frontend in production.

It covers:

- Supabase browser auth
- contact form
- private account routes
- admin routes
- same-origin rewrite mode
- direct Supabase URL mode

Do not put any secret values here. These values are public browser config only.

## Option A: hosting with same-origin rewrites

Use this when your hosting proxies `/functions/v1/*` to Supabase Edge Functions.

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

Use this mode only if your hosting really proxies these paths:

- `/functions/v1/contact`
- `/functions/v1/public-reviews`
- `/functions/v1/account-leads`
- `/functions/v1/account-export`
- `/functions/v1/account-delete`
- `/functions/v1/admin-users`
- `/functions/v1/admin-leads`
- `/functions/v1/admin-reviews`

## Option B: hosting without rewrites

Use this when the static site calls Supabase Functions directly.

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
      contactEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/contact"
    },
    window.__SAMUEL_CONTACT_CONFIG__ || {}
  );

  window.__SAMUEL_ACCOUNT_CONFIG__ = Object.assign(
    {
      leadsEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/account-leads",
      exportEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/account-export",
      deleteEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/account-delete"
    },
    window.__SAMUEL_ACCOUNT_CONFIG__ || {}
  );

  window.__SAMUEL_ADMIN_CONFIG__ = Object.assign(
    {
      usersEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/admin-users",
      leadsEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/admin-leads",
      reviewsEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/admin-reviews"
    },
    window.__SAMUEL_ADMIN_CONFIG__ || {}
  );
</script>
```

If you use this mode, also set the public reviews endpoint explicitly in the home page config already supported by the site:

```html
<script>
  window.__SAMUEL_HOME_CONFIG__ = Object.assign(
    {
      publicReviewsEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/public-reviews"
    },
    window.__SAMUEL_HOME_CONFIG__ || {}
  );
</script>
```

## Meta tag alternatives

If you prefer page-level configuration, the frontend also supports meta tags for the configurable endpoints and public values already documented in:

- `docs/contact-form-production.md`
- `docs/auth-production.md`
- `docs/admin-operations.md`

## Required production values

At minimum, production still needs:

- real Supabase project URL
- real Supabase anon key
- real Turnstile site key
- final decision on rewrite mode or direct URL mode

## What this config does not replace

This runtime config does not replace:

- Supabase secrets such as `TURNSTILE_SECRET_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `SUPABASE_SERVICE_ROLE_KEY`
- database migrations
- Edge Function deployment

For those steps, continue with:

- `docs/production-deployment.md`
