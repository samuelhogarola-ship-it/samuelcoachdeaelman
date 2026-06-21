-- ─────────────────────────────────────────────────────────────────────────────
-- samuel_coach · Fase 1 · Tablas de contenido
-- app_key = 'samuel_coach'
-- Reversible: ver sección "migrate: down" al final
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

-- Textos fuente (57 iniciales: A1×19, A2×10, B1×18, B2×10)
create table if not exists samuel_texts (
  id            uuid        primary key default gen_random_uuid(),
  app_key       text        not null default 'samuel_coach',
  slug          text        not null,
  nivel         text        not null check (nivel in ('A1','A2','B1','B2','C1')),
  content_lang  text        not null default 'de',
  titulo        text        not null,
  descripcion   text,
  texto         text        not null,
  is_published  boolean     not null default true,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique (app_key, slug)
);

-- Preguntas verdadero/falso del Leseverstehen
create table if not exists samuel_questions (
  id            uuid        primary key default gen_random_uuid(),
  text_id       uuid        not null references samuel_texts(id) on delete cascade,
  order_index   integer     not null,
  enunciado     text        not null,
  respuesta     boolean     not null,
  explicacion   text,
  created_at    timestamptz not null default now()
);

-- Una fila por texto × tipo de ejercicio
create table if not exists samuel_exercises (
  id              uuid        primary key default gen_random_uuid(),
  text_id         uuid        not null references samuel_texts(id) on delete cascade,
  exercise_type   text        not null check (
    exercise_type in (
      'leseverstehen',
      'sprachbausteine_type1',
      'sprachbausteine_type2',
      'lueckentext_type1',
      'lueckentext_type2'
    )
  ),
  gap_count       integer,
  metadata        jsonb       not null default '{}',
  is_published    boolean     not null default true,
  created_at      timestamptz not null default now(),
  unique (text_id, exercise_type)
);

-- Tokens pre-procesados del lueckentext (text + blank)
create table if not exists samuel_exercise_tokens (
  id            uuid    primary key default gen_random_uuid(),
  exercise_id   uuid    not null references samuel_exercises(id) on delete cascade,
  paragraph_idx integer not null,
  token_idx     integer not null,
  token_type    text    not null check (token_type in ('text','blank')),
  value         text,
  blank_id      integer,
  answer        text,
  category      text
);
create index if not exists samuel_exercise_tokens_exercise_idx
  on samuel_exercise_tokens (exercise_id, paragraph_idx, token_idx);

-- Intentos de ejercicio (anónimos o autenticados)
create table if not exists samuel_attempts (
  id            uuid        primary key default gen_random_uuid(),
  user_id       uuid        references auth.users(id),
  exercise_id   uuid        not null references samuel_exercises(id),
  answers       jsonb       not null,
  score         numeric(5,2),
  max_score     numeric(5,2),
  time_spent_s  integer,
  completed_at  timestamptz not null default now()
);
create index if not exists samuel_attempts_user_idx
  on samuel_attempts (user_id, exercise_id);
create index if not exists samuel_attempts_exercise_idx
  on samuel_attempts (exercise_id, completed_at);

-- Progreso agregado por usuario
create table if not exists samuel_user_progress (
  id                   uuid        primary key default gen_random_uuid(),
  user_id              uuid        not null references auth.users(id),
  nivel                text        not null,
  exercise_type        text        not null,
  completed_activities integer     not null default 0,
  average_score        numeric(5,2),
  updated_at           timestamptz not null default now(),
  unique (user_id, nivel, exercise_type)
);

-- ─────────────────────────────────────────────────────────────────────────────
-- migrate: down
--
-- drop table if exists samuel_user_progress;
-- drop table if exists samuel_attempts;
-- drop table if exists samuel_exercise_tokens;
-- drop table if exists samuel_exercises;
-- drop table if exists samuel_questions;
-- drop table if exists samuel_texts;
-- ─────────────────────────────────────────────────────────────────────────────
