-- ─────────────────────────────────────────────────────────────────────────────
-- samuel_coach · Fase 2 · RLS para perfiles, mensajes y textos con requires_auth
-- Depende de: 20260701000001_premium_and_chat.sql
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

-- samuel_texts: actualizar política para textos restringidos
-- Los textos públicos siguen accesibles sin sesión.
-- Los textos con requires_auth=true solo accesibles para usuarios autenticados.
drop policy if exists "samuel_texts_read_published" on samuel_texts;

create policy "samuel_texts_read_public"
  on samuel_texts for select
  using (is_published = true and requires_auth = false);

create policy "samuel_texts_read_registered"
  on samuel_texts for select
  using (is_published = true and requires_auth = true and auth.uid() is not null);

-- samuel_profiles: usuario ve y edita solo el suyo
alter table samuel_profiles enable row level security;

create policy "samuel_profiles_own_select"
  on samuel_profiles for select
  using (user_id = auth.uid());

create policy "samuel_profiles_own_insert"
  on samuel_profiles for insert
  with check (user_id = auth.uid());

create policy "samuel_profiles_own_update"
  on samuel_profiles for update
  using (user_id = auth.uid());

-- samuel_messages: usuario ve e inserta solo los suyos
alter table samuel_messages enable row level security;

create policy "samuel_messages_own_select"
  on samuel_messages for select
  using (user_id = auth.uid());

create policy "samuel_messages_own_insert"
  on samuel_messages for insert
  with check (user_id = auth.uid() and sender = 'user');

-- ─────────────────────────────────────────────────────────────────────────────
-- migrate: down
--
-- drop policy if exists "samuel_messages_own_insert" on samuel_messages;
-- drop policy if exists "samuel_messages_own_select" on samuel_messages;
-- drop policy if exists "samuel_profiles_own_update" on samuel_profiles;
-- drop policy if exists "samuel_profiles_own_insert" on samuel_profiles;
-- drop policy if exists "samuel_profiles_own_select" on samuel_profiles;
-- drop policy if exists "samuel_texts_read_registered" on samuel_texts;
-- drop policy if exists "samuel_texts_read_public" on samuel_texts;
-- create policy "samuel_texts_read_published"
--   on samuel_texts for select using (is_published = true);
-- ─────────────────────────────────────────────────────────────────────────────
