export const safeNewsletterRedirect = (candidate, fallback, siteUrl) => {
  if (typeof candidate !== "string" || !candidate) return fallback;

  try {
    const destination = new URL(candidate);
    const allowedOrigin = new URL(siteUrl).origin;
    if (destination.origin !== allowedOrigin) return fallback;
    if (destination.protocol !== "https:") return fallback;
    return destination.toString();
  } catch (_error) {
    return fallback;
  }
};
