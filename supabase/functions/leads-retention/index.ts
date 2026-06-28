import {
  LEADS_RETENTION_RETRY_MESSAGE,
  createLeadsRetentionService,
  readRetentionConfig
} from "./leads-retention-handler.mjs";
import { createServiceRoleClient } from "../_shared/admin-auth.mjs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-retention-key",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

const buildResponse = (result: {
  status: number;
  headers?: Record<string, string>;
  body: Record<string, unknown>;
}) =>
  new Response(JSON.stringify(result.body), {
    status: result.status,
    headers: {
      ...corsHeaders,
      ...(result.headers || {}),
      "Content-Type": "application/json"
    }
  });

const supabase = createServiceRoleClient();
const retentionConfig = readRetentionConfig({
  RETENTION_JOB_SECRET: Deno.env.get("RETENTION_JOB_SECRET"),
  LEADS_SPAM_RETENTION_DAYS: Deno.env.get("LEADS_SPAM_RETENTION_DAYS"),
  LEADS_PII_RETENTION_DAYS: Deno.env.get("LEADS_PII_RETENTION_DAYS"),
  LEADS_RETENTION_BATCH_SIZE: Deno.env.get("LEADS_RETENTION_BATCH_SIZE")
});

const listSpamLeadIds = async ({
  cutoffIso,
  limit
}: {
  cutoffIso: string;
  limit: number;
}) => {
  const { data, error } = await supabase
    .from("leads")
    .select("id")
    .eq("status", "spam")
    .lt("created_at", cutoffIso)
    .order("created_at", { ascending: true })
    .limit(limit);

  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    data: (data || []).map((row) => row.id).filter(Boolean)
  };
};

const listLeadsToAnonymize = async ({
  cutoffIso,
  limit
}: {
  cutoffIso: string;
  limit: number;
}) => {
  const { data, error } = await supabase
    .from("leads")
    .select("id")
    .in("status", ["new", "reviewed", "answered"])
    .is("anonymized_at", null)
    .lt("created_at", cutoffIso)
    .order("created_at", { ascending: true })
    .limit(limit);

  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    data: (data || []).map((row) => row.id).filter(Boolean)
  };
};

const deleteLeadsByIds = async ({
  ids
}: {
  ids: string[];
}) => {
  const { error } = await supabase
    .from("leads")
    .delete()
    .in("id", ids);

  if (error) {
    return { success: false, error };
  }

  return { success: true };
};

const anonymizeLeadsByIds = async ({
  ids,
  processedAt
}: {
  ids: string[];
  processedAt: string;
}) => {
  const { error } = await supabase
    .from("leads")
    .update({
      name: "Lead anonimizado",
      email: "deleted@example.invalid",
      phone: null,
      message: null,
      ip_hash: null,
      user_agent: null,
      anonymized_at: processedAt,
      retention_last_processed_at: processedAt
    })
    .in("id", ids);

  if (error) {
    return { success: false, error };
  }

  return { success: true };
};

const leadsRetentionService = createLeadsRetentionService({
  config: retentionConfig,
  listSpamLeadIds,
  deleteLeadsByIds,
  listLeadsToAnonymize,
  anonymizeLeadsByIds,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const result = await leadsRetentionService.process(request);
    return buildResponse(result);
  } catch (error) {
    console.error("leads retention function failed", error);
    return buildResponse({
      status: 500,
      body: {
        success: false,
        message: LEADS_RETENTION_RETRY_MESSAGE
      }
    });
  }
});
