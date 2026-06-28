import {
  ACCOUNT_LEADS_RETRY_MESSAGE,
  createAccountLeadsService
} from "./account-leads-handler.mjs";
import { createServiceRoleClient } from "../_shared/admin-auth.mjs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS"
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

const verifySession = async (token: string) => {
  const {
    data: { user },
    error
  } = await supabase.auth.getUser(token);

  if (error || !user?.email) {
    return { success: false, error };
  }

  return {
    success: true,
    user
  };
};

const listOwnLeads = async ({
  email
}: {
  email: string;
}) => {
  const { data, error } = await supabase
    .from("leads")
    .select(
      "id, created_at, goal, current_level, availability, message, risk_score, status, turnstile_success"
    )
    .eq("email", email.trim().toLowerCase())
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    data: data || []
  };
};

const accountLeadsService = createAccountLeadsService({
  verifySession,
  listOwnLeads,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const result = await accountLeadsService.process(request);
    return buildResponse(result);
  } catch (error) {
    console.error("account leads function failed", error);
    return buildResponse({
      status: 500,
      body: {
        success: false,
        message: ACCOUNT_LEADS_RETRY_MESSAGE
      }
    });
  }
});
