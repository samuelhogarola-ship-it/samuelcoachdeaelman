# Contact Form Production Config

## Node/VPS migration (2026-10-16)

The Docker application runs Node, so the legacy `functions/v1/contact/index.php`
and its PHP `mail()` call cannot handle requests. The Node server now routes
`POST /functions/v1/contact` (with or without the final slash) to
`scripts/contact-api.mjs`.

Configure these server-only variables before expecting automatic delivery:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (a sender verified in the selected Resend account)
- `CONTACT_EMAIL` (the intended contact recipient)

Missing configuration returns HTTP 503; provider failure returns 502. Neither
response claims delivery, and the browser preserves the form and offers the
prepared-email fallback. A successful response is sent only after the email
provider accepts the message. The Node route does not store leads in Supabase.

The handler limits JSON bodies to 32 KiB and delivery attempts to three per
15 minutes per socket IP by default. With `TRUST_PROXY_HOPS=1`, it uses only the
final valid IP in `X-Forwarded-For`, appended by the single trusted Traefik proxy.
Earlier client-supplied values are ignored. A missing, malformed or invalid final
address falls back to the socket IP. Enable this setting only when the app is
reachable solely through that proxy, with no public container port. Other values
do not enable proxy trust. Limits are in memory and reset on process restart.

Turnstile is optional for this Node migration. If `TURNSTILE_SECRET_KEY` is set,
the backend requires a valid token; configure the matching public site key in
every contact page at the same time. Do not set only the backend secret.

Audit evidence before deploying this change: the website contact route returned
404, and the project's four contact/newsletter Edge Functions were absent.
Newsletter also returned `PGRST205` for `newsletter_subscribers`; enabling it
requires its reviewed database migrations, three newsletter Edge Functions and
Resend configuration. These are separate from the Node contact route.

Local verification uses mocked providers and sends no real email:

```sh
node --test tests/unit/contact-api.test.mjs
npx playwright test tests/playwright/contact-form.spec.js --reporter=line
```

## Optional Supabase contact implementation

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

If this value is missing, the current frontend does not enable Turnstile. If a
real configured key cannot load, the form displays a controlled security error.

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
