import { createClient } from "npm:@supabase/supabase-js@2";

const requireEnv = (key: string) => {
  const value = Deno.env.get(key);
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
};

const SITE_URL = "https://www.samuelcoachdealeman.com";

const fallbackRedirect: Record<string, string> = {
  es: `${SITE_URL}/newsletter-confirmado/`,
  de: `${SITE_URL}/de/newsletter-bestaetigt/`,
  en: `${SITE_URL}/en/newsletter-confirmed/`,
};

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") ?? "";
  const locale = url.searchParams.get("locale") ?? "es";
  const redirectParam = url.searchParams.get("redirect") ?? "";

  const safeLocale = ["es", "de", "en"].includes(locale) ? locale : "es";
  const redirectUrl = redirectParam.startsWith(SITE_URL)
    ? redirectParam
    : fallbackRedirect[safeLocale];

  const errorRedirect = (reason: string) =>
    Response.redirect(`${SITE_URL}/?newsletter_error=${reason}`, 302);

  if (!token || token.length < 10) {
    return errorRedirect("invalid_token");
  }

  const supabase = createClient(
    requireEnv("SUPABASE_URL"),
    requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { persistSession: false, autoRefreshToken: false } },
  );

  const { data: subscriber, error } = await supabase
    .from("newsletter_subscribers")
    .select("id, confirmed")
    .eq("confirmation_token", token)
    .maybeSingle();

  if (error || !subscriber) {
    return errorRedirect("token_not_found");
  }

  if (!subscriber.confirmed) {
    await supabase
      .from("newsletter_subscribers")
      .update({ confirmed: true, confirmed_at: new Date().toISOString() })
      .eq("id", subscriber.id);
  }

  return Response.redirect(redirectUrl, 302);
});
