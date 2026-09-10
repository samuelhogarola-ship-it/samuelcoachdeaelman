# Grammatik-Mission Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar Grammatik-Mission como un juego estático y accesible con diez retos B1 de repaso, cuatro modalidades, progreso local e integración completa en los hubs del sitio.

**Architecture:** Un banco JSON revisado alimenta un motor CommonJS/UMD sin DOM que valida datos, construye misiones, comprueba respuestas y calcula el diagnóstico. Un módulo separado versiona la persistencia local y un controlador de navegador renderiza las cuatro interacciones. La página y los hubs siguen los patrones ya usados por Sudoku Alemán y Wordmaker.

**Tech Stack:** HTML5 estático, CSS, JavaScript ES2020 sin dependencias de runtime, Node.js `node:test`, Playwright, JSON-LD.

**Spec:** `docs/superpowers/specs/2026-09-08-grammatik-mission-design.md`

## Global Constraints

- Ruta canónica exacta: `/recursos/grammatik-mission/`.
- Nombre público: `Grammatik-Mission`.
- Primera publicación: diez ejercicios aprobados y solo misión B1 habilitada; A1, A2 y B2 muestran `En preparación`.
- Sin API, IA, login, Supabase, audio, clasificación online ni dependencias nuevas.
- La partida normal tiene diez retos, tres vidas, 100 puntos por acierto y bonificación de racha de 10 hasta un máximo de 50.
- El primer fallo consume una vida y muestra pista; el segundo revela solución; saltar consume una vida y cuenta como fallo.
- Ratón, tacto y teclado deben poder completar las cuatro modalidades.
- El juego debe respetar `prefers-reduced-motion` y almacenar únicamente progreso no personal en `localStorage`.
- Los archivos no relacionados que ya estén modificados o sin seguimiento no se tocarán ni se incluirán en commits.

---

### Task 1: Banco editorial y validación de esquema

**Files:**
- Create: `assets/data/grammatik-mission-exercises.json`
- Create: `assets/js/grammatik-mission-engine.js`
- Create: `tests/unit/grammatik-mission-engine.test.mjs`

**Interfaces:**
- Produces: `validateBank(bank): { version: number, exercises: Exercise[] }` que lanza `TypeError` si el documento o cualquier ejercicio no cumple el contrato.
- Produces: `validateAnswer(exercise, response): boolean` para `satzbau`, `fehlerjaeger`, `kasus` y `verb`.
- Produces: `getCanonicalResponse(exercise): string|string[]` para las pruebas y la capa de interfaz.
- Produces: constantes `MODES`, `MISSION_LENGTH`, `STARTING_LIVES` y `BASE_SCORE`.

- [ ] **Step 1: Escribir las pruebas fallidas del contrato y de las cuatro respuestas**

```js
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const engine = require("../../assets/js/grammatik-mission-engine.js");
const bank = require("../../assets/data/grammatik-mission-exercises.json");

test("accepts the reviewed ten-exercise bank", () => {
  const result = engine.validateBank(bank);
  assert.equal(result.version, 1);
  assert.equal(result.exercises.length, 10);
  assert.deepEqual(new Set(result.exercises.map((item) => item.mode)), new Set(engine.MODES));
  assert.ok(result.exercises.every((item) => item.status === "reviewed"));
});

test("rejects duplicate ids and non-reviewed exercises", () => {
  assert.throws(() => engine.validateBank({ version: 1, exercises: [{ id: "x", mode: "kasus", status: "draft" }] }), TypeError);
});

test("validates every interaction by identifiers instead of visible HTML", () => {
  const exercises = engine.validateBank(bank).exercises;
  const byMode = Object.fromEntries(engine.MODES.map((mode) => [mode, exercises.find((item) => item.mode === mode)]));
  assert.equal(engine.validateAnswer(byMode.satzbau, byMode.satzbau.canonicalOrder), true);
  assert.equal(engine.validateAnswer(byMode.fehlerjaeger, byMode.fehlerjaeger.answer), true);
  assert.equal(engine.validateAnswer(byMode.kasus, byMode.kasus.answer), true);
  assert.equal(engine.validateAnswer(byMode.verb, byMode.verb.answers), true);
});
```

- [ ] **Step 2: Ejecutar las pruebas y confirmar RED**

Run: `node --test tests/unit/grammatik-mission-engine.test.mjs`

Expected: FAIL porque el módulo y el banco todavía no existen.

- [ ] **Step 3: Crear el banco JSON con los diez ejercicios exactos del diseño**

El documento tendrá una raíz `version: 1` y un array `exercises` con los diez objetos completos. Cada elemento incluirá `id`, `mode`, `level`, `topic`, `instruction`, `hint`, `explanation`, `source`, `status: "reviewed"` y los campos específicos definidos en el diseño. Los dos Satzbau tendrán identificadores estables por bloque; Fehlerjäger incluirá segmentos seleccionables y cuatro correcciones; Kasus cuatro opciones; Verb uno o dos espacios según el ejercicio.

- [ ] **Step 4: Implementar el UMD mínimo y la validación por modalidad**

```js
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.GrammatikMissionEngine = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const MODES = ["satzbau", "fehlerjaeger", "kasus", "verb"];
  const MISSION_LENGTH = 10;
  const STARTING_LIVES = 3;
  const BASE_SCORE = 100;

  function sameAnswer(actual, expected) {
    if (Array.isArray(expected)) {
      return Array.isArray(actual) && actual.length === expected.length && actual.every((value, index) => value === expected[index]);
    }
    return actual === expected;
  }

  function getCanonicalResponse(exercise) {
    if (exercise.mode === "satzbau") return exercise.canonicalOrder;
    if (exercise.mode === "verb") return exercise.answers;
    return exercise.answer;
  }

  function validateExercise(exercise) {
    const common = ["id", "mode", "level", "topic", "instruction", "hint", "explanation", "source", "status"];
    if (!exercise || common.some((key) => exercise[key] === undefined)) throw new TypeError("Invalid exercise");
    if (!MODES.includes(exercise.mode) || exercise.status !== "reviewed") throw new TypeError("Invalid exercise");
    if (exercise.mode === "satzbau" && (!Array.isArray(exercise.blocks) || !Array.isArray(exercise.canonicalOrder))) throw new TypeError("Invalid Satzbau exercise");
    if (exercise.mode === "fehlerjaeger" && (!Array.isArray(exercise.segments) || !Array.isArray(exercise.correctionOptions))) throw new TypeError("Invalid Fehlerjäger exercise");
    if (exercise.mode === "kasus" && (!Array.isArray(exercise.options) || !Array.isArray(exercise.reasoningSteps))) throw new TypeError("Invalid Kasus exercise");
    if (exercise.mode === "verb" && (!Array.isArray(exercise.optionsBySlot) || !Array.isArray(exercise.answers))) throw new TypeError("Invalid Verb exercise");
  }

  function validateBank(bank) {
    if (!bank || bank.version !== 1 || !Array.isArray(bank.exercises)) throw new TypeError("Invalid bank");
    const ids = new Set();
    bank.exercises.forEach((exercise) => {
      validateExercise(exercise);
      if (ids.has(exercise.id)) throw new TypeError("Duplicate exercise id");
      ids.add(exercise.id);
    });
    return { version: bank.version, exercises: bank.exercises.slice() };
  }

  function validateAnswer(exercise, response) {
    const canonical = getCanonicalResponse(exercise);
    if (exercise.mode === "satzbau" && Array.isArray(exercise.acceptedOrders)) {
      return [canonical].concat(exercise.acceptedOrders).some((answer) => sameAnswer(response, answer));
    }
    return sameAnswer(response, canonical);
  }

  return { MODES, MISSION_LENGTH, STARTING_LIVES, BASE_SCORE, validateBank, validateAnswer, getCanonicalResponse };
}));
```

- [ ] **Step 5: Ejecutar las pruebas y confirmar GREEN**

Run: `node --test tests/unit/grammatik-mission-engine.test.mjs`

Expected: 3 tests PASS.

- [ ] **Step 6: Confirmar el bloque**

```bash
git add assets/data/grammatik-mission-exercises.json assets/js/grammatik-mission-engine.js tests/unit/grammatik-mission-engine.test.mjs
git commit -m "feat: add Grammatik Mission exercise bank"
```

### Task 2: Selección de misión, puntuación y diagnóstico

**Files:**
- Modify: `assets/js/grammatik-mission-engine.js`
- Modify: `tests/unit/grammatik-mission-engine.test.mjs`

**Interfaces:**
- Consumes: banco validado y constantes de Task 1.
- Produces: `createMission(exercises, { level, recentIds, mastery, random }): Mission`.
- Produces: `createMissionState(mission): MissionState`.
- Produces: `submitAnswer(state, exercise, response): Transition`.
- Produces: `skipExercise(state, exercise): Transition`.
- Produces: `buildDiagnosis(state): Diagnosis`.

- [ ] **Step 1: Añadir pruebas fallidas de composición y no repetición**

```js
test("builds a ten-item B1 review mission with every mode represented twice", () => {
  const exercises = engine.validateBank(bank).exercises;
  const mission = engine.createMission(exercises, { level: "B1", recentIds: [], mastery: {}, random: () => 0.25 });
  assert.equal(mission.exercises.length, 10);
  for (const mode of engine.MODES) {
    assert.ok(mission.exercises.filter((item) => item.mode === mode).length >= 2);
  }
});

test("rejects levels without a complete mission", () => {
  assert.throws(() => engine.createMission(engine.validateBank(bank).exercises, { level: "A1", recentIds: [] }), /unavailable/i);
});
```

- [ ] **Step 2: Ejecutar el test y confirmar que falla por funciones ausentes**

Run: `node --test tests/unit/grammatik-mission-engine.test.mjs`

Expected: FAIL en `createMission is not a function`.

- [ ] **Step 3: Implementar composición determinista e inyección de aleatoriedad**

La misión B1 acepta ejercicios cuyo `level` sea A1, A2 o B1. Primero toma dos de cada modalidad y luego completa hasta diez priorizando menor dominio. Si no existen diez ejercicios válidos o faltan dos de una modalidad, lanza `RangeError("Level unavailable")`.

- [ ] **Step 4: Añadir pruebas fallidas de vidas, racha, repetición y salto**

```js
test("applies score, capped streak bonus, hints, reveal and skip rules", () => {
  const mission = engine.createMission(engine.validateBank(bank).exercises, { level: "B1", random: () => 0 });
  let state = engine.createMissionState(mission);
  const first = mission.exercises[0];
  const correct = engine.getCanonicalResponse(first);
  let transition = engine.submitAnswer(state, first, correct);
  assert.equal(transition.state.score, 100);
  assert.equal(transition.state.streak, 1);
  transition = engine.submitAnswer(transition.state, mission.exercises[1], "wrong");
  assert.equal(transition.state.lives, 2);
  assert.equal(transition.feedback.kind, "hint");
  transition = engine.submitAnswer(transition.state, mission.exercises[1], "wrong");
  assert.equal(transition.feedback.kind, "reveal");
  transition = engine.skipExercise(transition.state, mission.exercises[2]);
  assert.equal(transition.state.lives, 1);
  assert.equal(transition.state.results.at(-1).status, "skipped");
});
```

- [ ] **Step 5: Implementar transiciones inmutables y diagnóstico por modalidad/tema**

Cada transición devuelve un estado nuevo, `feedback`, `shouldAdvance` y `shouldEnd`. `buildDiagnosis` calcula intentos, aciertos y porcentaje por modalidad, y devuelve hasta dos temas débiles ordenados por tasa de fallo y recencia.

- [ ] **Step 6: Ejecutar el conjunto del motor**

Run: `node --test tests/unit/grammatik-mission-engine.test.mjs`

Expected: todos los tests PASS.

- [ ] **Step 7: Confirmar el bloque**

```bash
git add assets/js/grammatik-mission-engine.js tests/unit/grammatik-mission-engine.test.mjs
git commit -m "feat: add Grammatik Mission game rules"
```

### Task 3: Persistencia local versionada

**Files:**
- Create: `assets/js/grammatik-mission-progress.js`
- Create: `tests/unit/grammatik-mission-progress.test.mjs`

**Interfaces:**
- Produces: `STORAGE_KEY = "samuel-grammatik-mission-v1"`.
- Produces: `createDefaultProgress(): Progress`.
- Produces: `loadProgress(storage): Progress`.
- Produces: `saveProgress(storage, progress): boolean`.
- Produces: `recordMission(progress, missionState, diagnosis): Progress`.

- [ ] **Step 1: Escribir pruebas fallidas de valores seguros y almacenamiento corrupto**

```js
test("creates and restores safe versioned progress", () => {
  const storage = memoryStorage();
  const initial = progress.createDefaultProgress();
  assert.equal(initial.version, 1);
  assert.equal(initial.preferredLevel, "B1");
  assert.equal(progress.saveProgress(storage, initial), true);
  assert.deepEqual(progress.loadProgress(storage), initial);
});

test("falls back without throwing for absent, corrupt or unavailable storage", () => {
  assert.deepEqual(progress.loadProgress(null), progress.createDefaultProgress());
  assert.deepEqual(progress.loadProgress({ getItem() { return "{"; } }), progress.createDefaultProgress());
  assert.equal(progress.saveProgress({ setItem() { throw new Error("blocked"); } }, progress.createDefaultProgress()), false);
});
```

- [ ] **Step 2: Ejecutar y confirmar RED**

Run: `node --test tests/unit/grammatik-mission-progress.test.mjs`

Expected: FAIL porque el módulo no existe.

- [ ] **Step 3: Implementar el módulo UMD sin acceder directamente a `window`**

El documento guardará `preferredLevel`, `currentMission`, `recentExerciseIds`, `modeHistory`, `topicHistory`, `bestScore` y `bestStreak`. El lector limitará arrays e ignorará campos desconocidos; ninguna función almacenará datos personales.

- [ ] **Step 4: Añadir prueba de registro y límites de historial**

```js
test("records a mission and caps histories", () => {
  let state = progress.createDefaultProgress();
  state = progress.recordMission(state, { score: 740, bestStreak: 4, results: sampleResults(80) }, sampleDiagnosis());
  assert.equal(state.bestScore, 740);
  assert.equal(state.bestStreak, 4);
  assert.ok(state.recentExerciseIds.length <= 30);
  assert.ok(Object.values(state.modeHistory).every((items) => items.length <= 20));
});
```

- [ ] **Step 5: Ejecutar y confirmar GREEN**

Run: `node --test tests/unit/grammatik-mission-progress.test.mjs`

Expected: todos los tests PASS.

- [ ] **Step 6: Confirmar el bloque**

```bash
git add assets/js/grammatik-mission-progress.js tests/unit/grammatik-mission-progress.test.mjs
git commit -m "feat: persist Grammatik Mission progress"
```

### Task 4: Página, controlador y cuatro interacciones accesibles

**Files:**
- Create: `recursos/grammatik-mission/index.html`
- Create: `assets/css/grammatik-mission.css`
- Create: `assets/js/grammatik-mission.js`
- Create: `tests/unit/grammatik-mission-site.test.mjs`
- Create: `tests/playwright/grammatik-mission.spec.js`

**Interfaces:**
- Consumes: `window.GrammatikMissionEngine`, `window.GrammatikMissionProgress` y `fetch("/assets/data/grammatik-mission-exercises.json")`.
- Produces: raíz `[data-grammatik-mission]`, selector `[data-level]`, comienzo `[data-start-mission]`, tarjeta `[data-challenge]`, feedback `[data-feedback]` y resumen `[data-summary]`.

- [ ] **Step 1: Escribir primero el contrato estático fallido**

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("publishes an indexable and accessible Grammatik Mission shell", async () => {
  const html = await readFile("recursos/grammatik-mission/index.html", "utf8");
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.samuelcoachdealeman\.com\/recursos\/grammatik-mission\/">/);
  assert.match(html, /"@type": "LearningResource"/);
  assert.match(html, /data-grammatik-mission/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /grammatik-mission-engine\.js/);
  assert.match(html, /grammatik-mission-progress\.js/);
  assert.match(html, /grammatik-mission\.js/);
});
```

- [ ] **Step 2: Ejecutar y confirmar RED**

Run: `node --test tests/unit/grammatik-mission-site.test.mjs`

Expected: FAIL con `ENOENT` para la página.

- [ ] **Step 3: Crear la página semántica y el CSS responsive**

La página incluye navegación y pie coherentes con Recursos, hero breve, panel de entrada, selector de nivel, marcador, barra de progreso, tarjeta de reto, panel de feedback y resumen final. A1/A2/B2 son botones deshabilitados con texto visible `En preparación`; B1 es seleccionable. El CSS usa variables existentes, `min-height` estable para evitar saltos y un breakpoint móvil que apila marcador y acciones.

- [ ] **Step 4: Implementar el controlador de pantalla**

El controlador carga y valida el banco, recupera progreso, inicia una misión y renderiza por modalidad:

- Satzbau: botones de bloque y zona de respuesta; pulsar alterna banco/respuesta; controles `Mover a la izquierda` y `Mover a la derecha` disponibles por teclado.
- Fehlerjäger: botones de segmento; después de elegir el segmento correcto aparecen las correcciones.
- Kasus: botones de opción en el hueco.
- Verb: uno o dos grupos de opciones etiquetados por posición.

`Comprobar`, `Pista`, `Saltar` y `Siguiente` llaman únicamente al motor. El controlador guarda después de cada transición y muestra aviso no bloqueante si `saveProgress` devuelve `false`.

- [ ] **Step 5: Completar el contrato estático y comprobar GREEN**

Run: `node --test tests/unit/grammatik-mission-site.test.mjs`

Expected: PASS.

- [ ] **Step 6: Escribir el recorrido Playwright antes de ejecutarlo**

```js
import { expect, test } from "@playwright/test";

test("plays a mixed B1 mission with keyboard-accessible challenges", async ({ page }) => {
  await page.goto("/recursos/grammatik-mission/");
  await page.getByRole("button", { name: "Empezar misión" }).click();
  await expect(page.locator("[data-challenge]")).toBeVisible();
  await expect(page.locator("[data-progress-text]")).toContainText("1 de 10");
  await expect(page.getByRole("button", { name: /A1.*En preparación/ })).toBeDisabled();
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toBeVisible();
});
```

- [ ] **Step 7: Ejecutar el recorrido y corregir únicamente fallos del nuevo juego**

Run: `npx playwright test tests/playwright/grammatik-mission.spec.js --reporter=line`

Expected: PASS en Chromium configurado por el repositorio.

- [ ] **Step 8: Confirmar el bloque**

```bash
git add recursos/grammatik-mission/index.html assets/css/grammatik-mission.css assets/js/grammatik-mission.js tests/unit/grammatik-mission-site.test.mjs tests/playwright/grammatik-mission.spec.js
git commit -m "feat: build Grammatik Mission interface"
```

### Task 5: Integración en Recursos, Apps, sitemap y analítica

**Files:**
- Modify: `recursos/index.html`
- Modify: `practicar-aleman/index.html`
- Modify: `sitemap.xml`
- Modify: `tests/unit/grammatik-mission-site.test.mjs`
- Modify: `tests/unit/umami-analytics-core.test.mjs` only if the new tracked page requires a fixture adjustment; do not weaken coverage.

**Interfaces:**
- Consumes: ruta pública y metadatos de Task 4.
- Produces: enlaces descubribles desde ambos hubs y entrada canónica en sitemap.

- [ ] **Step 1: Añadir primero las pruebas de integración fallidas**

```js
test("links Grammatik Mission from both Spanish discovery hubs", async () => {
  for (const path of ["recursos/index.html", "practicar-aleman/index.html"]) {
    const html = await readFile(path, "utf8");
    assert.match(html, /href="\/recursos\/grammatik-mission\/"/);
    assert.match(html, /Grammatik-Mission/);
  }
});

test("adds the canonical route to sitemap", async () => {
  const xml = await readFile("sitemap.xml", "utf8");
  assert.match(xml, /https:\/\/www\.samuelcoachdealeman\.com\/recursos\/grammatik-mission\//);
});
```

- [ ] **Step 2: Ejecutar y confirmar RED**

Run: `node --test tests/unit/grammatik-mission-site.test.mjs`

Expected: FAIL porque los enlaces y sitemap todavía no existen.

- [ ] **Step 3: Integrar la tarjeta y actualizar metadatos contadores**

En `recursos/index.html`, añadir Grammatik-Mission a la sección Juegos. En `practicar-aleman/index.html`, pasar de cinco a seis apps en título descriptivo, textos sociales, JSON-LD y encabezado visible, y añadir una tarjeta del juego. En `sitemap.xml`, añadir la URL con el mismo formato y fecha de los recursos hermanos.

- [ ] **Step 4: Ejecutar integración, analítica y enlaces**

Run: `node --test tests/unit/grammatik-mission-site.test.mjs tests/unit/umami-analytics-core.test.mjs`

Expected: PASS; si Umami falla por HTML generado o reportes no rastreados, identificar el archivo exacto y no cambiar la política de cobertura para ocultarlo.

Run: `npm run check:links`

Expected: PASS sin enlaces internos rotos.

- [ ] **Step 5: Confirmar el bloque**

```bash
git add recursos/index.html practicar-aleman/index.html sitemap.xml tests/unit/grammatik-mission-site.test.mjs
git commit -m "feat: publish Grammatik Mission in resource hubs"
```

### Task 6: Verificación final y entrega integrada

**Files:**
- Modify only files del juego si una comprobación reproduce un defecto nuevo mediante una prueba fallida.

**Interfaces:**
- Consumes: todos los entregables anteriores.
- Produces: evidencia reproducible de que el juego y el sitio cumplen el diseño.

- [ ] **Step 1: Verificar formato y lint**

Run: `git diff --check d39eb8f2..HEAD`

Expected: exit 0.

Run: `npm run lint`

Expected: 0 errores; las advertencias preexistentes se documentan sin ampliarlas.

- [ ] **Step 2: Ejecutar todas las pruebas unitarias**

Run: `npm run test:unit`

Expected: todos los tests PASS. Si falla la comprobación Umami por `playwright-report/index.html`, retirar únicamente ese artefacto generado del área de trabajo mediante una operación recuperable o ejecutar en un checkout limpio; no modificar el test para aceptar el reporte.

- [ ] **Step 3: Ejecutar el recorrido E2E del juego**

Run: `npx playwright test tests/playwright/grammatik-mission.spec.js --reporter=line`

Expected: PASS.

- [ ] **Step 4: Verificar la página en escritorio y móvil**

Abrir `/recursos/grammatik-mission/` en 1440×900 y 390×844. Comprobar hero, selector, los cuatro tipos de reto, feedback, resumen, teclado, foco y ausencia de desbordamiento horizontal. Guardar capturas únicamente en un directorio temporal no rastreado.

- [ ] **Step 5: Revisar el alcance contra el diseño**

Confirmar explícitamente: diez ejercicios revisados; cuatro modalidades; B1 habilitado; niveles restantes deshabilitados; tres vidas; puntuación/racha; pista/revelación/salto; diagnóstico; persistencia; enlaces de repaso; hubs; sitemap; SEO; accesibilidad; sin API ni datos personales.

- [ ] **Step 6: Confirmar cualquier corrección final y dejar la rama integrada**

```bash
git add recursos/grammatik-mission assets/css/grammatik-mission.css assets/js/grammatik-mission*.js assets/data/grammatik-mission-exercises.json recursos/index.html practicar-aleman/index.html sitemap.xml tests/unit/grammatik-mission*.test.mjs tests/playwright/grammatik-mission.spec.js
git commit -m "fix: complete Grammatik Mission verification"
```

Si no hubo correcciones desde el commit anterior, no crear un commit vacío. Como el trabajo se ejecuta sobre `main` por petición expresa de integración total, no se realizará un merge adicional; el resultado final será el `HEAD` de `main`.
