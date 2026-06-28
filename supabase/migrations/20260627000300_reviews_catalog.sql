-- ─────────────────────────────────────────────────────────────────────────────
-- reseñas y estadísticas públicas del marketplace
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

create table if not exists public.review_sources (
  source         text primary key check (source in ('google', 'superprof')),
  label          text not null,
  profile_url    text not null,
  rating_value   numeric(2,1) not null check (rating_value >= 0 and rating_value <= 5),
  review_count   integer not null default 0 check (review_count >= 0),
  is_active      boolean not null default true,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create table if not exists public.reviews (
  id             uuid primary key default gen_random_uuid(),
  source         text not null references public.review_sources(source) on update cascade,
  reviewer_name  text not null,
  reviewer_role  text,
  review_text    text not null,
  rating         numeric(2,1) not null default 5.0 check (rating >= 0 and rating <= 5),
  status         text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  is_featured    boolean not null default false,
  sort_order     integer not null default 100,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create index if not exists reviews_status_sort_idx
  on public.reviews (status, is_featured, sort_order, created_at desc);

insert into public.review_sources (source, label, profile_url, rating_value, review_count, is_active)
values
  ('google', 'Google', 'https://maps.app.goo.gl/QUfAcEKRy9hLtfxLA', 5.0, 124, true),
  ('superprof', 'Superprof', 'https://www.superprof.es/samuel-coach-aleman-aprender-aleman-puede-ser-facil-dejalo-mis-manos.html', 5.0, 47, true)
on conflict (source) do update
  set label = excluded.label,
      profile_url = excluded.profile_url,
      rating_value = excluded.rating_value,
      review_count = excluded.review_count,
      is_active = excluded.is_active,
      updated_at = now();

insert into public.reviews (
  source,
  reviewer_name,
  reviewer_role,
  review_text,
  rating,
  status,
  is_featured,
  sort_order
)
values
  ('google', 'Ana M.', 'Alemán conversacional', 'Las clases son muy dinámicas y personalizadas. Samuel se adapta perfectamente a mi nivel y avanzamos a buen ritmo. Lo recomiendo sin duda.', 5.0, 'published', true, 10),
  ('superprof', 'María G.', 'Alumna de conversacional', 'Samuel explica muy bien, adapta cada clase a lo que necesito y siempre resuelve mis dudas. En pocos meses noté un avance increíble.', 5.0, 'published', true, 20),
  ('google', 'Carlos F.', 'Nivel A1 → A2', 'Muy buen profesor, explica con mucha paciencia y claridad. Empecé desde cero y en 6 meses ya mantengo conversaciones básicas. Increíble.', 5.0, 'published', true, 30),
  ('superprof', 'Javier R.', 'Goethe B2', 'Preparé el Goethe B2 con Samuel y lo aprobé a la primera. Su método es muy práctico y las clases son dinámicas. Totalmente recomendable.', 5.0, 'published', true, 40),
  ('google', 'Rosa T.', 'Preparación TELC B1', 'Buscaba un profesor para preparar el TELC y Samuel fue la mejor elección. Muy organizado, puntual y con materiales excelentes.', 5.0, 'published', true, 50),
  ('superprof', 'Laura P.', 'Alemán para trabajar', 'Llevaba años intentando aprender alemán sin éxito. Con Samuel encontré el método que necesitaba. Ahora trabajo en Alemania.', 5.0, 'published', true, 60)
on conflict do nothing;

alter table public.review_sources enable row level security;
alter table public.reviews enable row level security;

revoke all on public.review_sources from public;
revoke all on public.review_sources from anon;
revoke all on public.review_sources from authenticated;
grant all on public.review_sources to service_role;

revoke all on public.reviews from public;
revoke all on public.reviews from anon;
revoke all on public.reviews from authenticated;
grant all on public.reviews to service_role;

-- migrate: down
--
-- drop index if exists reviews_status_sort_idx;
-- revoke all on public.reviews from service_role;
-- revoke all on public.review_sources from service_role;
-- drop table if exists public.reviews;
-- drop table if exists public.review_sources;
