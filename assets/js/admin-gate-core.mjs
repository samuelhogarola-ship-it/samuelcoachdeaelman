export function buildAdminLoginUrl(path) {
  return `/login/?redirect=${encodeURIComponent(path || '/')}`
}
