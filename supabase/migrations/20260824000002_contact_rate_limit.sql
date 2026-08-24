-- Supports anonymous contact throttling without storing raw IP addresses.
create index if not exists leads_ip_hash_created_at_idx
  on public.leads (ip_hash, created_at desc)
  where ip_hash is not null;
