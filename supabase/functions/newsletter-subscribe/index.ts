import { createClient } from "npm:@supabase/supabase-js@2";

import {
  buildConfirmationUrl,
  buildUnsubscribeUrl,
  deliveryTimestampAfterAttempt,
  normalizeLocale,
  publicSubscribeResponse,
} from "./newsletter-handler.mjs";

const SITE_URL = "https://www.samuelcoachdealeman.com";
const ALLOWED_ORIGINS = new Set([SITE_URL, "https://samuelcoachdealeman.com"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type PreparedDelivery = {
  subscriber_id: string;
  prepared_confirmation_token: string;
  prepared_unsubscribe_token: string;
  delivery_attempt_id: string;
  delivery_locale: string;
  should_send: boolean;
};

type DeliveryPayload = {
  from: string;
  to: string[];
  subject: string;
  html: string;
};

type BoundPayload = {
  bound_payload: unknown;
};

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

const isDeliveryPayload = (value: unknown): value is DeliveryPayload => {
  if (!value || typeof value !== "object") return false;
  const payload = value as Partial<DeliveryPayload>;
  return typeof payload.from === "string"
    && Array.isArray(payload.to)
    && payload.to.length === 1
    && payload.to.every((recipient) => typeof recipient === "string")
    && typeof payload.subject === "string"
    && typeof payload.html === "string";
};

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

const handleRequest = async (request: Request) => {
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
  const { data: preparedData, error: prepareError } = await supabase
    .rpc("prepare_newsletter_confirmation", {
      p_email: email,
      p_locale: locale,
      p_now: nowIso,
      p_expires_at: expiresAt,
    })
    .single();
  const delivery = preparedData as PreparedDelivery | null;
  if (prepareError || !delivery || delivery.should_send !== true) {
    if (prepareError) console.error("newsletter delivery preparation failed", prepareError);
    return jsonResponse(request, 200, publicSubscribeResponse());
  }

  const subscriberId = delivery.subscriber_id;
  const confirmationToken = delivery.prepared_confirmation_token;
  const unsubscribeToken = delivery.prepared_unsubscribe_token;
  const deliveryAttemptId = delivery.delivery_attempt_id;
  const deliveryLocale = normalizeLocale(delivery.delivery_locale);
  const confirmUrl = buildConfirmationUrl(
    supabaseUrl,
    confirmationToken,
    deliveryLocale,
    confirmationRedirect(deliveryLocale),
  );
  const unsubscribeUrl = buildUnsubscribeUrl(supabaseUrl, unsubscribeToken, deliveryLocale);

  const completeDelivery = async (delivered: boolean) => {
    try {
      const deliveredAt = deliveryTimestampAfterAttempt(delivered, nowIso);
      const { error } = await supabase.rpc("complete_newsletter_confirmation", {
        p_subscriber_id: subscriberId,
        p_claimed_at: nowIso,
        p_delivered: Boolean(deliveredAt),
      });
      if (error) console.error("newsletter delivery completion failed", error);
    } catch (error) {
      console.error("newsletter delivery completion threw", error);
    }
  };

  const requestedPayload: DeliveryPayload = {
    from: requireEnv("RESEND_FROM_EMAIL"),
    to: [email],
    subject: emailSubject[deliveryLocale],
    html: emailHtml(deliveryLocale, confirmUrl, unsubscribeUrl),
  };
  let boundPayload: BoundPayload | null = null;
  try {
    const { data, error } = await supabase
      .rpc("bind_newsletter_confirmation_payload", {
        p_subscriber_id: subscriberId,
        p_claimed_at: nowIso,
        p_delivery_id: deliveryAttemptId,
        p_payload: requestedPayload,
      })
      .single();
    if (error) console.error("newsletter payload binding failed", error);
    boundPayload = error ? null : data as BoundPayload | null;
  } catch (error) {
    console.error("newsletter payload binding threw", error);
  }
  if (!boundPayload || !isDeliveryPayload(boundPayload.bound_payload)) {
    await completeDelivery(false);
    return jsonResponse(request, 200, publicSubscribeResponse());
  }
  const deliveryPayload = boundPayload.bound_payload;

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${requireEnv("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `newsletter-confirmation/${deliveryAttemptId}`,
      },
      body: JSON.stringify(deliveryPayload),
    });
  } catch (error) {
    console.error("newsletter email threw", error);
    await completeDelivery(false);
    return jsonResponse(request, 200, publicSubscribeResponse());
  }

  if (!resendResponse.ok) {
    console.error("newsletter email failed", resendResponse.status);
    await completeDelivery(false);
    return jsonResponse(request, 200, publicSubscribeResponse());
  }
  await completeDelivery(true);
  return jsonResponse(request, 200, publicSubscribeResponse());
};

Deno.serve(async (request) => {
  try {
    return await handleRequest(request);
  } catch (error) {
    console.error("newsletter subscribe failed", error);
    return jsonResponse(request, 200, publicSubscribeResponse());
  }
});
