const LUECK_UI = {
  es: {
    levelLabel: "Nivel",
    homeTitle: "Elige un nivel para practicar",
    homeLead:
      "Practica Sprachbausteine para Goethe y TELC con textos reales convertidos en ejercicios interactivos. Cada nivel combina ejercicios tipo 1 y tipo 2 para trabajar conectores, vocabulario y estructura en contexto.",
    homeHint: "Los ejercicios aparecen agrupados por nivel para que entres rápido en A1, A2, B1 o B2.",
    homeModesTitle: "Así funcionan los ejercicios",
    homeLevelsTitle: "Después elige tu nivel",
    homeLevelsLead: "Abre solo el nivel que te interesa y entra directamente al ejercicio que quieras practicar.",
    levelLead: (level) =>
      `Ejercicios de huecos nivel ${level} con corrección inmediata y distractores de calidad.`,
    levelCount: (count) => `${count} ejercicios disponibles`,
    openLevel: (level) => `Ver página ${level}`,
    typeFilterTitle: "Elige el formato",
    allTypes: "Todos",
    cardType1: "Tipo 1",
    cardType2: "Tipo 2",
    cardMode1: "Opciones guiadas para completar huecos con apoyo visual y corrección inmediata.",
    cardMode2: "Banco de palabras con distractores de examen para colocar cada opción en su hueco correcto.",
    openExercise: "Abrir ejercicio →",
    backAll: "← Ver todos los niveles",
    backLevel: (level) => `← Volver a ${level}`,
    exerciseTitle: "Completa el texto",
    exerciseLead1:
      "Elige una opción para cada hueco y después pulsa corregir.",
    exerciseLead2:
      "Puedes arrastrar palabras al hueco correcto o pulsar un hueco y luego una palabra.",
    correct: "Corregir",
    retry: "Reiniciar",
    hits: "Aciertos",
    errors: "Errores",
    result: (hits, total) => `Resultado: ${hits} aciertos y ${total - hits} errores.`,
    empty: "Sin responder",
    answerLabel: "Respuesta correcta",
    selectWord: "Pulsa un hueco y luego una palabra del banco.",
    wordBankTitle: "Banco de palabras",
    bankHint: "15 palabras: 10 correctas y 5 distractores.",
    typeLabel: {
      type1: "Tipo 1",
      type2: "Tipo 2",
    },
  },
  de: {
    levelLabel: "Niveau",
    homeTitle: "Wähle ein Niveau",
    homeLead:
      "Trainiere Sprachbausteine für Goethe und TELC mit echten Texten als interaktive Übungen. Jedes Niveau kombiniert Typ 1 und Typ 2, damit du Konnektoren, Wortschatz und Strukturen im Kontext übst.",
    homeHint: "Die Übungen sind nach Niveau gebündelt, damit du direkt zu A1, A2, B1 oder B2 springen kannst.",
    homeModesTitle: "So funktionieren die Aufgabentypen",
    homeLevelsTitle: "Danach wählst du dein Niveau",
    homeLevelsLead: "Öffne nur das Niveau, das du gerade brauchst, und geh dann direkt in die passende Übung.",
    levelLead: (level) =>
      `Sprachbausteine auf Niveau ${level} mit sofortiger Korrektur und guten Distraktoren.`,
    levelCount: (count) => `${count} verfügbare Übungen`,
    openLevel: (level) => `Zur ${level}-Seite`,
    typeFilterTitle: "Wähle das Format",
    allTypes: "Alle",
    cardType1: "Typ 1",
    cardType2: "Typ 2",
    cardMode1: "Geführte Auswahlaufgabe mit klaren Optionen und sofortiger Korrektur direkt am Text.",
    cardMode2: "Wortbank mit guten Distraktoren, damit du die passende Lösung aktiv jeder Lücke zuordnest.",
    openExercise: "Übung öffnen →",
    backAll: "← Alle Niveaus ansehen",
    backLevel: (level) => `← Zurück zu ${level}`,
    exerciseTitle: "Ergänze den Text",
    exerciseLead1:
      "Wähle für jede Lücke eine Option und klicke danach auf Korrigieren.",
    exerciseLead2:
      "Du kannst Wörter ziehen oder zuerst auf eine Lücke und dann auf ein Wort klicken.",
    correct: "Korrigieren",
    retry: "Neu starten",
    hits: "Treffer",
    errors: "Fehler",
    result: (hits, total) => `Ergebnis: ${hits} Treffer und ${total - hits} Fehler.`,
    empty: "Keine Antwort",
    answerLabel: "Richtige Antwort",
    selectWord: "Klicke zuerst auf eine Lücke und danach auf ein Wort.",
    wordBankTitle: "Wortbank",
    bankHint: "15 Wörter: 10 richtig und 5 Distraktoren.",
    typeLabel: {
      type1: "Typ 1",
      type2: "Typ 2",
    },
  },
  en: {
    levelLabel: "Level",
    homeTitle: "Choose a level",
    homeLead:
      "Practise Sprachbausteine for Goethe and TELC with real texts turned into interactive tasks. Each level combines type 1 and type 2 so you can train connectors, vocabulary and structure in context.",
    homeHint: "The exercises are grouped by level so you can jump straight into A1, A2, B1 or B2.",
    homeModesTitle: "How the exercise types work",
    homeLevelsTitle: "Then choose your level",
    homeLevelsLead: "Open only the level you need right now and jump straight to the exercise you want to practise.",
    levelLead: (level) =>
      `Gap-fill exercises at ${level} level with instant correction and solid distractors.`,
    levelCount: (count) => `${count} exercises available`,
    openLevel: (level) => `Open ${level} page`,
    typeFilterTitle: "Choose the format",
    allTypes: "All",
    cardType1: "Type 1",
    cardType2: "Type 2",
    cardMode1: "Guided multiple-choice gap fill with clear support and instant correction.",
    cardMode2: "Word bank practice with exam-style distractors to place each option in the right gap.",
    openExercise: "Open exercise →",
    backAll: "← View all levels",
    backLevel: (level) => `← Back to ${level}`,
    exerciseTitle: "Complete the text",
    exerciseLead1:
      "Choose one option for each blank and then press check.",
    exerciseLead2:
      "You can drag words to a blank or click a blank and then a word.",
    correct: "Check",
    retry: "Reset",
    hits: "Correct",
    errors: "Errors",
    result: (hits, total) => `Result: ${hits} correct and ${total - hits} errors.`,
    empty: "No answer",
    answerLabel: "Correct answer",
    selectWord: "Click a blank first and then choose a word from the bank.",
    wordBankTitle: "Word bank",
    bankHint: "15 words: 10 correct and 5 distractors.",
    typeLabel: {
      type1: "Type 1",
      type2: "Type 2",
    },
  },
};

function getLueckLocale() {
  const lang = (document.documentElement.lang || "es").slice(0, 2);
  return LUECK_UI[lang] ? lang : "es";
}

function getLueckUi() {
  return LUECK_UI[getLueckLocale()];
}

function getLueckPrefix() {
  const pathname = window.location.pathname || "";
  if (pathname.startsWith("/de/")) return "/de";
  if (pathname.startsWith("/en/")) return "/en";
  return "";
}

function buildLueckUrl(path = "") {
  const prefix = getLueckPrefix();
  return `${prefix}/recursos/lueckentext/${path}`;
}

function getExercises() {
  return window.LUECKENTEXTE || [];
}

function getExercise(level, slug) {
  return getExercises().find((exercise) => (
    exercise.nivel === level && exercise.slug === slug
  )) || null;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderExerciseText(exercise, state, checked) {
  return exercise.paragraphs.map((paragraph) => `
    <p>${paragraph.map((segment) => {
      if (segment.type === "text") return escapeHtml(segment.value);
      const placed = state.placements ? state.placements[segment.id] : undefined;
      const selectedOption = state.selections ? state.selections[segment.id] : undefined;
      const selected = state.selectedBlankId === segment.id;
      const resultClass = checked
        ? (state.results && state.results[segment.id] ? " is-correct" : " is-wrong")
        : "";
      let blankLabel = `${segment.id}`;
      if (exercise.tipo === "type2" && placed) {
        blankLabel = `${segment.id}. ${placed.text}`;
      } else if (exercise.tipo === "type1" && selectedOption) {
        blankLabel = `${segment.id}. ${selectedOption}`;
      }
      return `<button class="lueck-blank${selected ? " is-selected" : ""}${resultClass}${placed ? " is-filled" : ""}" type="button" data-blank-id="${segment.id}"><span>${blankLabel}</span></button>`;
    }).join("")}</p>
  `).join("");
}

function renderCards(exercises) {
  const ui = getLueckUi();
  return exercises.map((exercise) => `
    <a class="lese-card" href="${buildLueckUrl(`${exercise.nivel.toLowerCase()}/${exercise.slug}/`)}">
      <span class="lese-card-nivel">${exercise.nivel}</span>
      <span class="lueck-card-type">${ui.typeLabel[exercise.tipo]}</span>
      <h3>${escapeHtml(exercise.titulo)}</h3>
      <p>${escapeHtml(exercise.descripcion)}</p>
      <span class="lese-card-cta">${ui.openExercise}</span>
    </a>
  `).join("");
}

function renderHome(container) {
  const ui = getLueckUi();
  const levels = ["A1", "A2", "B1", "B2"];
  const modeSection = `
    <section class="lueck-home-layout">
      <div class="lueck-home-info">
        <h3>${ui.homeModesTitle}</h3>
        <div class="lueck-mode-grid">
          <article class="lueck-mode-card">
            <span class="lueck-mode-kicker">${ui.typeLabel.type1}</span>
            <p>${ui.cardMode1}</p>
          </article>
          <article class="lueck-mode-card">
            <span class="lueck-mode-kicker">${ui.typeLabel.type2}</span>
            <p>${ui.cardMode2}</p>
          </article>
        </div>
      </div>
      <figure class="lueck-home-media">
        <img src="/assets/img/resources-exam-hero.webp" alt="Material de estudio para practicar alemán con ejercicios interactivos" width="1024" height="1024" loading="lazy">
      </figure>
    </section>
  `;
  const html = levels.map((level) => {
    const group = getExercises().filter((exercise) => exercise.nivel === level);
    if (!group.length) return "";

    return `
      <details class="lueck-level-block">
        <summary class="lueck-level-summary">
          <div class="lueck-level-head">
            <div>
              <span class="lueck-level-kicker">${ui.levelLabel}</span>
              <h2>${level}</h2>
              <p class="lueck-level-count">${ui.levelCount(group.length)}</p>
            </div>
            <p>${ui.levelLead(level)}</p>
          </div>
        </summary>
        <div class="lueck-level-panel">
          <div class="app-link-row lueck-level-actions">
            <a href="${buildLueckUrl(`${level.toLowerCase()}/`)}" class="btn btn-outline-teal">${ui.openLevel(level)}</a>
          </div>
          <div class="lese-grid">${renderCards(group)}</div>
        </div>
      </details>
    `;
  }).join("");

  container.innerHTML = `
    <section class="content-narrow lueck-copy-block">
      <h2>${ui.homeTitle}</h2>
      <p>${ui.homeLead}</p>
      <p class="lueck-home-hint">${ui.homeHint}</p>
    </section>
    ${modeSection}
    <section class="content-narrow lueck-copy-block">
      <h2>${ui.homeLevelsTitle}</h2>
      <p>${ui.homeLevelsLead}</p>
    </section>
    ${html}
  `;
}

function renderLevel(container, level) {
  const ui = getLueckUi();
  const group = getExercises().filter((exercise) => exercise.nivel === level);
  const counts = {
    all: group.length,
    type1: group.filter((exercise) => exercise.tipo === "type1").length,
    type2: group.filter((exercise) => exercise.tipo === "type2").length,
  };
  const state = {
    activeType: "all",
  };

  const render = () => {
    const visible = state.activeType === "all"
      ? group
      : group.filter((exercise) => exercise.tipo === state.activeType);

    container.innerHTML = `
      <section class="content-narrow lueck-copy-block">
        <h2>${ui.levelLabel} ${level}</h2>
        <p>${ui.levelLead(level)}</p>
      </section>
      <section class="lueck-type-filter">
        <div class="lueck-type-filter-head">
          <h3>${ui.typeFilterTitle}</h3>
          <p class="lueck-level-count">${ui.levelCount(visible.length)}</p>
        </div>
        <div class="lueck-type-filter-row">
          <button class="lueck-type-chip${state.activeType === "all" ? " is-active" : ""}" type="button" data-level-filter="all">${ui.allTypes} (${counts.all})</button>
          <button class="lueck-type-chip${state.activeType === "type1" ? " is-active" : ""}" type="button" data-level-filter="type1">${ui.typeLabel.type1} (${counts.type1})</button>
          <button class="lueck-type-chip${state.activeType === "type2" ? " is-active" : ""}" type="button" data-level-filter="type2">${ui.typeLabel.type2} (${counts.type2})</button>
        </div>
      </section>
      <div class="lese-grid">${renderCards(visible)}</div>
      <div class="lese-back">
        <a href="${buildLueckUrl()}" class="lese-volver">${ui.backAll}</a>
      </div>
    `;

    container.querySelectorAll("[data-level-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeType = button.dataset.levelFilter || "all";
        render();
      });
    });
  };

  render();
}

function renderType1OptionCard(blank, state, checked) {
  const selected = state.selections[blank.id] || "";
  const isCorrect = checked && selected === blank.answer;
  return `
    <article class="lueck-choice-card">
      <div class="lueck-choice-top">
        <span class="lueck-choice-number">${blank.id}</span>
        ${checked ? `<span class="lueck-choice-status${isCorrect ? " is-correct" : " is-wrong"}">${isCorrect ? "OK" : "X"}</span>` : ""}
      </div>
      <div class="lueck-choice-options">
        ${blank.options.map((option) => {
          const isSelected = selected === option;
          const classes = ["lueck-option"];
          if (isSelected) classes.push("is-selected");
          if (checked && option === blank.answer) classes.push("is-correct");
          if (checked && isSelected && option !== blank.answer) classes.push("is-wrong");
          return `<button class="${classes.join(" ")}" type="button" data-option-blank="${blank.id}" data-option-value="${escapeHtml(option)}">${escapeHtml(option)}</button>`;
        }).join("")}
      </div>
    </article>
  `;
}

function renderType1Options(exercise, state, checked) {
  return exercise.blanks.map((blank) => renderType1OptionCard(blank, state, checked)).join("");
}

function getAvailableWords(exercise, state) {
  const usedIds = new Set(Object.values(state.placements).filter(Boolean).map((item) => item.id));
  return exercise.wordBank.filter((item) => !usedIds.has(item.id));
}

function getNextBlankId(exercise, state, currentBlankId) {
  const blanks = exercise.blanks.map((blank) => blank.id);
  const currentIndex = blanks.indexOf(currentBlankId);
  const ordered = currentIndex >= 0
    ? [...blanks.slice(currentIndex + 1), ...blanks.slice(0, currentIndex + 1)]
    : blanks;

  const next = ordered.find((blankId) => !state.placements[blankId]);
  return next || null;
}

function renderType2Bank(exercise, state, checked) {
  const ui = getLueckUi();
  const words = getAvailableWords(exercise, state);
  return `
    <div class="lueck-bank-head">
      <div>
        <h3>${ui.wordBankTitle}</h3>
        <p>${ui.bankHint}</p>
      </div>
      <p class="lueck-bank-select">${ui.selectWord}</p>
    </div>
    <div class="lueck-bank-dropzone" data-word-bank="true">
      ${words.map((item) => `
        <button
          class="lueck-word-chip"
          type="button"
          draggable="${checked ? "false" : "true"}"
          data-word-id="${item.id}"
          data-word-text="${escapeHtml(item.text)}">
          ${escapeHtml(item.text)}
        </button>
      `).join("")}
    </div>
  `;
}

function renderType2Answers(exercise, state, checked) {
  const ui = getLueckUi();
  return exercise.blanks.map((blank) => {
    const placed = state.placements[blank.id];
    const correct = checked ? (state.results ? state.results[blank.id] : null) : null;
    const isActive = !checked && state.selectedBlankId === blank.id;
    return `
      <article class="lueck-answer-card${checked ? (correct ? " is-correct" : " is-wrong") : ""}${isActive ? " is-active" : ""}">
        <div class="lueck-choice-top">
          <span class="lueck-choice-number">${blank.id}</span>
          <span class="lueck-answer-current">${placed ? escapeHtml(placed.text) : ui.empty}</span>
        </div>
        ${checked && !correct ? `<p class="lueck-answer-solution">${ui.answerLabel}: <strong>${escapeHtml(blank.answer)}</strong></p>` : ""}
      </article>
    `;
  }).join("");
}

function computeType1Results(exercise, state) {
  const results = {};
  let hits = 0;
  exercise.blanks.forEach((blank) => {
    const correct = state.selections[blank.id] === blank.answer;
    results[blank.id] = correct;
    if (correct) hits += 1;
  });
  return { results, hits };
}

function computeType2Results(exercise, state) {
  const results = {};
  let hits = 0;
  exercise.blanks.forEach((blank) => {
    const placed = state.placements[blank.id];
    const correct = placed && placed.text === blank.answer;
    results[blank.id] = Boolean(correct);
    if (correct) hits += 1;
  });
  return { results, hits };
}

function renderExercise(container, level, slug) {
  const ui = getLueckUi();
  const exercise = getExercise(level, slug);
  if (!exercise) return;

  const state = {
    selections: {},
    placements: {},
    selectedBlankId: (exercise.blanks[0] ? exercise.blanks[0].id : null),
    checked: false,
    results: {},
    hits: 0,
  };

  const update = () => {
    container.innerHTML = `
      <div class="lueck-reader">
        <div class="lueck-text-col">
          <div class="lueck-heading-row">
            <span class="lese-card-nivel">${exercise.nivel}</span>
            <span class="lueck-card-type">${ui.typeLabel[exercise.tipo]}</span>
          </div>
          <h2 class="lese-titulo">${escapeHtml(exercise.titulo)}</h2>
          <p class="lueck-reader-lead">${escapeHtml(exercise.tipo === "type1" ? ui.exerciseLead1 : ui.exerciseLead2)}</p>
          <div class="lese-cuerpo lueck-text-body">
            ${renderExerciseText(exercise, state, state.checked)}
          </div>
        </div>
        <div class="lueck-panel">
          <div class="lueck-panel-top">
            <h3>${ui.exerciseTitle}</h3>
            <div class="lueck-score">
              <span>${ui.hits}: <strong>${state.hits}</strong></span>
              <span>${ui.errors}: <strong>${exercise.blanks.length - state.hits}</strong></span>
            </div>
          </div>
          ${exercise.tipo === "type1"
            ? `<div class="lueck-choice-grid">${renderType1Options(exercise, state, state.checked)}</div>`
            : `
              ${renderType2Bank(exercise, state, state.checked)}
              <div class="lueck-answer-grid">${renderType2Answers(exercise, state, state.checked)}</div>
            `}
          <div class="lueck-actions">
            <button class="lueck-action-btn" type="button" data-action="check">${ui.correct}</button>
            <button class="lueck-action-btn is-secondary" type="button" data-action="reset">${ui.retry}</button>
          </div>
          ${state.checked ? `<p class="lueck-result-text">${ui.result(state.hits, exercise.blanks.length)}</p>` : ""}
        </div>
      </div>
      <div class="lese-back">
        <a href="${buildLueckUrl(`${exercise.nivel.toLowerCase()}/`)}" class="lese-volver">${ui.backLevel(exercise.nivel)}</a>
      </div>
    `;
  };

  const assignWord = (blankId, wordId) => {
    if (state.checked) return;
    const selectedWord = exercise.wordBank.find((item) => item.id === wordId);
    if (!selectedWord) return;

    Object.keys(state.placements).forEach((key) => {
      if (state.placements[key] && state.placements[key].id === wordId) delete state.placements[key];
    });

    state.placements[blankId] = selectedWord;
    state.selectedBlankId = getNextBlankId(exercise, state, blankId);
    update();
  };

  update();

  container.addEventListener("click", (event) => {
    const optionButton = event.target.closest("[data-option-blank]");
    if (optionButton && !state.checked) {
      const blankId = Number(optionButton.getAttribute("data-option-blank"));
      state.selections[blankId] = optionButton.getAttribute("data-option-value");
      const allIds = exercise.blanks.map((b) => b.id);
      const idx = allIds.indexOf(blankId);
      const ordered = [...allIds.slice(idx + 1), ...allIds.slice(0, idx + 1)];
      const next = ordered.find((id) => !state.selections[id]);
      state.selectedBlankId = next || blankId;
      update();
      return;
    }

    const blankButton = event.target.closest("[data-blank-id]");
    if (blankButton && !state.checked) {
      const blankId = Number(blankButton.getAttribute("data-blank-id"));
      if (exercise.tipo === "type2") {
        if (state.selectedBlankId === blankId && state.placements[blankId]) {
          delete state.placements[blankId];
          state.selectedBlankId = blankId;
        } else {
          state.selectedBlankId = blankId;
        }
      } else {
        state.selectedBlankId = blankId;
      }
      update();
      return;
    }

    const wordButton = event.target.closest("[data-word-id]");
    if (wordButton && exercise.tipo === "type2" && !state.checked) {
      const blankId = state.selectedBlankId;
      if (!blankId) return;
      assignWord(blankId, wordButton.getAttribute("data-word-id"));
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;

    const action = actionButton.getAttribute("data-action");
    if (action === "reset") {
      state.selections = {};
      state.placements = {};
      state.selectedBlankId = (exercise.blanks[0] ? exercise.blanks[0].id : null);
      state.checked = false;
      state.results = {};
      state.hits = 0;
      update();
      return;
    }

    if (action === "check") {
      const outcome = exercise.tipo === "type1"
        ? computeType1Results(exercise, state)
        : computeType2Results(exercise, state);
      state.checked = true;
      state.results = outcome.results;
      state.hits = outcome.hits;
      update();
    }
  });

  container.addEventListener("dragstart", (event) => {
    const wordButton = event.target.closest("[data-word-id]");
    if (!wordButton || state.checked) return;
    if (event.dataTransfer) event.dataTransfer.setData("text/plain", wordButton.getAttribute("data-word-id"));
  });

  container.addEventListener("dragover", (event) => {
    if (event.target.closest("[data-blank-id]") || event.target.closest("[data-word-bank='true']")) {
      event.preventDefault();
    }
  });

  container.addEventListener("drop", (event) => {
    const wordId = event.dataTransfer ? event.dataTransfer.getData("text/plain") : null;
    if (!wordId || state.checked) return;

    const blankButton = event.target.closest("[data-blank-id]");
    if (blankButton) {
      event.preventDefault();
      assignWord(Number(blankButton.getAttribute("data-blank-id")), wordId);
      return;
    }

    const bankZone = event.target.closest("[data-word-bank='true']");
    if (bankZone) {
      event.preventDefault();
      Object.keys(state.placements).forEach((key) => {
        if (state.placements[key] && state.placements[key].id === wordId) delete state.placements[key];
      });
      update();
    }
  });
}

function initLueckentext() {
  const container = document.querySelector("#lueck-app");
  if (!container || typeof LUECKENTEXTE === "undefined") return;

  const view = container.dataset.view;
  const level = container.dataset.level;
  const slug = container.dataset.slug;

  if (view === "home") renderHome(container);
  if (view === "level") renderLevel(container, level);
  if (view === "exercise") renderExercise(container, level, slug);
}

window.addEventListener("load", initLueckentext);
