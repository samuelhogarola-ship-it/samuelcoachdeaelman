// Lógica de renderizado para Leseverstehen.
// Los datos (array TEXTOS) están en leseverstehen-data.js.
// Carga ese archivo antes que este en el HTML.

function getTextoBySlug(slug) {
  return TEXTOS.find(t => t.slug === slug) || null;
}

function getTextos() {
  return TEXTOS;
}

// Renderiza todos los niveles en el contenedor (página principal /leseverstehen/)
function renderLista(container) {
  const ORDEN = ['A1', 'A2', 'B1', 'B2'];
  const niveles = ORDEN.filter(n => TEXTOS.some(t => t.nivel === n));
  let html = '';
  niveles.forEach(nivel => {
    const grupo = TEXTOS.filter(t => t.nivel === nivel);
    html += `<div class="lese-nivel-grupo">
      <h2 class="lese-nivel-titulo"><a href="/leseverstehen/${nivel.toLowerCase()}/">Nivel ${nivel}</a></h2>
      <div class="lese-grid">`;
    grupo.forEach(t => {
      html += `<a class="lese-card" href="/leseverstehen/${t.nivel.toLowerCase()}/${t.slug}/">
        <span class="lese-card-nivel">${t.nivel}</span>
        <h3>${t.titulo}</h3>
        <p>${t.descripcion}</p>
        <span class="lese-card-cta">Leer y practicar →</span>
      </a>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}

// Renderiza solo los textos de un nivel (páginas /leseverstehen/a2/, /b1/, /b2/)
function renderListaNivel(container, nivel) {
  const grupo = TEXTOS.filter(t => t.nivel === nivel);
  if (!grupo.length) {
    container.innerHTML = '<p class="lese-error">Nivel no encontrado.</p>';
    return;
  }
  let html = '<div class="lese-grid">';
  grupo.forEach(t => {
    html += `<a class="lese-card" href="/leseverstehen/${t.nivel.toLowerCase()}/${t.slug}/">
      <span class="lese-card-nivel">${t.nivel}</span>
      <h3>${t.titulo}</h3>
      <p>${t.descripcion}</p>
      <span class="lese-card-cta">Leer y practicar →</span>
    </a>`;
  });
  html += `</div>
  <div class="lese-back">
    <a href="/leseverstehen/" class="lese-volver">← Ver todos los niveles</a>
  </div>`;
  container.innerHTML = html;
}

function renderLectura(container, slug) {
  const texto = getTextoBySlug(slug);
  if (!texto) {
    container.innerHTML = '<p class="lese-error">Texto no encontrado.</p>';
    return;
  }

  const parrafos = texto.texto.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');

  const preguntasHtml = texto.preguntas.map((p, i) => `
    <div class="lese-pregunta" id="pregunta-${i}">
      <p class="lese-pregunta-enunciado"><span class="lese-num">${i + 1}.</span> ${p.enunciado}</p>
      <div class="lese-opciones">
        <button class="lese-btn lese-btn-richtig" data-index="${i}" data-valor="true">Richtig</button>
        <button class="lese-btn lese-btn-falsch" data-index="${i}" data-valor="false">Falsch</button>
      </div>
      <p class="lese-feedback" aria-live="polite"></p>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="lese-lectura-wrap">
      <div class="lese-texto-col">
        <span class="lese-badge-nivel">${texto.nivel}</span>
        <h1 class="lese-titulo">${texto.titulo}</h1>
        <div class="lese-cuerpo">${parrafos}</div>
      </div>
      <div class="lese-ejercicio-col">
        <h2 class="lese-ejercicio-titulo">¿Has entendido el texto?</h2>
        <p class="lese-ejercicio-sub">Indica si cada frase es <strong>Richtig</strong> (verdadero) o <strong>Falsch</strong> (falso).</p>
        <div class="lese-preguntas">${preguntasHtml}</div>
        <div class="lese-resultado" hidden>
          <p class="lese-resultado-texto"></p>
          <button class="lese-btn-reiniciar">Intentar de nuevo</button>
        </div>
      </div>
    </div>
    <div class="lese-back">
      <a href="/leseverstehen/${texto.nivel.toLowerCase()}/" class="lese-volver">← Volver a ${texto.nivel}</a>
    </div>
  `;

  let respuestas = new Array(texto.preguntas.length).fill(null);

  function comprobarFin() {
    if (respuestas.every(r => r !== null)) {
      const aciertos = respuestas.filter((r, i) => r === texto.preguntas[i].respuesta).length;
      const resultado = container.querySelector('.lese-resultado');
      const textoResultado = container.querySelector('.lese-resultado-texto');
      textoResultado.textContent = `Resultado: ${aciertos} de ${texto.preguntas.length} correctas.`;
      resultado.hidden = false;
      resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
      feedback.textContent = '✓ Richtig!';
      feedback.className = 'lese-feedback lese-feedback-ok';
    } else {
      btn.classList.add('lese-incorrecto');
      feedback.textContent = `✗ Falsch. Die richtige Antwort ist: ${correcta ? 'Richtig' : 'Falsch'}.`;
      feedback.className = 'lese-feedback lese-feedback-error';
      const correctBtn = bloque.querySelector(`.lese-btn[data-valor="${correcta}"]`);
      if (correctBtn) correctBtn.classList.add('lese-correcto');
    }

    respuestas[i] = valor;
    comprobarFin();
  });

  container.querySelector('.lese-btn-reiniciar')?.addEventListener('click', () => {
    renderLectura(container, slug);
  });
}
