import { createClient } from "npm:@supabase/supabase-js@2";

import {
  buildLeadEmailText,
  createContactService,
  GENERIC_RETRY_MESSAGE
} from "./contact-handler.mjs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
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
  insertLead,
  sendLeadEmail,
  logger: console
});

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return jsonResponse(405, {
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

    return jsonResponse(result.status, result.body);
  } catch (error) {
    console.error("contact function failed", error);
    return jsonResponse(500, {
      success: false,
      message: GENERIC_RETRY_MESSAGE
    });
  }
});
