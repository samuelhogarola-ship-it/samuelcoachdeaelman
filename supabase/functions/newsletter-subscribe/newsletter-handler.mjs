const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;

const normalizeBaseUrl = (value) => String(value || "").replace(/\/+$/, "");

export const normalizeLocale = (locale) =>
  ["es", "de", "en"].includes(locale) ? locale : "es";

export const buildConfirmationUrl = (supabaseUrl, token, locale, redirectUrl) => {
  const url = new URL(`${normalizeBaseUrl(supabaseUrl)}/functions/v1/newsletter-confirm`);
  url.searchParams.set("token", token);
  url.searchParams.set("locale", normalizeLocale(locale));
  url.searchParams.set("redirect", redirectUrl);
  return url.toString();
};

export const buildUnsubscribeUrl = (supabaseUrl, token, locale) => {
  const url = new URL(`${normalizeBaseUrl(supabaseUrl)}/functions/v1/newsletter-unsubscribe`);
  url.searchParams.set("token", token);
  url.searchParams.set("locale", normalizeLocale(locale));
  return url.toString();
};

export const publicSubscribeResponse = () => ({ status: "confirmation_sent" });

export const deliveryTimestampAfterAttempt = (delivered, sentAt) =>
  delivered ? sentAt : null;

export const shouldSendConfirmation = (subscriber, now = new Date()) => {
  if (!subscriber || !subscriber.last_confirmation_sent_at) return true;
  const lastSent = new Date(subscriber.last_confirmation_sent_at).getTime();
  return !Number.isFinite(lastSent) || now.getTime() - lastSent >= FIFTEEN_MINUTES_MS;
};

export const confirmationHasExpired = (subscriber, now = new Date()) => {
  if (!subscriber || !subscriber.confirmation_expires_at) return true;
  return new Date(subscriber.confirmation_expires_at).getTime() <= now.getTime();
};
