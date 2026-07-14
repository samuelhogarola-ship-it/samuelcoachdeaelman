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
    premiumCta:      'Anmelden für Premium-Zugang',
    premiumCtaAuth:  'Premium-Bereich öffnen',
    premiumNote:     'Nur für Nutzer mit aktiver Premium-Mitgliedschaft',
    premiumNoteAuth: 'Du bist angemeldet. Premium-Inhalte werden mit aktiver Mitgliedschaft freigeschaltet.',
  },
  en: {
    navLogin:        'Log in',
    navAccount:      'My account',
    premiumCta:      'Log in for premium access',
    premiumCtaAuth:  'Open premium area',
    premiumNote:     'Only available with an active premium membership',
    premiumNoteAuth: 'You are logged in. Premium content unlocks with an active membership.',
  },
  es: {
    navLogin:        'Iniciar sesión',
    navAccount:      'Mi cuenta',
    premiumCta:      'Iniciar sesión para acceso premium',
    premiumCtaAuth:  'Abrir zona premium',
    premiumNote:     'Solo disponible con una membresía premium activa',
    premiumNoteAuth: 'Has iniciado sesión. El contenido premium se desbloquea con una membresía activa.',
  },
}

function t() {
  const seg = location.pathname.split('/')[1]
  return I18N[seg] ? I18N[seg] : I18N.es
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

function cleanupAuthUrl() {
  const url = new URL(location.href)
  const removable = [
    'code',
    'token_hash',
    'type',
    'error',
    'error_code',
    'error_description',
    'access_token',
    'refresh_token',
    'expires_at',
    'expires_in',
    'provider_token',
    'provider_refresh_token',
  ]

  removable.forEach(key => url.searchParams.delete(key))

  if (url.hash) {
    const hashParams = new URLSearchParams(url.hash.slice(1))
    removable.forEach(key => hashParams.delete(key))
    const nextHash = hashParams.toString()
    url.hash = nextHash ? `#${nextHash}` : ''
  }

  history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}`)
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
  applyAuthState(session ? session.user : null)
})

supabase.auth.onAuthStateChange((_event, session) => {
  applyAuthState(session ? session.user : null)
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

export async function finishAuthSessionFromUrl() {
  const url = new URL(location.href)
  const hashParams = new URLSearchParams(url.hash.startsWith('#') ? url.hash.slice(1) : '')
  const type = url.searchParams.get('type') || hashParams.get('type') || ''
  const isRecovery = url.searchParams.get('reset') === '1' || type === 'recovery'
  const errorDescription = url.searchParams.get('error_description') || hashParams.get('error_description')

  if (errorDescription) {
    cleanupAuthUrl()
    return {
      error: new Error(decodeURIComponent(errorDescription.replace(/\+/g, ' '))),
      isRecovery,
      session: null,
    }
  }

  const code = url.searchParams.get('code')
  const tokenHash = url.searchParams.get('token_hash')
  const hasHashSession =
    hashParams.has('access_token') ||
    hashParams.has('refresh_token') ||
    hashParams.has('provider_token')

  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    cleanupAuthUrl()
    return { error, isRecovery, session: data?.session ?? null }
  }

  if (tokenHash && type) {
    const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type })
    cleanupAuthUrl()
    return { error, isRecovery, session: data?.session ?? null }
  }

  if (hasHashSession) {
    const { data, error } = await supabase.auth.getSession()
    cleanupAuthUrl()
    return { error: error ?? null, isRecovery, session: data?.session ?? null }
  }

  const { data, error } = await supabase.auth.getSession()
  return { error: error ?? null, isRecovery, session: data?.session ?? null }
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
  return session ? session.user : null
}

// Devuelve true si el usuario tiene is_premium en samuel_profiles.
// Requiere sesión activa. Silencioso ante errores de red.
export async function getPremiumStatus() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return { active: false, expiresAt: null }
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/samuel_profiles?user_id=eq.${session.user.id}&select=is_premium,premium_expires_at&limit=1`,
      { headers: { apikey: SUPABASE_ANON, Authorization: `Bearer ${session.access_token}` } }
    )
    if (!res.ok) return { active: false, expiresAt: null }
    const rows = await res.json()
    if (!rows.length) return { active: false, expiresAt: null }
    const expiresAt = rows[0].premium_expires_at || null
    const active =
      rows[0].is_premium === true &&
      typeof expiresAt === 'string' &&
      Number.isFinite(Date.parse(expiresAt)) &&
      Date.parse(expiresAt) > Date.now()
    return { active, expiresAt }
  } catch {
    return { active: false, expiresAt: null }
  }
}

export async function isPremium() {
  const status = await getPremiumStatus()
  return status.active
}

export async function requirePremium(redirectTo = location.pathname) {
  const user = await requireAuth(redirectTo)
  if (!user) return null
  const status = await getPremiumStatus()
  if (!status.active) {
    location.href = buildAccountUrl()
    return null
  }
  return user
}
