import test from "node:test";
import assert from "node:assert/strict";

import {
  ACCOUNT_EXPORT_FORBIDDEN_MESSAGE,
  ACCOUNT_EXPORT_RETRY_MESSAGE,
  createAccountExportService
} from "./account-export-handler.mjs";

const buildService = (overrides = {}) =>
  createAccountExportService({
    verifySession: async () => ({
      success: true,
      user: { id: "user-1", email: "alumna@example.com" }
    }),
    fetchExportData: async () => ({
      success: true,
      data: {
        account: {
          user_id: "user-1",
          email: "alumna@example.com"
        },
        profile: { full_name: "María" },
        roles: [{ role: "student" }],
        progress: [],
        attempts: [],
        contact_leads: []
      }
    }),
    logger: { error() {} },
    ...overrides
  });

const buildRequest = (headers = {}) =>
  new Request("https://example.com/functions/v1/account-export", {
    method: "GET",
    headers: {
      authorization: "Bearer valid-token",
      ...headers
    }
  });

test("exports the authenticated user's data", async () => {
  let received = null;
  const service = buildService({
    fetchExportData: async (payload) => {
      received = payload;
      return {
        success: true,
        data: {
          profile: { full_name: "María" },
          roles: [{ role: "student" }],
          progress: [{ nivel: "A1" }],
          attempts: [{ id: "attempt-1" }],
          contact_leads: [{ id: "lead-1" }]
        }
      };
    }
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.deepEqual(received, {
    userId: "user-1",
    email: "alumna@example.com"
  });
  assert.equal(result.body.export.profile.full_name, "María");
});

test("rejects requests without bearer token", async () => {
  const service = buildService();
  const result = await service.process(
    new Request("https://example.com/functions/v1/account-export", {
      method: "GET"
    })
  );

  assert.equal(result.status, 401);
  assert.equal(result.body.message, ACCOUNT_EXPORT_FORBIDDEN_MESSAGE);
});

test("rejects invalid sessions", async () => {
  const service = buildService({
    verifySession: async () => ({ success: false })
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 403);
  assert.equal(result.body.message, ACCOUNT_EXPORT_FORBIDDEN_MESSAGE);
});

test("returns server error when export query fails", async () => {
  const service = buildService({
    fetchExportData: async () => ({ success: false, error: "query failed" })
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 500);
  assert.equal(result.body.message, ACCOUNT_EXPORT_RETRY_MESSAGE);
});
