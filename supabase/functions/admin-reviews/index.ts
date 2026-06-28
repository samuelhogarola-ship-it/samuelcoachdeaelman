import {
  ADMIN_REVIEWS_RETRY_MESSAGE,
  createAdminReviewsService
} from "./admin-reviews-handler.mjs";
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

const listReviewSources = async () => {
  const { data, error } = await supabase
    .from("review_sources")
    .select("source, label, profile_url, rating_value, review_count, is_active")
    .order("source", { ascending: true });

  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    data: data || []
  };
};

const listReviews = async ({
  status,
  limit
}: {
  status: string | null;
  limit: number;
}) => {
  let query = supabase
    .from("reviews")
    .select("id, source, reviewer_name, reviewer_role, review_text, rating, status, is_featured, sort_order, created_at")
    .order("sort_order", { ascending: true })
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

const updateReview = async ({
  id,
  status,
  is_featured
}: {
  id: string;
  status?: string;
  is_featured?: boolean;
}) => {
  const payload: Record<string, unknown> = {
    updated_at: new Date().toISOString()
  };

  if (status !== undefined) payload.status = status;
  if (is_featured !== undefined) payload.is_featured = is_featured;

  const { data, error } = await supabase
    .from("reviews")
    .update(payload)
    .eq("id", id)
    .select("id, source, reviewer_name, reviewer_role, review_text, rating, status, is_featured, sort_order, created_at")
    .single();

  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    data
  };
};

const adminReviewsService = createAdminReviewsService({
  verifyAdminAccess,
  listReviewSources,
  listReviews,
  updateReview,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const result = await adminReviewsService.process(request);
    return buildResponse(result);
  } catch (error) {
    console.error("admin reviews function failed", error);
    return buildResponse({
      status: 500,
      body: {
        success: false,
        message: ADMIN_REVIEWS_RETRY_MESSAGE
      }
    });
  }
});
