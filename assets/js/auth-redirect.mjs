export function safeAuthRedirect(candidate, fallback, origin) {
  const baseOrigin = origin || window.location.origin;

  if (typeof candidate !== "string" || candidate.charAt(0) !== "/") return fallback;
  if (candidate.indexOf("//") === 0 || candidate.indexOf("\\") !== -1) return fallback;

  try {
    decodeURI(candidate);
    const destination = new URL(candidate, baseOrigin);
    if (destination.origin !== baseOrigin) return fallback;
    return destination.pathname + destination.search + destination.hash;
  } catch (_error) {
    return fallback;
  }
}
