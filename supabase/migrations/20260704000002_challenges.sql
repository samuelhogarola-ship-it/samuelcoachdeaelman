-- ─────────────────────────────────────────────────────────────────────────────
-- samuel_coach · Retos + base de notificaciones del panel de usuario
-- Depends on: 20260701000002_premium_rls.sql
-- Apply to: apps-clients (hocdlmxzghwymamientc)
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

create table if not exists samuel_challenges (
  id            text        primary key,
  title_es      text        not null,
  title_de      text,
  title_en      text,
  desc_es       text,
  desc_de       text,
  desc_en       text,
  -- type drives how progress is computed client-side:
  --   weekly_exercises  → count attempts with completed_at in last 7 days
  --   avg_score         → average_score from samuel_user_progress for exercise_type
  --   streak_days       → consecutive days with at least 1 attempt
  --   total_exercises   → sum of completed_activities across all progress rows
  type          text        not null check (type in ('weekly_exercises','avg_score','streak_days','total_exercises')),
  exercise_type text,        -- null = all types; mirrors samuel_user_progress.exercise_type values
  target        int         not null,
  icon          text        not null default '🎯',
  active        boolean     not null default true,
  sort_order    int         not null default 0,
  created_at    timestamptz not null default now()
);

alter table samuel_challenges enable row level security;

-- All authenticated users can read active challenges
create policy "authenticated_read_active_challenges"
  on samuel_challenges for select
  to authenticated
  using (active = true);

-- Seed initial challenges
insert into samuel_challenges
  (id, title_es, title_de, title_en, desc_es, desc_de, desc_en, type, exercise_type, target, icon, sort_order)
values
  (
    'weekly-5',
    '5 ejercicios esta semana',
    '5 Übungen diese Woche',
    '5 exercises this week',
    'Completa 5 ejercicios en los últimos 7 días.',
    'Schließe 5 Übungen in den letzten 7 Tagen ab.',
    'Complete 5 exercises in the last 7 days.',
    'weekly_exercises', null, 5, '⚡', 1
  ),
  (
    'spb-avg-75',
    'Domina el Sprachbaustein',
    'Sprachbaustein meistern',
    'Master the Sprachbaustein',
    'Alcanza una media de 75 en Sprachbausteine.',
    'Erreiche einen Durchschnitt von 75 bei Sprachbausteinen.',
    'Reach an average of 75 in Sprachbausteine.',
    'avg_score', 'sprachbausteine', 75, '🏆', 2
  ),
  (
    'streak-5',
    'Racha de 5 días',
    '5 Tage am Stück',
    '5-day streak',
    'Practica alemán 5 días seguidos.',
    'Übe 5 Tage hintereinander Deutsch.',
    'Practice German 5 days in a row.',
    'streak_days', null, 5, '🔥', 3
  )
on conflict (id) do nothing;

-- ── migrate: down ──────────────────────────────────────────────────────────────
-- drop table if exists samuel_challenges;
