create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  confirmed boolean not null default false,
  confirmation_token uuid not null default gen_random_uuid(),
  locale text not null default 'es',
  subscribed_at timestamptz not null default now(),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  constraint newsletter_subscribers_email_unique unique (email)
);

alter table public.newsletter_subscribers enable row level security;

-- All access via service role only (edge functions use service role key)
create policy "no_public_access" on public.newsletter_subscribers
  as restrictive
  for all
  using (false);
