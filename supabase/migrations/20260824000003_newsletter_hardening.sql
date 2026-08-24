alter table public.newsletter_subscribers
  add column if not exists confirmation_expires_at timestamptz,
  add column if not exists unsubscribe_token uuid not null default gen_random_uuid(),
  add column if not exists last_confirmation_sent_at timestamptz,
  add column if not exists confirmation_delivery_claimed_at timestamptz,
  add column if not exists confirmation_delivery_id uuid,
  add column if not exists confirmation_delivery_locale text,
  add column if not exists confirmation_delivery_payload jsonb;

update public.newsletter_subscribers
set confirmation_expires_at = coalesce(confirmation_expires_at, now())
where confirmed = false;

create unique index if not exists newsletter_subscribers_unsubscribe_token_idx
  on public.newsletter_subscribers (unsubscribe_token);

revoke all on public.newsletter_subscribers from public, anon, authenticated;
grant all on public.newsletter_subscribers to service_role;

create or replace function public.prepare_newsletter_confirmation(
  p_email text,
  p_locale text,
  p_now timestamptz,
  p_expires_at timestamptz
)
returns table (
  subscriber_id uuid,
  prepared_confirmation_token uuid,
  prepared_unsubscribe_token uuid,
  delivery_attempt_id uuid,
  delivery_locale text,
  should_send boolean
)
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_subscriber public.newsletter_subscribers%rowtype;
  v_rotate boolean;
  v_retry boolean;
  v_delivery_id uuid;
  v_delivery_locale text;
  v_locale text := case when p_locale in ('es', 'de', 'en') then p_locale else 'es' end;
begin
  insert into public.newsletter_subscribers
    (email, locale, confirmation_expires_at)
  values
    (p_email, v_locale, p_expires_at)
  on conflict (email) do nothing;

  select subscriber.* into v_subscriber
  from public.newsletter_subscribers as subscriber
  where subscriber.email = p_email
  for update;

  if v_subscriber.id is null then
    return;
  end if;

  if (v_subscriber.confirmed and v_subscriber.unsubscribed_at is null)
     or (v_subscriber.last_confirmation_sent_at is not null
         and v_subscriber.last_confirmation_sent_at > p_now - interval '15 minutes')
     or (v_subscriber.confirmation_delivery_claimed_at is not null
         and v_subscriber.confirmation_delivery_claimed_at > p_now - interval '5 minutes') then
    return query values (
      v_subscriber.id,
      v_subscriber.confirmation_token,
      v_subscriber.unsubscribe_token,
      v_subscriber.confirmation_delivery_id,
      coalesce(v_subscriber.confirmation_delivery_locale, v_subscriber.locale),
      false
    );
    return;
  end if;

  v_retry := v_subscriber.confirmation_delivery_id is not null
    and v_subscriber.confirmation_expires_at is not null
    and v_subscriber.confirmation_expires_at > p_now;
  v_rotate := not v_retry and (
    v_subscriber.unsubscribed_at is not null
    or v_subscriber.confirmation_expires_at is null
    or v_subscriber.confirmation_expires_at <= p_now
  );
  v_delivery_id := case
    when v_retry then v_subscriber.confirmation_delivery_id
    else gen_random_uuid()
  end;
  v_delivery_locale := case
    when v_retry then coalesce(v_subscriber.confirmation_delivery_locale, v_subscriber.locale)
    else v_locale
  end;

  update public.newsletter_subscribers as subscriber
  set locale = v_delivery_locale,
      confirmed = false,
      confirmed_at = null,
      unsubscribed_at = null,
      subscribed_at = p_now,
      confirmation_token = case
        when v_rotate then gen_random_uuid()
        else subscriber.confirmation_token
      end,
      confirmation_expires_at = case
        when v_rotate then p_expires_at
        else subscriber.confirmation_expires_at
      end,
      confirmation_delivery_claimed_at = p_now,
      confirmation_delivery_id = v_delivery_id,
      confirmation_delivery_locale = v_delivery_locale,
      confirmation_delivery_payload = case
        when v_retry then subscriber.confirmation_delivery_payload
        else null
      end
  where subscriber.id = v_subscriber.id
  returning subscriber.* into v_subscriber;

  return query values (
    v_subscriber.id,
    v_subscriber.confirmation_token,
    v_subscriber.unsubscribe_token,
    v_subscriber.confirmation_delivery_id,
    v_subscriber.confirmation_delivery_locale,
    true
  );
end;
$$;

create or replace function public.bind_newsletter_confirmation_payload(
  p_subscriber_id uuid,
  p_claimed_at timestamptz,
  p_delivery_id uuid,
  p_payload jsonb
)
returns table (bound_payload jsonb)
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  if jsonb_typeof(p_payload) <> 'object' then
    return;
  end if;

  return query
  update public.newsletter_subscribers as subscriber
  set confirmation_delivery_payload = coalesce(
        subscriber.confirmation_delivery_payload,
        p_payload
      )
  where subscriber.id = p_subscriber_id
    and subscriber.confirmation_delivery_claimed_at = p_claimed_at
    and subscriber.confirmation_delivery_id = p_delivery_id
  returning subscriber.confirmation_delivery_payload;
end;
$$;

create or replace function public.complete_newsletter_confirmation(
  p_subscriber_id uuid,
  p_claimed_at timestamptz,
  p_delivered boolean
)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  update public.newsletter_subscribers
  set last_confirmation_sent_at = case
        when p_delivered then p_claimed_at
        else last_confirmation_sent_at
      end,
      confirmation_delivery_claimed_at = null,
      confirmation_delivery_id = case
        when p_delivered then null
        else confirmation_delivery_id
      end,
      confirmation_delivery_locale = case
        when p_delivered then null
        else confirmation_delivery_locale
      end,
      confirmation_delivery_payload = case
        when p_delivered then null
        else confirmation_delivery_payload
      end
  where id = p_subscriber_id
    and confirmation_delivery_claimed_at = p_claimed_at;

  return found;
end;
$$;

revoke all on function public.prepare_newsletter_confirmation(text, text, timestamptz, timestamptz)
  from public, anon, authenticated;
revoke all on function public.bind_newsletter_confirmation_payload(uuid, timestamptz, uuid, jsonb)
  from public, anon, authenticated;
revoke all on function public.complete_newsletter_confirmation(uuid, timestamptz, boolean)
  from public, anon, authenticated;
grant execute on function public.prepare_newsletter_confirmation(text, text, timestamptz, timestamptz)
  to service_role;
grant execute on function public.bind_newsletter_confirmation_payload(uuid, timestamptz, uuid, jsonb)
  to service_role;
grant execute on function public.complete_newsletter_confirmation(uuid, timestamptz, boolean)
  to service_role;
