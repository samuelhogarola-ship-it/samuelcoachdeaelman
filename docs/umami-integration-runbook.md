# Umami Integration Runbook

Samuel Coach de Aleman follows the Core/Web Fuengirola static-site pattern:
the repository ships an inert `/umami-config.json`, and each environment renders
the public Umami config from environment variables before serving the site.

## Runtime Variables

Configure these in hosting. Do not commit real website IDs.

```dotenv
UMAMI_SCRIPT_URL=https://analytics.187.124.55.36.sslip.io/script.js
UMAMI_HOST_URL=https://analytics.187.124.55.36.sslip.io
UMAMI_WEBSITE_ID=
```

- `UMAMI_WEBSITE_ID` is required for production tracking. If it is empty, the
  loader stays inert and injects no Umami script.
- `UMAMI_SCRIPT_URL` and `UMAMI_HOST_URL` are restricted to the personal Umami
  instance used by Core/Web Fuengirola.
- GA/GTM can coexist. The current `google-analytics-core.js` still owns GA4
  Consent Mode, and it loads the Umami bootstrap independently of analytics
  cookie consent because Umami is anonymous and cookieless.

## Render Step

Use:

```sh
UMAMI_WEBSITE_ID=<website-id-from-hosting> \
  npm run render:umami
```

The script reads `config/umami-config.template.json` and writes
`umami-config.json`. The placeholder above must be replaced by the hosting
environment, not committed.

## Conversion Events

The site tracks these standard Umami conversion events when Umami is active:

- `whatsapp_click`
- `phone_click`
- `email_click`
- `contact_form_submit`
- `landing_cta_click`
- `external_booking_click`

For explicit CTAs, add `data-analytics-event="landing_cta_click"` or another
standard event to the link or button. Automatic detection covers WhatsApp,
phone, email, contact-form CTAs, booking-like external links and contact form
submits.

## Local Checks

Use the short project command while iterating on this integration:

```sh
npm run check:umami
```

`npm run test:unit` also covers the Umami tests and is already part of the
repository pre-commit hook.

## Smoke Checks

- `npm run check:umami`
- `npm run test:unit`
- `git diff --check`
- Confirm the committed `umami-config.json` keeps `"websiteId": ""`.
- After deploy, fetch `/umami-config.json` and confirm it contains the expected
  environment `websiteId`.
- In the browser, confirm there is one
  `<script data-umami-analytics-core data-website-id="...">`.
- Trigger one WhatsApp click and one contact form submit, then confirm the
  events appear in Umami for the Samuel Coach website.
