import { supabase } from './auth.js'
import { buildAdminLoginUrl, isAdminUser } from './admin-gate-core.mjs'

export { buildAdminLoginUrl }

export async function requireAdminAccess({ root = document.body } = {}) {
  root.setAttribute('aria-busy', 'true')
  const sessionResult = await Promise.race([
    supabase.auth.getSession(),
    new Promise(resolve => setTimeout(() => resolve({ data: { session: null } }), 2500)),
  ])
  const { data: { session } } = sessionResult
  if (!session || !isAdminUser(session.user)) {
    if (session) await supabase.auth.signOut()
    window.location.replace(buildAdminLoginUrl())
    return null
  }
  root.removeAttribute('aria-busy')
  root.classList.add('admin-authenticated')
  return session.user
}

export function wireAdminSignOut(selector = '[data-admin-signout]') {
  document.querySelectorAll(selector).forEach((button) => {
    button.addEventListener('click', async () => {
      await supabase.auth.signOut()
      window.location.replace('/login/?redirect=/admin/')
    })
  })
}
