import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const migrationPath = "supabase/migrations/20260824000001_lock_down_premium.sql";

test("premium migration removes user writes and public admin RPC access", () => {
  assert.equal(fs.existsSync(migrationPath), true, "corrective premium migration must exist");
  const sql = fs.readFileSync(migrationPath, "utf8");

  assert.match(sql, /drop policy if exists "samuel_profiles_own_insert"/i);
  assert.match(sql, /drop policy if exists "samuel_profiles_own_update"/i);
  assert.match(sql, /alter table public\.samuel_premium_codes enable row level security/i);
  assert.match(sql, /revoke all on table public\.samuel_premium_codes from anon, authenticated/i);
  assert.match(
    sql,
    /revoke execute on function public\.admin_set_premium\(uuid, int\) from public, anon, authenticated/i
  );
  assert.match(
    sql,
    /grant execute on function public\.admin_set_premium\(uuid, int\) to service_role/i
  );
  assert.match(
    sql,
    /grant execute on function public\.redeem_premium_code\(text\) to authenticated/i
  );
});

test("premium code redemption claims a code atomically", () => {
  assert.equal(fs.existsSync(migrationPath), true, "corrective premium migration must exist");
  const sql = fs.readFileSync(migrationPath, "utf8");
  const redeemBody = sql.split(/create or replace function public\.redeem_premium_code/i)[1] || "";

  assert.match(redeemBody, /update public\.samuel_premium_codes/i);
  assert.match(redeemBody, /redeemed_by is null/i);
  assert.match(redeemBody, /returning[\s\S]+duration_days/i);
  assert.doesNotMatch(redeemBody, /select[\s\S]+from public\.samuel_premium_codes[\s\S]+redeemed_by is null/i);
});
