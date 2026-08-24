begin;

create extension if not exists pgtap with schema extensions;
select plan(34);

insert into auth.users (
  instance_id, id, aud, role, email, encrypted_password,
  email_confirmed_at, created_at, updated_at
) values
  ('00000000-0000-0000-0000-000000000000', '11111111-1111-4111-8111-111111111111', 'authenticated', 'authenticated', 'one@example.test', '', now(), now(), now()),
  ('00000000-0000-0000-0000-000000000000', '22222222-2222-4222-8222-222222222222', 'authenticated', 'authenticated', 'two@example.test', '', now(), now(), now());

insert into public.samuel_profiles (user_id, is_premium)
values ('11111111-1111-4111-8111-111111111111', false);

insert into public.samuel_premium_codes (code, duration_days)
values ('PREM-ATOMIC-TEST', 30);

insert into public.samuel_messages (id, user_id, sender, content)
values
  ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', '11111111-1111-4111-8111-111111111111', 'coach', 'Own message'),
  ('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', '22222222-2222-4222-8222-222222222222', 'coach', 'Other message');

insert into public.newsletter_subscribers (id, email)
values ('cccccccc-cccc-4ccc-8ccc-cccccccccccc', 'lease@example.test');

select ok(
  not has_function_privilege('anon', 'public.redeem_premium_code(text)', 'execute'),
  'anonymous users cannot redeem premium codes'
);
select ok(
  has_function_privilege('authenticated', 'public.redeem_premium_code(text)', 'execute'),
  'authenticated users can execute the redemption RPC'
);
select ok(
  not has_function_privilege('authenticated', 'public.admin_set_premium(uuid,integer)', 'execute'),
  'authenticated users cannot execute admin premium changes'
);
select ok(
  not has_function_privilege('authenticated', 'public.generate_premium_code(integer,text,text)', 'execute'),
  'authenticated users cannot generate premium codes'
);
select ok(
  not has_table_privilege('authenticated', 'public.samuel_premium_codes', 'select'),
  'authenticated users cannot inspect premium codes'
);
select ok(
  not has_function_privilege('authenticated', 'public.claim_contact_submission(text,timestamptz,integer,interval)', 'execute'),
  'authenticated users cannot call the contact limiter'
);
select is(
  array[
    public.claim_contact_submission(repeat('a', 64)),
    public.claim_contact_submission(repeat('a', 64)),
    public.claim_contact_submission(repeat('a', 64)),
    public.claim_contact_submission(repeat('a', 64)),
    public.claim_contact_submission(repeat('a', 64)),
    public.claim_contact_submission(repeat('a', 64))
  ],
  array[true, true, true, true, true, false],
  'the atomic contact limiter accepts five claims and rejects the sixth'
);
select ok(
  not has_function_privilege('authenticated', 'public.prepare_newsletter_confirmation(text,text,timestamptz,timestamptz)', 'execute'),
  'authenticated users cannot prepare newsletter delivery'
);
select ok(
  (select should_send from public.prepare_newsletter_confirmation(
    'lease@example.test', 'es', '2026-08-24T10:00:00Z', '2026-08-25T10:00:00Z'
  )),
  'the first newsletter request prepares and claims delivery'
);
select is(
  (select bound_payload from public.bind_newsletter_confirmation_payload(
    'cccccccc-cccc-4ccc-8ccc-cccccccccccc',
    '2026-08-24T10:00:00Z',
    (select confirmation_delivery_id from public.newsletter_subscribers where email = 'lease@example.test'),
    '{"from":"first@example.test","subject":"first"}'::jsonb
  )),
  '{"from":"first@example.test","subject":"first"}'::jsonb,
  'the first delivery binds its exact Resend payload'
);
create temporary table newsletter_attempt_snapshot as
select confirmation_delivery_id as id
from public.newsletter_subscribers
where email = 'lease@example.test';
select is(
  (select should_send from public.prepare_newsletter_confirmation(
    'lease@example.test', 'es', '2026-08-24T10:00:01Z', '2026-08-25T10:00:01Z'
  )),
  false,
  'a concurrent newsletter request cannot prepare a second delivery'
);
select is(
  (select prepared_confirmation_token from public.prepare_newsletter_confirmation(
    'lease@example.test', 'es', '2026-08-24T10:00:01Z', '2026-08-25T10:00:01Z'
  )),
  (select confirmation_token from public.newsletter_subscribers where email = 'lease@example.test'),
  'the losing request receives the same valid confirmation token'
);
select ok(
  public.complete_newsletter_confirmation(
    'cccccccc-cccc-4ccc-8ccc-cccccccccccc', '2026-08-24T10:00:00Z', false
  ),
  'a failed delivery releases its lease'
);
select ok(
  (select should_send from public.prepare_newsletter_confirmation(
    'lease@example.test', 'es', '2026-08-24T10:00:02Z', '2026-08-25T10:00:02Z'
  )),
  'a failed delivery can retry immediately with the stable token'
);
select is(
  (select confirmation_delivery_id from public.newsletter_subscribers where email = 'lease@example.test'),
  (select id from newsletter_attempt_snapshot),
  'a failed or ambiguous delivery keeps the same idempotency attempt'
);
select is(
  (select bound_payload from public.bind_newsletter_confirmation_payload(
    'cccccccc-cccc-4ccc-8ccc-cccccccccccc',
    '2026-08-24T10:00:02Z',
    (select confirmation_delivery_id from public.newsletter_subscribers where email = 'lease@example.test'),
    '{"from":"changed@example.test","subject":"changed"}'::jsonb
  )),
  '{"from":"first@example.test","subject":"first"}'::jsonb,
  'an ambiguous retry reuses the original Resend payload verbatim'
);
select ok(
  public.complete_newsletter_confirmation(
    'cccccccc-cccc-4ccc-8ccc-cccccccccccc', '2026-08-24T10:00:02Z', true
  ),
  'a successful delivery completes its lease'
);
select is(
  (select should_send from public.prepare_newsletter_confirmation(
    'lease@example.test', 'es', '2026-08-24T10:00:03Z', '2026-08-25T10:00:03Z'
  )),
  false,
  'a delivered confirmation starts the cooldown atomically'
);
select ok(
  (select should_send from public.prepare_newsletter_confirmation(
    'lease@example.test', 'de', '2026-08-24T10:16:03Z', '2026-08-25T10:16:03Z'
  )),
  'an intentional resend after cooldown creates a new delivery'
);
select isnt(
  (select confirmation_delivery_id from public.newsletter_subscribers where email = 'lease@example.test'),
  (select id from newsletter_attempt_snapshot),
  'an intentional resend rotates the idempotency attempt'
);
select is(
  (select bound_payload from public.bind_newsletter_confirmation_payload(
    'cccccccc-cccc-4ccc-8ccc-cccccccccccc',
    '2026-08-24T10:16:03Z',
    (select confirmation_delivery_id from public.newsletter_subscribers where email = 'lease@example.test'),
    '{"from":"changed@example.test","subject":"changed"}'::jsonb
  )),
  '{"from":"changed@example.test","subject":"changed"}'::jsonb,
  'a new intentional resend binds a fresh payload'
);

set local role authenticated;
select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
select throws_ok(
  $$insert into public.samuel_profiles (user_id, is_premium) values ('22222222-2222-4222-8222-222222222222', true)$$,
  '42501', null, 'users cannot insert premium profiles'
);
update public.samuel_profiles
set is_premium = true
where user_id = '11111111-1111-4111-8111-111111111111';
select is(
  (select is_premium from public.samuel_profiles where user_id = auth.uid()),
  false,
  'users cannot update their premium flag'
);
select ok(public.redeem_premium_code('PREM-ATOMIC-TEST'), 'first user redeems the code');

select set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', true);
select is(public.redeem_premium_code('PREM-ATOMIC-TEST'), false, 'second redemption loses the atomic claim');
reset role;

select is(
  (select redeemed_by from public.samuel_premium_codes where code = 'PREM-ATOMIC-TEST'),
  '11111111-1111-4111-8111-111111111111'::uuid,
  'the first user owns the redeemed code'
);

set local role authenticated;
select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
select lives_ok(
  $$insert into public.samuel_attempts (user_id, exercise_slug, exercise_type, nivel, answers, score, max_score) values ('11111111-1111-4111-8111-111111111111', 'own', 'leseverstehen', 'A1', '{}'::jsonb, 8, 10)$$,
  'a user can insert an own valid attempt'
);
select throws_ok(
  $$insert into public.samuel_attempts (user_id, exercise_slug, exercise_type, nivel, answers, score, max_score) values ('22222222-2222-4222-8222-222222222222', 'cross', 'leseverstehen', 'A1', '{}'::jsonb, 8, 10)$$,
  '42501', null, 'a user cannot insert another user attempt'
);
select is((select count(*) from public.samuel_attempts), 1::bigint, 'RLS exposes only the own attempt');
select lives_ok(
  $$select public.increment_samuel_progress('A1', 'leseverstehen', 80)$$,
  'validated progress RPC accepts a valid score'
);
select is(
  (select completed_activities from public.samuel_user_progress where user_id = auth.uid()),
  1,
  'progress RPC writes the authenticated user row'
);
select is(
  public.mark_samuel_messages_read(array[
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa'::uuid,
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb'::uuid
  ]),
  1,
  'message RPC changes only the authenticated user message'
);
reset role;

select is(
  (select is_read from public.samuel_messages where id = 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb'),
  false,
  'the other user message remains unread'
);
select ok(
  not has_function_privilege('anon', 'public.mark_samuel_messages_read(uuid[])', 'execute'),
  'anonymous users cannot mark messages read'
);

select * from finish();
rollback;
