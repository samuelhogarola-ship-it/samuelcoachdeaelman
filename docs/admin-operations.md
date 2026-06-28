# Admin operations

This project now has a minimal admin surface centered on:

- `/admin/`
- `/admin/users/`
- `/admin/leads/`
- `/admin/reviews/`

## Access model

1. The browser requires a valid Supabase session.
2. The authenticated user should have role `admin` in `public.user_roles`.
3. Edge Functions verify the JWT and check the role server-side.
4. `service_role` is used only inside the functions for protected reads and updates.

## Recommended bootstrap

Promote an existing user by role:

```sql
insert into public.user_roles (user_id, role)
values ('USER_UUID_HERE', 'admin')
on conflict (user_id, role) do nothing;
```

This remains the preferred production path.

## Temporary fallback secret

For first-time bootstrap or recovery scenarios, the admin functions also accept a temporary email allowlist secret:

```bash
supabase secrets set ADMIN_BOOTSTRAP_EMAILS="admin1@example.com,admin2@example.com"
```

Backward compatibility:

- `LEADS_ADMIN_EMAILS` still works if already present.
- `ADMIN_BOOTSTRAP_EMAILS` is now the preferred name because the fallback is shared by both admin functions.

## Functions

Deploy the protected admin functions:

```bash
supabase functions deploy admin-users
supabase functions deploy admin-leads
supabase functions deploy admin-reviews
```

If your hosting does not proxy the relative paths, configure direct URLs:

- `window.__SAMUEL_ADMIN_CONFIG__.usersEndpoint`
- `window.__SAMUEL_ADMIN_CONFIG__.leadsEndpoint`
- `window.__SAMUEL_ADMIN_CONFIG__.reviewsEndpoint`
- or the page-level `<meta>` endpoint values

## Current operational scope

- Users: list accounts and grant/revoke `admin` role
- Leads: review inbound leads and update status
- Reviews: publish, archive and feature home testimonials
- Admin hub: central entrypoint for existing admin tools

Related overview:

- `docs/production-deployment.md`
