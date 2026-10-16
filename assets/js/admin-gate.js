import { supabase } from './auth.js'
import { buildAdminLoginUrl } from './admin-gate-core.mjs'

export { buildAdminLoginUrl }

export async function requireAdminAccess({ root = document.body } = {}) {
  root.setAttribute('aria-busy', 'true')
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
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
