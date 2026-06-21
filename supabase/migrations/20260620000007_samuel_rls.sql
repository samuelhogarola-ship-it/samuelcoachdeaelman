-- ─────────────────────────────────────────────────────────────────────────────
-- samuel_coach · Fase 1 · Row Level Security
-- Depende de: 20260620000006_samuel_tables.sql
-- Las operaciones de escritura admin usan service_role key, que bypasea RLS.
-- NO modifica RLS de tablas existentes de otros proyectos.
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

-- samuel_texts: lectura pública de publicados
alter table samuel_texts enable row level security;

create policy "samuel_texts_read_published"
  on samuel_texts for select
  using (is_published = true);

-- samuel_questions: lectura pública
alter table samuel_questions enable row level security;

create policy "samuel_questions_read"
  on samuel_questions for select
  using (true);

-- samuel_exercises: lectura pública de publicados
alter table samuel_exercises enable row level security;

create policy "samuel_exercises_read_published"
  on samuel_exercises for select
  using (is_published = true);

-- samuel_exercise_tokens: lectura pública
alter table samuel_exercise_tokens enable row level security;

create policy "samuel_exercise_tokens_read"
  on samuel_exercise_tokens for select
  using (true);

-- samuel_attempts: usuario ve solo los suyos; anónimos pueden insertar
alter table samuel_attempts enable row level security;

create policy "samuel_attempts_own_select"
  on samuel_attempts for select
  using (user_id = auth.uid());

create policy "samuel_attempts_own_insert"
  on samuel_attempts for insert
  with check (user_id = auth.uid() or user_id is null);

-- samuel_user_progress: usuario ve y modifica solo el suyo
alter table samuel_user_progress enable row level security;

create policy "samuel_progress_own"
  on samuel_user_progress for all
  using (user_id = auth.uid());

-- ─────────────────────────────────────────────────────────────────────────────
-- migrate: down
--
-- drop policy if exists "samuel_progress_own" on samuel_user_progress;
-- drop policy if exists "samuel_attempts_own_insert" on samuel_attempts;
-- drop policy if exists "samuel_attempts_own_select" on samuel_attempts;
-- drop policy if exists "samuel_exercise_tokens_read" on samuel_exercise_tokens;
-- drop policy if exists "samuel_exercises_read_published" on samuel_exercises;
-- drop policy if exists "samuel_questions_read" on samuel_questions;
-- drop policy if exists "samuel_texts_read_published" on samuel_texts;
-- ─────────────────────────────────────────────────────────────────────────────
