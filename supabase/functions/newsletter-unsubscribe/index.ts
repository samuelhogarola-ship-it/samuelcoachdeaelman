import { createClient } from "npm:@supabase/supabase-js@2";

const SITE_URL = "https://www.samuelcoachdealeman.com";
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const requireEnv = (key: string) => {
  const value = Deno.env.get(key);
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
};

Deno.serve(async (request) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") || "";
  const requestedLocale = url.searchParams.get("locale") || "";
  const locale = ["es", "de", "en"].includes(requestedLocale) ? requestedLocale : "es";
  const destination = locale === "es" ? SITE_URL : `${SITE_URL}/${locale}/`;
  if (!UUID_RE.test(token)) return Response.redirect(`${destination}?newsletter_error=invalid_token`, 302);

  const supabase = createClient(requireEnv("SUPABASE_URL"), requireEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .update({
      confirmed: false,
      confirmed_at: null,
      unsubscribed_at: new Date().toISOString(),
      confirmation_token: crypto.randomUUID(),
      confirmation_expires_at: null,
    })
    .eq("unsubscribe_token", token)
    .select("id")
    .maybeSingle();

  if (error || !data) return Response.redirect(`${destination}?newsletter_error=invalid_token`, 302);
  return Response.redirect(`${destination}?newsletter_unsubscribed=1`, 302);
});
