export const PUBLIC_REVIEWS_RETRY_MESSAGE =
  "No hemos podido cargar las reseñas ahora mismo.";

const jsonHeaders = {
  "Content-Type": "application/json"
};

const jsonResponse = (status, body) => ({
  status,
  headers: jsonHeaders,
  body
});

const roundToSingleDecimal = (value) => Math.round(value * 10) / 10;

export const createPublicReviewsService = ({
  listSources,
  listFeaturedReviews,
  logger = console
}) => ({
  async process(request) {
    if (request.method !== "GET") {
      return jsonResponse(405, {
        success: false,
        message: PUBLIC_REVIEWS_RETRY_MESSAGE
      });
    }

    const [sourcesResult, reviewsResult] = await Promise.all([
      listSources(),
      listFeaturedReviews()
    ]);

    if (!sourcesResult.success) {
      logger.error("public reviews sources failed", sourcesResult.error);
      return jsonResponse(500, {
        success: false,
        message: PUBLIC_REVIEWS_RETRY_MESSAGE
      });
    }

    if (!reviewsResult.success) {
      logger.error("public reviews list failed", reviewsResult.error);
      return jsonResponse(500, {
        success: false,
        message: PUBLIC_REVIEWS_RETRY_MESSAGE
      });
    }

    const sources = Array.isArray(sourcesResult.data) ? sourcesResult.data : [];
    const reviews = Array.isArray(reviewsResult.data) ? reviewsResult.data : [];
    const totalReviewCount = sources.reduce(
      (sum, source) => sum + (Number(source.review_count) || 0),
      0
    );
    const weightedRating = sources.reduce((sum, source) => {
      const count = Number(source.review_count) || 0;
      const rating = Number(source.rating_value) || 0;
      return sum + rating * count;
    }, 0);
    const averageRating = totalReviewCount
      ? roundToSingleDecimal(weightedRating / totalReviewCount)
      : null;

    return jsonResponse(200, {
      success: true,
      summary: {
        totalReviewCount,
        averageRating,
        featuredCount: reviews.length
      },
      sources,
      reviews
    });
  }
});
