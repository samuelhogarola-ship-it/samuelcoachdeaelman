-- Lock down premium state and make promotional-code redemption atomic.
-- Apply only after exporting current samuel_profiles and samuel_premium_codes rows.

drop policy if exists "samuel_profiles_own_insert" on public.samuel_profiles;
drop policy if exists "samuel_profiles_own_update" on public.samuel_profiles;

alter table public.samuel_premium_codes enable row level security;
revoke all on table public.samuel_premium_codes from anon, authenticated;
grant all on table public.samuel_premium_codes to service_role;

revoke execute on function public.admin_set_premium(uuid, int) from public, anon, authenticated;
revoke execute on function public.generate_premium_code(int, text, text) from public, anon, authenticated;
grant execute on function public.admin_set_premium(uuid, int) to service_role;
grant execute on function public.generate_premium_code(int, text, text) to service_role;

create or replace function public.redeem_premium_code(p_code text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_uid uuid := auth.uid();
  v_code_id uuid;
  v_duration int;
begin
  if v_uid is null then
    raise exception 'Not authenticated';
  end if;

  if nullif(btrim(p_code), '') is null then
    return false;
  end if;

  update public.samuel_premium_codes
  set redeemed_by = v_uid,
      redeemed_at = now()
  where code = upper(btrim(p_code))
    and redeemed_by is null
  returning id, duration_days into v_code_id, v_duration;

  if v_code_id is null then
    return false;
  end if;

  insert into public.samuel_profiles (user_id, is_premium, premium_expires_at)
  values (v_uid, true, now() + make_interval(days => v_duration))
  on conflict (user_id) do update set
    is_premium = true,
    premium_expires_at = greatest(
      coalesce(public.samuel_profiles.premium_expires_at, now()),
      now() + make_interval(days => v_duration)
    ),
    updated_at = now();

  return true;
end;
$$;

revoke execute on function public.redeem_premium_code(text) from public, anon;
grant execute on function public.redeem_premium_code(text) to authenticated;
