(function () {
  "use strict";

  var root = document.querySelector("[data-grammatik-mission]");
  var Engine = window.GrammatikMissionEngine;
  var Progress = window.GrammatikMissionProgress;
  if (!root || !Engine || !Progress) return;

  var modeLabels = {
    satzbau: "Satzbau",
    fehlerjaeger: "Fehlerjäger",
    kasus: "Kasus",
    verb: "Verb"
  };
  var entry = root.querySelector("[data-entry]");
  var game = root.querySelector("[data-game]");
  var summary = root.querySelector("[data-summary]");
  var loadError = root.querySelector("[data-load-error]");
  var saveWarning = root.querySelector("[data-save-warning]");
  var interaction = root.querySelector("[data-interaction]");
  var feedback = root.querySelector("[data-feedback]");
  var startButton = root.querySelector("[data-start-mission]");
  var checkButton = root.querySelector('[data-action="check"]');
  var hintButton = root.querySelector('[data-action="hint"]');
  var skipButton = root.querySelector('[data-action="skip"]');
  var nextButton = root.querySelector('[data-action="next"]');

  var exercises = [];
  var exerciseById = {};
  var session = null;
  var missionState = null;
  var currentExercise = null;
  var activeRetry = false;
  var retryAvailableAt = Infinity;
  var selectedOrder = [];
  var selectedSegment = "";
  var selectedOption = "";
  var selectedSlots = [];

  function createNode(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function getStorage() {
    try {
      return window.localStorage;
    } catch {
      return null;
    }
  }

  var progressState = Progress.loadProgress(getStorage());

  function calculateMastery() {
    var mastery = {};
    Object.keys(modeLabels).forEach(function (mode) {
      var values = progressState.modeHistory[mode] || [];
      mastery[mode] = values.length ? values.filter(Boolean).length / values.length : 0;
    });
    return mastery;
  }

  function persistCurrent() {
    progressState.currentMission = missionState;
    if (!Progress.saveProgress(getStorage(), progressState)) saveWarning.hidden = false;
  }

  function updateSavedStats() {
    root.querySelector("[data-best-score]").textContent = String(progressState.bestScore || 0);
    root.querySelector("[data-best-streak]").textContent = String(progressState.bestStreak || 0);
    var resumable = restoreSession(false);
    root.querySelector("[data-resume-note]").hidden = !resumable;
    startButton.textContent = resumable ? "Reanudar misión" : "Empezar misión";
  }

  function showPanel(panel) {
    entry.hidden = panel !== entry;
    game.hidden = panel !== game;
    summary.hidden = panel !== summary;
    loadError.hidden = panel !== loadError;
  }

  function restoreSession(activate) {
    var saved = progressState.currentMission;
    if (!saved || saved.completed || !Array.isArray(saved.exerciseIds) || saved.index >= saved.exerciseIds.length) return false;
    var restoredExercises = saved.exerciseIds.map(function (id) { return exerciseById[id]; }).filter(Boolean);
    if (restoredExercises.length !== saved.exerciseIds.length) return false;
    if (activate) {
      session = {
        level: saved.level,
        practice: restoredExercises.length < Engine.MISSION_LENGTH && restoredExercises.every(function (exercise) { return exercise.mode === restoredExercises[0].mode; }),
        mode: restoredExercises.every(function (exercise) { return exercise.mode === restoredExercises[0].mode; }) ? restoredExercises[0].mode : null,
        exercises: restoredExercises,
        exerciseIds: saved.exerciseIds.slice()
      };
      missionState = saved;
      retryAvailableAt = saved.pendingRetries.length ? saved.index : Infinity;
      nextChallenge();
    }
    return true;
  }

  function startSession(mode) {
    try {
      if (mode) {
        session = Engine.createPractice(exercises, { level: "B1", mode: mode });
      } else {
        session = Engine.createMission(exercises, {
          level: "B1",
          recentIds: progressState.recentExerciseIds,
          mastery: calculateMastery()
        });
      }
      missionState = Engine.createMissionState(session);
      activeRetry = false;
      retryAvailableAt = Infinity;
      persistCurrent();
      showPanel(game);
      renderChallenge();
    } catch {
      showPanel(loadError);
    }
  }

  function resetSelections() {
    selectedOrder = [];
    selectedSegment = "";
    selectedOption = "";
    selectedSlots = [];
  }

  function setCheckAvailability() {
    var ready = false;
    if (!currentExercise) {
      checkButton.disabled = true;
      return;
    }
    if (currentExercise.mode === "satzbau") ready = selectedOrder.length === currentExercise.blocks.length;
    if (currentExercise.mode === "fehlerjaeger") ready = Boolean(selectedSegment && selectedOption);
    if (currentExercise.mode === "kasus") ready = Boolean(selectedOption);
    if (currentExercise.mode === "verb") ready = selectedSlots.length === currentExercise.answers.length && selectedSlots.every(Boolean);
    checkButton.disabled = !ready;
  }

  function renderSatzbau() {
    var answerLabel = createNode("span", "gm-zone-label", "Tu frase");
    var answerZone = createNode("div", "gm-answer-zone");
    var order = createNode("div", "gm-order");
    answerZone.append(answerLabel, order);

    selectedOrder.forEach(function (blockId, index) {
      var block = currentExercise.blocks.find(function (item) { return item.id === blockId; });
      var item = createNode("span", "gm-order-item");
      var word = createNode("button", "gm-order-item__word", block.text);
      word.type = "button";
      word.dataset.removeBlock = block.id;
      word.setAttribute("aria-label", "Quitar " + block.text);

      var left = createNode("button", "gm-order-item__move", "←");
      left.type = "button";
      left.dataset.moveBlock = block.id;
      left.dataset.direction = "left";
      left.disabled = index === 0;
      left.setAttribute("aria-label", "Mover " + block.text + " a la izquierda");

      var right = createNode("button", "gm-order-item__move", "→");
      right.type = "button";
      right.dataset.moveBlock = block.id;
      right.dataset.direction = "right";
      right.disabled = index === selectedOrder.length - 1;
      right.setAttribute("aria-label", "Mover " + block.text + " a la derecha");
      item.append(word, left, right);
      order.append(item);
    });

    var bankLabel = createNode("span", "gm-zone-label", "Bloques disponibles");
    var bank = createNode("div", "gm-bank");
    currentExercise.blocks.slice().reverse().forEach(function (block) {
      if (selectedOrder.indexOf(block.id) >= 0) return;
      var button = createNode("button", "gm-block", block.text);
      button.type = "button";
      button.dataset.addBlock = block.id;
      bank.append(button);
    });
    interaction.replaceChildren(answerZone, bankLabel, bank);
  }

  function renderFehlerjaeger() {
    var prompt = createNode("p", "gm-prompt");
    prompt.setAttribute("aria-label", "Frase con un error");
    var segments = createNode("span", "gm-segments");
    currentExercise.segments.forEach(function (segment) {
      var button = createNode("button", "gm-segment", segment.text);
      button.type = "button";
      button.dataset.segment = segment.id;
      button.setAttribute("aria-pressed", String(selectedSegment === segment.id));
      segments.append(button);
    });
    prompt.append(segments);

    var optionLabel = createNode("span", "gm-zone-label", "Elige la corrección");
    var options = createNode("div", "gm-options");
    currentExercise.correctionOptions.forEach(function (option) {
      var button = createNode("button", "gm-option", option.text);
      button.type = "button";
      button.dataset.option = option.id;
      button.setAttribute("aria-pressed", String(selectedOption === option.id));
      options.append(button);
    });
    interaction.replaceChildren(prompt, optionLabel, options);
  }

  function promptWithGap(parts, value, label) {
    var prompt = createNode("p", "gm-prompt");
    prompt.append(document.createTextNode(parts[0]));
    var gap = createNode("span", "gm-gap", value || "___");
    gap.setAttribute("aria-label", label);
    prompt.append(gap, document.createTextNode(parts[1] || ""));
    return prompt;
  }

  function renderKasus() {
    var prompt = promptWithGap(currentExercise.promptParts, selectedOption ? currentExercise.options.find(function (option) { return option.id === selectedOption; }).text : "", "Hueco del caso");
    var optionLabel = createNode("span", "gm-zone-label", "Formas disponibles");
    var options = createNode("div", "gm-options");
    currentExercise.options.forEach(function (option) {
      var button = createNode("button", "gm-option", option.text);
      button.type = "button";
      button.dataset.option = option.id;
      button.setAttribute("aria-pressed", String(selectedOption === option.id));
      options.append(button);
    });
    interaction.replaceChildren(prompt, optionLabel, options);
  }

  function renderVerbPrompt() {
    var prompt = createNode("p", "gm-prompt");
    currentExercise.answers.forEach(function (_answer, index) {
      prompt.append(document.createTextNode(currentExercise.promptParts[index] || ""));
      var selectedId = selectedSlots[index];
      var selected = selectedId && currentExercise.optionsBySlot[index].find(function (option) { return option.id === selectedId; });
      var gap = createNode("span", "gm-gap", selected ? selected.text : "___");
      gap.setAttribute("aria-label", "Hueco verbal " + (index + 1));
      prompt.append(gap);
    });
    prompt.append(document.createTextNode(currentExercise.promptParts[currentExercise.answers.length] || ""));
    return prompt;
  }

  function renderVerb() {
    var infinitive = createNode("span", "gm-zone-label", "Infinitivo: " + currentExercise.infinitive);
    var prompt = renderVerbPrompt();
    var slots = createNode("div");
    currentExercise.optionsBySlot.forEach(function (slotOptions, slotIndex) {
      var slot = createNode("div", "gm-slot");
      slot.append(createNode("span", "gm-slot-label", currentExercise.optionsBySlot.length > 1 ? "Posición " + (slotIndex + 1) : "Forma verbal"));
      var options = createNode("div", "gm-options");
      slotOptions.forEach(function (option) {
        var button = createNode("button", "gm-option", option.text);
        button.type = "button";
        button.dataset.slot = String(slotIndex);
        button.dataset.slotOption = option.id;
        button.setAttribute("aria-pressed", String(selectedSlots[slotIndex] === option.id));
        options.append(button);
      });
      slot.append(options);
      slots.append(slot);
    });
    interaction.replaceChildren(infinitive, prompt, slots);
  }

  function renderInteraction() {
    if (currentExercise.mode === "satzbau") renderSatzbau();
    if (currentExercise.mode === "fehlerjaeger") renderFehlerjaeger();
    if (currentExercise.mode === "kasus") renderKasus();
    if (currentExercise.mode === "verb") renderVerb();
    setCheckAvailability();
  }

  function updateScoreboard() {
    var total = missionState.exerciseIds.length;
    var numbered = Math.min(missionState.index + 1, total);
    root.querySelector("[data-session-label]").textContent = session.practice ? "Práctica " + modeLabels[session.mode] + " · B1" : "Misión mixta · B1";
    root.querySelector("[data-progress-text]").textContent = activeRetry ? "Repaso de un error" : numbered + " de " + total;
    root.querySelector("[data-lives]").textContent = Array.from({ length: Engine.STARTING_LIVES }, function (_value, index) { return index < missionState.lives ? "♥" : "♡"; }).join(" ");
    root.querySelector("[data-streak]").textContent = String(missionState.streak);
    root.querySelector("[data-score]").textContent = String(missionState.score);
    root.querySelector("[data-progress-bar]").style.width = Math.min((missionState.index / total) * 100, 100) + "%";
  }

  function renderChallenge() {
    showPanel(game);
    resetSelections();
    feedback.hidden = true;
    feedback.className = "gm-feedback";
    feedback.replaceChildren();
    checkButton.hidden = false;
    hintButton.hidden = false;
    skipButton.hidden = activeRetry;
    nextButton.hidden = true;
    currentExercise = activeRetry ? exerciseById[missionState.pendingRetries[0]] : session.exercises[missionState.index];
    if (!currentExercise) {
      finishSession();
      return;
    }

    root.dataset.currentMode = currentExercise.mode;
    root.querySelector("[data-mode-badge]").textContent = activeRetry ? "Repaso · " + modeLabels[currentExercise.mode] : modeLabels[currentExercise.mode];
    root.querySelector("[data-topic]").textContent = currentExercise.topic;
    root.querySelector("[data-instruction]").textContent = currentExercise.instruction;
    updateScoreboard();
    renderInteraction();
    document.dispatchEvent(new CustomEvent("grammatik:challenge", { detail: { id: currentExercise.id, mode: currentExercise.mode, retry: activeRetry } }));
  }

  function formatAnswer(answer) {
    if (!currentExercise) return "";
    if (currentExercise.mode === "satzbau") {
      return answer.map(function (id) { return currentExercise.blocks.find(function (block) { return block.id === id; }).text; }).join(" ").replace(/\s+([,.!?])/g, "$1") + ".";
    }
    if (currentExercise.mode === "fehlerjaeger") return currentExercise.correctedSentence;
    if (currentExercise.mode === "kasus") {
      var kasusOption = currentExercise.options.find(function (option) { return option.id === answer; });
      return kasusOption ? kasusOption.text : String(answer);
    }
    if (currentExercise.mode === "verb") {
      return answer.map(function (id, index) {
        var option = currentExercise.optionsBySlot[index].find(function (candidate) { return candidate.id === id; });
        return option ? option.text : id;
      }).join(" + ");
    }
    return String(answer);
  }

  function showFeedback(details) {
    feedback.hidden = false;
    feedback.className = "gm-feedback gm-feedback--" + (details.kind === "recovered" ? "correct" : details.kind);
    var titles = {
      correct: "¡Correcto! +" + details.points + " puntos",
      recovered: "¡Recuperado! La regla ya está más clara",
      hint: "Pista",
      reveal: "Solución"
    };
    feedback.append(createNode("strong", "", titles[details.kind] || "Revisa la respuesta"));
    if (details.kind === "hint") {
      feedback.append(createNode("span", "", details.hint));
      return;
    }
    if (details.kind === "reveal") feedback.append(createNode("span", "", formatAnswer(details.answer) + " "));
    feedback.append(createNode("span", "", details.explanation || ""));
    var source = createNode("a", "", " Repasar esta regla →");
    source.href = currentExercise.source.url;
    feedback.append(source);
  }

  function currentResponse() {
    if (currentExercise.mode === "satzbau") return selectedOrder.slice();
    if (currentExercise.mode === "fehlerjaeger") return selectedSegment === currentExercise.errorSegmentId ? selectedOption : "wrong-segment";
    if (currentExercise.mode === "kasus") return selectedOption;
    if (currentExercise.mode === "verb") return selectedSlots.slice();
    return null;
  }

  function lockChallenge() {
    interaction.querySelectorAll("button").forEach(function (button) { button.disabled = true; });
    checkButton.hidden = true;
    hintButton.hidden = true;
    skipButton.hidden = true;
    nextButton.hidden = false;
    nextButton.textContent = missionState.completed && !missionState.pendingRetries.length ? "Ver resultados" : "Siguiente reto";
    nextButton.focus();
  }

  function submitCurrent() {
    if (checkButton.disabled) return;
    var transition = activeRetry
      ? Engine.resolveRetry(missionState, currentExercise, currentResponse())
      : Engine.submitAnswer(missionState, currentExercise, currentResponse());
    missionState = transition.state;
    showFeedback(transition.feedback);
    updateScoreboard();
    persistCurrent();
    if (transition.shouldAdvance) {
      if (!activeRetry && transition.feedback.kind === "reveal" && missionState.pendingRetries.length) retryAvailableAt = missionState.index + 1;
      lockChallenge();
    }
  }

  function skipCurrent() {
    if (activeRetry) return;
    var transition = Engine.skipExercise(missionState, currentExercise);
    missionState = transition.state;
    showFeedback(transition.feedback);
    updateScoreboard();
    persistCurrent();
    if (missionState.pendingRetries.length) retryAvailableAt = missionState.index + 1;
    lockChallenge();
  }

  function nextChallenge() {
    if (activeRetry) activeRetry = false;
    if (missionState.pendingRetries.length && (missionState.index >= retryAvailableAt || missionState.completed)) {
      activeRetry = true;
      renderChallenge();
      return;
    }
    if (missionState.completed) {
      finishSession();
      return;
    }
    renderChallenge();
  }

  function renderModeResults(diagnosis) {
    var container = root.querySelector("[data-summary-modes]");
    container.replaceChildren();
    Object.keys(modeLabels).forEach(function (mode) {
      var result = diagnosis.byMode[mode];
      var card = createNode("div", "gm-result-card");
      var top = createNode("div", "gm-result-card__top");
      top.append(createNode("strong", "", modeLabels[mode]), createNode("span", "", result.total ? result.percentage + "%" : "Sin retos"));
      var bar = createNode("div", "gm-result-card__bar");
      var fill = createNode("span");
      fill.style.width = result.percentage + "%";
      bar.append(fill);
      card.append(top, bar);
      container.append(card);
    });
  }

  function renderWeakTopics(diagnosis) {
    var container = root.querySelector("[data-summary-weak]");
    container.replaceChildren();
    if (!diagnosis.weakTopics.length) {
      container.append(createNode("h3", "", "Misión limpia"), createNode("p", "", "No hay una regla dominante que necesites repetir ahora."));
      root.querySelector('[data-action="repeat-weak"]').hidden = true;
      return;
    }
    root.querySelector('[data-action="repeat-weak"]').hidden = false;
    container.append(createNode("h3", "", "Tus próximos repasos"));
    var list = createNode("ul");
    diagnosis.weakTopics.forEach(function (weak) {
      var item = createNode("li");
      var link = createNode("a", "", weak.topic);
      link.href = weak.sourceUrl;
      item.append(link);
      list.append(item);
    });
    container.append(list);
  }

  function finishSession() {
    var diagnosis = Engine.buildDiagnosis(missionState);
    progressState = Progress.recordMission(progressState, missionState, diagnosis);
    if (!Progress.saveProgress(getStorage(), progressState)) saveWarning.hidden = false;
    root.querySelector("[data-summary-score]").textContent = String(missionState.score);
    root.querySelector("[data-summary-lead]").textContent = diagnosis.total
      ? "Has resuelto " + diagnosis.correct + " de " + diagnosis.total + " retos puntuables (" + diagnosis.percentage + " %)."
      : "La misión terminó antes de registrar resultados.";
    renderModeResults(diagnosis);
    renderWeakTopics(diagnosis);
    showPanel(summary);
  }

  function returnHome() {
    showPanel(entry);
    updateSavedStats();
  }

  function handleInteractionClick(event) {
    var add = event.target.closest("[data-add-block]");
    if (add) {
      selectedOrder.push(add.dataset.addBlock);
      renderSatzbau();
      setCheckAvailability();
      return;
    }
    var remove = event.target.closest("[data-remove-block]");
    if (remove) {
      selectedOrder = selectedOrder.filter(function (id) { return id !== remove.dataset.removeBlock; });
      renderSatzbau();
      setCheckAvailability();
      return;
    }
    var move = event.target.closest("[data-move-block]");
    if (move) {
      var index = selectedOrder.indexOf(move.dataset.moveBlock);
      var target = move.dataset.direction === "left" ? index - 1 : index + 1;
      if (target >= 0 && target < selectedOrder.length) {
        var copy = selectedOrder.slice();
        copy[index] = copy[target];
        copy[target] = move.dataset.moveBlock;
        selectedOrder = copy;
        renderSatzbau();
        setCheckAvailability();
      }
      return;
    }
    var segment = event.target.closest("[data-segment]");
    if (segment) {
      selectedSegment = segment.dataset.segment;
      renderFehlerjaeger();
      setCheckAvailability();
      return;
    }
    var option = event.target.closest("[data-option]");
    if (option) {
      selectedOption = option.dataset.option;
      renderInteraction();
      return;
    }
    var slotOption = event.target.closest("[data-slot-option]");
    if (slotOption) {
      selectedSlots[Number(slotOption.dataset.slot)] = slotOption.dataset.slotOption;
      renderVerb();
      setCheckAvailability();
    }
  }

  root.addEventListener("click", function (event) {
    var practice = event.target.closest("[data-practice-mode]");
    if (practice) {
      progressState.currentMission = null;
      startSession(practice.dataset.practiceMode);
      return;
    }
    if (event.target.closest("[data-start-mission]")) {
      if (!restoreSession(true)) startSession();
      return;
    }
    var action = event.target.closest("[data-action]");
    if (!action) return;
    if (action.dataset.action === "check") submitCurrent();
    if (action.dataset.action === "hint") showFeedback({ kind: "hint", hint: currentExercise.hint });
    if (action.dataset.action === "skip") skipCurrent();
    if (action.dataset.action === "next") nextChallenge();
    if (action.dataset.action === "quit" || action.dataset.action === "change-level") returnHome();
    if (action.dataset.action === "new-mission") startSession();
    if (action.dataset.action === "repeat-weak") {
      var diagnosis = progressState.lastDiagnosis;
      var weakTopic = diagnosis && diagnosis.weakTopics && diagnosis.weakTopics[0];
      var weakExercise = weakTopic && exercises.find(function (exercise) { return exercise.topic === weakTopic.topic; });
      startSession(weakExercise ? weakExercise.mode : null);
    }
    if (action.dataset.action === "retry-load") loadBank();
  });
  interaction.addEventListener("click", handleInteractionClick);

  async function loadBank() {
    try {
      var response = await fetch("/assets/data/grammatik-mission-exercises.json", { cache: "no-store" });
      if (!response.ok) throw new Error("Bank request failed");
      var validated = Engine.validateBank(await response.json());
      exercises = validated.exercises;
      exerciseById = Object.fromEntries(exercises.map(function (exercise) { return [exercise.id, exercise]; }));
      showPanel(entry);
      updateSavedStats();
    } catch {
      showPanel(loadError);
    }
  }

  loadBank();
}());
