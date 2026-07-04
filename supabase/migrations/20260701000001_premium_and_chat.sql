-- ─────────────────────────────────────────────────────────────────────────────
-- samuel_coach · Fase 2 · Perfiles premium + mensajería + campo requires_auth
-- Depende de: 20260620000006_samuel_tables.sql
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

-- Campo requires_auth en textos (false por defecto → compatibilidad total)
alter table samuel_texts
  add column if not exists requires_auth boolean not null default false;

-- Perfil extendido del usuario (is_premium, etc.)
create table if not exists samuel_profiles (
  user_id     uuid        primary key references auth.users(id) on delete cascade,
  is_premium  boolean     not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Mensajes internos usuario ↔ coach (canal simple, no real-time)
create table if not exists samuel_messages (
  id          uuid        primary key default gen_random_uuid(),
  user_id     uuid        not null references auth.users(id) on delete cascade,
  sender      text        not null check (sender in ('user', 'coach')),
  content     text        not null,
  is_read     boolean     not null default false,
  created_at  timestamptz not null default now()
);
create index if not exists samuel_messages_user_idx
  on samuel_messages (user_id, created_at desc);

-- ── RPC: incrementar progreso de forma atómica ────────────────────────────────
-- Llamada desde el cliente con token de usuario (SECURITY DEFINER para RLS bypass seguro)
create or replace function increment_samuel_progress(
  p_nivel         text,
  p_exercise_type text,
  p_score         numeric   -- 0-100
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_row samuel_user_progress%rowtype;
begin
  if v_uid is null then
    raise exception 'Not authenticated';
  end if;

  select * into v_row
  from samuel_user_progress
  where user_id = v_uid
    and nivel = p_nivel
    and exercise_type = p_exercise_type;

  if v_row.id is null then
    insert into samuel_user_progress
      (user_id, nivel, exercise_type, completed_activities, average_score, updated_at)
    values
      (v_uid, p_nivel, p_exercise_type, 1, p_score, now());
  else
    update samuel_user_progress set
      completed_activities = v_row.completed_activities + 1,
      average_score = round(
        ((coalesce(v_row.average_score, 0) * v_row.completed_activities) + p_score)
        / (v_row.completed_activities + 1),
        2
      ),
      updated_at = now()
    where id = v_row.id;
  end if;
end;
$$;

-- ─────────────────────────────────────────────────────────────────────────────
-- migrate: down
--
-- drop function if exists increment_samuel_progress(text, text, numeric);
-- drop table if exists samuel_messages;
-- drop table if exists samuel_profiles;
-- alter table samuel_texts drop column if exists requires_auth;
-- ─────────────────────────────────────────────────────────────────────────────
