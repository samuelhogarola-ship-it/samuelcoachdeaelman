# Auth frontend configuration

The Supabase browser client is configured in `assets/js/auth.js`.

It now supports two public configuration entry points:

1. `window.__SAMUEL_AUTH_CONFIG__`
2. `<meta>` tags in the page `<head>`

Public browser values are expected here. Do not put any service role or secret key in this config.

## Supported keys

Window config:

```html
<script>
  window.__SAMUEL_AUTH_CONFIG__ = Object.assign(
    {
      supabaseUrl: "https://YOUR_PROJECT.supabase.co",
      supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY"
    },
    window.__SAMUEL_AUTH_CONFIG__ || {}
  );
</script>
```

Meta tag config:

```html
<meta name="samuel-supabase-url" content="https://YOUR_PROJECT.supabase.co">
<meta name="samuel-supabase-anon-key" content="YOUR_SUPABASE_ANON_KEY">
```

## Resolution order

`assets/js/auth.js` resolves config in this order:

1. `window.__SAMUEL_AUTH_CONFIG__`
2. matching `<meta>` tag
3. built-in fallback values

That means the current site keeps working without touching every generated page immediately, while production can move to a clear environment-specific override.

## Production recommendation

Prefer injecting `window.__SAMUEL_AUTH_CONFIG__` during build or deploy so the public Supabase project can be swapped without editing `assets/js/auth.js`.

If you keep the fallback values, make sure they point to the intended production Supabase project and anon key.

## Private account endpoints

The private account area also supports public runtime configuration for its protected function routes.

Window config:

```html
<script>
  window.__SAMUEL_ACCOUNT_CONFIG__ = Object.assign(
    {
      leadsEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/account-leads",
      exportEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/account-export",
      deleteEndpoint: "https://YOUR_PROJECT_REF.supabase.co/functions/v1/account-delete"
    },
    window.__SAMUEL_ACCOUNT_CONFIG__ || {}
  );
</script>
```

Meta tag config:

```html
<meta name="samuel-account-leads-endpoint" content="https://YOUR_PROJECT_REF.supabase.co/functions/v1/account-leads">
<meta name="samuel-account-export-endpoint" content="https://YOUR_PROJECT_REF.supabase.co/functions/v1/account-export">
<meta name="samuel-account-delete-endpoint" content="https://YOUR_PROJECT_REF.supabase.co/functions/v1/account-delete">
```

Resolution order in `mi-cuenta/index.html`:

1. `window.__SAMUEL_ACCOUNT_CONFIG__`
2. matching `<meta>` tag
3. same-origin `/functions/v1/...` fallback

If your hosting does not proxy `/functions/v1/*` to Supabase, set the direct function URLs here.

## Roles and profiles

The frontend auth client also supports role-aware flows via:

- `public.user_roles`
- `public.profiles`

Current helpers exported from `assets/js/auth.js`:

- `getUserRoles()`
- `isAdminUser()`

These rely on RLS so an authenticated user can only read their own role rows.

## Profile avatars

The account area now supports real avatar uploads through Supabase Storage.

Required migration:

- `20260627000400_profile_avatars_storage.sql`

What it creates:

- public bucket: `profile-avatars`
- max file size: `2 MB`
- allowed mime types: `image/jpeg`, `image/png`, `image/webp`, `image/gif`
- authenticated users can only write inside their own folder: `<auth.uid()>/...`

The current frontend stores the resulting public URL back into `public.profiles.avatar_url`.

## Self-service account deletion

The private account area now expects a protected Edge Function at:

- `/functions/v1/account-leads`
- `/functions/v1/account-export`
- `/functions/v1/account-delete`

Deploy it together with the rest of the authenticated account surface:

```bash
supabase functions deploy account-leads
supabase functions deploy account-export
supabase functions deploy account-delete
```

What it removes before deleting `auth.users`:

- `public.profiles` and `public.user_roles` indirectly via FK cascade
- `samuel_user_progress`
- `samuel_attempts`
- uploaded files under `profile-avatars/<user_id>/`
- contact leads in `public.leads` that match the same email

## Self-service data export

The private account area can also download a JSON export for the authenticated user.

It also loads the authenticated user's own contact requests through `/functions/v1/account-leads`.

Current export scope:

- `public.profiles`
- `public.user_roles`
- `samuel_user_progress`
- `samuel_attempts`
- contact leads in `public.leads` that match the same email

Related overview:

- `docs/production-deployment.md`
