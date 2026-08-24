alter table public.newsletter_subscribers
  add column if not exists confirmation_expires_at timestamptz,
  add column if not exists unsubscribe_token uuid not null default gen_random_uuid(),
  add column if not exists last_confirmation_sent_at timestamptz;

update public.newsletter_subscribers
set confirmation_expires_at = coalesce(confirmation_expires_at, now())
where confirmed = false;

create unique index if not exists newsletter_subscribers_unsubscribe_token_idx
  on public.newsletter_subscribers (unsubscribe_token);

revoke all on public.newsletter_subscribers from public, anon, authenticated;
grant all on public.newsletter_subscribers to service_role;
