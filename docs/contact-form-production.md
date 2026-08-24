# Contact Form Production Config

The public contact form now reads its frontend configuration from `window.__SAMUEL_CONTACT_CONFIG__` and from these meta tags in the page `<head>`:

- `samuel-turnstile-site-key`
- `samuel-contact-endpoint`

The Turnstile placeholder is intentionally non-functional and Turnstile remains optional for now:

- `REPLACE_WITH_PRODUCTION_TURNSTILE_SITE_KEY`

Without a real site key, the current form continues to use its existing endpoint and prepared-email fallback.

## Turnstile

Set the real public site key in one of these places:

- `window.__SAMUEL_CONTACT_CONFIG__.turnstileSiteKey`
- `<meta name="samuel-turnstile-site-key" content="YOUR_REAL_SITE_KEY">`

If this value is missing, the form stays blocked by the frontend with the controlled security error message instead of silently bypassing Turnstile.

## Contact endpoint

Set the final endpoint in one of these places:

- `window.__SAMUEL_CONTACT_CONFIG__.contactEndpoint`
- `<meta name="samuel-contact-endpoint" content="https://YOUR_PROJECT_REF.supabase.co/functions/v1/contact">`

If your hosting adds a rewrite/proxy from `/functions/v1/contact` to Supabase, you can keep the relative path. If it does not, configure the direct Function URL only when the hardened contact flow is intentionally enabled.

## Resend

The Edge Function now requires:

- `RESEND_FROM_EMAIL`
- `RESEND_API_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `TURNSTILE_SECRET_KEY`
- `CONTACT_EMAIL`

Example:

`Samuel Coach de Alemán <hola@your-domain.com>`

This sender must be valid in your Resend account.

Set secrets with `supabase secrets set` or in the Supabase dashboard. Never add their values to HTML, Git, CI output or this document.

## Future Turnstile release gate

Do not enable the hardened `contact` Function until all of the following are true:

- the Turnstile widget accepts `samuelcoachdealeman.com` and `www.samuelcoachdealeman.com`;
- the real public site key replaces the placeholder at deployment time;
- the `contact` function and migration `20260824000002_contact_rate_limit.sql` are deployed;
- a controlled production submission reaches `CONTACT_EMAIL` exactly once.

Until then, keep the current contact configuration and prepared-email fallback. The future work is tracked in `NEXT.md`.
