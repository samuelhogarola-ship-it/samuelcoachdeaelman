/**
 * progress-tracker.js
 * Marca ejercicios y textos como completados. Guarda en localStorage.
 * Clave: 'samuel_done' → JSON array de strings '{tipo}:{nivel}:{slug}'
 * Auto-inicializa leyendo la URL actual.
 */
(function () {
  const LS_KEY = 'samuel_done';

  function getDone() {
    try { return new Set(JSON.parse(localStorage.getItem(LS_KEY) || '[]')); }
    catch { return new Set(); }
  }

  function setDone(set) {
    localStorage.setItem(LS_KEY, JSON.stringify([...set]));
  }

  // Deriva tipo/nivel/slug desde la URL
  function parseCurrentPage() {
    const parts = location.pathname.replace(/^\/(?:de|en)\//, '/').split('/').filter(Boolean);
    // /leseverstehen/{nivel}/{slug}/
    if (parts[0] === 'leseverstehen' && parts[1] && parts[2]) {
      return { tipo: 'leseverstehen', nivel: parts[1], slug: parts[2] };
    }
    // /recursos/sprachbausteine/{nivel}/{slug}/
    if (parts[0] === 'recursos' && parts[1] === 'sprachbausteine' && parts[2] && parts[3]) {
      return { tipo: 'sprachbausteine', nivel: parts[2], slug: parts[3] };
    }
    return null;
  }

  function makeId(p) {
    return `${p.tipo}:${p.nivel}:${p.slug}`;
  }

  const LABELS = {
    es: { done: 'Completado', pending: 'Marcar como hecho' },
    de: { done: 'Erledigt',   pending: 'Als erledigt markieren' },
    en: { done: 'Done',       pending: 'Mark as done' },
  };

  function getLocale() {
    return document.documentElement.lang?.slice(0, 2) || 'es';
  }

  function render(page) {
    const id   = makeId(page);
    const done = getDone();
    const lang = getLocale();
    const L    = LABELS[lang] || LABELS.es;

    const btn = document.createElement('button');
    btn.className = 'progress-toggle' + (done.has(id) ? ' progress-toggle--done' : '');
    btn.setAttribute('aria-pressed', done.has(id) ? 'true' : 'false');
    btn.type = 'button';

    function updateBtn(isDone) {
      btn.className = 'progress-toggle' + (isDone ? ' progress-toggle--done' : '');
      btn.setAttribute('aria-pressed', isDone ? 'true' : 'false');
      btn.innerHTML = isDone
        ? `<span class="progress-toggle__icon" aria-hidden="true">✓</span>${L.done}`
        : `<span class="progress-toggle__icon" aria-hidden="true">○</span>${L.pending}`;
    }

    updateBtn(done.has(id));

    btn.addEventListener('click', () => {
      const current = getDone();
      const isDone  = current.has(id);
      if (isDone) { current.delete(id); } else { current.add(id); }
      setDone(current);
      updateBtn(!isDone);
    });

    // Inserta al final de <main> o del body
    const container = document.querySelector('main') || document.body;
    const wrap = document.createElement('div');
    wrap.className = 'progress-toggle-wrap';
    wrap.appendChild(btn);
    container.appendChild(wrap);
  }

  function init() {
    const page = parseCurrentPage();
    if (!page) return;
    render(page);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
