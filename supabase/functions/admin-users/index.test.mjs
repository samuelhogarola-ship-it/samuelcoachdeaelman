import test from "node:test";
import assert from "node:assert/strict";

import {
  ADMIN_USERS_FORBIDDEN_MESSAGE,
  ADMIN_USERS_RETRY_MESSAGE,
  createAdminUsersService
} from "./admin-users-handler.mjs";

const buildService = (overrides = {}) =>
  createAdminUsersService({
    verifyAdminAccess: async () => ({
      success: true,
      user: { email: "admin@example.com", id: "admin-1" }
    }),
    listUsers: async () => ({
      success: true,
      data: [{ user_id: "user-1", is_admin: false, email: "alumna@example.com" }]
    }),
    setAdminRole: async ({ userId, isAdmin }) => ({
      success: true,
      data: { user_id: userId, is_admin: isAdmin }
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

test("lists users for an allowed admin", async () => {
  let receivedFilters = null;
  const service = buildService({
    listUsers: async (filters) => {
      receivedFilters = filters;
      return {
        success: true,
        data: [{ user_id: "user-1", is_admin: false, email: "alumna@example.com" }]
      };
    }
  });

  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-users?limit=25")
  );

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.deepEqual(receivedFilters, { limit: 25 });
});

test("rejects requests without bearer token", async () => {
  const service = buildService();
  const result = await service.process(
    new Request("https://example.com/functions/v1/admin-users")
  );

  assert.equal(result.status, 401);
  assert.equal(result.body.message, ADMIN_USERS_FORBIDDEN_MESSAGE);
});

test("rejects requests from non-admin users", async () => {
  const service = buildService({
    verifyAdminAccess: async () => ({ success: false })
  });

  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-users")
  );

  assert.equal(result.status, 403);
  assert.equal(result.body.message, ADMIN_USERS_FORBIDDEN_MESSAGE);
});

test("updates admin role for another user", async () => {
  let updatedPayload = null;
  const service = buildService({
    setAdminRole: async (payload) => {
      updatedPayload = payload;
      return {
        success: true,
        data: payload
      };
    }
  });

  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-users", {
      method: "PATCH",
      body: JSON.stringify({
        user_id: "user-42",
        is_admin: true
      })
    })
  );

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.deepEqual(updatedPayload, {
    userId: "user-42",
    isAdmin: true
  });
});

test("blocks self-revocation of admin role", async () => {
  const service = buildService();
  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-users", {
      method: "PATCH",
      body: JSON.stringify({
        user_id: "admin-1",
        is_admin: false
      })
    })
  );

  assert.equal(result.status, 400);
  assert.match(result.body.message, /No puedes retirarte el rol admin/i);
});

test("rejects malformed role updates", async () => {
  const service = buildService();
  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-users", {
      method: "PATCH",
      body: JSON.stringify({
        user_id: "user-42"
      })
    })
  );

  assert.equal(result.status, 400);
  assert.equal(result.body.message, ADMIN_USERS_RETRY_MESSAGE);
});
