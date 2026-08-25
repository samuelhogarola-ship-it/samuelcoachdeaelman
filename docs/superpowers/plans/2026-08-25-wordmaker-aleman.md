# Wordmaker Aleman Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar un mini crucigrama Wordmaker por niveles con 2, 3 o 4 palabras conectadas, letras desordenadas, pistas, cinco vidas y progreso local.

**Architecture:** Un modulo CommonJS/Browser contiene funciones puras para preparar vocabulario, construir cruces y validar palabras. Un controlador DOM consume ese motor y la instantanea local de Vokabel Lab; una pagina y hoja CSS independientes presentan la experiencia y los hubs existentes la descubren.

**Tech Stack:** HTML estatico, CSS, JavaScript sin framework, Node test runner y Playwright.

**Spec:** `docs/superpowers/specs/2026-08-25-wordmaker-aleman-design.md`

## Global Constraints

- Facil usa exactamente 2 palabras, medio 3 y dificil 4.
- Cada ronda debe ser un unico crucigrama conectado y las casillas cruzadas se comparten.
- El contenido sale de la instantanea local de Vokabel Lab; no hay Supabase, login ni API en tiempo de juego.
- Cinco vidas; una comprobacion incorrecta resta una vida.
- La recarga publicitaria queda preparada mediante adaptador local, sin integrar anuncios todavia.
- No se anaden dependencias de produccion.

---

### Task 1: Motor de crucigramas

**Files:**
- Create: `assets/js/wordmaker-engine.js`
- Test: `tests/unit/wordmaker-engine.test.mjs`

**Interfaces:**
- Consumes: entradas `{ id, de, es, artikel, type, level }` y dificultad `easy|medium|hard`.
- Produces: `prepareEntries(entries)`, `buildPuzzle(entries, difficulty, random)`, `normalizeAnswer(value)`, `isAnswerCorrect(value, answer)` y `DIFFICULTY_WORD_COUNTS`.

- [ ] Escribir pruebas que exijan limpieza de articulos, conservacion de `AE/OE/UE/SS`, descarte de expresiones y puzzles conectados de 2, 3 y 4 palabras.
- [ ] Ejecutar `node --test tests/unit/wordmaker-engine.test.mjs` y confirmar que falla porque no existe el motor.
- [ ] Implementar el algoritmo minimo de colocacion horizontal/vertical con coordenadas compartidas y limites calculados.
- [ ] Ejecutar la prueba hasta dejarla verde y revisar que todas las casillas formen un unico componente.
- [ ] Commit de motor y pruebas.

### Task 2: Progreso, vidas y recompensa preparada

**Files:**
- Create: `assets/js/wordmaker-progress.js`
- Test: `tests/unit/wordmaker-progress.test.mjs`

**Interfaces:**
- Consumes: estado serializable y almacenamiento compatible con localStorage.
- Produces: `createProgressStore(storage)`, `applyCorrectAnswer(state, wordLength)`, `applyWrongAnswer(state)` y `createLocalRewardAdapter()`.

- [ ] Escribir pruebas para cinco vidas, perdida de una vida, puntuacion, racha, persistencia y recarga local.
- [ ] Ejecutar `node --test tests/unit/wordmaker-progress.test.mjs` y confirmar el fallo esperado.
- [ ] Implementar las transiciones puras y el adaptador con interfaz `requestReward()`.
- [ ] Ejecutar la prueba hasta dejarla verde.
- [ ] Commit de progreso y pruebas.

### Task 3: Pagina e interaccion completa

**Files:**
- Create: `recursos/wordmaker-aleman/index.html`
- Create: `assets/css/wordmaker-aleman.css`
- Create: `assets/js/wordmaker-aleman.js`
- Test: `tests/playwright/wordmaker-aleman.spec.js`

**Interfaces:**
- Consumes: `window.WordmakerEngine`, `window.WordmakerProgress` y `assets/data/sudoku-german-questions.json`.
- Produces: controles de nivel/dificultad, tablero accesible, bandeja de letras, pistas, marcador, modal de fin y eventos `wordmaker:*` para pruebas.

- [ ] Escribir una prueba Playwright que abra la ruta, cambie dificultad y complete una palabra mediante la interfaz.
- [ ] Ejecutar la prueba y confirmar 404 o ausencia de controles.
- [ ] Crear HTML SEO, estilos responsive y controlador DOM con toque, teclado, borrar, comprobar, nueva ronda y recarga de vidas.
- [ ] Ejecutar la prueba hasta dejarla verde en viewport movil y escritorio.
- [ ] Commit de experiencia jugable.

### Task 4: Descubrimiento y SEO interno

**Files:**
- Modify: `recursos/index.html`
- Modify: `practicar-aleman/index.html`
- Modify: `sitemap.xml`
- Test: `tests/unit/wordmaker-site-integration.test.mjs`

**Interfaces:**
- Consumes: URL canonica `/recursos/wordmaker-aleman/`.
- Produces: enlaces rastreables y referencias consistentes en hubs, metadatos y sitemap.

- [ ] Escribir pruebas que exijan la pagina, canonical, `LearningResource`, enlaces desde ambos hubs y sitemap.
- [ ] Ejecutar la prueba y confirmar que falla por enlaces ausentes.
- [ ] Anadir la tarjeta a ambos hubs, actualizar recuentos/copys y sumar la URL al sitemap sin alterar bloques generados.
- [ ] Ejecutar pruebas unitarias, lint y verificador de enlaces.
- [ ] Commit de integracion.

### Task 5: Verificacion final y entrega

**Files:**
- Modify only if verification exposes a defect in files from Tasks 1-4.

**Interfaces:**
- Consumes: recurso completo.
- Produces: rama verificada y lista para PR.

- [ ] Ejecutar `npm run test:unit`, `npm run lint` y `npm run check:links`.
- [ ] Servir el sitio localmente y ejecutar `npx playwright test tests/playwright/wordmaker-aleman.spec.js --reporter=line`.
- [ ] Capturar escritorio y movil; comprobar tablero, bandeja, textos, foco y ausencia de solapes.
- [ ] Revisar `git diff --check`, `git status` y el diff final.
- [ ] Solicitar revision de codigo y corregir hallazgos antes de abrir la PR.
