export const ACCOUNT_DELETE_RETRY_MESSAGE =
  "No hemos podido eliminar tu cuenta ahora mismo. Inténtalo de nuevo en unos minutos.";
export const ACCOUNT_DELETE_FORBIDDEN_MESSAGE =
  "Necesitas iniciar sesión para continuar.";
export const ACCOUNT_DELETE_CONFIRMATION_MESSAGE =
  "Escribe ELIMINAR para confirmar la eliminación de la cuenta.";
export const ACCOUNT_DELETE_SUCCESS_MESSAGE =
  "Tu cuenta se ha eliminado correctamente.";
export const ACCOUNT_DELETE_CONFIRMATION_TEXT = "ELIMINAR";

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

const normalizeConfirmation = (value) => String(value || "").trim().toUpperCase();

export const createAccountDeleteService = ({
  verifySession,
  cleanupUserData,
  deleteAuthUser,
  logger = console
}) => ({
  async process(request) {
    if (request.method !== "POST") {
      return jsonResponse(405, {
        success: false,
        message: ACCOUNT_DELETE_RETRY_MESSAGE
      });
    }

    const token = extractBearerToken(request.headers);
    if (!token) {
      return jsonResponse(401, {
        success: false,
        message: ACCOUNT_DELETE_FORBIDDEN_MESSAGE
      });
    }

    const sessionCheck = await verifySession(token);
    if (!sessionCheck.success || !sessionCheck.user?.id) {
      return jsonResponse(403, {
        success: false,
        message: ACCOUNT_DELETE_FORBIDDEN_MESSAGE
      });
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse(400, {
        success: false,
        message: ACCOUNT_DELETE_RETRY_MESSAGE
      });
    }

    if (
      normalizeConfirmation(payload?.confirmation) !== ACCOUNT_DELETE_CONFIRMATION_TEXT
    ) {
      return jsonResponse(400, {
        success: false,
        message: ACCOUNT_DELETE_CONFIRMATION_MESSAGE
      });
    }

    const cleanupResult = await cleanupUserData({
      userId: sessionCheck.user.id,
      email: sessionCheck.user.email || null
    });

    if (!cleanupResult.success) {
      logger.error("account delete cleanup failed", cleanupResult.error);
      return jsonResponse(500, {
        success: false,
        message: ACCOUNT_DELETE_RETRY_MESSAGE
      });
    }

    const deletionResult = await deleteAuthUser({
      userId: sessionCheck.user.id
    });

    if (!deletionResult.success) {
      logger.error("account delete auth removal failed", deletionResult.error);
      return jsonResponse(500, {
        success: false,
        message: ACCOUNT_DELETE_RETRY_MESSAGE
      });
    }

    return jsonResponse(200, {
      success: true,
      message: ACCOUNT_DELETE_SUCCESS_MESSAGE
    });
  }
});
