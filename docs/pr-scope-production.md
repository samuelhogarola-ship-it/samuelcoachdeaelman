# PR scope proposal: production readiness

This document proposes the cleanest review scope for the Samuel Coach production-readiness work currently present in the tree.

The goal is to group together the changes that belong to the same release story:

- server-side contact flow
- admin tooling
- private account flows
- retention/privacy operations
- runtime production configuration
- QA and deployment documentation

## Recommended PR title

`feat: production readiness for contact, account and admin flows`

## Recommended include scope

These files belong together and form a coherent production-readiness PR.

### Frontend app

- `assets/js/main.js`
- `assets/js/auth.js`
- `assets/css/styles.css`
- `index.html`
- `de/index.html`
- `en/index.html`
- `mi-cuenta/index.html`
- `admin/index.html`
- `admin/users/index.html`
- `admin/leads/index.html`
- `admin/reviews/index.html`
- `scripts/generate-localized-pages.mjs`

### Supabase backend

- `supabase/migrations/20260627000100_contact_leads.sql`
- `supabase/migrations/20260627000200_profiles_and_roles.sql`
- `supabase/migrations/20260627000300_reviews_catalog.sql`
- `supabase/migrations/20260627000400_profile_avatars_storage.sql`
- `supabase/migrations/20260628000100_leads_retention.sql`
- `supabase/migrations/20260628000200_leads_answered_status.sql`
- `supabase/functions/_shared/`
- `supabase/functions/contact/`
- `supabase/functions/public-reviews/`
- `supabase/functions/admin-users/`
- `supabase/functions/admin-leads/`
- `supabase/functions/admin-reviews/`
- `supabase/functions/account-leads/`
- `supabase/functions/account-export/`
- `supabase/functions/account-delete/`
- `supabase/functions/leads-retention/`

### Workflows and tests

- `.github/workflows/leads-retention.yml`
- `tests/playwright/contact-form.spec.js`
- `tests/playwright/home-reviews.spec.js`
- `tests/playwright/account-dashboard.spec.js`
- `tests/playwright/admin-hub.spec.js`
- `tests/playwright/admin-users.spec.js`
- `tests/playwright/admin-leads.spec.js`
- `tests/playwright/admin-reviews.spec.js`

### Production docs

- `docs/contact-form-production.md`
- `docs/auth-production.md`
- `docs/admin-operations.md`
- `docs/leads-admin.md`
- `docs/leads-retention.md`
- `docs/production-deployment.md`
- `docs/frontend-runtime-config.md`
- `docs/release-checklist.md`
- `docs/deployment-runbook.md`

## Recommended exclude scope

These files look unrelated to the production-readiness block and should ideally stay out of the same PR unless we intentionally bundle them:

- `.github/workflows/ci.yml`
- `assets/js/google-analytics-core.js`
- `assets/js/leseverstehen.js`
- `de/politica-de-privacidad/index.html`
- `en/politica-de-privacidad/index.html`
- `politica-de-privacidad/index.html`
- `eslint.config.mjs`
- `playwright.config.js`

## Why this split helps

This separation keeps the production-readiness review focused on one coherent system:

- public contact ingestion
- admin moderation/ops
- authenticated account area
- privacy retention
- production config and deployment

It reduces review noise from unrelated analytics, content, policy-text or tooling changes.

## Suggested reviewer checklist for this PR

- confirm public runtime config is environment-ready
- confirm no production secret is exposed client-side
- confirm admin/account functions are protected server-side
- confirm contact flow no longer depends on FormSubmit
- confirm retention flow is documented and schedulable
- confirm QA coverage exists for contact, account and admin surfaces
- confirm deployment docs are enough to execute production setup

## Current caveat

Even with this PR merged, production still requires environment execution outside the repository:

- real Turnstile site key
- Supabase secrets
- routing mode decision
- migrations applied
- functions deployed
- first real admin assigned
- live end-to-end verification

## Suggested staging command

If you want to stage the production-readiness block and leave the unrelated tree changes aside, this is the exact `git add` proposal based on the current repository structure:

```bash
git add \
  assets/js/main.js \
  assets/js/auth.js \
  assets/css/styles.css \
  index.html \
  de/index.html \
  en/index.html \
  mi-cuenta/index.html \
  scripts/generate-localized-pages.mjs \
  admin/index.html \
  admin/users/index.html \
  admin/leads/index.html \
  admin/reviews/index.html \
  supabase/migrations/20260627000100_contact_leads.sql \
  supabase/migrations/20260627000200_profiles_and_roles.sql \
  supabase/migrations/20260627000300_reviews_catalog.sql \
  supabase/migrations/20260627000400_profile_avatars_storage.sql \
  supabase/migrations/20260628000100_leads_retention.sql \
  supabase/migrations/20260628000200_leads_answered_status.sql \
  supabase/functions/_shared/admin-auth.mjs \
  supabase/functions/contact/index.ts \
  supabase/functions/contact/contact-handler.mjs \
  supabase/functions/contact/index.test.mjs \
  supabase/functions/public-reviews/index.ts \
  supabase/functions/public-reviews/public-reviews-handler.mjs \
  supabase/functions/public-reviews/index.test.mjs \
  supabase/functions/admin-users/index.ts \
  supabase/functions/admin-users/admin-users-handler.mjs \
  supabase/functions/admin-users/index.test.mjs \
  supabase/functions/admin-leads/index.ts \
  supabase/functions/admin-leads/admin-handler.mjs \
  supabase/functions/admin-leads/index.test.mjs \
  supabase/functions/admin-reviews/index.ts \
  supabase/functions/admin-reviews/admin-reviews-handler.mjs \
  supabase/functions/admin-reviews/index.test.mjs \
  supabase/functions/account-leads/index.ts \
  supabase/functions/account-leads/account-leads-handler.mjs \
  supabase/functions/account-leads/index.test.mjs \
  supabase/functions/account-export/index.ts \
  supabase/functions/account-export/account-export-handler.mjs \
  supabase/functions/account-export/index.test.mjs \
  supabase/functions/account-delete/index.ts \
  supabase/functions/account-delete/account-delete-handler.mjs \
  supabase/functions/account-delete/index.test.mjs \
  supabase/functions/leads-retention/index.ts \
  supabase/functions/leads-retention/leads-retention-handler.mjs \
  supabase/functions/leads-retention/index.test.mjs \
  .github/workflows/leads-retention.yml \
  tests/playwright/contact-form.spec.js \
  tests/playwright/home-reviews.spec.js \
  tests/playwright/account-dashboard.spec.js \
  tests/playwright/admin-hub.spec.js \
  tests/playwright/admin-users.spec.js \
  tests/playwright/admin-leads.spec.js \
  tests/playwright/admin-reviews.spec.js \
  docs/contact-form-production.md \
  docs/auth-production.md \
  docs/admin-operations.md \
  docs/leads-admin.md \
  docs/leads-retention.md \
  docs/production-deployment.md \
  docs/frontend-runtime-config.md \
  docs/release-checklist.md \
  docs/deployment-runbook.md \
  docs/pr-scope-production.md
```

Files intentionally not included in that command because they look outside this PR scope:

- `.github/workflows/ci.yml`
- `assets/js/google-analytics-core.js`
- `assets/js/leseverstehen.js`
- `de/politica-de-privacidad/index.html`
- `en/politica-de-privacidad/index.html`
- `politica-de-privacidad/index.html`
- `eslint.config.mjs`
- `playwright.config.js`
