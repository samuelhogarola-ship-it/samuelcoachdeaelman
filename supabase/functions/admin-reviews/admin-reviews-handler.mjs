export const ADMIN_REVIEWS_RETRY_MESSAGE =
  "No hemos podido cargar las reseñas ahora mismo. Vuelve a intentarlo en un momento.";
export const ADMIN_REVIEWS_FORBIDDEN_MESSAGE =
  "No tienes permisos para acceder a esta zona.";

const ALLOWED_STATUSES = new Set(["draft", "published", "archived"]);

const jsonHeaders = {
  "Content-Type": "application/json"
};

const jsonResponse = (status, body) => ({
  status,
  headers: jsonHeaders,
  body
});

export const extractBearerToken = (headers) => {
  const authorization = new Headers(headers || {}).get("authorization") || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
};

const normalizeStatusFilter = (value) => {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized || normalized === "all") return null;
  return ALLOWED_STATUSES.has(normalized) ? normalized : "__invalid__";
};

const normalizeLimit = (value) => {
  const parsed = Number.parseInt(String(value || ""), 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return 50;
  return Math.min(parsed, 100);
};

const validateStatusUpdate = (value) => {
  const normalized = String(value || "").trim().toLowerCase();
  return ALLOWED_STATUSES.has(normalized) ? normalized : null;
};

export const createAdminReviewsService = ({
  verifyAdminAccess,
  listReviewSources,
  listReviews,
  updateReview,
  logger = console
}) => ({
  async process(request) {
    const token = extractBearerToken(request.headers);

    if (!token) {
      return jsonResponse(401, {
        success: false,
        message: ADMIN_REVIEWS_FORBIDDEN_MESSAGE
      });
    }

    const adminCheck = await verifyAdminAccess(token);
    if (!adminCheck.success) {
      return jsonResponse(403, {
        success: false,
        message: ADMIN_REVIEWS_FORBIDDEN_MESSAGE
      });
    }

    if (request.method === "GET") {
      const url = new URL(request.url);
      const status = normalizeStatusFilter(url.searchParams.get("status"));
      const limit = normalizeLimit(url.searchParams.get("limit"));

      if (status === "__invalid__") {
        return jsonResponse(400, {
          success: false,
          message: ADMIN_REVIEWS_RETRY_MESSAGE
        });
      }

      const [sourcesResult, reviewsResult] = await Promise.all([
        listReviewSources(),
        listReviews({ status, limit })
      ]);

      if (!sourcesResult.success) {
        logger.error("admin reviews sources failed", sourcesResult.error);
        return jsonResponse(500, {
          success: false,
          message: ADMIN_REVIEWS_RETRY_MESSAGE
        });
      }

      if (!reviewsResult.success) {
        logger.error("admin reviews list failed", reviewsResult.error);
        return jsonResponse(500, {
          success: false,
          message: ADMIN_REVIEWS_RETRY_MESSAGE
        });
      }

      return jsonResponse(200, {
        success: true,
        reviewSources: sourcesResult.data,
        reviews: reviewsResult.data,
        admin: {
          email: adminCheck.user.email || null
        }
      });
    }

    if (request.method === "PATCH") {
      let payload;

      try {
        payload = await request.json();
      } catch {
        return jsonResponse(400, {
          success: false,
          message: ADMIN_REVIEWS_RETRY_MESSAGE
        });
      }

      const reviewId = String(payload?.id || "").trim();
      const status = payload?.status == null ? undefined : validateStatusUpdate(payload.status);
      const isFeatured =
        typeof payload?.is_featured === "boolean" ? payload.is_featured : undefined;

      if (!reviewId || (status === undefined && isFeatured === undefined) || status === null) {
        return jsonResponse(400, {
          success: false,
          message: ADMIN_REVIEWS_RETRY_MESSAGE
        });
      }

      const updateResult = await updateReview({
        id: reviewId,
        status,
        is_featured: isFeatured
      });

      if (!updateResult.success) {
        logger.error("admin review update failed", updateResult.error);
        return jsonResponse(500, {
          success: false,
          message: ADMIN_REVIEWS_RETRY_MESSAGE
        });
      }

      return jsonResponse(200, {
        success: true,
        review: updateResult.data
      });
    }

    return jsonResponse(405, {
      success: false,
      message: ADMIN_REVIEWS_RETRY_MESSAGE
    });
  }
});
