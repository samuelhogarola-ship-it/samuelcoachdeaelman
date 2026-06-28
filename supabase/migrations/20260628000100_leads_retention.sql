-- ─────────────────────────────────────────────────────────────────────────────
-- retencion y anonimización operativa para leads
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

alter table public.leads
  add column if not exists anonymized_at timestamptz,
  add column if not exists retention_last_processed_at timestamptz;

create index if not exists leads_anonymized_created_at_idx
  on public.leads (anonymized_at, created_at desc);

-- migrate: down
--
-- drop index if exists leads_anonymized_created_at_idx;
-- alter table public.leads
--   drop column if exists retention_last_processed_at,
--   drop column if exists anonymized_at;
