// assets/js/auth.js — Supabase auth client + nav + premium gating
// Cargado como type="module" en todas las páginas.
// El anon key es público por diseño de Supabase — no es un secreto.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL  = 'https://owlcmhlfuszyuwqxuhpb.supabase.co'
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93bGNtaGxmdXN6eXV3cXh1aHBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNTYwOTgsImV4cCI6MjA5NjczMjA5OH0.6DzbUjE-8CmKQbs6PUV7QXjU3uMzp-kU6KVDL6by9JY'

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
      ? `<a href="/mi-cuenta/" class="nav-auth">${t().navAccount}</a>`
      : `<a href="/login/?redirect=${encodeURIComponent(location.pathname)}" class="nav-auth nav-auth--cta">${t().navLogin}</a>`
  }

  if (mobileMenu) {
    let a = mobileMenu.querySelector('#mobile-auth-a')
    if (!a) {
      a = document.createElement('a')
      a.id = 'mobile-auth-a'
      mobileMenu.appendChild(a)
    }
    a.href        = user ? '/mi-cuenta/' : `/login/?redirect=${encodeURIComponent(location.pathname)}`
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
      btn.href = '/mi-cuenta/'
      btn.setAttribute('data-auth-state', 'authenticated')
    } else {
      btn.href = `/login/?redirect=${encodeURIComponent(location.pathname)}`
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
  return supabase.auth.signUp({ email, password })
}

export async function signOut() {
  return supabase.auth.signOut()
}

export async function resetPassword(email) {
  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${location.origin}/login/?reset=1`,
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
    location.href = `/login/?redirect=${encodeURIComponent(redirectTo)}`
  }
  return session?.user ?? null
}
