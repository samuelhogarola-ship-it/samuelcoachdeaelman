import {
  ACCOUNT_EXPORT_RETRY_MESSAGE,
  createAccountExportService
} from "./account-export-handler.mjs";
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

  if (error || !user?.id) {
    return { success: false, error };
  }

  return {
    success: true,
    user
  };
};

const fetchExportData = async ({
  userId,
  email
}: {
  userId: string;
  email: string | null;
}) => {
  const queries = [
    supabase
      .from("profiles")
      .select("user_id, email, full_name, avatar_url, created_at, updated_at")
      .eq("user_id", userId)
      .maybeSingle(),
    supabase
      .from("user_roles")
      .select("role, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: true }),
    supabase
      .from("samuel_user_progress")
      .select("nivel, exercise_type, completed_activities, average_score, updated_at")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false }),
    supabase
      .from("samuel_attempts")
      .select(`
        id,
        score,
        max_score,
        time_spent_s,
        completed_at,
        answers,
        exercise:samuel_exercises (
          exercise_type,
          text:samuel_texts (
            slug,
            titulo,
            nivel
          )
        )
      `)
      .eq("user_id", userId)
      .order("completed_at", { ascending: false })
      .limit(200)
  ];

  if (email) {
    queries.push(
      supabase
        .from("leads")
        .select(`
          id,
          created_at,
          name,
          email,
          phone,
          age_band,
          goal,
          current_level,
          availability,
          message,
          privacy_consent,
          privacy_consent_at,
          privacy_policy_version,
          risk_score,
          status,
          turnstile_success
        `)
        .eq("email", email.trim().toLowerCase())
        .order("created_at", { ascending: false })
    );
  }

  const results = await Promise.all(queries);
  const failedResult = results.find((result) => result.error);
  if (failedResult?.error) {
    return { success: false, error: failedResult.error };
  }

  const [profileResult, rolesResult, progressResult, attemptsResult, leadsResult] = results;

  return {
    success: true,
    data: {
      exported_at: new Date().toISOString(),
      export_version: "2026-06-28",
      account: {
        user_id: userId,
        email: email || null
      },
      profile: profileResult.data || null,
      roles: rolesResult.data || [],
      progress: progressResult.data || [],
      attempts: attemptsResult.data || [],
      contact_leads: leadsResult?.data || []
    }
  };
};

const accountExportService = createAccountExportService({
  verifySession,
  fetchExportData,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const result = await accountExportService.process(request);
    return buildResponse(result);
  } catch (error) {
    console.error("account export function failed", error);
    return buildResponse({
      status: 500,
      body: {
        success: false,
        message: ACCOUNT_EXPORT_RETRY_MESSAGE
      }
    });
  }
});
