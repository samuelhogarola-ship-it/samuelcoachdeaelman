import { createClient } from "npm:@supabase/supabase-js@2";

import {
  buildConfirmationUrl,
  buildUnsubscribeUrl,
  confirmationHasExpired,
  normalizeLocale,
  publicSubscribeResponse,
  shouldSendConfirmation,
} from "./newsletter-handler.mjs";

const SITE_URL = "https://www.samuelcoachdealeman.com";
const ALLOWED_ORIGINS = new Set([SITE_URL, "https://samuelcoachdealeman.com"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requireEnv = (key: string) => {
  const value = Deno.env.get(key);
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
};

const isAllowedOrigin = (origin: string) => {
  if (ALLOWED_ORIGINS.has(origin)) return true;
  try {
    const url = new URL(origin);
    return ["localhost", "127.0.0.1"].includes(url.hostname) && url.protocol === "http:";
  } catch (_error) {
    return false;
  }
};

const corsHeaders = (request: Request) => {
  const origin = request.headers.get("origin") || "";
  return {
    ...(isAllowedOrigin(origin) ? { "Access-Control-Allow-Origin": origin } : {}),
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
};

const jsonResponse = (request: Request, status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(request), "Content-Type": "application/json" },
  });

const confirmationRedirect = (locale: string) =>
  locale === "de"
    ? `${SITE_URL}/de/newsletter-bestaetigt/`
    : locale === "en"
    ? `${SITE_URL}/en/newsletter-confirmed/`
    : `${SITE_URL}/newsletter-confirmado/`;

const emailSubject: Record<string, string> = {
  es: "Confirma tu suscripción al newsletter de Samuel",
  de: "Bestätige deine Newsletter-Anmeldung bei Samuel",
  en: "Confirm your newsletter subscription with Samuel",
};

const emailHtml = (locale: string, confirmationUrl: string, unsubscribeUrl: string) => {
  if (locale === "de") {
    return `<p>Hallo,</p><p>Bestätige deine Anmeldung:</p><p><a href="${confirmationUrl}">Anmeldung bestätigen</a></p><p>Falls du diese Anfrage nicht gestellt hast, kannst du sie <a href="${unsubscribeUrl}">widerrufen</a>.</p>`;
  }
  if (locale === "en") {
    return `<p>Hello,</p><p>Confirm your subscription:</p><p><a href="${confirmationUrl}">Confirm subscription</a></p><p>If you did not request this, you can <a href="${unsubscribeUrl}">cancel the request</a>.</p>`;
  }
  return `<p>Hola,</p><p>Confirma tu suscripción:</p><p><a href="${confirmationUrl}">Confirmar suscripción</a></p><p>Si no has solicitado el alta, puedes <a href="${unsubscribeUrl}">cancelar la solicitud</a>.</p>`;
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    const origin = request.headers.get("origin") || "";
    return new Response(null, {
      status: origin && !isAllowedOrigin(origin) ? 403 : 204,
      headers: corsHeaders(request),
    });
  }
  if (request.method !== "POST") return jsonResponse(request, 405, { error: "method_not_allowed" });

  let email = "";
  let locale = "es";
  try {
    const body = await request.json();
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    locale = normalizeLocale(body.locale);
  } catch (_error) {
    return jsonResponse(request, 400, { error: "invalid_request" });
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return jsonResponse(request, 400, { error: "invalid_email" });
  }

  const supabaseUrl = requireEnv("SUPABASE_URL");
  const supabase = createClient(supabaseUrl, requireEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const now = new Date();
  const nowIso = now.toISOString();
  const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString();
  const { data: existing, error: selectError } = await supabase
    .from("newsletter_subscribers")
    .select("id, confirmed, confirmation_token, confirmation_expires_at, unsubscribe_token, last_confirmation_sent_at, unsubscribed_at")
    .eq("email", email)
    .maybeSingle();

  if (selectError) {
    console.error("newsletter lookup failed", selectError);
    return jsonResponse(request, 500, { error: "temporary_failure" });
  }
  if (existing && existing.confirmed && !existing.unsubscribed_at) {
    return jsonResponse(request, 200, publicSubscribeResponse());
  }
  if (existing && !shouldSendConfirmation(existing, now)) {
    return jsonResponse(request, 200, publicSubscribeResponse());
  }

  const rotateConfirmation = !existing || Boolean(existing.unsubscribed_at) || confirmationHasExpired(existing, now);
  const confirmationToken = rotateConfirmation ? crypto.randomUUID() : existing.confirmation_token;
  const unsubscribeToken = existing?.unsubscribe_token || crypto.randomUUID();

  if (existing) {
    const { error } = await supabase
      .from("newsletter_subscribers")
      .update({
        locale,
        confirmed: false,
        confirmed_at: null,
        unsubscribed_at: null,
        subscribed_at: nowIso,
        confirmation_token: confirmationToken,
        confirmation_expires_at: rotateConfirmation ? expiresAt : existing.confirmation_expires_at,
        unsubscribe_token: unsubscribeToken,
        last_confirmation_sent_at: nowIso,
      })
      .eq("id", existing.id);
    if (error) {
      console.error("newsletter update failed", error);
      return jsonResponse(request, 500, { error: "temporary_failure" });
    }
  } else {
    const { error } = await supabase.from("newsletter_subscribers").insert({
      email,
      locale,
      confirmation_token: confirmationToken,
      confirmation_expires_at: expiresAt,
      unsubscribe_token: unsubscribeToken,
      last_confirmation_sent_at: nowIso,
    });
    if (error) {
      console.error("newsletter insert failed", error);
      return jsonResponse(request, 500, { error: "temporary_failure" });
    }
  }

  const confirmUrl = buildConfirmationUrl(supabaseUrl, confirmationToken, locale, confirmationRedirect(locale));
  const unsubscribeUrl = buildUnsubscribeUrl(supabaseUrl, unsubscribeToken, locale);
  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${requireEnv("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: requireEnv("RESEND_FROM_EMAIL"),
      to: [email],
      subject: emailSubject[locale],
      html: emailHtml(locale, confirmUrl, unsubscribeUrl),
    }),
  });

  if (!resendResponse.ok) {
    console.error("newsletter email failed", await resendResponse.text());
    return jsonResponse(request, 500, { error: "temporary_failure" });
  }
  return jsonResponse(request, 200, publicSubscribeResponse());
});
