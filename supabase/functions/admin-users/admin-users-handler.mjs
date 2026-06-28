export const ADMIN_USERS_RETRY_MESSAGE =
  "No hemos podido cargar los usuarios ahora mismo. Vuelve a intentarlo en un momento.";
export const ADMIN_USERS_FORBIDDEN_MESSAGE =
  "No tienes permisos para acceder a esta zona.";

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

const normalizeLimit = (value) => {
  const parsed = Number.parseInt(String(value || ""), 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return 50;
  return Math.min(parsed, 100);
};

export const createAdminUsersService = ({
  verifyAdminAccess,
  listUsers,
  setAdminRole,
  logger = console
}) => ({
  async process(request) {
    const token = extractBearerToken(request.headers);

    if (!token) {
      return jsonResponse(401, {
        success: false,
        message: ADMIN_USERS_FORBIDDEN_MESSAGE
      });
    }

    const adminCheck = await verifyAdminAccess(token);
    if (!adminCheck.success) {
      return jsonResponse(403, {
        success: false,
        message: ADMIN_USERS_FORBIDDEN_MESSAGE
      });
    }

    if (request.method === "GET") {
      const url = new URL(request.url);
      const limit = normalizeLimit(url.searchParams.get("limit"));

      const usersResult = await listUsers({ limit });
      if (!usersResult.success) {
        logger.error("admin users list failed", usersResult.error);
        return jsonResponse(500, {
          success: false,
          message: ADMIN_USERS_RETRY_MESSAGE
        });
      }

      return jsonResponse(200, {
        success: true,
        users: usersResult.data,
        admin: {
          email: adminCheck.user.email || null,
          id: adminCheck.user.id || null
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
          message: ADMIN_USERS_RETRY_MESSAGE
        });
      }

      const userId = String(payload?.user_id || "").trim();
      const isAdmin =
        typeof payload?.is_admin === "boolean" ? payload.is_admin : null;

      if (!userId || isAdmin === null) {
        return jsonResponse(400, {
          success: false,
          message: ADMIN_USERS_RETRY_MESSAGE
        });
      }

      if (!isAdmin && userId === adminCheck.user.id) {
        return jsonResponse(400, {
          success: false,
          message: "No puedes retirarte el rol admin a ti mismo desde este panel."
        });
      }

      const updateResult = await setAdminRole({
        userId,
        isAdmin
      });

      if (!updateResult.success) {
        logger.error("admin user role update failed", updateResult.error);
        return jsonResponse(500, {
          success: false,
          message: ADMIN_USERS_RETRY_MESSAGE
        });
      }

      return jsonResponse(200, {
        success: true,
        user: updateResult.data
      });
    }

    return jsonResponse(405, {
      success: false,
      message: ADMIN_USERS_RETRY_MESSAGE
    });
  }
});
