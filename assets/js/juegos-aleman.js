(() => {
  const root = document.querySelector("[data-german-games]");
  if (!root) return;

  const board = root.querySelector("[data-board]");
  const title = root.querySelector("[data-game-title]");
  const scoreEl = root.querySelector("[data-score]");
  const roundEl = root.querySelector("[data-round]");
  const timerEl = root.querySelector("[data-timer]");
  const statusEl = root.querySelector("[data-status]");
  const questionPanel = root.querySelector("[data-question-panel]");
  const questionEl = root.querySelector("[data-question]");
  const optionsEl = root.querySelector("[data-options]");
  const feedbackEl = root.querySelector("[data-feedback]");
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
    { id: "messer", noun: "Messer", article: "das", acc: "ein", word: "das Messer", category: "Essen", initial: "M", roomHint: "Küche", shape: "rect", tone: "teal" }
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

  const state = {
    mode: "paquete",
    level: "a1",
    round: 1,
    score: 0,
    timer: 0,
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

  const setStatus = (text) => {
    statusEl.textContent = text;
  };

  const updateMeta = () => {
    title.textContent = titles[state.mode];
    scoreEl.textContent = state.score;
    roundEl.textContent = state.round;
    timerEl.textContent = state.timer;
  };

  const clearTimer = () => {
    if (state.timerId) window.clearInterval(state.timerId);
    state.timerId = null;
  };

  const startCountdown = (seconds, done) => {
    clearTimer();
    revealButton.hidden = true;

    if (noTimerCheckbox.checked) {
      state.timer = 0;
      timerEl.textContent = "∞";
      revealButton.hidden = false;
      revealButton.onclick = () => {
        revealButton.hidden = true;
        revealButton.onclick = null;
        done();
      };
      return;
    }

    state.timer = seconds;
    updateMeta();
    state.timerId = window.setInterval(() => {
      state.timer -= 1;
      updateMeta();
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
    const { hidden = false, kind = "package" } = options;
    board.className = `game-table game-table-${kind}${hidden ? " is-memory-hidden" : ""}`;
    board.innerHTML = cards
      .map((card, index) => `
        <button class="game-memory-card" type="button" data-card="${card.id}" ${hidden ? "" : "disabled"}>
          <span class="game-card-index">${index + 1}</span>
          ${visualMarkup(card)}
          <span class="game-card-word">${hidden ? "?" : card.word}</span>
          <span class="game-card-meta">${hidden ? "paquete cerrado" : card.category}</span>
        </button>
      `)
      .join("");
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

  const ask = (question, options, onAnswer) => {
    questionPanel.hidden = false;
    questionEl.textContent = question;
    feedbackEl.textContent = "";
    optionsEl.innerHTML = options
      .map((option) => `<button class="game-option" type="button" data-value="${option.value}">${option.label}</button>`)
      .join("");
    optionsEl.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => onAnswer(button.dataset.value, button));
    });
  };

  const askOnBoard = (question, onAnswer) => {
    questionPanel.hidden = false;
    questionEl.textContent = question;
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";
    board.querySelectorAll(".game-memory-card").forEach((card) => {
      card.addEventListener("click", () => onAnswer(card.dataset.card, card));
    });
  };

  const finishAnswer = (isCorrect, explanation, button) => {
    if (state.locked) return;
    state.locked = true;
    if (isCorrect) state.score += state.level === "a2" ? 12 : 10;
    else state.score = Math.max(0, state.score - 4);

    optionsEl.querySelectorAll("button").forEach((option) => {
      option.disabled = true;
      option.classList.toggle("is-picked", option === button);
    });
    board.querySelectorAll(".game-memory-card").forEach((card) => {
      card.disabled = true;
      card.classList.toggle("is-picked", card === button);
    });

    feedbackEl.textContent = `${isCorrect ? "Correcto." : "Casi."} ${explanation}`;
    state.round += 1;
    updateMeta();
    startButton.textContent = "Siguiente ronda";
    setStatus("Ronda terminada. Prepara otra cuando quieras.");
  };

  const packageRound = () => {
    const count = state.level === "a2" ? 7 : 6;
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
        explain: (selected, correct) => correct
          ? `${selected.word} lleva el artículo ${selected.article}, tal y como pedía la pista.`
          : `Buscábamos artículo ${target.article}; ${selected.word} lleva ${selected.article}.`
      },
      category: {
        question: `Entrega algo de la categoría ${target.category}.`,
        check: (item) => item.category === target.category,
        explain: (selected, correct) => correct
          ? `${selected.word} pertenece a ${selected.category}, la categoría pedida.`
          : `Buscábamos la categoría ${target.category}; ${selected.word} es de ${selected.category}.`
      },
      initial: {
        question: `Entrega una palabra que empiece por ${target.initial}.`,
        check: (item) => item.initial === target.initial,
        explain: (selected, correct) => correct
          ? `${selected.word} empieza por ${selected.initial}, la letra pedida.`
          : `Buscábamos una palabra que empezara por ${target.initial}; elegiste ${selected.word}.`
      },
      exact: {
        question: `Entrega exactamente ${target.word}.`,
        check: (item) => item.id === target.id,
        explain: (selected, correct) => correct
          ? `Acertaste: era ${target.word}.`
          : `El paquete buscado era ${target.word}, no ${selected.word}.`
      }
    };

    state.current = { cards, target, task };
    renderCards(cards, { hidden: false, kind: "package" });
    setStatus("Memoriza los paquetes. Cuando se cierren, elige sin ver la palabra.");
    questionPanel.hidden = true;

    startCountdown(state.level === "a2" ? 7 : 6, () => {
      renderCards(cards, { hidden: true, kind: "package" });
      const currentTask = labels[task];
      askOnBoard(currentTask.question, (value, card) => {
        const selected = cards.find((item) => item.id === value);
        const correct = currentTask.check(selected);
        finishAnswer(correct, currentTask.explain(selected, correct), card);
      });
    });
  };

  const contrabandRound = () => {
    const count = state.level === "a2" ? 7 : 6;
    const suitcase = sample(items, count);
    const target = Math.random() > 0.25 ? choice(suitcase) : choice(items.filter((item) => !suitcase.some((card) => card.id === item.id)));
    const isInside = suitcase.some((item) => item.id === target.id);
    const askArticle = isInside || Math.random() > 0.4;

    state.current = { suitcase, target, isInside };
    renderSuitcase(suitcase, false);
    setStatus("Memoriza la maleta. Luego tendrás que declarar un objeto ante aduanas.");
    questionPanel.hidden = true;

    startCountdown(state.level === "a2" ? 7 : 6, () => {
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
        });
      } else {
        ask(`Control de aduanas: ¿había ${target.acc} ${target.noun} en la maleta?`, [
          { value: "ja", label: "Ja, estaba" },
          { value: "nein", label: "Nein, no estaba" }
        ], (value, button) => {
          const correct = (value === "ja") === isInside;
          finishAnswer(correct, `${target.word} ${isInside ? "sí estaba" : "no estaba"} en la maleta.`, button);
        });
      }
    });
  };

  const hotelRound = () => {
    const count = state.level === "a2" ? 8 : 6;
    const hotelItems = sample(items, count);
    const assignments = hotelItems.map((item, index) => ({
      item,
      room: rooms[index % rooms.length],
      place: places[(index + Math.floor(index / rooms.length)) % places.length]
    }));
    const target = choice(assignments);
    const task = state.level === "a2" ? choice(["room", "place", "object"]) : choice(["room", "object"]);

    state.current = { assignments, target, task };
    renderHotel(assignments, false);
    setStatus("Observa habitaciones, objetos y lugares. En unos segundos se tapará el hotel.");
    questionPanel.hidden = true;

    startCountdown(state.level === "a2" ? 8 : 7, () => {
      renderHotel(assignments, true);

      if (task === "room") {
        ask(`Wo ist ${target.item.word}?`, rooms.map((room) => ({ value: room, label: room })), (value, button) => {
          finishAnswer(value === target.room, `${target.item.word} estaba en ${target.room}, ${target.place.phrase}.`, button);
        });
        return;
      }

      if (task === "place") {
        ask(`Completa: ${target.item.word} ist ...`, places.map((place) => ({ value: place.id, label: place.phrase })), (value, button) => {
          finishAnswer(value === target.place.id, `La frase correcta era: ${target.item.word} ist ${target.place.phrase}.`, button);
        });
        return;
      }

      const roomItems = assignments.filter((entry) => entry.room === target.room);
      const decoys = sample(items.filter((item) => !roomItems.some((entry) => entry.item.id === item.id)), 2);
      const options = shuffle([...roomItems.map((entry) => entry.item), ...decoys]).slice(0, 4);
      ask(`¿Qué objeto recuerdas en ${target.room}?`, options.map((item) => ({ value: item.id, label: item.word })), (value, button) => {
        const correct = roomItems.some((entry) => entry.item.id === value);
        const valid = roomItems.map((entry) => entry.item.word).join(", ");
        finishAnswer(correct, `En ${target.room} había: ${valid}.`, button);
      });
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
    state.timer = 0;
    state.locked = false;
    state.current = null;
    board.className = "game-table";
    board.innerHTML = "";
    questionPanel.hidden = true;
    revealButton.hidden = true;
    revealButton.onclick = null;
    startButton.textContent = "Preparar ronda";
    setStatus("Marcador reiniciado. Prepara una ronda para empezar.");
    updateMeta();
  };

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
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
