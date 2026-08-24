import { createClient } from "npm:@supabase/supabase-js@2";

import {
  buildLeadEmailText,
  createContactService,
  GENERIC_RETRY_MESSAGE
} from "./contact-handler.mjs";

const PRODUCTION_ORIGINS = new Set([
  "https://www.samuelcoachdealeman.com",
  "https://samuelcoachdealeman.com"
]);

const isAllowedOrigin = (origin: string) => {
  if (PRODUCTION_ORIGINS.has(origin)) return true;

  try {
    const url = new URL(origin);
    return (
      (url.hostname === "127.0.0.1" || url.hostname === "localhost") &&
      (url.protocol === "http:" || url.protocol === "https:")
    );
  } catch (_error) {
    return false;
  }
};

const corsHeaders = (request: Request) => {
  const origin = request.headers.get("origin") || "";
  return {
    ...(isAllowedOrigin(origin) ? { "Access-Control-Allow-Origin": origin } : {}),
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin"
  };
};

const jsonResponse = (request: Request, status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request),
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
const turnstileSecret = requireEnv("TURNSTILE_SECRET_KEY");
const resendApiKey = requireEnv("RESEND_API_KEY");
const contactEmail = requireEnv("CONTACT_EMAIL");
const resendFromEmail = requireEnv("RESEND_FROM_EMAIL");

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

const verifyTurnstile = async (token: string, remoteIp: string | null) => {
  const body = new URLSearchParams({
    secret: turnstileSecret,
    response: token
  });

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body
    }
  );

  if (!response.ok) {
    return { success: false };
  }

  const payload = await response.json();
  return { success: Boolean(payload?.success) };
};

const insertLead = async (lead: Record<string, unknown>) => {
  const { data, error } = await supabase
    .from("leads")
    .insert(lead)
    .select("id")
    .single();

  if (error) {
    return { success: false, error };
  }

  return {
    success: true,
    id: data?.id ?? null
  };
};

const checkRateLimit = async (ipHash: string | null) => {
  if (!ipHash) return false;

  const { data, error } = await supabase.rpc("claim_contact_submission", {
    p_ip_hash: ipHash,
  });

  if (error) {
    console.error("contact rate limit claim failed", error);
    return false;
  }

  return data === true;
};

const sendLeadEmail = async ({
  lead,
  leadId
}: {
  lead: Record<string, unknown>;
  leadId: string | null;
}) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [contactEmail],
      reply_to: lead.email,
      subject: `Nuevo lead web${leadId ? ` · ${leadId}` : ""}`,
      text: buildLeadEmailText(lead)
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    return {
      success: false,
      error: errorText
    };
  }

  return { success: true };
};

const contactService = createContactService({
  verifyTurnstile,
  checkRateLimit,
  insertLead,
  sendLeadEmail,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    const origin = request.headers.get("origin") || "";
    if (origin && !isAllowedOrigin(origin)) {
      return new Response("Forbidden", { status: 403, headers: corsHeaders(request) });
    }
    return new Response("ok", { headers: corsHeaders(request) });
  }

  if (request.method !== "POST") {
    return jsonResponse(request, 405, {
      success: false,
      message: GENERIC_RETRY_MESSAGE
    });
  }

  try {
    const payload = await request.json();
    const result = await contactService.process({
      payload,
      headers: request.headers
    });

    return jsonResponse(request, result.status, result.body);
  } catch (error) {
    console.error("contact function failed", error);
    return jsonResponse(request, 500, {
      success: false,
      message: GENERIC_RETRY_MESSAGE
    });
  }
});
