# Leads admin panel

This project now includes a protected admin flow for reviewing contact leads:

- frontend route: `/admin/leads/`
- edge function: `/functions/v1/admin-leads`

## How access works

1. The admin page requires a Supabase session in the browser.
2. The browser sends the session access token as `Authorization: Bearer <token>`.
3. The Edge Function verifies the token with Supabase Auth.
4. The authenticated user must have role `admin` in `public.user_roles`.

`public.leads` remains unreadable for `anon` and `authenticated` roles directly. Reads and updates go through the function with `service_role`.

## Roles bootstrap

Roles are created from the migration `20260627000200_profiles_and_roles.sql`.

Every new user gets:

- one row in `public.profiles`
- one default role row in `public.user_roles` with `student`

To promote an existing user to admin:

```sql
insert into public.user_roles (user_id, role)
values ('USER_UUID_HERE', 'admin')
on conflict (user_id, role) do nothing;
```

## Optional fallback secret

Add this secret in Supabase:

```bash
supabase secrets set ADMIN_BOOTSTRAP_EMAILS="admin1@example.com,admin2@example.com"
```

This is now only a temporary fallback for bootstrap scenarios where the user has not yet been assigned the `admin` role in the database.

Backward compatibility note:

- `LEADS_ADMIN_EMAILS` is still accepted by the current functions.
- `ADMIN_BOOTSTRAP_EMAILS` is now the preferred name because the fallback is shared across admin tools.

## Deploy

```bash
supabase functions deploy admin-leads
```

If your public site does not proxy `/functions/v1/admin-leads` automatically, set the route explicitly in the page with either:

- `window.__SAMUEL_ADMIN_CONFIG__.leadsEndpoint`
- `<meta name="samuel-leads-admin-endpoint" content="https://YOUR_PROJECT.functions.supabase.co/admin-leads">`

## Current scope

The panel is intentionally minimal:

- list recent leads
- filter by `new`, `reviewed`, `answered`, `spam`
- update lead status

It is meant as an operational bridge until a fuller dashboard exists.

Related operational doc:

- `docs/leads-retention.md`
