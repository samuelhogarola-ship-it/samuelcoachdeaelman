import test from "node:test";
import assert from "node:assert/strict";

import {
  LEADS_RETENTION_FORBIDDEN_MESSAGE,
  LEADS_RETENTION_RETRY_MESSAGE,
  createLeadsRetentionService,
  readRetentionConfig
} from "./leads-retention-handler.mjs";

const buildService = (overrides = {}) =>
  createLeadsRetentionService({
    config: readRetentionConfig({
      RETENTION_JOB_SECRET: "secret-token",
      LEADS_SPAM_RETENTION_DAYS: "30",
      LEADS_PII_RETENTION_DAYS: "365",
      LEADS_RETENTION_BATCH_SIZE: "100"
    }),
    listSpamLeadIds: async () => ({ success: true, data: ["spam-1"] }),
    deleteLeadsByIds: async () => ({ success: true }),
    listLeadsToAnonymize: async () => ({ success: true, data: ["lead-1", "lead-2"] }),
    anonymizeLeadsByIds: async () => ({ success: true }),
    now: () => "2026-06-28T12:00:00.000Z",
    logger: { error() {} },
    ...overrides
  });

const buildRequest = (headers = {}) =>
  new Request("https://example.com/functions/v1/leads-retention", {
    method: "POST",
    headers: {
      authorization: "Bearer secret-token",
      ...headers
    }
  });

test("processes spam deletion and pii anonymization with configured cutoffs", async () => {
  let spamLookup = null;
  let piiLookup = null;
  let deletedIds = null;
  let anonymizedPayload = null;

  const service = buildService({
    listSpamLeadIds: async (payload) => {
      spamLookup = payload;
      return { success: true, data: ["spam-1"] };
    },
    deleteLeadsByIds: async ({ ids }) => {
      deletedIds = ids;
      return { success: true };
    },
    listLeadsToAnonymize: async (payload) => {
      piiLookup = payload;
      return { success: true, data: ["lead-1", "lead-2"] };
    },
    anonymizeLeadsByIds: async (payload) => {
      anonymizedPayload = payload;
      return { success: true };
    }
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.deepEqual(spamLookup, {
    cutoffIso: "2026-05-29T12:00:00.000Z",
    limit: 100
  });
  assert.deepEqual(piiLookup, {
    cutoffIso: "2025-06-28T12:00:00.000Z",
    limit: 100
  });
  assert.deepEqual(deletedIds, ["spam-1"]);
  assert.deepEqual(anonymizedPayload, {
    ids: ["lead-1", "lead-2"],
    processedAt: "2026-06-28T12:00:00.000Z"
  });
  assert.equal(result.body.deleted_spam_count, 1);
  assert.equal(result.body.anonymized_lead_count, 2);
});

test("supports dry-run without mutating data", async () => {
  let deleted = false;
  let anonymized = false;

  const service = buildService({
    deleteLeadsByIds: async () => {
      deleted = true;
      return { success: true };
    },
    anonymizeLeadsByIds: async () => {
      anonymized = true;
      return { success: true };
    }
  });

  const result = await service.process(
    new Request("https://example.com/functions/v1/leads-retention?dry_run=1", {
      method: "POST",
      headers: {
        authorization: "Bearer secret-token"
      }
    })
  );

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(result.body.dry_run, true);
  assert.equal(deleted, false);
  assert.equal(anonymized, false);
  assert.deepEqual(result.body.spam_ids_preview, ["spam-1"]);
  assert.deepEqual(result.body.anonymize_ids_preview, ["lead-1", "lead-2"]);
});

test("rejects missing or wrong retention secret", async () => {
  const service = buildService();
  const result = await service.process(
    new Request("https://example.com/functions/v1/leads-retention", {
      method: "POST"
    })
  );

  assert.equal(result.status, 401);
  assert.equal(result.body.message, LEADS_RETENTION_FORBIDDEN_MESSAGE);
});

test("fails safely when the secret is not configured", async () => {
  const service = createLeadsRetentionService({
    config: readRetentionConfig({}),
    listSpamLeadIds: async () => ({ success: true, data: [] }),
    deleteLeadsByIds: async () => ({ success: true }),
    listLeadsToAnonymize: async () => ({ success: true, data: [] }),
    anonymizeLeadsByIds: async () => ({ success: true }),
    logger: { error() {} }
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 500);
  assert.equal(result.body.message, LEADS_RETENTION_RETRY_MESSAGE);
});

test("returns server error when anonymization lookup fails", async () => {
  const service = buildService({
    listLeadsToAnonymize: async () => ({ success: false, error: "db failed" })
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 500);
  assert.equal(result.body.message, LEADS_RETENTION_RETRY_MESSAGE);
});
