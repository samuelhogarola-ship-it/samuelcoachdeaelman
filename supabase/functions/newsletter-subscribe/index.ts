import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const requireEnv = (key: string) => {
  const value = Deno.env.get(key);
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SITE_URL = "https://www.samuelcoachdealeman.com";

const confirmationUrl = (token: string, locale: string) => {
  const base = locale === "de"
    ? `${SITE_URL}/de/newsletter-bestaetigt/`
    : locale === "en"
    ? `${SITE_URL}/en/newsletter-confirmed/`
    : `${SITE_URL}/newsletter-confirmado/`;
  return `${SITE_URL}/functions/v1/newsletter-confirm?token=${token}&locale=${locale}&redirect=${encodeURIComponent(base)}`;
};

const emailSubject: Record<string, string> = {
  es: "Confirma tu suscripción al newsletter de Samuel",
  de: "Bestätige deine Newsletter-Anmeldung bei Samuel",
  en: "Confirm your newsletter subscription with Samuel",
};

const emailHtml = (locale: string, url: string) => {
  if (locale === "de") {
    return `<p>Hallo,</p>
<p>Klicke auf den Button, um deine Anmeldung zu bestätigen:</p>
<p><a href="${url}" style="background:#1a73e8;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;">Anmeldung bestätigen</a></p>
<p>Wenn du dich nicht angemeldet hast, kannst du diese E-Mail ignorieren.</p>
<p>— Samuel Coach de Alemán</p>`;
  }
  if (locale === "en") {
    return `<p>Hello,</p>
<p>Click the button below to confirm your subscription:</p>
<p><a href="${url}" style="background:#1a73e8;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;">Confirm subscription</a></p>
<p>If you didn't sign up, you can safely ignore this email.</p>
<p>— Samuel Coach de Alemán</p>`;
  }
  return `<p>Hola,</p>
<p>Haz clic en el botón para confirmar tu suscripción:</p>
<p><a href="${url}" style="background:#1a73e8;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;">Confirmar suscripción</a></p>
<p>Si no te has suscrito, puedes ignorar este email.</p>
<p>— Samuel Coach de Alemán</p>`;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = createClient(
    requireEnv("SUPABASE_URL"),
    requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
  const resendApiKey = requireEnv("RESEND_API_KEY");
  const fromEmail = requireEnv("RESEND_FROM_EMAIL");

  let email: string;
  let locale: string;

  try {
    const body = await req.json();
    email = (body.email ?? "").trim().toLowerCase();
    locale = ["es", "de", "en"].includes(body.locale) ? body.locale : "es";
  } catch {
    return jsonResponse(400, { error: "invalid_json" });
  }

  if (!EMAIL_RE.test(email)) {
    return jsonResponse(400, { error: "invalid_email" });
  }

  // Upsert: if already exists and confirmed, return success silently
  const { data: existing } = await supabase
    .from("newsletter_subscribers")
    .select("id, confirmed, confirmation_token")
    .eq("email", email)
    .maybeSingle();

  if (existing && existing.confirmed) {
    // Already confirmed — don't re-send, just acknowledge
    return jsonResponse(200, { status: "already_confirmed" });
  }

  let token: string;

  if (existing) {
    // Pending confirmation — resend the same token
    token = existing.confirmation_token;
    await supabase
      .from("newsletter_subscribers")
      .update({ locale, subscribed_at: new Date().toISOString() })
      .eq("id", existing.id);
  } else {
    const { data: inserted, error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email, locale })
      .select("confirmation_token")
      .single();

    if (error || !inserted) {
      console.error("insert error", error);
      return jsonResponse(500, { error: "db_error" });
    }
    token = inserted.confirmation_token;
  }

  const url = confirmationUrl(token, locale);

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      subject: emailSubject[locale],
      html: emailHtml(locale, url),
    }),
  });

  if (!resendRes.ok) {
    const err = await resendRes.text();
    console.error("resend error", err);
    return jsonResponse(500, { error: "email_send_failed" });
  }

  return jsonResponse(200, { status: "confirmation_sent" });
});
