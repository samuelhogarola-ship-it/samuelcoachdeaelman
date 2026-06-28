# Leads retention

This project now includes a server-side retention flow for `public.leads`.

Function:

- `/functions/v1/leads-retention`

## Current policy

- leads with `status = spam` older than `30` days are deleted
- leads with `status = new`, `reviewed` or `answered` older than `365` days are anonymized

Current anonymization keeps operational metadata but removes direct personal data:

- `name`
- `email`
- `phone`
- `message`
- `ip_hash`
- `user_agent`

It also stamps:

- `anonymized_at`
- `retention_last_processed_at`

## Required secrets

```bash
supabase secrets set \
  RETENTION_JOB_SECRET=... \
  LEADS_SPAM_RETENTION_DAYS=30 \
  LEADS_PII_RETENTION_DAYS=365 \
  LEADS_RETENTION_BATCH_SIZE=500
```

Only `RETENTION_JOB_SECRET` is required. The rest are optional overrides.

## Deploy

```bash
supabase functions deploy leads-retention
```

## Triggering the job

Example:

```bash
curl -X POST \
  -H "Authorization: Bearer $RETENTION_JOB_SECRET" \
  https://YOUR_PROJECT_REF.supabase.co/functions/v1/leads-retention
```

Preview mode:

```bash
curl -X POST \
  -H "Authorization: Bearer $RETENTION_JOB_SECRET" \
  "https://YOUR_PROJECT_REF.supabase.co/functions/v1/leads-retention?dry_run=1"
```

Recommended usage:

- call it from a trusted scheduled job
- run it daily or weekly
- review output counts in logs

## GitHub Actions automation

This repo now includes:

- `.github/workflows/leads-retention.yml`

Required GitHub Actions secrets:

- `LEADS_RETENTION_URL`
- `RETENTION_JOB_SECRET`

Behavior:

- scheduled runs execute the real retention job
- manual runs default to `dry_run = true`

## Notes

- this is an operational retention layer, not a substitute for legal review
- account self-deletion still removes matching leads immediately by email

Related overview:

- `docs/production-deployment.md`
