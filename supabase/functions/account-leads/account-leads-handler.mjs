export const ACCOUNT_LEADS_RETRY_MESSAGE =
  "No hemos podido cargar tus solicitudes ahora mismo. Inténtalo de nuevo en unos minutos.";
export const ACCOUNT_LEADS_FORBIDDEN_MESSAGE =
  "Necesitas iniciar sesión para continuar.";

const jsonHeaders = {
  "Content-Type": "application/json"
};

const jsonResponse = (status, body, headers = {}) => ({
  status,
  headers: {
    ...jsonHeaders,
    ...headers
  },
  body
});

export const extractBearerToken = (headers) => {
  const authorization = new Headers(headers || {}).get("authorization") || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
};

export const createAccountLeadsService = ({
  verifySession,
  listOwnLeads,
  logger = console
}) => ({
  async process(request) {
    if (request.method !== "GET") {
      return jsonResponse(405, {
        success: false,
        message: ACCOUNT_LEADS_RETRY_MESSAGE
      });
    }

    const token = extractBearerToken(request.headers);
    if (!token) {
      return jsonResponse(401, {
        success: false,
        message: ACCOUNT_LEADS_FORBIDDEN_MESSAGE
      });
    }

    const sessionCheck = await verifySession(token);
    if (!sessionCheck.success || !sessionCheck.user?.email) {
      return jsonResponse(403, {
        success: false,
        message: ACCOUNT_LEADS_FORBIDDEN_MESSAGE
      });
    }

    const leadsResult = await listOwnLeads({
      email: sessionCheck.user.email
    });

    if (!leadsResult.success) {
      logger.error("account leads lookup failed", leadsResult.error);
      return jsonResponse(500, {
        success: false,
        message: ACCOUNT_LEADS_RETRY_MESSAGE
      });
    }

    return jsonResponse(200, {
      success: true,
      leads: leadsResult.data || []
    });
  }
});
