-- ─────────────────────────────────────────────────────────────────────────────
-- ampliar estados de leads con answered
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

alter table public.leads
  drop constraint if exists leads_status_check;

alter table public.leads
  add constraint leads_status_check
  check (status in ('new', 'reviewed', 'answered', 'spam'));

-- migrate: down
--
-- alter table public.leads
--   drop constraint if exists leads_status_check;
-- alter table public.leads
--   add constraint leads_status_check
--   check (status in ('new', 'reviewed', 'spam'));
