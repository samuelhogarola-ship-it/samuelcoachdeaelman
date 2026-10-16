// Local PostgreSQL WASM test. Install @electric-sql/pglite in an isolated folder,
// then set PGLITE_MODULE to its dist/index.js before running node --test.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { pathToFileURL } from 'node:url';

const modulePath = process.env.PGLITE_MODULE;
const migrationUrl = new URL('../../supabase/migrations/20261016000001_vps_product_contract.sql', import.meta.url);
const userA = '11111111-1111-4111-8111-111111111111';
const userB = '22222222-2222-4222-8222-222222222222';
const types = ['leseverstehen', 'sprachbausteine_type1', 'sprachbausteine_type2', 'lueckentext_type1', 'lueckentext_type2', 'hoerverstehen', 'schreiben'];

for (const variant of ['live', 'repo']) {
  test(`VPS contract on ${variant} schema preserves rows and enforces user permissions`, { skip: !modulePath }, async () => {
    const { PGlite } = await import(pathToFileURL(modulePath).href);
    const db = new PGlite();
    try {
      await db.exec(`
        create role anon; create role authenticated; create role service_role bypassrls;
        create schema auth;
        create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
        grant usage on schema auth,public to anon,authenticated,service_role;
        create table public.samuel_attempts(id uuid primary key default gen_random_uuid(),user_id uuid,exercise_id uuid not null,answers jsonb not null,score numeric,max_score numeric,completed_at timestamptz default now());
        create table public.samuel_user_progress(id uuid primary key default gen_random_uuid(),user_id uuid not null,nivel text not null,exercise_type text not null,completed_activities integer not null default 0,average_score numeric,updated_at timestamptz default now(),unique(user_id,nivel,exercise_type));
        create table public.samuel_messages(id uuid primary key default gen_random_uuid(),user_id uuid not null,sender text not null,content text not null,is_read boolean not null default false);
        alter table public.samuel_attempts enable row level security;
        alter table public.samuel_user_progress enable row level security;
        alter table public.samuel_messages enable row level security;
        grant all on all tables in schema public to anon,authenticated,service_role;
        create policy ${variant === 'live' ? 'attempts_own' : 'samuel_attempts_own_select'} on public.samuel_attempts for all using(auth.uid()=user_id);
        create policy ${variant === 'live' ? 'progress_own' : 'samuel_progress_own'} on public.samuel_user_progress for all using(auth.uid()=user_id);
        insert into public.samuel_attempts(user_id,exercise_id,answers,score,max_score) values('${userA}',gen_random_uuid(),'{}',999,10);
        insert into public.samuel_messages(id,user_id,sender,content) values
        ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','${userA}','coach','own'),
        ('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb','${userB}','coach','other'),
        ('cccccccc-cccc-4ccc-8ccc-cccccccccccc','${userA}','user','outgoing');
      `);
      if (variant === 'repo') await db.exec(await readFile(new URL('../../supabase/migrations/20260824000004_product_data_contract.sql', import.meta.url), 'utf8'));
      const migration = await readFile(migrationUrl, 'utf8');
      await db.exec(migration);
      await db.exec(migration); // Re-applying the reviewed patch must be safe.
      assert.equal((await db.query('select score from public.samuel_attempts')).rows[0].score, '999');
      assert.equal((await db.query("select count(*)::integer n from pg_constraint where conname like 'samuel_attempts_%' and contype='c' and not convalidated")).rows[0].n, 3);
      const denied = async (sql, code = '42501') => assert.rejects(db.exec(sql), error => error.code === code);
      await db.exec('set role anon');
      await denied('select * from public.samuel_attempts');
      await denied("select public.increment_samuel_progress('a1','leseverstehen',80)");
      await denied("select public.mark_samuel_messages_read('{}'::uuid[])");
      await db.exec(`reset role; set role authenticated; select set_config('request.jwt.claim.sub','${userA}',false)`);
      const attempt = (uid, score, max = '10', level = 'A1', type = 'leseverstehen') => `insert into public.samuel_attempts(user_id,exercise_slug,exercise_type,nivel,answers,score,max_score) values('${uid}','fixture','${type}','${level}','{}',${score},${max})`;
      await db.exec(attempt(userA, '8'));
      await denied(attempt(userB, '8'));
      await denied('update public.samuel_attempts set score=0');
      await denied('delete from public.samuel_attempts');
      for (const [score,max] of [['-1','10'],['11','10'],['5','null'],["'NaN'",'10'],['5',"'Infinity'"]]) await denied(attempt(userA,score,max),'23514');
      await denied(attempt(userA,'8','10','A9'),'23514');
      await denied(attempt(userA,'8','10','A1','unknown'),'23514');
      await denied(`insert into public.samuel_user_progress(user_id,nivel,exercise_type) values('${userA}','a1','leseverstehen')`);
      await denied('update public.samuel_user_progress set completed_activities=99');
      await denied('delete from public.samuel_user_progress');
      for (const type of types) await db.exec(`select public.increment_samuel_progress(' A1 ','${type}',80)`);
      await db.exec("select public.increment_samuel_progress('a1','leseverstehen',100)");
      const progress = (await db.query("select completed_activities,average_score from public.samuel_user_progress where exercise_type='leseverstehen'")).rows[0];
      assert.equal(progress.completed_activities,2);
      assert.equal(Number(progress.average_score),90);
      for (const args of ["null,'leseverstehen',80", "'a9','leseverstehen',80", "'a1',null,80", "'a1','unknown',80", "'a1','leseverstehen',null", "'a1','leseverstehen',101", "'a1','leseverstehen',-1", "'a1','leseverstehen','NaN'", "'a1','leseverstehen','Infinity'", "'a1','leseverstehen','-Infinity'"]) await denied(`select public.increment_samuel_progress(${args})`,'22023');
      const marked=(await db.query("select public.mark_samuel_messages_read(array['aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb','cccccccc-cccc-4ccc-8ccc-cccccccccccc']::uuid[]) n")).rows[0].n;
      assert.equal(marked,1);
      assert.equal((await db.query("select public.mark_samuel_messages_read(array['aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa']::uuid[]) n")).rows[0].n,0);
      assert.equal((await db.query('select public.mark_samuel_messages_read(null) n')).rows[0].n,0);
      await db.exec("select set_config('request.jwt.claim.sub','',false)");
      await denied("select public.increment_samuel_progress('a1','leseverstehen',80)");
      await denied("select public.mark_samuel_messages_read('{}'::uuid[])");
      await db.exec(`select set_config('request.jwt.claim.sub','${userB}',false)`);
      assert.equal((await db.query('select count(*)::integer n from public.samuel_attempts')).rows[0].n,0);
      assert.equal((await db.query('select count(*)::integer n from public.samuel_user_progress')).rows[0].n,0);
      await db.exec('reset role');
      assert.equal((await db.query('select count(*)::integer n from public.samuel_messages where is_read')).rows[0].n,1);
      await db.exec('set role service_role');
      await db.exec("update public.samuel_attempts set score=9 where exercise_slug='fixture'");
      await db.exec('update public.samuel_user_progress set completed_activities=3');
    } finally { await db.close(); }
  });
}
