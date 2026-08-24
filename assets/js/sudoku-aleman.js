(function () {
  "use strict";

  var STORAGE_KEY = "samuel_sudoku_de_v1";
  var engine = window.SudokuEngine;
  var questions = window.SudokuQuestions;
  var progressApi = window.SudokuProgress;
  var rewardProvider = progressApi.createLocalRewardedLifeProvider();
  var progress = progressApi.parseState(localStorage.getItem(STORAGE_KEY));
  var bank = null;
  var puzzle = null;
  var values = "";
  var selectedIndex = null;
  var elapsed = 0;
  var mistakes = 0;
  var timerId = null;
  var finished = false;

  var board = document.getElementById("sudokuBoard");
  var levelTabs = document.getElementById("levelTabs");
  var puzzleSelect = document.getElementById("puzzleSelect");
  var timer = document.getElementById("timer");
  var mistakesNode = document.getElementById("mistakes");
  var lives = document.getElementById("lives");
  var gameMessage = document.getElementById("gameMessage");
  var languageGate = document.getElementById("languageGate");
  var gatePrompt = document.getElementById("gatePrompt");
  var gateOptions = document.getElementById("gateOptions");
  var gateFeedback = document.getElementById("gateFeedback");
  var rewardLivesBtn = document.getElementById("rewardLivesBtn");

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function formatTime(totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  }

  function getAttempt() {
    return progress.attempts[puzzle.id] || null;
  }

  function storeAttempt() {
    if (!puzzle) return;
    progress.attempts[puzzle.id] = { values: values, elapsed: elapsed, mistakes: mistakes };
    save();
  }

  function renderStatus() {
    timer.textContent = formatTime(elapsed);
    mistakesNode.textContent = "Errores " + mistakes + "/3";
    lives.textContent = "Vidas " + progress.lives + "/5";
    document.getElementById("currentLevel").textContent = puzzle.level;
    var completed = Object.keys(progress.completed).filter(function (id) {
      return id.indexOf(puzzle.level.toLowerCase() + "-") === 0;
    }).length;
    document.getElementById("completedCount").textContent = completed + " / 20";
    var gateCount = progress.gateProgress[puzzle.level];
    var dots = document.querySelectorAll("#gateDots i");
    dots.forEach(function (dot, index) { dot.classList.toggle("is-filled", index < gateCount); });
    document.getElementById("gateDots").setAttribute("aria-label", gateCount + " de 3 sudokus completados");
  }

  function renderBoard() {
    board.textContent = "";
    var conflicts = selectedIndex === null ? [] : engine.conflicts(values, selectedIndex);
    for (var index = 0; index < 81; index += 1) {
      var cell = document.createElement("button");
      var row = Math.floor(index / 9) + 1;
      var column = index % 9 + 1;
      cell.type = "button";
      cell.className = "sudoku-cell";
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", "Fila " + row + ", columna " + column + (values[index] === "0" ? ", vacía" : ", " + values[index]));
      cell.dataset.index = index;
      cell.textContent = values[index] === "0" ? "" : values[index];
      if (!engine.canEdit(puzzle, index)) cell.disabled = true;
      if (selectedIndex === index) cell.classList.add("is-selected");
      if (selectedIndex !== null) {
        var selectedRow = Math.floor(selectedIndex / 9);
        var selectedColumn = selectedIndex % 9;
        if (Math.floor(index / 9) === selectedRow || index % 9 === selectedColumn) cell.classList.add("is-related");
      }
      if (conflicts.indexOf(index) >= 0 || (selectedIndex === index && conflicts.length)) cell.classList.add("is-conflict");
      cell.addEventListener("click", selectCell);
      board.appendChild(cell);
    }
  }

  function selectCell(event) {
    selectedIndex = Number(event.currentTarget.dataset.index);
    renderBoard();
    var selected = board.querySelector('[data-index="' + selectedIndex + '"]');
    if (selected) selected.focus();
  }

  function enterValue(value) {
    if (selectedIndex === null || finished || progress.pendingGate || mistakes >= 3) return;
    if (!engine.canEdit(puzzle, selectedIndex)) return;
    if (value && values[selectedIndex] !== String(value) && !engine.isMoveCorrect(puzzle, selectedIndex, value)) {
      mistakes += 1;
      gameMessage.textContent = mistakes >= 3 ? "Has alcanzado tres errores. Reinicia el tablero para intentarlo de nuevo." : "Ese número no encaja. Revisa la fila, la columna y el bloque.";
    }
    values = engine.setValue(values, puzzle, selectedIndex, value);
    storeAttempt();
    renderBoard();
    renderStatus();
    if (engine.isSolved(values, puzzle)) finishPuzzle();
  }

  function finishPuzzle() {
    finished = true;
    var result = progressApi.recordCompletion(progress, puzzle.id, puzzle.level, elapsed);
    progress = result.state;
    delete progress.attempts[puzzle.id];
    save();
    renderStatus();
    gameMessage.textContent = result.openedGate ? "Sudoku completado. Ahora toca un reto de alemán." : "Sudoku completado. Tu mejor tiempo queda guardado.";
    if (result.openedGate) openGate();
  }

  function setLevel(level) {
    if (progress.pendingGate) return openGate();
    progress.current.level = level;
    progress.current.puzzleId = level.toLowerCase() + "-01";
    save();
    populatePuzzleSelect();
    loadPuzzle(progress.current.puzzleId);
  }

  function populatePuzzleSelect() {
    var level = progress.current.level;
    puzzleSelect.textContent = "";
    engine.puzzles[level].forEach(function (item) {
      var option = document.createElement("option");
      option.value = item.id;
      option.textContent = "Sudoku " + item.number + (progress.completed[item.id] ? " · completado" : "");
      puzzleSelect.appendChild(option);
    });
    puzzleSelect.value = progress.current.puzzleId;
  }

  function loadPuzzle(puzzleId) {
    var list = engine.puzzles[progress.current.level];
    puzzle = list.find(function (item) { return item.id === puzzleId; }) || list[0];
    progress.current.puzzleId = puzzle.id;
    var attempt = getAttempt();
    values = attempt && typeof attempt.values === "string" && attempt.values.length === 81 ? attempt.values : puzzle.grid;
    elapsed = attempt ? Number(attempt.elapsed) || 0 : 0;
    mistakes = attempt ? Number(attempt.mistakes) || 0 : 0;
    selectedIndex = null;
    finished = engine.isSolved(values, puzzle);
    gameMessage.textContent = finished ? "Sudoku completado." : "";
    puzzleSelect.value = puzzle.id;
    updateLevelTabs();
    renderBoard();
    renderStatus();
    save();
  }

  function updateLevelTabs() {
    levelTabs.querySelectorAll("button").forEach(function (button) {
      var selected = button.dataset.level === progress.current.level;
      button.setAttribute("aria-selected", selected ? "true" : "false");
      button.tabIndex = selected ? 0 : -1;
    });
  }

  function resetPuzzle() {
    values = puzzle.grid;
    elapsed = 0;
    mistakes = 0;
    finished = false;
    selectedIndex = null;
    gameMessage.textContent = "Tablero reiniciado.";
    storeAttempt();
    renderBoard();
    renderStatus();
  }

  function ensureGateQuestion() {
    if (!progress.pendingGate || progress.lives <= 0 || !bank) return;
    if (!progress.pendingGate.question) {
      progress.pendingGate.question = questions.createQuestion(bank, progress.pendingGate.level, progress.recentQuestionIds);
      save();
    }
  }

  function renderGate(feedback) {
    if (!progress.pendingGate) {
      languageGate.hidden = true;
      return;
    }
    languageGate.hidden = false;
    gateFeedback.textContent = feedback || "";
    gateOptions.textContent = "";
    rewardLivesBtn.hidden = progress.lives > 0;
    if (progress.lives <= 0) {
      gatePrompt.textContent = "Te has quedado sin vidas. Recupéralas para continuar con el reto.";
      return;
    }
    ensureGateQuestion();
    var question = progress.pendingGate.question;
    if (!question) {
      gatePrompt.textContent = "No se ha podido cargar el reto de alemán. Tu progreso sigue guardado.";
      return;
    }
    gatePrompt.textContent = question.prompt;
    question.options.forEach(function (option) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "gate-option";
      button.textContent = option;
      button.addEventListener("click", function () { answerQuestion(option); });
      gateOptions.appendChild(button);
    });
    var firstOption = gateOptions.querySelector("button");
    if (firstOption) firstOption.focus();
  }

  function openGate() {
    renderGate();
  }

  function answerQuestion(answer) {
    var question = progress.pendingGate && progress.pendingGate.question;
    if (!question) return;
    var correct = questions.isCorrect(question, answer);
    progress = progressApi.answerGate(progress, correct, question.id);
    save();
    renderStatus();
    if (correct) {
      gateFeedback.textContent = question.explanation;
      languageGate.hidden = true;
      gameMessage.textContent = "Reto superado. Ya puedes continuar.";
      populatePuzzleSelect();
      return;
    }
    renderGate(progress.lives > 0 ? "No es correcto. Has perdido una vida." : "No es correcto. Te has quedado sin vidas.");
  }

  function recoverLives() {
    rewardLivesBtn.disabled = true;
    rewardProvider.show().then(function (reward) {
      progress = progressApi.refillLives(progress, reward);
      save();
      rewardLivesBtn.disabled = false;
      renderStatus();
      renderGate();
    }).catch(function () {
      rewardLivesBtn.disabled = false;
      gateFeedback.textContent = "No se han podido recuperar las vidas. Inténtalo de nuevo.";
    });
  }

  levelTabs.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-level]");
    if (button) setLevel(button.dataset.level);
  });
  puzzleSelect.addEventListener("change", function () {
    if (progress.pendingGate) return openGate();
    loadPuzzle(puzzleSelect.value);
  });
  document.querySelectorAll("[data-number]").forEach(function (button) {
    button.addEventListener("click", function () { enterValue(button.dataset.number); });
  });
  document.getElementById("eraseBtn").addEventListener("click", function () { enterValue(""); });
  document.getElementById("resetBtn").addEventListener("click", resetPuzzle);
  rewardLivesBtn.addEventListener("click", recoverLives);
  document.addEventListener("keydown", function (event) {
    if (!languageGate.hidden) return;
    if (event.target && event.target.dataset && event.target.dataset.index) {
      selectedIndex = Number(event.target.dataset.index);
    }
    if (/^[1-9]$/.test(event.key)) enterValue(event.key);
    if (event.key === "Backspace" || event.key === "Delete") enterValue("");
  });
  languageGate.addEventListener("keydown", function (event) {
    if (event.key !== "Tab") return;
    var focusable = languageGate.querySelectorAll("button:not([hidden]):not([disabled])");
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  fetch("/assets/data/sudoku-german-questions.json").then(function (response) {
    if (!response.ok) throw new Error("question bank unavailable");
    return response.json();
  }).then(function (data) {
    bank = data;
    if (progress.pendingGate) openGate();
  }).catch(function () {
    if (progress.pendingGate) openGate();
  });

  populatePuzzleSelect();
  loadPuzzle(progress.current.puzzleId);
  if (progress.pendingGate) openGate();
  timerId = window.setInterval(function () {
    if (!finished && !progress.pendingGate && mistakes < 3 && document.visibilityState === "visible") {
      elapsed += 1;
      storeAttempt();
      renderStatus();
    }
  }, 1000);
  window.addEventListener("beforeunload", function () {
    window.clearInterval(timerId);
    storeAttempt();
  });
}());
