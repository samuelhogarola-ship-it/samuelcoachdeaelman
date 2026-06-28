import test from "node:test";
import assert from "node:assert/strict";

import {
  ADMIN_LEADS_FORBIDDEN_MESSAGE,
  ADMIN_LEADS_RETRY_MESSAGE,
  createAdminLeadsService
} from "./admin-handler.mjs";

const buildService = (overrides = {}) =>
  createAdminLeadsService({
    verifyAdminAccess: async () => ({
      success: true,
      user: { email: "admin@example.com" }
    }),
    listLeads: async () => ({
      success: true,
      data: [{ id: "lead-1", status: "new", name: "Maria" }]
    }),
    updateLeadStatus: async ({ id, status }) => ({
      success: true,
      data: { id, status }
    }),
    logger: { error() {} },
    ...overrides
  });

const buildRequest = (url, options = {}) =>
  new Request(url, {
    headers: {
      authorization: "Bearer valid-token",
      ...(options.headers || {})
    },
    ...options
  });

test("lists leads for an allowed admin", async () => {
  let receivedFilters = null;
  const service = buildService({
    listLeads: async (filters) => {
      receivedFilters = filters;
      return {
        success: true,
        data: [{ id: "lead-1", status: "new", name: "Maria" }]
      };
    }
  });

  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-leads?status=new&limit=25")
  );

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.deepEqual(receivedFilters, { status: "new", limit: 25 });
});

test("rejects requests without bearer token", async () => {
  const service = buildService();
  const result = await service.process(
    new Request("https://example.com/functions/v1/admin-leads")
  );

  assert.equal(result.status, 401);
  assert.equal(result.body.message, ADMIN_LEADS_FORBIDDEN_MESSAGE);
});

test("rejects requests from non-admin users", async () => {
  const service = buildService({
    verifyAdminAccess: async () => ({ success: false })
  });

  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-leads")
  );

  assert.equal(result.status, 403);
  assert.equal(result.body.message, ADMIN_LEADS_FORBIDDEN_MESSAGE);
});

test("updates lead status for an allowed admin", async () => {
  let updatedPayload = null;
  const service = buildService({
    updateLeadStatus: async (payload) => {
      updatedPayload = payload;
      return {
        success: true,
        data: { id: payload.id, status: payload.status }
      };
    }
  });

  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-leads", {
      method: "PATCH",
      body: JSON.stringify({
        id: "lead-42",
        status: "answered"
      })
    })
  );

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.deepEqual(updatedPayload, {
    id: "lead-42",
    status: "answered"
  });
});

test("rejects invalid status updates", async () => {
  const service = buildService();
  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-leads", {
      method: "PATCH",
      body: JSON.stringify({
        id: "lead-42",
        status: "closed"
      })
    })
  );

  assert.equal(result.status, 400);
  assert.equal(result.body.message, ADMIN_LEADS_RETRY_MESSAGE);
});
