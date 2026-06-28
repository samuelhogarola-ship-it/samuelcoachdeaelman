import test from "node:test";
import assert from "node:assert/strict";

import {
  ACCOUNT_LEADS_FORBIDDEN_MESSAGE,
  ACCOUNT_LEADS_RETRY_MESSAGE,
  createAccountLeadsService
} from "./account-leads-handler.mjs";

const buildService = (overrides = {}) =>
  createAccountLeadsService({
    verifySession: async () => ({
      success: true,
      user: { id: "user-1", email: "alumna@example.com" }
    }),
    listOwnLeads: async () => ({
      success: true,
      data: [{ id: "lead-1", status: "reviewed" }]
    }),
    logger: { error() {} },
    ...overrides
  });

const buildRequest = (headers = {}) =>
  new Request("https://example.com/functions/v1/account-leads", {
    method: "GET",
    headers: {
      authorization: "Bearer valid-token",
      ...headers
    }
  });

test("lists the authenticated user's own leads", async () => {
  let receivedEmail = null;
  const service = buildService({
    listOwnLeads: async ({ email }) => {
      receivedEmail = email;
      return {
        success: true,
        data: [{ id: "lead-1", status: "reviewed" }]
      };
    }
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(receivedEmail, "alumna@example.com");
  assert.equal(result.body.leads[0].id, "lead-1");
});

test("rejects requests without bearer token", async () => {
  const service = buildService();
  const result = await service.process(
    new Request("https://example.com/functions/v1/account-leads", {
      method: "GET"
    })
  );

  assert.equal(result.status, 401);
  assert.equal(result.body.message, ACCOUNT_LEADS_FORBIDDEN_MESSAGE);
});

test("rejects invalid sessions", async () => {
  const service = buildService({
    verifySession: async () => ({ success: false })
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 403);
  assert.equal(result.body.message, ACCOUNT_LEADS_FORBIDDEN_MESSAGE);
});

test("returns server error when the leads lookup fails", async () => {
  const service = buildService({
    listOwnLeads: async () => ({ success: false, error: "db failed" })
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 500);
  assert.equal(result.body.message, ACCOUNT_LEADS_RETRY_MESSAGE);
});
