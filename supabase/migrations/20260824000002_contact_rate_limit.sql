-- Supports anonymous contact throttling without storing raw IP addresses.
create index if not exists leads_ip_hash_created_at_idx
  on public.leads (ip_hash, created_at desc)
  where ip_hash is not null;

create table if not exists public.contact_rate_limits (
  ip_hash text primary key check (length(ip_hash) = 64),
  window_started_at timestamptz not null,
  request_count integer not null check (request_count > 0),
  updated_at timestamptz not null default now()
);

alter table public.contact_rate_limits enable row level security;
revoke all on public.contact_rate_limits from public, anon, authenticated;
grant all on public.contact_rate_limits to service_role;

create or replace function public.claim_contact_submission(
  p_ip_hash text,
  p_now timestamptz default now(),
  p_limit integer default 5,
  p_window interval default interval '15 minutes'
)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_count integer;
begin
  if p_ip_hash is null or length(p_ip_hash) <> 64 then
    return false;
  end if;
  if p_limit < 1 or p_window <= interval '0 seconds' then
    raise exception 'Invalid rate limit configuration';
  end if;

  insert into public.contact_rate_limits as limits
    (ip_hash, window_started_at, request_count, updated_at)
  values (p_ip_hash, p_now, 1, p_now)
  on conflict (ip_hash) do update set
    window_started_at = case
      when limits.window_started_at <= p_now - p_window then p_now
      else limits.window_started_at
    end,
    request_count = case
      when limits.window_started_at <= p_now - p_window then 1
      else limits.request_count + 1
    end,
    updated_at = p_now
  returning request_count into v_count;

  return v_count <= p_limit;
end;
$$;

revoke all on function public.claim_contact_submission(text, timestamptz, integer, interval)
  from public, anon, authenticated;
grant execute on function public.claim_contact_submission(text, timestamptz, integer, interval)
  to service_role;
