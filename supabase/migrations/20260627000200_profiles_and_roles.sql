-- ─────────────────────────────────────────────────────────────────────────────
-- perfiles y roles base para samuel_coach
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

create table if not exists public.profiles (
  user_id      uuid primary key references auth.users(id) on delete cascade,
  email        text,
  full_name    text,
  avatar_url   text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists public.user_roles (
  user_id      uuid not null references auth.users(id) on delete cascade,
  role         text not null check (role in ('student', 'admin')),
  created_at   timestamptz not null default now(),
  primary key (user_id, role)
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (user_id, email)
  values (new.id, new.email)
  on conflict (user_id) do update
    set email = excluded.email,
        updated_at = now();

  insert into public.user_roles (user_id, role)
  values (new.id, 'student')
  on conflict (user_id, role) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_samuel on auth.users;
create trigger on_auth_user_created_samuel
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

insert into public.profiles (user_id, email)
select id, email
from auth.users
on conflict (user_id) do update
  set email = excluded.email,
      updated_at = now();

insert into public.user_roles (user_id, role)
select id, 'student'
from auth.users
on conflict (user_id, role) do nothing;

alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;

revoke all on public.profiles from public;
revoke all on public.profiles from anon;
revoke all on public.profiles from authenticated;
grant all on public.profiles to service_role;

revoke all on public.user_roles from public;
revoke all on public.user_roles from anon;
revoke all on public.user_roles from authenticated;
grant all on public.user_roles to service_role;

create policy "profiles_own_select"
  on public.profiles for select
  to authenticated
  using (auth.uid() = user_id);

create policy "profiles_own_update"
  on public.profiles for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "user_roles_own_select"
  on public.user_roles for select
  to authenticated
  using (auth.uid() = user_id);

-- migrate: down
--
-- drop policy if exists "user_roles_own_select" on public.user_roles;
-- drop policy if exists "profiles_own_update" on public.profiles;
-- drop policy if exists "profiles_own_select" on public.profiles;
-- revoke all on public.user_roles from service_role;
-- revoke all on public.profiles from service_role;
-- drop trigger if exists on_auth_user_created_samuel on auth.users;
-- drop function if exists public.handle_new_user();
-- drop table if exists public.user_roles;
-- drop table if exists public.profiles;
