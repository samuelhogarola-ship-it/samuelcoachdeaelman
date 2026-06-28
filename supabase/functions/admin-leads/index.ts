import {
  ADMIN_LEADS_RETRY_MESSAGE,
  createAdminLeadsService
} from "./admin-handler.mjs";
import {
  createServiceRoleClient,
  createVerifyAdminAccess,
  readAdminBootstrapEmails
} from "../_shared/admin-auth.mjs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, PATCH, OPTIONS"
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
const verifyAdminAccess = createVerifyAdminAccess({
  supabase,
  adminEmails: readAdminBootstrapEmails()
});

const listLeads = async ({
  status,
  limit
}: {
  status: string | null;
  limit: number;
}) => {
  let query = supabase
    .from("leads")
    .select(
      "id, created_at, name, email, phone, age_band, goal, current_level, availability, message, risk_score, turnstile_success, status"
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;
  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    data: data || []
  };
};

const updateLeadStatus = async ({
  id,
  status
}: {
  id: string;
  status: string;
}) => {
  const { data, error } = await supabase
    .from("leads")
    .update({ status })
    .eq("id", id)
    .select(
      "id, created_at, name, email, phone, age_band, goal, current_level, availability, message, risk_score, turnstile_success, status"
    )
    .single();

  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    data
  };
};

const adminLeadsService = createAdminLeadsService({
  verifyAdminAccess,
  listLeads,
  updateLeadStatus,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const result = await adminLeadsService.process(request);
    return buildResponse(result);
  } catch (error) {
    console.error("admin leads function failed", error);
    return buildResponse({
      status: 500,
      body: {
        success: false,
        message: ADMIN_LEADS_RETRY_MESSAGE
      }
    });
  }
});
