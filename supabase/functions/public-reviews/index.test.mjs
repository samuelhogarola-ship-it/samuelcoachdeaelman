import test from "node:test";
import assert from "node:assert/strict";

import {
  PUBLIC_REVIEWS_RETRY_MESSAGE,
  createPublicReviewsService
} from "./public-reviews-handler.mjs";

const buildService = (overrides = {}) =>
  createPublicReviewsService({
    listSources: async () => ({
      success: true,
      data: [
        {
          source: "google",
          label: "Google",
          profile_url: "https://example.com/google",
          rating_value: 5,
          review_count: 3
        },
        {
          source: "superprof",
          label: "Superprof",
          profile_url: "https://example.com/superprof",
          rating_value: 4.5,
          review_count: 2
        }
      ]
    }),
    listFeaturedReviews: async () => ({
      success: true,
      data: [{ id: "review-1", reviewer_name: "Ana" }]
    }),
    logger: { error() {} },
    ...overrides
  });

test("returns public review summary and featured reviews", async () => {
  const service = buildService();
  const result = await service.process(
    new Request("https://example.com/functions/v1/public-reviews")
  );

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(result.body.summary.totalReviewCount, 5);
  assert.equal(result.body.summary.averageRating, 4.8);
  assert.equal(result.body.summary.featuredCount, 1);
  assert.equal(result.body.sources.length, 2);
  assert.equal(result.body.reviews.length, 1);
});

test("rejects non-GET methods", async () => {
  const service = buildService();
  const result = await service.process(
    new Request("https://example.com/functions/v1/public-reviews", {
      method: "POST"
    })
  );

  assert.equal(result.status, 405);
  assert.equal(result.body.message, PUBLIC_REVIEWS_RETRY_MESSAGE);
});

test("returns retry message when sources fail", async () => {
  const service = buildService({
    listSources: async () => ({ success: false, error: new Error("db failed") })
  });
  const result = await service.process(
    new Request("https://example.com/functions/v1/public-reviews")
  );

  assert.equal(result.status, 500);
  assert.equal(result.body.message, PUBLIC_REVIEWS_RETRY_MESSAGE);
});
