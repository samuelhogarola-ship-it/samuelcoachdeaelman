# Contact Form Production Config

The public contact form now reads its frontend configuration from `window.__SAMUEL_CONTACT_CONFIG__` and from these meta tags in the page `<head>`:

- `samuel-turnstile-site-key`
- `samuel-contact-endpoint`

Current placeholders are intentionally non-functional:

- `REPLACE_WITH_PRODUCTION_TURNSTILE_SITE_KEY`
- empty `contactEndpoint`

## Turnstile

Set the real public site key in one of these places:

- `window.__SAMUEL_CONTACT_CONFIG__.turnstileSiteKey`
- `<meta name="samuel-turnstile-site-key" content="YOUR_REAL_SITE_KEY">`

If this value is missing, the form stays blocked by the frontend with the controlled security error message instead of silently bypassing Turnstile.

## Contact endpoint

Set the final endpoint in one of these places:

- `window.__SAMUEL_CONTACT_CONFIG__.contactEndpoint`
- `<meta name="samuel-contact-endpoint" content="https://YOUR_PROJECT_REF.supabase.co/functions/v1/contact">`

If your hosting adds a rewrite/proxy from `/functions/v1/contact` to Supabase, you can keep the relative path.

If your hosting does not add that rewrite, configure the direct Supabase Function URL explicitly.

## Resend

The Edge Function now requires:

- `RESEND_FROM_EMAIL`

Example:

`Samuel Coach de Alemán <hola@your-domain.com>`

This sender must be valid in your Resend account.

Related overview:

- `docs/production-deployment.md`
