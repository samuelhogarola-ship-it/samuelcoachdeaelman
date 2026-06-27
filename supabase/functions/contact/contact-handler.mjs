export const RISK_THRESHOLD = 70;
export const GENERIC_RETRY_MESSAGE =
  "No hemos podido procesar el formulario. Revíselo e inténtelo de nuevo en un momento.";
export const GENERIC_RISK_MESSAGE =
  "Hemos detectado datos inconsistentes. Revise el formulario e inténtelo de nuevo.";
export const SUCCESS_MESSAGE =
  "Mensaje enviado. Te responderé lo antes posible.";

const TEMPORARY_EMAIL_DOMAINS = new Set([
  "10minutemail.com",
  "10minutemail.net",
  "dispostable.com",
  "emailondeck.com",
  "fakeinbox.com",
  "guerrillamail.com",
  "maildrop.cc",
  "mailinator.com",
  "tempmail.com",
  "temp-mail.org",
  "yopmail.com"
]);

const stringValue = (value) => {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
};

const normalizeText = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

const digitsOnly = (value) => String(value || "").replace(/\D/g, "");

const isRepeatedDigits = (value) => /^(\d)\1+$/.test(value);

const isSequentialDigits = (value) => {
  if (value.length < 6) return false;
  const ascending = "01234567890123456789";
  const descending = "98765432109876543210";
  return ascending.includes(value) || descending.includes(value);
};

export const isPhoneClearlyInvalid = (value) => {
  const digits = digitsOnly(value);
  if (!digits) return false;
  if (digits.length < 8 || digits.length > 15) return true;
  if (isRepeatedDigits(digits) || isSequentialDigits(digits)) return true;
  if (new Set(digits).size <= 2 && digits.length >= 10) return true;
  return false;
};

export const isEmailGeneratedPattern = (email) => {
  const [localPart = ""] = String(email || "").split("@");
  const normalizedLocal = normalizeText(localPart);
  const digitsCount = (normalizedLocal.match(/\d/g) || []).length;
  const longDigitRun = /\d{5,}/.test(normalizedLocal);
  const noisyPattern =
    /[a-z]{3,}\d{5,}$/.test(normalizedLocal) ||
    /^[a-z0-9]{14,}$/.test(normalizedLocal);

  return (digitsCount >= 7 && noisyPattern) || (longDigitRun && normalizedLocal.length >= 12);
};

export const isNameSuspicious = (name) => {
  const trimmed = String(name || "").trim();
  const normalized = normalizeText(trimmed).replace(/[^a-z]/g, "");
  const allowedCharacters = /^[\p{L}\p{M}\s'’-]+$/u;

  if (trimmed.length < 2) return true;
  if (/^\d+$/.test(trimmed)) return true;
  if (!/[\p{L}]/u.test(trimmed)) return true;
  if (!allowedCharacters.test(trimmed)) return true;
  if (/\d{3,}/.test(trimmed)) return true;
  if (normalized.length >= 8 && !/[aeiou]/.test(normalized)) return true;
  if (/(.)\1{4,}/u.test(trimmed)) return true;

  return false;
};

const buildMessage = (payload) => {
  const parts = [
    payload.service_interest && `Service interest: ${payload.service_interest}`,
    payload.hours_per_week && `Hours per week: ${payload.hours_per_week}`,
    payload.preferred_schedule && `Preferred schedule: ${payload.preferred_schedule}`,
    payload.message,
    payload.situation
  ].filter(Boolean);

  return parts.length ? parts.join("\n") : null;
};

export const normalizePayload = (rawPayload = {}) => {
  const normalizedPhone = stringValue(rawPayload.phone)?.replace(/[\s\-().]/g, "") || null;

  return {
    name: stringValue(rawPayload.name),
    email: stringValue(rawPayload.email)?.toLowerCase() || null,
    phone: normalizedPhone,
    age_band: stringValue(rawPayload.age_band),
    goal: stringValue(rawPayload.goal),
    current_level: stringValue(rawPayload.current_level),
    availability:
      stringValue(rawPayload.availability) ||
      stringValue(rawPayload.preferred_schedule) ||
      stringValue(rawPayload.hours_per_week),
    message: stringValue(rawPayload.message),
    company: stringValue(rawPayload.company),
    service_interest: stringValue(rawPayload.service_interest),
    hours_per_week: stringValue(rawPayload.hours_per_week),
    preferred_schedule: stringValue(rawPayload.preferred_schedule),
    situation: stringValue(rawPayload.situation),
    turnstileToken:
      stringValue(rawPayload.turnstileToken) ||
      stringValue(rawPayload["cf-turnstile-response"]),
    locale: stringValue(rawPayload.locale) || "es",
    page_path: stringValue(rawPayload.page_path),
    user_message: buildMessage(rawPayload)
  };
};

export const validateBasicPayload = (payload) => {
  const errors = [];
  const hasLocalizedVariant = Boolean(
    payload.service_interest || payload.hours_per_week || payload.situation || payload.preferred_schedule
  );
  const hasRootVariant = Boolean(payload.age_band || payload.availability);

  if (!payload.name) errors.push("name");
  if (!payload.email) errors.push("email");
  if (!payload.goal) errors.push("goal");
  if (!payload.current_level) errors.push("current_level");
  if (!payload.turnstileToken) errors.push("turnstileToken");

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push("email_format");
  }

  if (hasRootVariant) {
    if (!payload.age_band) errors.push("age_band");
    if (!payload.availability) errors.push("availability");
  }

  if (hasLocalizedVariant) {
    if (!payload.service_interest) errors.push("service_interest");
    if (!payload.hours_per_week) errors.push("hours_per_week");
    if (!payload.situation) errors.push("situation");
  }

  return errors;
};

export const calculateRiskScore = (payload) => {
  let riskScore = 0;
  const goalValue = normalizeText(payload.goal);
  const currentLevelValue = normalizeText(payload.current_level);

  if (payload.company) {
    riskScore += 100;
  }

  if (payload.name && isNameSuspicious(payload.name)) {
    riskScore += 20;
  }

  if (payload.email) {
    const emailDomain = payload.email.split("@")[1] || "";
    if (TEMPORARY_EMAIL_DOMAINS.has(emailDomain)) {
      riskScore += 35;
    } else if (isEmailGeneratedPattern(payload.email)) {
      riskScore += 20;
    }
  }

  if (payload.phone && isPhoneClearlyInvalid(payload.phone)) {
    riskScore += 40;
  }

  const suspiciousInfantGoal =
    payload.age_band === "6–11" &&
    /(instituto|universidad|oposiciones|trabajo|vivir|alemania)/.test(goalValue);
  const suspiciousAdultSchoolGoal =
    payload.age_band === "18+" && /(colegio|instituto)/.test(goalValue);
  const suspiciousZeroLevelWorkGoal =
    currentLevelValue === "desde cero" && /(trabajo|oposiciones)/.test(goalValue);

  if (suspiciousInfantGoal || suspiciousAdultSchoolGoal || suspiciousZeroLevelWorkGoal) {
    riskScore += 30;
  }

  return riskScore;
};

export const extractClientIp = (headers) => {
  const requestHeaders = new Headers(headers || {});
  const forwarded = requestHeaders.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || null;
  }

  return (
    requestHeaders.get("cf-connecting-ip") ||
    requestHeaders.get("x-real-ip") ||
    requestHeaders.get("x-client-ip")
  );
};

export const sha256Hex = async (value) => {
  const data = new TextEncoder().encode(String(value || ""));
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

export const buildLeadRecord = ({
  payload,
  riskScore,
  ipHash,
  userAgent,
  turnstileSuccess,
  status,
  createdAt
}) => ({
  created_at: createdAt,
  name: payload.name,
  email: payload.email,
  phone: payload.phone,
  age_band: payload.age_band,
  goal: payload.goal,
  current_level: payload.current_level,
  availability: payload.availability,
  message: payload.user_message,
  risk_score: riskScore,
  ip_hash: ipHash,
  user_agent: userAgent,
  turnstile_success: turnstileSuccess,
  status
});

export const buildLeadEmailText = (lead) =>
  [
    "Nuevo lead de contacto",
    `Fecha: ${lead.created_at}`,
    `Nombre: ${lead.name}`,
    `Email: ${lead.email}`,
    `Teléfono: ${lead.phone || "-"}`,
    `Edad: ${lead.age_band || "-"}`,
    `Objetivo: ${lead.goal || "-"}`,
    `Nivel actual: ${lead.current_level || "-"}`,
    `Disponibilidad: ${lead.availability || "-"}`,
    `Mensaje: ${lead.message || "-"}`,
    `Risk score: ${lead.risk_score}`,
    `Status: ${lead.status}`,
    `Turnstile OK: ${lead.turnstile_success ? "sí" : "no"}`,
    `IP hash: ${lead.ip_hash || "-"}`,
    `User-Agent: ${lead.user_agent || "-"}`
  ].join("\n");

export const createContactService = ({
  verifyTurnstile,
  insertLead,
  sendLeadEmail,
  hashIp = sha256Hex,
  now = () => new Date().toISOString(),
  logger = console
}) => ({
  async process({ payload: rawPayload, headers }) {
    const payload = normalizePayload(rawPayload);
    const basicErrors = validateBasicPayload(payload);

    if (basicErrors.length) {
      return {
        status: 400,
        body: {
          success: false,
          messageKey: "retry",
          message: GENERIC_RETRY_MESSAGE
        }
      };
    }

    const clientIp = extractClientIp(headers);
    const userAgent = new Headers(headers || {}).get("user-agent");
    const turnstileResult = await verifyTurnstile(payload.turnstileToken, clientIp);

    if (!turnstileResult.success) {
      return {
        status: 400,
        body: {
          success: false,
          messageKey: "retry",
          message: GENERIC_RETRY_MESSAGE
        }
      };
    }

    const riskScore = calculateRiskScore(payload);
    const status = riskScore >= RISK_THRESHOLD ? "spam" : "new";
    const leadRecord = buildLeadRecord({
      payload,
      riskScore,
      ipHash: clientIp ? await hashIp(clientIp) : null,
      userAgent,
      turnstileSuccess: true,
      status,
      createdAt: now()
    });

    const insertResult = await insertLead(leadRecord);
    if (!insertResult.success) {
      logger.error("contact lead insert failed", insertResult.error);
      return {
        status: 500,
        body: {
          success: false,
          messageKey: "retry",
          message: GENERIC_RETRY_MESSAGE
        }
      };
    }

    if (status === "spam") {
      return {
        status: 422,
        body: {
          success: false,
          messageKey: "risk",
          message: GENERIC_RISK_MESSAGE
        }
      };
    }

    const emailResult = await sendLeadEmail({
      lead: leadRecord,
      leadId: insertResult.id || null
    });

    if (!emailResult.success) {
      logger.error("contact lead email failed", emailResult.error);
    }

    return {
      status: 200,
      body: {
        success: true,
        messageKey: "success",
        message: SUCCESS_MESSAGE,
        email_sent: emailResult.success
      }
    };
  }
});
