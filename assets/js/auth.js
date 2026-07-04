// assets/js/auth.js — Supabase auth client + nav + premium gating
// Cargado como type="module" en todas las páginas.
// El anon key es público por diseño de Supabase — no es un secreto.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL  = 'https://hocdlmxzghwymamientc.supabase.co'
const SUPABASE_ANON = 'sb_publishable_d2RkD-vcqXebnAFs31AdHw_ti2Eb5qO'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON)

// ── i18n ───────────────────────────────────────────────────────────────────────

const I18N = {
  de: {
    navLogin:        'Anmelden',
    navAccount:      'Mein Konto',
    premiumCta:      'Anmelden für Zugang',
    premiumCtaAuth:  'KI-Korrektur demnächst verfügbar',
    premiumNote:     'Nur für aktive Schüler von Samuel Coach de Alemán',
    premiumNoteAuth: 'Du bist angemeldet. KI-Korrektur folgt bald.',
  },
  en: {
    navLogin:        'Log in',
    navAccount:      'My account',
    premiumCta:      'Log in to access',
    premiumCtaAuth:  'AI correction coming soon',
    premiumNote:     'Only available for active Samuel Coach de Alemán students',
    premiumNoteAuth: 'You\'re logged in. AI correction will be available soon.',
  },
  es: {
    navLogin:        'Iniciar sesión',
    navAccount:      'Mi cuenta',
    premiumCta:      'Iniciar sesión para acceder',
    premiumCtaAuth:  'Corrección IA disponible próximamente',
    premiumNote:     'Solo disponible para alumnos activos de Samuel Coach de Alemán',
    premiumNoteAuth: 'Has iniciado sesión. La corrección IA estará disponible en breve.',
  },
}

function t() {
  const seg = location.pathname.split('/')[1]
  return I18N[seg] ?? I18N.es
}

function getLocale() {
  const seg = location.pathname.split('/')[1]
  return I18N[seg] ? seg : 'es'
}

export function getLocalePrefix() {
  const locale = getLocale()
  return locale === 'es' ? '' : `/${locale}`
}

export function buildLoginUrl(redirectTo = location.pathname) {
  return `${getLocalePrefix()}/login/?redirect=${encodeURIComponent(redirectTo)}`
}

export function buildAccountUrl() {
  return `${getLocalePrefix()}/mi-cuenta/`
}

export function buildPasswordResetUrl() {
  return `${location.origin}${getLocalePrefix()}/login/?reset=1`
}

// ── Nav ────────────────────────────────────────────────────────────────────────

function updateNav(user) {
  const navLinks   = document.querySelector('.nav-links')
  const mobileMenu = document.querySelector('#mobile-menu')

  if (navLinks) {
    let li = navLinks.querySelector('#nav-auth-li')
    if (!li) {
      li = document.createElement('li')
      li.id = 'nav-auth-li'
      navLinks.appendChild(li)
    }
    li.innerHTML = user
      ? `<a href="${buildAccountUrl()}" class="nav-auth">${t().navAccount}</a>`
      : `<a href="${buildLoginUrl()}" class="nav-auth nav-auth--cta">${t().navLogin}</a>`
  }

  if (mobileMenu) {
    let a = mobileMenu.querySelector('#mobile-auth-a')
    if (!a) {
      a = document.createElement('a')
      a.id = 'mobile-auth-a'
      mobileMenu.appendChild(a)
    }
    a.href        = user ? buildAccountUrl() : buildLoginUrl()
    a.textContent = user ? t().navAccount : t().navLogin
    a.className   = user ? '' : 'mobile-cta'
  }
}

// ── Premium blocks (data-premium-cta) ─────────────────────────────────────────
// Uso: añadir data-premium-cta al botón de un bloque premium.
// Sin sesión → redirige a /login/?redirect=<ruta actual>.
// Con sesión → muestra estado "acceso activo" (sin IA real todavía).

function updatePremiumBlocks(user) {
  document.querySelectorAll('[data-premium-cta]').forEach(btn => {
    if (user) {
      btn.textContent = t().premiumCtaAuth
      btn.href = buildAccountUrl()
      btn.setAttribute('data-auth-state', 'authenticated')
    } else {
      btn.href = buildLoginUrl()
      btn.textContent = t().premiumCta
      btn.setAttribute('data-auth-state', 'anonymous')
    }
  })

  document.querySelectorAll('[data-premium-note]').forEach(el => {
    el.textContent = user ? t().premiumNoteAuth : t().premiumNote
  })
}

// ── Init ───────────────────────────────────────────────────────────────────────

function applyAuthState(user) {
  window.__samuelUser = user ?? null  // accesible desde scripts no-módulo
  updateNav(user)
  updatePremiumBlocks(user)
}

supabase.auth.getSession().then(({ data: { session } }) => {
  applyAuthState(session?.user ?? null)
})

supabase.auth.onAuthStateChange((_event, session) => {
  applyAuthState(session?.user ?? null)
})

// ── Exports ────────────────────────────────────────────────────────────────────

export async function signIn(email, password) {
  return supabase.auth.signInWithPassword({ email, password })
}

export async function signUp(email, password) {
  return supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${location.origin}${getLocalePrefix()}/login/` },
  })
}

export async function signOut() {
  return supabase.auth.signOut()
}

export async function resetPassword(email) {
  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: buildPasswordResetUrl(),
  })
}

export async function getUser() {
  const { data } = await supabase.auth.getUser()
  return data.user
}

// Redirige a /login/ si no hay sesión activa. Usar en páginas protegidas.
export async function requireAuth(redirectTo = location.pathname) {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    location.href = buildLoginUrl(redirectTo)
  }
  return session?.user ?? null
}

// Devuelve true si el usuario tiene is_premium en samuel_profiles.
// Requiere sesión activa. Silencioso ante errores de red.
export async function isPremium() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return false
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/samuel_profiles?user_id=eq.${session.user.id}&select=is_premium&limit=1`,
      { headers: { apikey: SUPABASE_ANON, Authorization: `Bearer ${session.access_token}` } }
    )
    if (!res.ok) return false
    const rows = await res.json()
    return rows.length > 0 && rows[0].is_premium === true
  } catch { return false }
}
