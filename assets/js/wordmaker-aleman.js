(function () {
  "use strict";

  var engine = window.WordmakerEngine;
  var progressApi = window.WordmakerProgress;
  if (!engine || !progressApi) return;

  var LEVELS = ["A1", "A2", "B1", "B2"];
  var DIFFICULTIES = ["easy", "medium", "hard"];
  var store = progressApi.createProgressStore(window.localStorage);
  var rewardAdapter = progressApi.createLocalRewardAdapter();
  var progress = store.getState();
  var preferences = progress.preferences && progress.preferences.wordmaker || {};
  var level = LEVELS.indexOf(preferences.level) >= 0 ? preferences.level : "A1";
  var difficulty = DIFFICULTIES.indexOf(preferences.difficulty) >= 0 ? preferences.difficulty : "easy";
  var puzzle = null;
  var completedIds = new Set();
  var fixedLetters = new Map();
  var draftEntries = [];
  var trayTiles = [];
  var activeWordId = null;
  var round = 0;
  var bank = null;
  var lastFocusedElement = null;

  var board = document.getElementById("wordmakerBoard");
  var levelTabs = document.getElementById("levelTabs");
  var difficultyControls = document.getElementById("difficultyControls");
  var letterTray = document.getElementById("letterTray");
  var activeClue = document.getElementById("activeClue");
  var articleHint = document.getElementById("articleHint");
  var clueList = document.getElementById("clueList");
  var gameMessage = document.getElementById("gameMessage");
  var gameOverDialog = document.getElementById("gameOverDialog");
  var gameOverKicker = document.getElementById("gameOverKicker");
  var gameOverTitle = document.getElementById("gameOverTitle");
  var gameOverMessage = document.getElementById("gameOverMessage");
  var rewardLivesBtn = document.getElementById("rewardLivesBtn");
  var modalNextRoundBtn = document.getElementById("modalNextRoundBtn");

  function coordinate(cell) {
    return cell.x + "," + cell.y;
  }

  function findWord(id) {
    return puzzle && puzzle.words.find(function (word) { return word.id === id; }) || null;
  }

  function currentWord() {
    return findWord(activeWordId);
  }

  function wordPayload(word) {
    return {
      id: word.id,
      word: word.word,
      clue: word.es,
      cells: word.cells.map(function (cell) {
        return { x: cell.x, y: cell.y, letter: cell.letter };
      })
    };
  }

  function announce(type, detail) {
    document.dispatchEvent(new CustomEvent(type, { detail: detail }));
  }

  function saveProgress() {
    progress.preferences = Object.assign({}, progress.preferences, {
      wordmaker: { level: level, difficulty: difficulty }
    });
    progress = store.setState(progress);
  }

  function shuffle(items) {
    var output = items.slice();
    for (var index = output.length - 1; index > 0; index -= 1) {
      var swapIndex = Math.floor(Math.random() * (index + 1));
      var current = output[index];
      output[index] = output[swapIndex];
      output[swapIndex] = current;
    }
    return output;
  }

  function cellValue(cell) {
    var key = coordinate(cell);
    var draft = draftEntries.find(function (entry) { return entry.key === key; });
    return draft ? draft.letter : fixedLetters.get(key) || "";
  }

  function activeCellKeys() {
    var word = currentWord();
    return new Set(word ? word.cells.map(coordinate) : []);
  }

  function resetTray() {
    var word = currentWord();
    if (!word) {
      trayTiles = [];
      return;
    }

    trayTiles = shuffle(word.cells.filter(function (cell) {
      return !fixedLetters.has(coordinate(cell));
    }).map(function (cell, index) {
      return { id: word.id + "-" + index, letter: cell.letter };
    }));
  }

  function draftUsesTile(tileId) {
    return draftEntries.some(function (entry) { return entry.tileId === tileId; });
  }

  function renderStatus() {
    document.getElementById("score").textContent = progress.score + " puntos";
    document.getElementById("lives").textContent = progress.lives + " vidas";
    document.getElementById("streak").textContent = "Racha " + progress.streak;
    document.getElementById("bestScore").textContent = progress.bestScore + " puntos";
    document.getElementById("bestStreak").textContent = "Mejor racha " + progress.bestStreak;
    document.getElementById("roundCount").textContent = completedIds.size + " de " + (puzzle ? puzzle.words.length : 0) + " palabras";
  }

  function renderControls() {
    levelTabs.querySelectorAll("button").forEach(function (button) {
      var selected = button.dataset.level === level;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    difficultyControls.querySelectorAll("button").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.difficulty === difficulty));
    });
  }

  function renderBoard() {
    board.textContent = "";
    board.setAttribute("aria-busy", String(!puzzle));
    if (!puzzle) return;

    var activeKeys = activeCellKeys();
    board.style.setProperty("--columns", puzzle.width);
    board.style.setProperty("--rows", puzzle.height);
    var frameWidth = board.parentElement ? board.parentElement.clientWidth : window.innerWidth - 24;
    var availableWidth = Math.min(620, Math.max(240, frameWidth));
    var largestAxis = Math.max(puzzle.width, puzzle.height);
    var gridGaps = Math.max(0, largestAxis - 1) * 2;
    var cellSize = Math.max(12, Math.min(56, Math.floor((availableWidth - gridGaps) / largestAxis)));
    board.style.setProperty("--cell-size", cellSize + "px");
    for (var y = puzzle.minY; y <= puzzle.maxY; y += 1) {
      for (var x = puzzle.minX; x <= puzzle.maxX; x += 1) {
        var key = x + "," + y;
        var cell = puzzle.cells.find(function (item) { return coordinate(item) === key; });
        if (!cell) {
          var gap = document.createElement("span");
          gap.className = "board-gap";
          gap.setAttribute("aria-hidden", "true");
          board.appendChild(gap);
          continue;
        }

        var button = document.createElement("button");
        var value = cellValue(cell);
        button.type = "button";
        button.className = "wordmaker-cell";
        button.dataset.coordinate = key;
        button.setAttribute("role", "gridcell");
        button.setAttribute("aria-label", "Fila " + (y - puzzle.minY + 1) + ", columna " + (x - puzzle.minX + 1) + ", " + (value ? value.toUpperCase() : "vacía"));
        button.textContent = value;
        if (activeKeys.has(key)) button.classList.add("is-active");
        if (cell.words.length > 1) button.classList.add("is-crossing");
        if (cell.words.every(function (wordId) { return completedIds.has(wordId); })) button.classList.add("is-complete");
        button.addEventListener("click", function (event) {
          var selectedCell = puzzle.cells.find(function (item) {
            return coordinate(item) === event.currentTarget.dataset.coordinate;
          });
          if (selectedCell) selectWordAtCell(selectedCell);
        });
        board.appendChild(button);
      }
    }
  }

  function renderTray() {
    letterTray.textContent = "";
    trayTiles.forEach(function (tile) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "letter-tile";
      button.dataset.letter = tile.letter;
      button.dataset.tileId = tile.id;
      button.setAttribute("aria-label", "Colocar " + tile.letter.toUpperCase());
      button.textContent = tile.letter;
      button.disabled = draftUsesTile(tile.id) || !currentWord() || progress.lives === 0;
      button.addEventListener("click", function () { placeLetter(tile); });
      letterTray.appendChild(button);
    });
  }

  function renderClue() {
    var word = currentWord();
    if (!word) {
      activeClue.textContent = "Ronda terminada.";
      articleHint.hidden = true;
      return;
    }
    activeClue.textContent = word.es;
    if (word.artikel) {
      articleHint.textContent = "Artículo: " + word.artikel;
      articleHint.hidden = false;
    } else {
      articleHint.hidden = true;
    }
  }

  function renderClueList() {
    clueList.textContent = "";
    if (!puzzle) return;
    puzzle.words.forEach(function (word) {
      var item = document.createElement("li");
      var button = document.createElement("button");
      var complete = completedIds.has(word.id);
      button.type = "button";
      button.textContent = complete ? word.es + " completada" : word.es;
      button.disabled = complete;
      if (word.id === activeWordId) button.classList.add("is-active");
      if (complete) button.classList.add("is-complete");
      button.addEventListener("click", function () { setActiveWord(word.id); });
      item.appendChild(button);
      clueList.appendChild(item);
    });
  }

  function render() {
    renderControls();
    renderStatus();
    renderBoard();
    renderTray();
    renderClue();
    renderClueList();
  }

  function setActiveWord(wordId) {
    if (!puzzle || completedIds.has(wordId)) return;
    activeWordId = wordId;
    draftEntries = [];
    resetTray();
    render();
    announce("wordmaker:active-word", { round: round, word: wordPayload(currentWord()) });
  }

  function selectWordAtCell(cell) {
    var next = cell.words.find(function (wordId) { return !completedIds.has(wordId); });
    if (next) setActiveWord(next);
  }

  function placeLetter(tile) {
    var word = currentWord();
    if (!word || draftUsesTile(tile.id) || progress.lives === 0) return;
    var nextCell = word.cells.find(function (cell) { return !cellValue(cell); });
    if (!nextCell) return;
    draftEntries.push({ key: coordinate(nextCell), letter: tile.letter, tileId: tile.id });
    renderBoard();
    renderTray();
  }

  function placeKeyboardLetter(letter) {
    var tile = trayTiles.find(function (candidate) {
      return candidate.letter === letter && !draftUsesTile(candidate.id);
    });
    if (tile) placeLetter(tile);
  }

  function eraseLastLetter() {
    if (!draftEntries.length) return;
    draftEntries.pop();
    renderBoard();
    renderTray();
  }

  function finishRound() {
    gameMessage.textContent = "Ronda completada. Tu resultado queda guardado.";
    openGameOver({
      kicker: "Fortschritt",
      title: "Ronda superada",
      message: "Has completado las " + puzzle.words.length + " palabras conectadas.",
      reward: false,
      nextRound: true
    });
    announce("wordmaker:round-complete", { round: round, score: progress.score, difficulty: difficulty });
  }

  function showOutOfLives() {
    gameMessage.textContent = "Sin vidas para esta ronda.";
    openGameOver({
      kicker: "Demostración",
      title: "Sin vidas",
      message: "La recarga local repone tus cinco vidas mientras se prepara la integración publicitaria.",
      reward: true,
      nextRound: false
    });
  }

  function checkWord() {
    var word = currentWord();
    if (!word || progress.lives === 0) return;
    var answer = word.cells.map(cellValue).join("");
    if (engine.isAnswerCorrect(answer, word)) {
      word.cells.forEach(function (cell) { fixedLetters.set(coordinate(cell), cell.letter); });
      completedIds.add(word.id);
      progress = progressApi.applyCorrectAnswer(progress, word.cells.length);
      saveProgress();
      gameMessage.textContent = "Correcta. Sumas " + word.cells.length * 10 + " puntos.";
      announce("wordmaker:word-complete", { round: round, word: wordPayload(word), score: progress.score });
      var next = puzzle.words.find(function (item) { return !completedIds.has(item.id); });
      if (next) {
        activeWordId = next.id;
        draftEntries = [];
        resetTray();
        render();
        announce("wordmaker:active-word", { round: round, word: wordPayload(next) });
      } else {
        activeWordId = null;
        draftEntries = [];
        trayTiles = [];
        render();
        finishRound();
      }
      return;
    }

    progress = progressApi.applyWrongAnswer(progress);
    saveProgress();
    draftEntries = [];
    render();
    if (progress.lives === 0) {
      showOutOfLives();
    } else {
      gameMessage.textContent = "No encaja. Pierdes una vida.";
    }
    announce("wordmaker:wrong-answer", { round: round, lives: progress.lives });
  }

  function openGameOver(options) {
    lastFocusedElement = document.activeElement;
    gameOverKicker.textContent = options.kicker;
    gameOverTitle.textContent = options.title;
    gameOverMessage.textContent = options.message;
    rewardLivesBtn.hidden = !options.reward;
    modalNextRoundBtn.hidden = !options.nextRound;
    gameOverDialog.hidden = false;
    var focusTarget = options.reward ? rewardLivesBtn : modalNextRoundBtn;
    window.requestAnimationFrame(function () { focusTarget.focus(); });
  }

  function closeGameOver() {
    gameOverDialog.hidden = true;
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
  }

  function startRound() {
    if (!bank) return;
    var entries = bank.levels && bank.levels[level];
    var nextPuzzle = engine.buildPuzzle(entries, difficulty);
    if (!nextPuzzle) {
      gameMessage.textContent = "No se ha podido crear una ronda conectada para esta selección.";
      return;
    }
    puzzle = nextPuzzle;
    completedIds = new Set();
    fixedLetters = new Map();
    draftEntries = [];
    activeWordId = puzzle.words[0].id;
    round += 1;
    resetTray();
    gameMessage.textContent = "";
    saveProgress();
    render();
    announce("wordmaker:round", {
      round: round,
      level: level,
      difficulty: difficulty,
      words: puzzle.words.map(wordPayload)
    });
    announce("wordmaker:active-word", { round: round, word: wordPayload(currentWord()) });
    if (progress.lives === 0) showOutOfLives();
  }

  function changeLevel(nextLevel) {
    if (LEVELS.indexOf(nextLevel) < 0 || nextLevel === level) return;
    level = nextLevel;
    startRound();
  }

  function changeDifficulty(nextDifficulty) {
    if (DIFFICULTIES.indexOf(nextDifficulty) < 0 || nextDifficulty === difficulty) return;
    difficulty = nextDifficulty;
    startRound();
  }

  function recoverLives() {
    rewardLivesBtn.disabled = true;
    rewardAdapter.requestReward().then(function (reward) {
      progress = progressApi.refillLives(progress, reward);
      saveProgress();
      rewardLivesBtn.disabled = false;
      closeGameOver();
      gameMessage.textContent = "Vidas recuperadas con la demostración local.";
      render();
      announce("wordmaker:reward", { provider: reward.provider, lives: progress.lives });
    }).catch(function () {
      rewardLivesBtn.disabled = false;
      gameOverMessage.textContent = "No se han podido recuperar las vidas. Inténtalo de nuevo.";
    });
  }

  function trapDialogFocus(event) {
    if (gameOverDialog.hidden || event.key !== "Tab") return;
    var focusable = Array.from(gameOverDialog.querySelectorAll("button:not([hidden]):not([disabled])"));
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  levelTabs.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-level]");
    if (button) changeLevel(button.dataset.level);
  });
  levelTabs.addEventListener("keydown", function (event) {
    var button = event.target.closest("button[data-level]");
    if (!button || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    var currentIndex = LEVELS.indexOf(button.dataset.level);
    var nextIndex = currentIndex;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + LEVELS.length) % LEVELS.length;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % LEVELS.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = LEVELS.length - 1;
    changeLevel(LEVELS[nextIndex]);
    levelTabs.querySelector('[data-level="' + LEVELS[nextIndex] + '"]').focus();
  });
  difficultyControls.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-difficulty]");
    if (button) changeDifficulty(button.dataset.difficulty);
  });
  document.getElementById("eraseBtn").addEventListener("click", eraseLastLetter);
  document.getElementById("checkBtn").addEventListener("click", checkWord);
  document.getElementById("newRoundBtn").addEventListener("click", startRound);
  modalNextRoundBtn.addEventListener("click", function () {
    closeGameOver();
    startRound();
  });
  rewardLivesBtn.addEventListener("click", recoverLives);
  document.addEventListener("keydown", function (event) {
    trapDialogFocus(event);
    if (!gameOverDialog.hidden || event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      eraseLastLetter();
      return;
    }
    if (Array.from(event.key).length === 1 && event.key.toLowerCase() !== event.key.toUpperCase()) {
      placeKeyboardLetter(event.key.toLowerCase());
    }
  });
  window.addEventListener("resize", function () {
    if (puzzle) renderBoard();
  });

  fetch("/assets/data/sudoku-german-questions.json").then(function (response) {
    if (!response.ok) throw new Error("word bank unavailable");
    return response.json();
  }).then(function (data) {
    bank = data;
    startRound();
  }).catch(function () {
    board.setAttribute("aria-busy", "false");
    gameMessage.textContent = "No se ha podido cargar el vocabulario. Vuelve a intentarlo.";
  });
}());
