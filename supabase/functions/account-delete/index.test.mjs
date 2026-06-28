import test from "node:test";
import assert from "node:assert/strict";

import {
  ACCOUNT_DELETE_CONFIRMATION_MESSAGE,
  ACCOUNT_DELETE_FORBIDDEN_MESSAGE,
  ACCOUNT_DELETE_RETRY_MESSAGE,
  ACCOUNT_DELETE_SUCCESS_MESSAGE,
  createAccountDeleteService
} from "./account-delete-handler.mjs";

const buildService = (overrides = {}) =>
  createAccountDeleteService({
    verifySession: async () => ({
      success: true,
      user: { id: "user-1", email: "alumna@example.com" }
    }),
    cleanupUserData: async () => ({ success: true }),
    deleteAuthUser: async () => ({ success: true }),
    logger: { error() {} },
    ...overrides
  });

const buildRequest = (options = {}) =>
  new Request("https://example.com/functions/v1/account-delete", {
    method: "POST",
    headers: {
      authorization: "Bearer valid-token",
      "content-type": "application/json",
      ...(options.headers || {})
    },
    body: JSON.stringify({
      confirmation: "ELIMINAR",
      ...(options.body || {})
    })
  });

test("deletes the authenticated account after explicit confirmation", async () => {
  let cleanedUp = null;
  let deletedUserId = null;

  const service = buildService({
    cleanupUserData: async (payload) => {
      cleanedUp = payload;
      return { success: true };
    },
    deleteAuthUser: async ({ userId }) => {
      deletedUserId = userId;
      return { success: true };
    }
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(result.body.message, ACCOUNT_DELETE_SUCCESS_MESSAGE);
  assert.deepEqual(cleanedUp, {
    userId: "user-1",
    email: "alumna@example.com"
  });
  assert.equal(deletedUserId, "user-1");
});

test("rejects requests without bearer token", async () => {
  const service = buildService();
  const result = await service.process(
    new Request("https://example.com/functions/v1/account-delete", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ confirmation: "ELIMINAR" })
    })
  );

  assert.equal(result.status, 401);
  assert.equal(result.body.message, ACCOUNT_DELETE_FORBIDDEN_MESSAGE);
});

test("rejects invalid sessions", async () => {
  const service = buildService({
    verifySession: async () => ({ success: false })
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 403);
  assert.equal(result.body.message, ACCOUNT_DELETE_FORBIDDEN_MESSAGE);
});

test("requires the explicit confirmation word", async () => {
  const service = buildService();
  const result = await service.process(
    buildRequest({
      body: {
        confirmation: "borrar"
      }
    })
  );

  assert.equal(result.status, 400);
  assert.equal(result.body.message, ACCOUNT_DELETE_CONFIRMATION_MESSAGE);
});

test("returns server error when cleanup fails", async () => {
  let deleted = false;
  const service = buildService({
    cleanupUserData: async () => ({ success: false, error: "cleanup failed" }),
    deleteAuthUser: async () => {
      deleted = true;
      return { success: true };
    }
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 500);
  assert.equal(result.body.message, ACCOUNT_DELETE_RETRY_MESSAGE);
  assert.equal(deleted, false);
});

test("returns server error when auth deletion fails", async () => {
  const service = buildService({
    deleteAuthUser: async () => ({ success: false, error: "delete failed" })
  });

  const result = await service.process(buildRequest());

  assert.equal(result.status, 500);
  assert.equal(result.body.message, ACCOUNT_DELETE_RETRY_MESSAGE);
});
