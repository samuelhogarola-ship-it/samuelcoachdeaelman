-- ─────────────────────────────────────────────────────────────────────────────
-- storage para avatares de perfil
-- ─────────────────────────────────────────────────────────────────────────────

-- migrate: up

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'profile-avatars',
  'profile-avatars',
  true,
  2097152,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

create policy "profile_avatars_public_read"
  on storage.objects for select
  to public
  using (bucket_id = 'profile-avatars');

create policy "profile_avatars_own_insert"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'profile-avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "profile_avatars_own_update"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'profile-avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id = 'profile-avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "profile_avatars_own_delete"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'profile-avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- migrate: down
--
-- drop policy if exists "profile_avatars_own_delete" on storage.objects;
-- drop policy if exists "profile_avatars_own_update" on storage.objects;
-- drop policy if exists "profile_avatars_own_insert" on storage.objects;
-- drop policy if exists "profile_avatars_public_read" on storage.objects;
-- delete from storage.buckets where id = 'profile-avatars';
