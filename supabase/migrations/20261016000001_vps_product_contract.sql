-- Reconcile the live VPS-era product database with the existing frontend.
-- Scores remain client-reported; this is validation/ownership, not anti-cheat.
-- No existing rows are deleted or rewritten. NOT VALID preserves historical
-- rows while enforcing the constraints on future inserts and updates.
alter table public.samuel_attempts
  add column if not exists exercise_slug text,
  add column if not exists exercise_type text,
  add column if not exists nivel text,
  alter column exercise_id drop not null;

alter table public.samuel_attempts
  drop constraint if exists samuel_attempts_score_range,
  add constraint samuel_attempts_score_range check (
    score is null or (
      max_score is not null and score >= 0 and max_score > 0 and score <= max_score
      and score not in ('NaN'::numeric, 'Infinity'::numeric, '-Infinity'::numeric)
      and max_score not in ('NaN'::numeric, 'Infinity'::numeric, '-Infinity'::numeric)
    )
  ) not valid,
  drop constraint if exists samuel_attempts_nivel_known,
  add constraint samuel_attempts_nivel_known
    check (nivel is null or nivel in ('A1', 'A2', 'B1', 'B2', 'C1')) not valid,
  drop constraint if exists samuel_attempts_type_known,
  add constraint samuel_attempts_type_known check (
    exercise_type is null or exercise_type in (
      'leseverstehen', 'sprachbausteine_type1', 'sprachbausteine_type2',
      'lueckentext_type1', 'lueckentext_type2', 'hoerverstehen', 'schreiben'
    )
  ) not valid;

alter table public.samuel_attempts enable row level security;
alter table public.samuel_user_progress enable row level security;

-- Include both policy names observed in production and historical repo names.
drop policy if exists attempts_own on public.samuel_attempts;
drop policy if exists samuel_attempts_own on public.samuel_attempts;
drop policy if exists samuel_attempts_own_select on public.samuel_attempts;
drop policy if exists samuel_attempts_own_insert on public.samuel_attempts;
create policy samuel_attempts_own_select on public.samuel_attempts
  for select to authenticated using (user_id = auth.uid());
create policy samuel_attempts_own_insert on public.samuel_attempts
  for insert to authenticated with check (user_id = auth.uid());
revoke all on public.samuel_attempts from public, anon, authenticated;
grant select, insert on public.samuel_attempts to authenticated;

drop policy if exists progress_own on public.samuel_user_progress;
drop policy if exists samuel_progress_own on public.samuel_user_progress;
drop policy if exists samuel_progress_own_select on public.samuel_user_progress;
create policy samuel_progress_own_select on public.samuel_user_progress
  for select to authenticated using (user_id = auth.uid());
revoke all on public.samuel_user_progress from public, anon, authenticated;
grant select on public.samuel_user_progress to authenticated;

create or replace function public.increment_samuel_progress(
  p_nivel text, p_exercise_type text, p_score numeric
)
returns void
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_uid uuid := auth.uid();
  v_nivel text := lower(trim(p_nivel));
begin
  if v_uid is null then raise exception 'Not authenticated' using errcode = '42501'; end if;
  if v_nivel is null or v_nivel not in ('a1', 'a2', 'b1', 'b2', 'c1') then
    raise exception 'Invalid level' using errcode = '22023';
  end if;
  if p_exercise_type is null or p_exercise_type not in (
    'leseverstehen', 'sprachbausteine_type1', 'sprachbausteine_type2',
    'lueckentext_type1', 'lueckentext_type2', 'hoerverstehen', 'schreiben'
  ) then raise exception 'Invalid exercise type' using errcode = '22023'; end if;
  if p_score is null or p_score < 0 or p_score > 100
    or p_score in ('NaN'::numeric, 'Infinity'::numeric, '-Infinity'::numeric) then
    raise exception 'Invalid score' using errcode = '22023';
  end if;

  -- ON CONFLICT locks the conflicting row and computes from its current values,
  -- so overlapping submissions cannot overwrite a previously read count.
  insert into public.samuel_user_progress
    (user_id, nivel, exercise_type, completed_activities, average_score, updated_at)
  values (v_uid, v_nivel, p_exercise_type, 1, p_score, now())
  on conflict (user_id, nivel, exercise_type) do update set
    average_score = round(
      ((coalesce(samuel_user_progress.average_score, 0) * samuel_user_progress.completed_activities) + excluded.average_score)
      / (samuel_user_progress.completed_activities + 1), 2
    ),
    completed_activities = samuel_user_progress.completed_activities + 1,
    updated_at = now();
end;
$$;
revoke all on function public.increment_samuel_progress(text, text, numeric) from public, anon, authenticated;
grant execute on function public.increment_samuel_progress(text, text, numeric) to authenticated;

create or replace function public.mark_samuel_messages_read(p_ids uuid[])
returns integer
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_uid uuid := auth.uid();
  v_count integer;
begin
  if v_uid is null then raise exception 'Not authenticated' using errcode = '42501'; end if;
  update public.samuel_messages set is_read = true
  where id = any(p_ids)
    and user_id = v_uid
    and sender = 'coach'
    and is_read = false;
  get diagnostics v_count = row_count;
  return v_count;
end;
$$;
revoke all on function public.mark_samuel_messages_read(uuid[]) from public, anon, authenticated;
grant execute on function public.mark_samuel_messages_read(uuid[]) to authenticated;
