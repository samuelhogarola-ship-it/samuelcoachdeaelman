import { createClient } from "npm:@supabase/supabase-js@2";

import {
  PUBLIC_REVIEWS_RETRY_MESSAGE,
  createPublicReviewsService
} from "./public-reviews-handler.mjs";

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

const requireEnv = (key: string) => {
  const value = Deno.env.get(key);
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const supabaseUrl = requireEnv("SUPABASE_URL");
const serviceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

const listSources = async () => {
  const { data, error } = await supabase
    .from("review_sources")
    .select("source, label, profile_url, rating_value, review_count")
    .eq("is_active", true)
    .order("source", { ascending: true });

  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    data: data || []
  };
};

const listFeaturedReviews = async () => {
  const { data, error } = await supabase
    .from("reviews")
    .select("id, source, reviewer_name, reviewer_role, review_text, rating")
    .eq("status", "published")
    .eq("is_featured", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    data: data || []
  };
};

const publicReviewsService = createPublicReviewsService({
  listSources,
  listFeaturedReviews,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const result = await publicReviewsService.process(request);
    return buildResponse(result);
  } catch (error) {
    console.error("public reviews function failed", error);
    return buildResponse({
      status: 500,
      body: {
        success: false,
        message: PUBLIC_REVIEWS_RETRY_MESSAGE
      }
    });
  }
});
