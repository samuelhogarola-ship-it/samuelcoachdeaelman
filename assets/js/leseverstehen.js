// Lógica de renderizado para Leseverstehen.
// Los datos (array TEXTOS) están en leseverstehen-data.js.
// Carga ese archivo antes que este en el HTML.

const LESE_UI = {
  es: {
    levelLabel: "Nivel",
    cardCta: "Leer y practicar →",
    cardCtaLocked: "Iniciar sesión para leer →",
    notFoundLevel: "Nivel no encontrado.",
    notFoundText: "Texto no encontrado.",
    backAll: "← Ver todos los niveles",
    exerciseTitle: "¿Has entendido el texto?",
    exerciseSub:
      "Indica si cada frase es <strong>Verdadero</strong> o <strong>Falso</strong>.",
    optionTrue: "Verdadero",
    optionFalse: "Falso",
    result: (hits, total) => `Resultado: ${hits} de ${total} correctas.`,
    retry: "Intentar de nuevo",
    backLevel: (level) => `← Volver a ${level}`,
    feedbackOk: "✓ ¡Correcto!",
    feedbackError: (label) => `✗ Incorrecto. La respuesta correcta es: ${label}.`,
    summary: (level) =>
      `Texto interactivo de lectura en alemán para practicar el nivel ${level}.`,
    authGateTitle: "Contenido para alumnos registrados",
    authGateText: "Este texto está disponible para usuarios con cuenta en Samuel Coach de Alemán. Es gratis registrarse.",
    authGateBtn: "Iniciar sesión / Registrarse",
    lockedBadge: "🔒 Solo registrados",
  },
  de: {
    levelLabel: "Niveau",
    cardCta: "Lesen und üben →",
    cardCtaLocked: "Anmelden zum Lesen →",
    notFoundLevel: "Niveau nicht gefunden.",
    notFoundText: "Text nicht gefunden.",
    backAll: "← Alle Niveaus ansehen",
    exerciseTitle: "Hast du den Text verstanden?",
    exerciseSub:
      "Entscheide, ob jede Aussage <strong>Richtig</strong> oder <strong>Falsch</strong> ist.",
    optionTrue: "Richtig",
    optionFalse: "Falsch",
    result: (hits, total) => `Ergebnis: ${hits} von ${total} richtig.`,
    retry: "Noch einmal versuchen",
    backLevel: (level) => `← Zurück zu ${level}`,
    feedbackOk: "✓ Richtig!",
    feedbackError: (label) => `✗ Nicht richtig. Die richtige Antwort ist: ${label}.`,
    summary: (level) =>
      `Interaktiver Lesetext auf Deutsch, um das Niveau ${level} zu trainieren.`,
    authGateTitle: "Inhalt für registrierte Schüler",
    authGateText: "Dieser Text ist für Nutzer mit einem Konto bei Samuel Coach de Alemán verfügbar. Die Registrierung ist kostenlos.",
    authGateBtn: "Anmelden / Registrieren",
    lockedBadge: "🔒 Nur für Registrierte",
  },
  en: {
    levelLabel: "Level",
    cardCta: "Read and practise →",
    cardCtaLocked: "Log in to read →",
    notFoundLevel: "Level not found.",
    notFoundText: "Text not found.",
    backAll: "← View all levels",
    exerciseTitle: "Did you understand the text?",
    exerciseSub:
      "Decide whether each statement is <strong>True</strong> or <strong>False</strong>.",
    optionTrue: "True",
    optionFalse: "False",
    result: (hits, total) => `Result: ${hits} out of ${total} correct.`,
    retry: "Try again",
    backLevel: (level) => `← Back to ${level}`,
    feedbackOk: "✓ Correct!",
    feedbackError: (label) => `✗ Incorrect. The correct answer is: ${label}.`,
    summary: (level) =>
      `Interactive German reading text to practise level ${level}.`,
    authGateTitle: "Content for registered students",
    authGateText: "This text is available to users with a Samuel Coach de Alemán account. Registration is free.",
    authGateBtn: "Log in / Sign up",
    lockedBadge: "🔒 Registered only",
  },
};

function getCurrentLocale() {
  const lang = (document.documentElement.lang || "es").slice(0, 2);
  return LESE_UI[lang] ? lang : "es";
}

function getUi() {
  return LESE_UI[getCurrentLocale()];
}

function getLocalePrefix() {
  const pathname = window.location.pathname || "";
  if (pathname.startsWith("/de/")) return "/de";
  if (pathname.startsWith("/en/")) return "/en";
  return "";
}

function buildLeseUrl(path = "") {
  const prefix = getLocalePrefix();
  return `${prefix}/leseverstehen/${path}`;
}

function buildLoginUrl() {
  const prefix = getLocalePrefix();
  return `${prefix}/login/?redirect=${encodeURIComponent(location.pathname)}`;
}

function getCardDescription(texto) {
  if (getCurrentLocale() === "es") return texto.descripcion;
  return getUi().summary(texto.nivel);
}

function getTextoBySlug(slug) {
  return TEXTOS.find(t => t.slug === slug) || null;
}

function getTextos() {
  return TEXTOS;
}

// ── Auth helpers (sin importar auth.js para mantener compatibilidad con scripts no-módulo) ──

const SUPABASE_URL  = 'https://hocdlmxzghwymamientc.supabase.co';
const SUPABASE_ANON = 'sb_publishable_d2RkD-vcqXebnAFs31AdHw_ti2Eb5qO';
const SUPABASE_LS_KEY = 'sb-hocdlmxzghwymamientc-auth-token';

function getStoredSession() {
  try {
    const raw = localStorage.getItem(SUPABASE_LS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

function isAuthenticated() {
  const s = getStoredSession();
  if (!s) return false;
  // Supabase v2: { access_token, expires_at, user }
  const expiresAt = s.expires_at;
  if (expiresAt && Date.now() / 1000 > expiresAt) return false;
  return !!s.access_token;
}

function getAccessToken() {
  var s = getStoredSession();
  return s ? s.access_token : null;
}

function getUserId() {
  var s = getStoredSession();
  return s && s.user ? s.user.id : null;
}

// Guarda progreso en Supabase vía RPC increment_samuel_progress
async function saveLeseProgress(nivel, score100) {
  const token = getAccessToken();
  if (!token) return false;
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_samuel_progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        p_nivel: nivel.toLowerCase(),
        p_exercise_type: 'leseverstehen',
        p_score: score100,
      }),
    });
    return response.ok;
  } catch (_) {
    return false;
  }
}

// ── Renderizado ───────────────────────────────────────────────────────────────

// Renderiza todos los niveles en el contenedor (página principal /leseverstehen/)
function renderLista(container) {
  const ui = getUi();
  const authed = isAuthenticated();
  const ORDEN = ['A1', 'A2', 'B1', 'B2'];
  const niveles = ORDEN.filter(n => TEXTOS.some(t => t.nivel === n));
  let html = '';
  niveles.forEach(nivel => {
    const grupo = TEXTOS.filter(t => t.nivel === nivel);
    const gridId = 'grid-' + nivel.toLowerCase();
    html += `<div class="lese-nivel-grupo">
      <div class="lese-nivel-header" data-target="${gridId}">
        <h2 class="lese-nivel-titulo"><a href="${buildLeseUrl(`${nivel.toLowerCase()}/`)}">${ui.levelLabel} ${nivel}</a></h2>
        <button class="lese-nivel-toggle" aria-expanded="false" aria-controls="${gridId}">
          <span class="lese-nivel-arrow" aria-hidden="true"></span>
        </button>
      </div>
      <div class="lese-grid" id="${gridId}" hidden>`;
    grupo.forEach(t => {
      const locked = t.requiresAuth && !authed;
      html += `<a class="lese-card${locked ? ' lese-card--locked' : ''}" href="${buildLeseUrl(`${t.nivel.toLowerCase()}/${t.slug}/`)}">
        <span class="lese-card-nivel">${t.nivel}</span>
        ${locked ? `<span class="lese-card-lock" aria-label="${ui.lockedBadge}">${ui.lockedBadge}</span>` : ''}
        <h3>${t.titulo}</h3>
        <p>${getCardDescription(t)}</p>
        <span class="lese-card-cta">${locked ? ui.cardCtaLocked : ui.cardCta}</span>
      </a>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;

  container.querySelectorAll('.lese-nivel-header').forEach(header => {
    header.addEventListener('click', function(e) {
      if (e.target.closest('a')) return;
      const grid = document.getElementById(header.dataset.target);
      const btn = header.querySelector('.lese-nivel-toggle');
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      grid.hidden = open;
    });
  });
}

// Renderiza solo los textos de un nivel (páginas /leseverstehen/a2/, /b1/, /b2/)
function renderListaNivel(container, nivel) {
  const ui = getUi();
  const authed = isAuthenticated();
  const grupo = TEXTOS.filter(t => t.nivel === nivel);
  if (!grupo.length) {
    container.innerHTML = `<p class="lese-error">${ui.notFoundLevel}</p>`;
    return;
  }
  let html = '<div class="lese-grid">';
  grupo.forEach(t => {
    const locked = t.requiresAuth && !authed;
    html += `<a class="lese-card${locked ? ' lese-card--locked' : ''}" href="${buildLeseUrl(`${t.nivel.toLowerCase()}/${t.slug}/`)}">
      <span class="lese-card-nivel">${t.nivel}</span>
      ${locked ? `<span class="lese-card-lock" aria-label="${ui.lockedBadge}">${ui.lockedBadge}</span>` : ''}
      <h3>${t.titulo}</h3>
      <p>${getCardDescription(t)}</p>
      <span class="lese-card-cta">${locked ? ui.cardCtaLocked : ui.cardCta}</span>
    </a>`;
  });
  html += `</div>
  <div class="lese-back">
    <a href="${buildLeseUrl()}" class="lese-volver">${ui.backAll}</a>
  </div>`;
  container.innerHTML = html;
}

function renderLectura(container, slug) {
  const ui = getUi();
  const texto = getTextoBySlug(slug);
  if (!texto) {
    container.innerHTML = `<p class="lese-error">${ui.notFoundText}</p>`;
    return;
  }

  // Gate de autenticación para textos restringidos
  if (texto.requiresAuth && !isAuthenticated()) {
    container.innerHTML = `
      <div class="lese-auth-gate">
        <div class="lese-auth-gate__icon" aria-hidden="true">🔒</div>
        <h2 class="lese-auth-gate__title">${ui.authGateTitle}</h2>
        <p class="lese-auth-gate__text">${ui.authGateText}</p>
        <a class="lese-auth-gate__btn" href="${buildLoginUrl()}">${ui.authGateBtn}</a>
      </div>
      <div class="lese-back">
        <a href="${buildLeseUrl(`${texto.nivel.toLowerCase()}/`)}" class="lese-volver">${ui.backLevel(texto.nivel)}</a>
      </div>
    `;
    return;
  }

  const parrafos = texto.texto.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');

  const preguntasHtml = texto.preguntas.map((p, i) => `
    <div class="lese-pregunta" id="pregunta-${i}">
      <p class="lese-pregunta-enunciado"><span class="lese-num">${i + 1}.</span> ${p.enunciado}</p>
      <div class="lese-opciones">
        <button class="lese-btn lese-btn-richtig" data-index="${i}" data-valor="true">${ui.optionTrue}</button>
        <button class="lese-btn lese-btn-falsch" data-index="${i}" data-valor="false">${ui.optionFalse}</button>
      </div>
      <p class="lese-feedback" aria-live="polite"></p>
    </div>
  `).join('');

  var leseFullscreen = false;

  container.innerHTML = `
    <div class="lese-lectura-wrap">
      <div class="lese-texto-col">
        <span class="lese-badge-nivel">${texto.nivel}</span>
        <h1 class="lese-titulo">${texto.titulo}</h1>
        <div class="lese-cuerpo">${parrafos}</div>
      </div>
      <div class="lese-ejercicio-col">
        <div class="lese-ejercicio-head">
          <h2 class="lese-ejercicio-titulo">${ui.exerciseTitle}</h2>
          <button class="lese-fullscreen-btn" data-action="lese-fullscreen" aria-label="Pantalla completa" title="Pantalla completa">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
          </button>
        </div>
        <p class="lese-ejercicio-sub">${ui.exerciseSub}</p>
        <div class="lese-preguntas">${preguntasHtml}</div>
        <div class="lese-resultado" hidden>
          <p class="lese-resultado-texto"></p>
          <button class="lese-btn-reiniciar">${ui.retry}</button>
        </div>
      </div>
    </div>
    <div class="lese-back">
      <a href="${buildLeseUrl(`${texto.nivel.toLowerCase()}/`)}" class="lese-volver">${ui.backLevel(texto.nivel)}</a>
    </div>
  `;

  var leseWrap = container.querySelector('.lese-lectura-wrap');
  var leseFullscreenBtn = container.querySelector('[data-action="lese-fullscreen"]');

  function toggleLeseFullscreen() {
    leseFullscreen = !leseFullscreen;
    leseWrap.classList.toggle('is-fullscreen', leseFullscreen);
    document.body.style.overflow = leseFullscreen ? 'hidden' : '';
    leseFullscreenBtn.innerHTML = leseFullscreen
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>';
  }

  leseFullscreenBtn.addEventListener('click', toggleLeseFullscreen);

  document.addEventListener('keydown', function onLeseEsc(e) {
    if (e.key === 'Escape' && leseFullscreen) {
      toggleLeseFullscreen();
    }
    if (!container.querySelector('.lese-lectura-wrap')) {
      document.removeEventListener('keydown', onLeseEsc);
    }
  });

  let respuestas = new Array(texto.preguntas.length).fill(null);
  let progressSaved = false;

  function comprobarFin() {
    if (respuestas.every(r => r !== null)) {
      const aciertos = respuestas.filter((r, i) => r === texto.preguntas[i].respuesta).length;
      const resultado = container.querySelector('.lese-resultado');
      const textoResultado = container.querySelector('.lese-resultado-texto');
      textoResultado.textContent = ui.result(aciertos, texto.preguntas.length);
      resultado.hidden = false;
      resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Guardar progreso en Supabase (una sola vez por intento)
      if (!progressSaved && isAuthenticated()) {
        progressSaved = true;
        const score100 = texto.preguntas.length > 0
          ? Math.round((aciertos / texto.preguntas.length) * 100)
          : 0;
        saveLeseProgress(texto.nivel, score100).then(saved => {
          if (saved) return;
          let saveError = resultado.querySelector('.lese-save-error');
          if (!saveError) {
            saveError = document.createElement('p');
            saveError.className = 'lese-save-error';
            resultado.appendChild(saveError);
          }
          saveError.textContent = 'No se pudo guardar el progreso. Recarga e inténtalo de nuevo.';
        });
      }
    }
  }

  container.addEventListener('click', e => {
    const btn = e.target.closest('.lese-btn[data-index]');
    if (!btn) return;

    const i = parseInt(btn.dataset.index, 10);
    const valor = btn.dataset.valor === 'true';
    const correcta = texto.preguntas[i].respuesta;
    const bloque = container.querySelector(`#pregunta-${i}`);
    const feedback = bloque.querySelector('.lese-feedback');

    bloque.querySelectorAll('.lese-btn[data-index]').forEach(b => {
      b.disabled = true;
      b.classList.remove('lese-btn-seleccionado', 'lese-correcto', 'lese-incorrecto');
    });

    btn.classList.add('lese-btn-seleccionado');
    if (valor === correcta) {
      btn.classList.add('lese-correcto');
      feedback.textContent = ui.feedbackOk;
      feedback.className = 'lese-feedback lese-feedback-ok';
    } else {
      btn.classList.add('lese-incorrecto');
      feedback.textContent = ui.feedbackError(correcta ? ui.optionTrue : ui.optionFalse);
      feedback.className = 'lese-feedback lese-feedback-error';
      const correctBtn = bloque.querySelector(`.lese-btn[data-valor="${correcta}"]`);
      if (correctBtn) correctBtn.classList.add('lese-correcto');
    }

    respuestas[i] = valor;
    comprobarFin();
  });

  const reiniciarBtn = container.querySelector('.lese-btn-reiniciar');
  if (reiniciarBtn) reiniciarBtn.addEventListener('click', () => {
    progressSaved = false;
    renderLectura(container, slug);
  });
}
