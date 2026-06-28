export const LEADS_RETENTION_RETRY_MESSAGE =
  "No hemos podido procesar la retención de leads ahora mismo.";
export const LEADS_RETENTION_FORBIDDEN_MESSAGE =
  "No autorizado para ejecutar la retención.";

const jsonHeaders = {
  "Content-Type": "application/json"
};

const jsonResponse = (status, body) => ({
  status,
  headers: jsonHeaders,
  body
});

const parseBooleanFlag = (value) => {
  const normalized = String(value || "").trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes";
};

const parsePositiveInt = (value, fallback) => {
  const parsed = Number.parseInt(String(value || ""), 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return parsed;
};

export const readRetentionConfig = (env = {}) => ({
  retentionKey: String(env.RETENTION_JOB_SECRET || "").trim(),
  spamRetentionDays: parsePositiveInt(env.LEADS_SPAM_RETENTION_DAYS, 30),
  piiRetentionDays: parsePositiveInt(env.LEADS_PII_RETENTION_DAYS, 365),
  batchSize: Math.min(parsePositiveInt(env.LEADS_RETENTION_BATCH_SIZE, 500), 1000)
});

export const extractRetentionToken = (headers) => {
  const requestHeaders = new Headers(headers || {});
  const bearer = requestHeaders.get("authorization") || "";
  const bearerMatch = bearer.match(/^Bearer\s+(.+)$/i);
  if (bearerMatch?.[1]?.trim()) {
    return bearerMatch[1].trim();
  }

  return (requestHeaders.get("x-retention-key") || "").trim();
};

export const subtractDays = (isoDate, days) => {
  const date = new Date(isoDate);
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString();
};

export const createLeadsRetentionService = ({
  config,
  listSpamLeadIds,
  deleteLeadsByIds,
  listLeadsToAnonymize,
  anonymizeLeadsByIds,
  now = () => new Date().toISOString(),
  logger = console
}) => ({
  async process(request) {
    if (request.method !== "POST") {
      return jsonResponse(405, {
        success: false,
        message: LEADS_RETENTION_RETRY_MESSAGE
      });
    }

    if (!config.retentionKey) {
      logger.error("leads retention missing RETENTION_JOB_SECRET");
      return jsonResponse(500, {
        success: false,
        message: LEADS_RETENTION_RETRY_MESSAGE
      });
    }

    const receivedToken = extractRetentionToken(request.headers);
    if (!receivedToken || receivedToken !== config.retentionKey) {
      return jsonResponse(401, {
        success: false,
        message: LEADS_RETENTION_FORBIDDEN_MESSAGE
      });
    }

    const processedAt = now();
    const url = new URL(request.url);
    const dryRun = parseBooleanFlag(url.searchParams.get("dry_run"));
    const spamCutoff = subtractDays(processedAt, config.spamRetentionDays);
    const piiCutoff = subtractDays(processedAt, config.piiRetentionDays);

    const staleSpamResult = await listSpamLeadIds({
      cutoffIso: spamCutoff,
      limit: config.batchSize
    });
    if (!staleSpamResult.success) {
      logger.error("leads retention stale spam lookup failed", staleSpamResult.error);
      return jsonResponse(500, {
        success: false,
        message: LEADS_RETENTION_RETRY_MESSAGE
      });
    }

    const stalePiiResult = await listLeadsToAnonymize({
      cutoffIso: piiCutoff,
      limit: config.batchSize
    });
    if (!stalePiiResult.success) {
      logger.error("leads retention stale pii lookup failed", stalePiiResult.error);
      return jsonResponse(500, {
        success: false,
        message: LEADS_RETENTION_RETRY_MESSAGE
      });
    }

    const spamIds = staleSpamResult.data || [];
    const piiIds = stalePiiResult.data || [];

    if (!dryRun && spamIds.length) {
      const deleteResult = await deleteLeadsByIds({ ids: spamIds });
      if (!deleteResult.success) {
        logger.error("leads retention delete failed", deleteResult.error);
        return jsonResponse(500, {
          success: false,
          message: LEADS_RETENTION_RETRY_MESSAGE
        });
      }
    }

    if (!dryRun && piiIds.length) {
      const anonymizeResult = await anonymizeLeadsByIds({
        ids: piiIds,
        processedAt
      });
      if (!anonymizeResult.success) {
        logger.error("leads retention anonymize failed", anonymizeResult.error);
        return jsonResponse(500, {
          success: false,
          message: LEADS_RETENTION_RETRY_MESSAGE
        });
      }
    }

    return jsonResponse(200, {
      success: true,
      dry_run: dryRun,
      processed_at: processedAt,
      spam_cutoff: spamCutoff,
      pii_cutoff: piiCutoff,
      deleted_spam_count: spamIds.length,
      anonymized_lead_count: piiIds.length,
      spam_ids_preview: dryRun ? spamIds : undefined,
      anonymize_ids_preview: dryRun ? piiIds : undefined
    });
  }
});
