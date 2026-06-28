import test from "node:test";
import assert from "node:assert/strict";

import {
  ADMIN_REVIEWS_FORBIDDEN_MESSAGE,
  ADMIN_REVIEWS_RETRY_MESSAGE,
  createAdminReviewsService
} from "./admin-reviews-handler.mjs";

const buildService = (overrides = {}) =>
  createAdminReviewsService({
    verifyAdminAccess: async () => ({
      success: true,
      user: { email: "admin@example.com" }
    }),
    listReviewSources: async () => ({
      success: true,
      data: [{ source: "google", review_count: 124 }]
    }),
    listReviews: async () => ({
      success: true,
      data: [{ id: "review-1", status: "published", reviewer_name: "Ana" }]
    }),
    updateReview: async ({ id, status, is_featured }) => ({
      success: true,
      data: { id, status, is_featured }
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

test("lists reviews and source stats for an allowed admin", async () => {
  let receivedFilters = null;
  const service = buildService({
    listReviews: async (filters) => {
      receivedFilters = filters;
      return {
        success: true,
        data: [{ id: "review-1", status: "published", reviewer_name: "Ana" }]
      };
    }
  });

  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-reviews?status=published&limit=25")
  );

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.deepEqual(receivedFilters, { status: "published", limit: 25 });
  assert.equal(result.body.reviewSources.length, 1);
});

test("rejects requests without bearer token", async () => {
  const service = buildService();
  const result = await service.process(
    new Request("https://example.com/functions/v1/admin-reviews")
  );

  assert.equal(result.status, 401);
  assert.equal(result.body.message, ADMIN_REVIEWS_FORBIDDEN_MESSAGE);
});

test("rejects requests from non-admin users", async () => {
  const service = buildService({
    verifyAdminAccess: async () => ({ success: false })
  });

  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-reviews")
  );

  assert.equal(result.status, 403);
  assert.equal(result.body.message, ADMIN_REVIEWS_FORBIDDEN_MESSAGE);
});

test("updates review status and featured flag", async () => {
  let updatedPayload = null;
  const service = buildService({
    updateReview: async (payload) => {
      updatedPayload = payload;
      return {
        success: true,
        data: payload
      };
    }
  });

  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-reviews", {
      method: "PATCH",
      body: JSON.stringify({
        id: "review-42",
        status: "archived",
        is_featured: false
      })
    })
  );

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.deepEqual(updatedPayload, {
    id: "review-42",
    status: "archived",
    is_featured: false
  });
});

test("rejects invalid status updates", async () => {
  const service = buildService();
  const result = await service.process(
    buildRequest("https://example.com/functions/v1/admin-reviews", {
      method: "PATCH",
      body: JSON.stringify({
        id: "review-42",
        status: "closed"
      })
    })
  );

  assert.equal(result.status, 400);
  assert.equal(result.body.message, ADMIN_REVIEWS_RETRY_MESSAGE);
});
