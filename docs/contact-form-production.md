# Contact Form Production Config

The public contact form now reads its frontend configuration from `window.__SAMUEL_CONTACT_CONFIG__` and from these meta tags in the page `<head>`:

- `samuel-turnstile-site-key`
- `samuel-contact-endpoint`

The Turnstile placeholder is intentionally non-functional:

- `REPLACE_WITH_PRODUCTION_TURNSTILE_SITE_KEY`

The JavaScript fallback already targets the canonical public Edge Function:

- `https://hocdlmxzghwymamientc.supabase.co/functions/v1/contact`

## Turnstile

Set the real public site key in one of these places:

- `window.__SAMUEL_CONTACT_CONFIG__.turnstileSiteKey`
- `<meta name="samuel-turnstile-site-key" content="YOUR_REAL_SITE_KEY">`

If this value is missing, the form stays blocked by the frontend with the controlled security error message instead of silently bypassing Turnstile.

## Contact endpoint

Set the final endpoint in one of these places:

- `window.__SAMUEL_CONTACT_CONFIG__.contactEndpoint`
- `<meta name="samuel-contact-endpoint" content="https://YOUR_PROJECT_REF.supabase.co/functions/v1/contact">`

Only override this value when testing or when the Supabase project changes. A relative URL is supported when explicitly configured, but production does not depend on a Hostinger rewrite.

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

## Release gate

Do not publish the hardened frontend until all of the following are true:

- the Turnstile widget accepts `samuelcoachdealeman.com` and `www.samuelcoachdealeman.com`;
- the real public site key replaces the placeholder at deployment time;
- the `contact` function and migration `20260824000002_contact_rate_limit.sql` are deployed;
- a controlled production submission reaches `CONTACT_EMAIL` exactly once.

The form fails closed when the site key is absent or Turnstile cannot load. WhatsApp remains the visible recovery path.
