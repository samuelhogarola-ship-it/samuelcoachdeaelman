(() => {
  const root = document.querySelector("[data-german-games]");
  if (!root) return;

  const board = root.querySelector("[data-board]");
  const title = root.querySelector("[data-game-title]");
  const scoreEl = root.querySelector("[data-score]");
  const roundEl = root.querySelector("[data-round]");
  const timerEl = root.querySelector("[data-timer]");
  const timerBar = root.querySelector("[data-timer-bar]");
  const timerBarFill = timerBar ? timerBar.querySelector("span") : null;
  const streakEl = root.querySelector("[data-streak]");
  const streakLabelEl = root.querySelector("[data-streak-label]");
  const statusEl = root.querySelector("[data-status]");
  const focusHintEl = root.querySelector("[data-focus-hint]");
  const questionPanel = root.querySelector("[data-question-panel]");
  const questionEl = root.querySelector("[data-question]");
  const optionsEl = root.querySelector("[data-options]");
  const feedbackEl = root.querySelector("[data-feedback]");
  const feedbackIconEl = root.querySelector("[data-feedback-icon]");
  const feedbackTextEl = root.querySelector("[data-feedback-text]");
  const ruleTagEl = root.querySelector("[data-rule-tag]");
  const levelSelect = root.querySelector("[data-level]");
  const noTimerCheckbox = root.querySelector("[data-no-timer]");
  const revealButton = root.querySelector("[data-reveal]");
  const startButton = root.querySelector("[data-start]");
  const resetButton = root.querySelector("[data-reset]");
  const modeButtons = Array.from(root.querySelectorAll("[data-mode]"));
  const gamesPanel = document.getElementById("games-panel");

  const items = [
    { id: "pass", noun: "Pass", article: "der", acc: "einen", word: "der Pass", category: "Reise", initial: "P", roomHint: "Dokument", shape: "rect", tone: "blue" },
    { id: "uhr", noun: "Uhr", article: "die", acc: "eine", word: "die Uhr", category: "Alltag", initial: "U", roomHint: "Zeit", shape: "circle", tone: "gold" },
    { id: "buch", noun: "Buch", article: "das", acc: "ein", word: "das Buch", category: "Schule", initial: "B", roomHint: "Lesen", shape: "book", tone: "green" },
    { id: "apfel", noun: "Apfel", article: "der", acc: "einen", word: "der Apfel", category: "Essen", initial: "A", roomHint: "Essen", shape: "circle", tone: "red" },
    { id: "tasche", noun: "Tasche", article: "die", acc: "eine", word: "die Tasche", category: "Reise", initial: "T", roomHint: "Gepaeck", shape: "bag", tone: "purple" },
    { id: "bett", noun: "Bett", article: "das", acc: "ein", word: "das Bett", category: "Haus", initial: "B", roomHint: "Zimmer", shape: "rect", tone: "teal" },
    { id: "schluessel", noun: "Schlüssel", article: "der", acc: "einen", word: "der Schlüssel", category: "Haus", initial: "S", roomHint: "Tür", shape: "key", tone: "gold" },
    { id: "brille", noun: "Brille", article: "die", acc: "eine", word: "die Brille", category: "Alltag", initial: "B", roomHint: "Sehen", shape: "glasses", tone: "blue" },
    { id: "heft", noun: "Heft", article: "das", acc: "ein", word: "das Heft", category: "Schule", initial: "H", roomHint: "Notizen", shape: "book", tone: "green" },
    { id: "koffer", noun: "Koffer", article: "der", acc: "einen", word: "der Koffer", category: "Reise", initial: "K", roomHint: "Gepäck", shape: "bag", tone: "purple" },
    { id: "lampe", noun: "Lampe", article: "die", acc: "eine", word: "die Lampe", category: "Haus", initial: "L", roomHint: "Licht", shape: "lamp", tone: "red" },
    { id: "messer", noun: "Messer", article: "das", acc: "ein", word: "das Messer", category: "Essen", initial: "M", roomHint: "Küche", shape: "rect", tone: "teal" },
    { id: "schuh", noun: "Schuh", article: "der", acc: "einen", word: "der Schuh", category: "Alltag", initial: "S", roomHint: "Fuß", shape: "rect", tone: "purple" },
    { id: "gabel", noun: "Gabel", article: "die", acc: "eine", word: "die Gabel", category: "Essen", initial: "G", roomHint: "Küche", shape: "rect", tone: "gold" }
  ];

  const rooms = ["Zimmer 1", "Zimmer 2", "Zimmer 3", "Zimmer 4"];
  const places = [
    { id: "auf", phrase: "auf dem Bett", short: "auf dem Bett" },
    { id: "unter", phrase: "unter dem Tisch", short: "unter dem Tisch" },
    { id: "neben", phrase: "neben der Lampe", short: "neben der Lampe" },
    { id: "in", phrase: "im Schrank", short: "im Schrank" }
  ];

  const titles = {
    paquete: "El Paquete Sospechoso",
    contrabando: "Contrabando de Palabras",
    hotel: "Hotel Zimmer Chaos"
  };

  const STORAGE_PREFIX = "ga-games-best-streak-";

  const readBestStreak = (mode) => {
    try {
      const raw = window.localStorage.getItem(STORAGE_PREFIX + mode);
      return raw ? parseInt(raw, 10) || 0 : 0;
    } catch (_error) {
      return 0;
    }
  };

  const writeBestStreak = (mode, value) => {
    try {
      window.localStorage.setItem(STORAGE_PREFIX + mode, String(value));
    } catch (_error) {
      /* localStorage puede fallar en modo privado; la racha simplemente no persiste */
    }
  };

  const state = {
    mode: "paquete",
    level: "a1",
    round: 1,
    score: 0,
    streak: 0,
    bestStreak: readBestStreak("paquete"),
    timer: 0,
    timerTotal: 0,
    timerId: null,
    locked: false,
    current: null
  };

  const shuffle = (array) => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const sample = (array, count) => shuffle(array).slice(0, count);
  const choice = (array) => array[Math.floor(Math.random() * array.length)];

  const isBoosted = () => state.streak >= 3;
  const adaptiveCount = (base, max) => Math.min(max, base + (state.streak >= 6 ? 2 : state.streak >= 3 ? 1 : 0));
  const adaptiveSeconds = (base) => Math.max(4, base - (state.streak >= 6 ? 2 : state.streak >= 3 ? 1 : 0));

  const setStatus = (text) => {
    statusEl.textContent = text;
  };

  const showFocusHint = (skill) => {
    if (!focusHintEl) return;
    const boostNote = isBoosted() ? " · dificultad subida 🔥" : "";
    focusHintEl.textContent = `🎯 Esta ronda entrena: ${skill}${boostNote}`;
    focusHintEl.hidden = false;
  };

  const hideFocusHint = () => {
    if (!focusHintEl) return;
    focusHintEl.hidden = true;
  };

  const updateMeta = () => {
    title.textContent = titles[state.mode];
    scoreEl.textContent = state.score;
    roundEl.textContent = state.round;
    timerEl.textContent = state.timer;
    if (streakEl) streakEl.textContent = state.streak;
    if (streakLabelEl) {
      streakLabelEl.textContent = state.streak >= 3 ? `racha 🔥 (mejor ${state.bestStreak})` : `racha (mejor ${state.bestStreak})`;
    }
  };

  const clearTimer = () => {
    if (state.timerId) window.clearInterval(state.timerId);
    state.timerId = null;
  };

  const setTimerBar = (ratio, urgent) => {
    if (!timerBarFill || !timerBar) return;
    timerBarFill.style.width = `${Math.max(0, Math.min(1, ratio)) * 100}%`;
    timerBar.classList.toggle("is-urgent", Boolean(urgent));
    timerBar.classList.toggle("is-infinite", ratio === -1);
  };

  const startCountdown = (seconds, done) => {
    clearTimer();
    revealButton.hidden = true;

    if (noTimerCheckbox.checked) {
      state.timer = 0;
      timerEl.textContent = "∞";
      setTimerBar(-1, false);
      revealButton.hidden = false;
      revealButton.onclick = () => {
        revealButton.hidden = true;
        revealButton.onclick = null;
        done();
      };
      return;
    }

    state.timer = seconds;
    state.timerTotal = seconds;
    updateMeta();
    setTimerBar(1, false);
    state.timerId = window.setInterval(() => {
      state.timer -= 1;
      updateMeta();
      setTimerBar(state.timer / state.timerTotal, state.timer <= 3);
      if (state.timer <= 0) {
        clearTimer();
        done();
      }
    }, 1000);
  };

  const visualMarkup = (item) => `
    <span class="game-item-visual game-item-${item.tone} game-shape-${item.shape}" aria-hidden="true"></span>
  `;

  const renderCards = (cards, options = {}) => {
    const { kind = "package" } = options;
    board.className = `game-table game-table-${kind}`;
    board.innerHTML = cards
      .map((card, index) => `
        <button class="game-memory-card is-open" type="button" data-card="${card.id}" disabled>
          <span class="game-card-index">${index + 1}</span>
          <span class="game-card-flip">
            <span class="game-card-face game-card-face-front" aria-hidden="true">
              ${visualMarkup(card)}
              <span class="game-card-word">?</span>
              <span class="game-card-meta">paquete cerrado</span>
            </span>
            <span class="game-card-face game-card-face-back">
              ${visualMarkup(card)}
              <span class="game-card-word">${card.word}</span>
              <span class="game-card-meta">${card.category}</span>
            </span>
          </span>
        </button>
      `)
      .join("");
  };

  const closeCards = () => {
    board.classList.add("is-memory-hidden");
    board.querySelectorAll(".game-memory-card").forEach((card) => {
      card.classList.remove("is-open");
      card.disabled = false;
    });
  };

  const renderSuitcase = (cards, hidden = false) => {
    board.className = `game-table game-table-suitcase${hidden ? " is-memory-hidden" : ""}`;
    board.innerHTML = `
      <div class="game-suitcase">
        <div class="game-suitcase-lid"></div>
        <div class="game-suitcase-grid">
          ${cards
            .map((card) => `
              <div class="game-suitcase-item">
                ${visualMarkup(card)}
                <span>${hidden ? "?" : card.word}</span>
              </div>
            `)
            .join("")}
        </div>
      </div>
    `;
  };

  const renderHotel = (assignments, hidden = false) => {
    board.className = `game-table game-table-hotel${hidden ? " is-memory-hidden" : ""}`;
    board.innerHTML = rooms
      .map((room, index) => {
        const roomItems = assignments.filter((entry) => entry.room === room);
        return `
          <article class="game-room">
            <strong>${room}</strong>
            <div class="game-room-spots">
              ${roomItems
                .map((entry) => `
                  <div class="game-room-item">
                    ${visualMarkup(entry.item)}
                    <span>${hidden ? "?" : entry.item.word}</span>
                    <small>${hidden ? "Ort versteckt" : entry.place.short}</small>
                  </div>
                `)
                .join("")}
            </div>
            <span class="game-room-number">${index + 1}</span>
          </article>
        `;
      })
      .join("");
  };

  const showRuleTag = (skill) => {
    if (!ruleTagEl) return;
    ruleTagEl.textContent = skill;
    ruleTagEl.hidden = !skill;
  };

  const ask = (question, options, onAnswer, skill) => {
    questionPanel.hidden = false;
    questionEl.textContent = question;
    feedbackTextEl.textContent = "";
    feedbackIconEl.textContent = "";
    showRuleTag(skill);
    optionsEl.innerHTML = options
      .map((option) => `<button class="game-option" type="button" data-value="${option.value}">${option.label}</button>`)
      .join("");
    optionsEl.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => onAnswer(button.dataset.value, button));
    });
    hideFocusHint();
  };

  const askOnBoard = (question, onAnswer, skill) => {
    questionPanel.hidden = false;
    questionEl.textContent = question;
    feedbackTextEl.textContent = "";
    feedbackIconEl.textContent = "";
    showRuleTag(skill);
    optionsEl.innerHTML = "";
    board.querySelectorAll(".game-memory-card").forEach((card) => {
      card.addEventListener("click", () => {
        board.querySelectorAll(".game-memory-card").forEach((other) => { other.disabled = true; });
        card.classList.add("is-open");
        window.setTimeout(() => onAnswer(card.dataset.card, card), 550);
      });
    });
    hideFocusHint();
  };

  const popPoints = (button, delta) => {
    if (!button) return;
    const pop = document.createElement("span");
    pop.className = `game-point-pop ${delta >= 0 ? "is-positive" : "is-negative"}`;
    pop.textContent = delta >= 0 ? `+${delta}` : `${delta}`;
    button.appendChild(pop);
    window.setTimeout(() => pop.remove(), 900);
  };

  const finishAnswer = (isCorrect, explanation, button) => {
    if (state.locked) return;
    state.locked = true;

    let delta;
    if (isCorrect) {
      state.streak += 1;
      const streakBonus = state.streak >= 5 ? 6 : state.streak >= 3 ? 3 : 0;
      delta = (state.level === "a2" ? 12 : 10) + streakBonus;
      state.score += delta;
      if (state.streak > state.bestStreak) {
        state.bestStreak = state.streak;
        writeBestStreak(state.mode, state.bestStreak);
      }
    } else {
      state.streak = 0;
      delta = -4;
      state.score = Math.max(0, state.score + delta);
    }

    optionsEl.querySelectorAll("button").forEach((option) => {
      option.disabled = true;
      option.classList.toggle("is-picked", option === button);
      option.classList.toggle(isCorrect ? "is-correct" : "is-wrong", option === button);
    });
    board.querySelectorAll(".game-memory-card").forEach((card) => {
      card.disabled = true;
      card.classList.toggle("is-picked", card === button);
      card.classList.toggle(isCorrect ? "is-correct" : "is-wrong", card === button);
    });

    popPoints(button, delta);

    feedbackIconEl.textContent = isCorrect ? "✅" : "❌";
    feedbackTextEl.textContent = `${isCorrect ? "Correcto." : "Casi."} ${explanation}`;
    feedbackEl.classList.toggle("is-correct", isCorrect);
    feedbackEl.classList.toggle("is-wrong", !isCorrect);

    state.round += 1;
    updateMeta();
    startButton.textContent = "Siguiente ronda";
    setStatus(
      isCorrect && state.streak >= 3
        ? `🔥 Racha de ${state.streak} aciertos. Sigue así.`
        : "Ronda terminada. Prepara otra cuando quieras."
    );
  };

  const packageRound = () => {
    const count = adaptiveCount(state.level === "a2" ? 7 : 6, 9);
    const cards = sample(items, count);
    const target = choice(cards);
    const taskTypes = state.level === "a2"
      ? ["article", "category", "initial", "exact"]
      : ["article", "category", "exact"];
    const task = choice(taskTypes);

    const labels = {
      article: {
        question: `Entrega un paquete con artículo ${target.article}.`,
        check: (item) => item.article === target.article,
        skill: "Género gramatical (der/die/das)",
        explain: (selected, correct) => correct
          ? `${selected.word} lleva el artículo ${selected.article}, tal y como pedía la pista.`
          : `Buscábamos artículo ${target.article}; ${selected.word} lleva ${selected.article}.`
      },
      category: {
        question: `Entrega algo de la categoría ${target.category}.`,
        check: (item) => item.category === target.category,
        skill: "Categoría semántica",
        explain: (selected, correct) => correct
          ? `${selected.word} pertenece a ${selected.category}, la categoría pedida.`
          : `Buscábamos la categoría ${target.category}; ${selected.word} es de ${selected.category}.`
      },
      initial: {
        question: `Entrega una palabra que empiece por ${target.initial}.`,
        check: (item) => item.initial === target.initial,
        skill: "Letra inicial",
        explain: (selected, correct) => correct
          ? `${selected.word} empieza por ${selected.initial}, la letra pedida.`
          : `Buscábamos una palabra que empezara por ${target.initial}; elegiste ${selected.word}.`
      },
      exact: {
        question: `Entrega exactamente ${target.word}.`,
        check: (item) => item.id === target.id,
        skill: "Memoria exacta",
        explain: (selected, correct) => correct
          ? `Acertaste: era ${target.word}.`
          : `El paquete buscado era ${target.word}, no ${selected.word}.`
      }
    };

    const currentTask = labels[task];
    state.current = { cards, target, task };
    renderCards(cards, { kind: "package" });
    setStatus("Memoriza los paquetes. Cuando se cierren, elige sin ver la palabra.");
    showFocusHint(currentTask.skill);
    questionPanel.hidden = true;

    startCountdown(adaptiveSeconds(state.level === "a2" ? 7 : 6), () => {
      closeCards();
      askOnBoard(currentTask.question, (value, card) => {
        const selected = cards.find((item) => item.id === value);
        const correct = currentTask.check(selected);
        finishAnswer(correct, currentTask.explain(selected, correct), card);
      }, currentTask.skill);
    });
  };

  const contrabandRound = () => {
    const count = adaptiveCount(state.level === "a2" ? 7 : 6, 9);
    const suitcase = sample(items, count);
    const target = Math.random() > 0.25 ? choice(suitcase) : choice(items.filter((item) => !suitcase.some((card) => card.id === item.id)));
    const isInside = suitcase.some((item) => item.id === target.id);
    const askArticle = isInside || Math.random() > 0.4;
    const skill = askArticle ? "Acusativo indefinido (einen/eine/ein)" : "Memoria de contenido";

    state.current = { suitcase, target, isInside };
    renderSuitcase(suitcase, false);
    setStatus("Memoriza la maleta. Luego tendrás que declarar un objeto ante aduanas.");
    showFocusHint(skill);
    questionPanel.hidden = true;

    startCountdown(adaptiveSeconds(state.level === "a2" ? 7 : 6), () => {
      renderSuitcase(suitcase, true);
      if (askArticle) {
        ask(`Declara en acusativo: Ich habe ___ ${target.noun}.`, [
          { value: "einen", label: "einen" },
          { value: "eine", label: "eine" },
          { value: "ein", label: "ein" }
        ], (value, button) => {
          const correct = value === target.acc;
          const memoryNote = isInside ? "También estaba en la maleta." : "Ojo: no estaba en la maleta, pero el acusativo se forma igual.";
          finishAnswer(correct, `Con ${target.word} se dice ${target.acc} ${target.noun}. ${memoryNote}`, button);
        }, skill);
      } else {
        ask(`Control de aduanas: ¿había ${target.acc} ${target.noun} en la maleta?`, [
          { value: "ja", label: "Ja, estaba" },
          { value: "nein", label: "Nein, no estaba" }
        ], (value, button) => {
          const correct = (value === "ja") === isInside;
          finishAnswer(correct, `${target.word} ${isInside ? "sí estaba" : "no estaba"} en la maleta.`, button);
        }, skill);
      }
    });
  };

  const hotelRound = () => {
    const count = adaptiveCount(state.level === "a2" ? 8 : 6, 10);
    const hotelItems = sample(items, count);
    const assignments = hotelItems.map((item, index) => ({
      item,
      room: rooms[index % rooms.length],
      place: places[(index + Math.floor(index / rooms.length)) % places.length]
    }));
    const target = choice(assignments);
    const task = state.level === "a2" ? choice(["room", "place", "object"]) : choice(["room", "object"]);
    const skills = { room: "Ubicación y vocabulario", place: "Preposición de lugar", object: "Memoria de contenido" };

    state.current = { assignments, target, task };
    renderHotel(assignments, false);
    setStatus("Observa habitaciones, objetos y lugares. En unos segundos se tapará el hotel.");
    showFocusHint(skills[task]);
    questionPanel.hidden = true;

    startCountdown(adaptiveSeconds(state.level === "a2" ? 8 : 7), () => {
      renderHotel(assignments, true);

      if (task === "room") {
        ask(`Wo ist ${target.item.word}?`, rooms.map((room) => ({ value: room, label: room })), (value, button) => {
          finishAnswer(value === target.room, `${target.item.word} estaba en ${target.room}, ${target.place.phrase}.`, button);
        }, skills.room);
        return;
      }

      if (task === "place") {
        ask(`Completa: ${target.item.word} ist ...`, places.map((place) => ({ value: place.id, label: place.phrase })), (value, button) => {
          finishAnswer(value === target.place.id, `La frase correcta era: ${target.item.word} ist ${target.place.phrase}.`, button);
        }, skills.place);
        return;
      }

      const roomItems = assignments.filter((entry) => entry.room === target.room);
      const decoys = sample(items.filter((item) => !roomItems.some((entry) => entry.item.id === item.id)), 2);
      const options = shuffle([...roomItems.map((entry) => entry.item), ...decoys]).slice(0, 4);
      ask(`¿Qué objeto recuerdas en ${target.room}?`, options.map((item) => ({ value: item.id, label: item.word })), (value, button) => {
        const correct = roomItems.some((entry) => entry.item.id === value);
        const valid = roomItems.map((entry) => entry.item.word).join(", ");
        finishAnswer(correct, `En ${target.room} había: ${valid}.`, button);
      }, skills.object);
    });
  };

  const startRound = () => {
    clearTimer();
    state.locked = false;
    state.level = levelSelect.value;
    updateMeta();
    startButton.textContent = "Preparar ronda";

    if (state.mode === "paquete") packageRound();
    if (state.mode === "contrabando") contrabandRound();
    if (state.mode === "hotel") hotelRound();
  };

  const reset = () => {
    clearTimer();
    state.round = 1;
    state.score = 0;
    state.streak = 0;
    state.timer = 0;
    state.locked = false;
    state.current = null;
    board.className = "game-table";
    board.innerHTML = "";
    questionPanel.hidden = true;
    revealButton.hidden = true;
    revealButton.onclick = null;
    hideFocusHint();
    setTimerBar(0, false);
    startButton.textContent = "Preparar ronda";
    setStatus("Marcador reiniciado. Prepara una ronda para empezar.");
    updateMeta();
  };

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      state.bestStreak = readBestStreak(state.mode);
      modeButtons.forEach((tab) => {
        const active = tab === button;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      if (gamesPanel) gamesPanel.setAttribute("aria-labelledby", button.id);
      reset();
      title.textContent = titles[state.mode];
    });
  });

  startButton.addEventListener("click", startRound);
  resetButton.addEventListener("click", reset);

  updateMeta();
})();
