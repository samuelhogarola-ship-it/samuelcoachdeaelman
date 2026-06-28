export const ACCOUNT_EXPORT_RETRY_MESSAGE =
  "No hemos podido preparar tu exportación ahora mismo. Inténtalo de nuevo en unos minutos.";
export const ACCOUNT_EXPORT_FORBIDDEN_MESSAGE =
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

export const createAccountExportService = ({
  verifySession,
  fetchExportData,
  logger = console
}) => ({
  async process(request) {
    if (request.method !== "GET") {
      return jsonResponse(405, {
        success: false,
        message: ACCOUNT_EXPORT_RETRY_MESSAGE
      });
    }

    const token = extractBearerToken(request.headers);
    if (!token) {
      return jsonResponse(401, {
        success: false,
        message: ACCOUNT_EXPORT_FORBIDDEN_MESSAGE
      });
    }

    const sessionCheck = await verifySession(token);
    if (!sessionCheck.success || !sessionCheck.user?.id) {
      return jsonResponse(403, {
        success: false,
        message: ACCOUNT_EXPORT_FORBIDDEN_MESSAGE
      });
    }

    const exportResult = await fetchExportData({
      userId: sessionCheck.user.id,
      email: sessionCheck.user.email || null
    });

    if (!exportResult.success) {
      logger.error("account export failed", exportResult.error);
      return jsonResponse(500, {
        success: false,
        message: ACCOUNT_EXPORT_RETRY_MESSAGE
      });
    }

    return jsonResponse(200, {
      success: true,
      export: exportResult.data
    });
  }
});
