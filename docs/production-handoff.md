# Production handoff

This document is the handoff sheet for the external production inputs that are still required after the repository work is complete.

Use it to gather the real values, make the missing environment decisions and track who owns each dependency.

## 1. Decisions still required

These are the two decisions that should be made before running the production deployment runbook.

| Item | Decision needed | Notes |
| --- | --- | --- |
| Hosting routing mode | `rewrite` or `direct` | `rewrite` means the host proxies `/functions/v1/*` to Supabase. `direct` means the frontend uses full Supabase Function URLs. |
| First admin bootstrap path | SQL role assignment or temporary `ADMIN_BOOTSTRAP_EMAILS` fallback | Preferred path is SQL role assignment in `public.user_roles`. |

## 2. Public runtime values to collect

These values are public browser configuration. They are not secrets.

| Key | Example / format | Where it is used | Status |
| --- | --- | --- | --- |
| `SUPABASE_URL` | `https://YOUR_PROJECT.supabase.co` | `window.__SAMUEL_AUTH_CONFIG__.supabaseUrl` | Pending |
| `SUPABASE_ANON_KEY` | Supabase anon public key | `window.__SAMUEL_AUTH_CONFIG__.supabaseAnonKey` | Pending |
| `TURNSTILE_SITE_KEY` | Cloudflare public site key | `window.__SAMUEL_CONTACT_CONFIG__.turnstileSiteKey` | Pending |
| `CONTACT_ENDPOINT` | `/functions/v1/contact` or full Supabase URL | `window.__SAMUEL_CONTACT_CONFIG__.contactEndpoint` | Pending |
| `ACCOUNT_LEADS_ENDPOINT` | `/functions/v1/account-leads` or full Supabase URL | `window.__SAMUEL_ACCOUNT_CONFIG__.leadsEndpoint` | Pending |
| `ACCOUNT_EXPORT_ENDPOINT` | `/functions/v1/account-export` or full Supabase URL | `window.__SAMUEL_ACCOUNT_CONFIG__.exportEndpoint` | Pending |
| `ACCOUNT_DELETE_ENDPOINT` | `/functions/v1/account-delete` or full Supabase URL | `window.__SAMUEL_ACCOUNT_CONFIG__.deleteEndpoint` | Pending |
| `ADMIN_USERS_ENDPOINT` | `/functions/v1/admin-users` or full Supabase URL | `window.__SAMUEL_ADMIN_CONFIG__.usersEndpoint` | Pending |
| `ADMIN_LEADS_ENDPOINT` | `/functions/v1/admin-leads` or full Supabase URL | `window.__SAMUEL_ADMIN_CONFIG__.leadsEndpoint` | Pending |
| `ADMIN_REVIEWS_ENDPOINT` | `/functions/v1/admin-reviews` or full Supabase URL | `window.__SAMUEL_ADMIN_CONFIG__.reviewsEndpoint` | Pending |
| `PUBLIC_REVIEWS_ENDPOINT` | `/functions/v1/public-reviews` or full Supabase URL | `window.__SAMUEL_HOME_CONFIG__.publicReviewsEndpoint` when using direct mode | Pending |

## 3. Supabase secrets to collect

These values must never be exposed client-side.

| Secret | Source | Used by | Status |
| --- | --- | --- | --- |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile | `contact` Edge Function | Pending |
| `RESEND_API_KEY` | Resend | `contact` Edge Function | Pending |
| `RESEND_FROM_EMAIL` | verified Resend sender/domain | `contact` Edge Function | Pending |
| `CONTACT_EMAIL` | production inbox | `contact` Edge Function destination | Pending |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase project settings | admin/account/contact/retention functions | Pending |
| `ADMIN_BOOTSTRAP_EMAILS` | optional fallback list | admin recovery/bootstrap only | Optional |
| `RETENTION_JOB_SECRET` | generated secret | `leads-retention` function and GitHub Action | Pending |
| `LEADS_SPAM_RETENTION_DAYS` | optional integer | retention policy tuning | Optional |
| `LEADS_PII_RETENTION_DAYS` | optional integer | retention policy tuning | Optional |
| `LEADS_RETENTION_BATCH_SIZE` | optional integer | retention job tuning | Optional |

## 4. Other deployment inputs

| Item | Needed for | Status |
| --- | --- | --- |
| `YOUR_PROJECT_REF` | `supabase link`, direct function URLs, retention URL | Pending |
| first real admin user UUID | SQL bootstrap in `public.user_roles` | Pending |
| hosting config access | rewrites or runtime config injection | Pending |
| GitHub repo secrets access | `LEADS_RETENTION_URL`, `RETENTION_JOB_SECRET` | Pending |

## 5. Suggested owner split

This is a practical split if multiple people are involved.

| Area | Typical owner |
| --- | --- |
| Supabase project ref, anon key, service role key | engineering / infra |
| Turnstile site + secret keys | engineering / infra |
| Resend API key + sender verification | engineering / operations |
| `CONTACT_EMAIL` inbox | business / operations |
| hosting rewrites or runtime injection | engineering / hosting owner |
| first admin UUID and role assignment | engineering / product owner |
| retention policy values | product / legal / operations |

## 6. After this sheet is complete

Once the missing values and decisions above are filled, continue with:

1. `docs/frontend-runtime-config.md`
2. `docs/deployment-runbook.md`
3. `docs/release-checklist.md`

## Related docs

- `docs/frontend-runtime-config.md`
- `docs/deployment-runbook.md`
- `docs/release-checklist.md`
