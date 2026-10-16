export const ADMIN_EMAIL = 'info@webfuengirola.com'

export function buildAdminLoginUrl(path) {
  return `/login/?redirect=${encodeURIComponent(path || '/')}`
}

export function isAdminUser(user) {
  return Boolean(user && typeof user.email === 'string' && user.email.trim().toLowerCase() === ADMIN_EMAIL)
}
