-- ─────────────────────────────────────────────────────────────────────────────
-- contact leads · tabla server-side para formulario de contacto
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

create table if not exists public.leads (
  id                 uuid primary key default gen_random_uuid(),
  created_at         timestamptz not null default now(),
  name               text not null,
  email              text not null,
  phone              text,
  age_band           text,
  goal               text,
  current_level      text,
  availability       text,
  message            text,
  privacy_consent    boolean not null default false,
  privacy_consent_at timestamptz,
  privacy_policy_version text,
  risk_score         integer not null default 0,
  ip_hash            text,
  user_agent         text,
  turnstile_success  boolean not null default false,
  status             text not null default 'new' check (status in ('new', 'reviewed', 'spam'))
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_created_at_idx on public.leads (status, created_at desc);

alter table public.leads enable row level security;

revoke all on public.leads from public;
revoke all on public.leads from anon;
revoke all on public.leads from authenticated;

grant all on public.leads to service_role;

-- migrate: down
--
-- revoke all on public.leads from service_role;
-- drop index if exists leads_status_created_at_idx;
-- drop index if exists leads_created_at_idx;
-- drop table if exists public.leads;
