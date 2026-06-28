export const ADMIN_LEADS_RETRY_MESSAGE =
  "No hemos podido cargar los leads ahora mismo. Vuelve a intentarlo en un momento.";
export const ADMIN_LEADS_FORBIDDEN_MESSAGE =
  "No tienes permisos para acceder a esta zona.";

const ALLOWED_STATUSES = new Set(["new", "reviewed", "answered", "spam"]);

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

export const normalizeStatusFilter = (value) => {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized || normalized === "all") return null;
  return ALLOWED_STATUSES.has(normalized) ? normalized : "__invalid__";
};

export const normalizeLimit = (value) => {
  const parsed = Number.parseInt(String(value || ""), 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return 50;
  return Math.min(parsed, 100);
};

export const validateStatusUpdate = (value) => {
  const normalized = String(value || "").trim().toLowerCase();
  return ALLOWED_STATUSES.has(normalized) ? normalized : null;
};

export const createAdminLeadsService = ({
  verifyAdminAccess,
  listLeads,
  updateLeadStatus,
  logger = console
}) => ({
  async process(request) {
    const token = extractBearerToken(request.headers);

    if (!token) {
      return jsonResponse(401, {
        success: false,
        message: ADMIN_LEADS_FORBIDDEN_MESSAGE
      });
    }

    const adminCheck = await verifyAdminAccess(token);
    if (!adminCheck.success) {
      return jsonResponse(403, {
        success: false,
        message: ADMIN_LEADS_FORBIDDEN_MESSAGE
      });
    }

    if (request.method === "GET") {
      const url = new URL(request.url);
      const status = normalizeStatusFilter(url.searchParams.get("status"));
      const limit = normalizeLimit(url.searchParams.get("limit"));

      if (status === "__invalid__") {
        return jsonResponse(400, {
          success: false,
          message: ADMIN_LEADS_RETRY_MESSAGE
        });
      }

      const leadsResult = await listLeads({ status, limit });
      if (!leadsResult.success) {
        logger.error("admin leads list failed", leadsResult.error);
        return jsonResponse(500, {
          success: false,
          message: ADMIN_LEADS_RETRY_MESSAGE
        });
      }

      return jsonResponse(200, {
        success: true,
        leads: leadsResult.data,
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
          message: ADMIN_LEADS_RETRY_MESSAGE
        });
      }

      const leadId = String(payload?.id || "").trim();
      const status = validateStatusUpdate(payload?.status);

      if (!leadId || !status) {
        return jsonResponse(400, {
          success: false,
          message: ADMIN_LEADS_RETRY_MESSAGE
        });
      }

      const updateResult = await updateLeadStatus({
        id: leadId,
        status
      });

      if (!updateResult.success) {
        logger.error("admin lead update failed", updateResult.error);
        return jsonResponse(500, {
          success: false,
          message: ADMIN_LEADS_RETRY_MESSAGE
        });
      }

      return jsonResponse(200, {
        success: true,
        lead: updateResult.data
      });
    }

    return jsonResponse(405, {
      success: false,
      message: ADMIN_LEADS_RETRY_MESSAGE
    });
  }
});
