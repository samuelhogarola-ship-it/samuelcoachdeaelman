# Grammatik-Mission — diseño

## Objetivo

Crear un único juego de gramática alemana llamado **Grammatik-Mission** en `/recursos/grammatik-mission/`, con cuatro modalidades complementarias: Satzbau, Fehlerjäger, Kasus y Verb. El alumno podrá jugar una misión mixta de diez retos o practicar una modalidad concreta. Los ejercicios usarán frases, reglas y vocabulario ya publicados en Samuel Coach de Alemán, normalizados en un banco local y revisados antes de publicarse.

La primera versión será estática, funcionará sin login ni API y guardará el progreso en el navegador. No corregirá texto libre con IA ni generará ejercicios durante la partida.

## Principios de contenido

- Reutilizar contenido propio en lugar de crear frases desconectadas del ecosistema actual.
- Conservar la procedencia de cada ejercicio para poder enlazar la explicación o práctica relacionada.
- Mostrar una sola dificultad lingüística principal por reto.
- No aceptar o rechazar una respuesta únicamente mediante una comparación de texto cuando el alemán permita varios órdenes válidos.
- Publicar solamente ejercicios revisados. Los extractores podrán proponer candidatos, pero no los incorporarán automáticamente al banco de producción.
- Adaptar la dificultad al MCER: A1, A2, B1 y B2.

## Fuentes reutilizables

### Fuentes estructuradas

- `assets/js/lueckentext-data.js`: textos, huecos, respuestas y categorías de Sprachbausteine.
- `assets/js/leseverstehen-data.js` y `assets/data/leseverstehen-data.json`: textos completos, nivel, tema y preguntas.
- `assets/data/sudoku-german-questions.json`: vocabulario por nivel, tipo, artículo y metadatos disponibles.
- `assets/js/schreiben-data.js`: contextos, consignas, registros, criterios y consejos.

### Fuentes editoriales

Las tablas, ejemplos y errores frecuentes de los artículos del blog aportarán reglas y frases validadas. Las primeras familias serán:

- Satzbau y TEKAMOLO.
- Verbos separables y modales.
- Pronombres relativos y casos.
- Wechselpräpositionen.
- Declinación del adjetivo.
- Preguntas indirectas y subordinadas.

Las tablas HTML no se analizarán durante la partida. Un proceso de mantenimiento extraerá candidatos y producirá un archivo intermedio; la revisión editorial generará el banco definitivo.

## Experiencia de juego

### Entrada

La pantalla inicial ofrecerá:

- selector de nivel A1, A2, B1 o B2;
- botón principal `Empezar misión`;
- accesos secundarios a Satzbau, Fehlerjäger, Kasus y Verb;
- resumen local de mejor puntuación, mejor racha y dominio por modalidad.

### Misión mixta

Una misión contiene diez retos y garantiza al menos dos apariciones de cada modalidad. Los dos retos restantes se asignan a las áreas con menor dominio local; si todavía no existe historial, se reparten de forma aleatoria sin repetir más de dos veces seguidas la misma modalidad.

Cada respuesta correcta concede 100 puntos. La racha añade una bonificación limitada de 10 puntos por acierto consecutivo, hasta un máximo de 50. La primera versión no tendrá límite de tiempo ni modo contrarreloj.

El jugador comienza cada misión con tres vidas:

- primer intento incorrecto: se pierde una vida y se muestra una pista breve;
- segundo intento incorrecto sobre el mismo reto: se revela la respuesta y la explicación;
- un reto fallado vuelve a aparecer más adelante mediante otro ejercicio con la misma etiqueta gramatical; durante el prototipo de diez ejercicios se repetirá el mismo reto con las opciones reordenadas cuando no exista una alternativa;
- saltar un reto consume una vida, revela la solución y registra el resultado como fallo para el diagnóstico;
- llegar a cero vidas termina la misión, pero conserva el diagnóstico y el progreso obtenido.

### Cierre y diagnóstico

Al terminar se mostrará:

- puntuación, aciertos, errores y mejor racha;
- porcentaje por cada modalidad que haya aparecido;
- hasta dos reglas que necesitan repaso;
- enlace al artículo o recurso relacionado con la debilidad principal;
- acciones `Repetir puntos débiles`, `Nueva misión` y `Cambiar nivel`.

El dominio se calculará con una ventana local de respuestas recientes, dando más peso a los intentos nuevos. No se presentará como certificación de nivel.

## Mecánicas

### Satzbau

El jugador ordena bloques mediante pulsación. En escritorio también podrá arrastrarlos, pero el arrastre nunca será el único control disponible.

- Los bloques serán unidades con sentido: `wegen der Arbeit`, `mit dem Zug` o `neue Kleidung`.
- La puntuación y la validación se basarán en identificadores de bloque, no en HTML ni texto visible.
- Cada ejercicio tendrá una respuesta canónica y, cuando sea necesario, una lista explícita de órdenes aceptados.
- Se evitarán frases con variaciones pragmáticas difíciles de explicar.
- La progresión incluirá posición 2, inversión, Satzklammer, subordinadas, TEKAMOLO y estructuras de nivel B2.

### Fehlerjäger

El jugador identifica un fragmento incorrecto y después selecciona su corrección.

- Cada frase contendrá un único error intencionado.
- Los fragmentos seleccionables estarán definidos editorialmente; el navegador no intentará detectar errores.
- Los distractores pertenecerán a la misma familia gramatical.
- La explicación mostrará la frase correcta, la regla y el motivo del error.
- Los errores podrán cubrir posición verbal, caso, concordancia, terminación, conjugación y registro.

### Kasus

El jugador completa un hueco escogiendo entre formas cercanas.

- La explicación seguirá una cadena lógica: rector → caso → género/número → forma.
- A1 y A2 priorizarán artículos y Wechselpräpositionen.
- B1 y B2 añadirán pronombres relativos, adjetivos, preposiciones y verbos con caso fijo.
- Cada opción tendrá una forma lingüísticamente plausible; no se usarán distractores absurdos.

### Verb

El jugador completa uno o más espacios a partir de un infinitivo y su contexto.

- Un verbo simple tendrá un campo de respuesta.
- Un verbo separable podrá tener dos posiciones: forma conjugada y prefijo.
- La validación normalizará espacios y mayúsculas cuando no cambien la respuesta, pero conservará umlauts y `ß`.
- La progresión incluirá Präsens, modales, separables, Perfekt, subordinadas y Konjunktiv II.
- La primera versión usará selección de bloques o formas; la escritura libre queda para una iteración posterior.

## Interfaz

La superficie principal conservará la identidad visual de Sudoku Alemán y Wordmaker sin copiar sus tableros.

### Barra superior

- nombre del juego y nivel;
- reto actual de diez;
- vidas, racha y puntos;
- barra de progreso con color y texto.

### Tarjeta de reto

- insignia de modalidad y etiqueta gramatical;
- instrucción breve en español;
- frase o bloques en alemán;
- zona interactiva específica de la modalidad;
- acciones `Pista`, `Comprobar` y `Saltar`;
- panel de feedback con estado correcto/incorrecto, solución, regla y enlace de repaso.

### Accesibilidad y responsive

- Todas las mecánicas funcionarán con ratón, tacto y teclado.
- Satzbau incluirá controles para mover cada bloque a izquierda/derecha sin arrastrar.
- El foco visible seguirá el orden lógico del reto.
- Los cambios se anunciarán mediante regiones `aria-live` sin repetir contenido excesivo.
- Color, icono y texto comunicarán conjuntamente los estados.
- Se respetará `prefers-reduced-motion`.
- En móvil, marcador y progreso se compactarán; las opciones ocuparán todo el ancho y tendrán objetivos táctiles de al menos 44 píxeles.

## Modelo de datos

El banco de producción será `assets/data/grammatik-mission-exercises.json` y tendrá versión explícita. Todos los tipos compartirán esta base:

```json
{
  "id": "satzbau-b1-tekamolo-001",
  "mode": "satzbau",
  "level": "B1",
  "topic": "TEKAMOLO",
  "instruction": "Ordena los bloques para formar una frase natural.",
  "source": {
    "kind": "blog",
    "slug": "tekamolo-orden-de-palabras-en-aleman",
    "url": "/f/tekamolo-orden-de-palabras-en-aleman/"
  },
  "explanation": "El orden neutro es temporal, causal, modal y local.",
  "status": "reviewed"
}
```

Campos específicos:

- Satzbau: `blocks`, `canonicalOrder`, `acceptedOrders`.
- Fehlerjäger: `segments`, `errorSegmentId`, `correctionOptions`, `answer`.
- Kasus: `promptParts`, `options`, `answer`, `reasoningSteps`.
- Verb: `infinitive`, `promptParts`, `optionsBySlot`, `answers`.

Un cargador validará versión, identificadores, nivel, modalidad y campos obligatorios antes de empezar una misión. Los ejercicios inválidos se excluirán y se registrarán en consola únicamente durante desarrollo.

## Diez ejercicios iniciales

Estos ejercicios forman el lote editorial y el contenido completo del primer prototipo. El prototipo habilitará únicamente una misión B1 de repaso, que puede incluir reglas introducidas en A1 o A2; los demás niveles aparecerán deshabilitados como `En preparación` hasta que tengan un lote propio completo.

1. **Satzbau · B1 · TEKAMOLO**
   - Bloques: `Ich` / `fahre` / `morgen` / `wegen der Arbeit` / `mit dem Zug` / `nach München`.
   - Solución: `Ich fahre morgen wegen der Arbeit mit dem Zug nach München.`
   - Explicación: temporal → causal → modal → local.

2. **Satzbau · B1 · Nebensatz**
   - Bloques: `Am Samstag` / `gehen` / `Lisa und Tom` / `ins Einkaufszentrum` / `weil` / `sie` / `neue Kleidung` / `brauchen`.
   - Solución: `Am Samstag gehen Lisa und Tom ins Einkaufszentrum, weil sie neue Kleidung brauchen.`
   - Explicación: después de `weil`, el verbo conjugado va al final.

3. **Fehlerjäger · A2 · verbo separable**
   - Frase: `Der Zug abfährt um 8 Uhr.`
   - Solución: `Der Zug fährt um 8 Uhr ab.`
   - Explicación: en una oración principal, el verbo conjugado ocupa la segunda posición y el prefijo va al final.

4. **Fehlerjäger · B1 · verbo separable en subordinada**
   - Frase: `Ich weiß, dass er früh steht auf.`
   - Solución: `Ich weiß, dass er früh aufsteht.`
   - Explicación: en la subordinada el verbo va unido y al final.

5. **Fehlerjäger · B1 · verbo con Dativ**
   - Frase: `Der Kollege, den ich geholfen habe, ist nett.`
   - Solución: `Der Kollege, dem ich geholfen habe, ist nett.`
   - Explicación: `helfen` rige Dativ; el relativo masculino correspondiente es `dem`.

6. **Kasus · A2 · Akkusativ masculino**
   - Frase: `Anna kauft ___ bunten Blumenstrauß.`
   - Opciones: `ein`, `einen`, `einem`, `einer`.
   - Solución: `einen`.
   - Cadena: `kaufen` → objeto directo → Akkusativ → masculino → `einen`.

7. **Kasus · A2 · Wechselpräposition**
   - Frase: `Sie setzen sich auf ___ Bank.`
   - Opciones: `die`, `eine`, `einer`, `einem`.
   - Solución: `eine`.
   - Cadena: cambio de posición → Akkusativ → femenino → `eine`.

8. **Kasus · B1 · preposición con Dativ**
   - Frase: `Der Freund, mit ___ ich gereist bin, heißt Marco.`
   - Opciones: `der`, `den`, `dem`, `dessen`.
   - Solución: `dem`.
   - Cadena: `mit` → Dativ → antecedente masculino → `dem`.

9. **Verb · A1 · Modalverb**
   - Frase: `Morgen ___ ich früher kommen.`
   - Infinitivo: `müssen`.
   - Opciones: `muss`, `musst`, `müssen`, `müsst`.
   - Solución: `muss`.
   - Explicación: primera persona singular de `müssen` en Präsens.

10. **Verb · A2 · Perfekt separable**
    - Frase: `Er hat das Fenster ___.`
    - Infinitivo: `aufmachen`.
    - Opciones: `aufgemacht`, `geaufmacht`, `aufmachen`, `aufmacht`.
    - Solución: `aufgemacht`.
    - Explicación: en el Partizip II separable, `ge-` se inserta entre prefijo y raíz.

## Arquitectura prevista

- `recursos/grammatik-mission/index.html`: estructura, SEO y contenedores accesibles.
- `assets/css/grammatik-mission.css`: diseño del juego y responsive.
- `assets/js/grammatik-mission-engine.js`: selección, validación, puntuación y diagnóstico como funciones puras.
- `assets/js/grammatik-mission.js`: controlador del DOM y flujo de pantallas.
- `assets/js/grammatik-mission-progress.js`: esquema versionado y persistencia local.
- `assets/data/grammatik-mission-exercises.json`: banco revisado.
- `scripts/build-grammatik-mission-candidates.mjs`: extracción reproducible de candidatos para revisión.

El motor no accederá al DOM ni a `localStorage`. El controlador será responsable de renderizar y el módulo de progreso será el único que lea o escriba almacenamiento.

## Persistencia

Se guardará un documento versionado con:

- nivel y preferencias;
- misión en curso y respuestas ya dadas;
- puntuación, vidas y racha;
- historial reciente de ejercicios para reducir repeticiones;
- resultados recientes por modalidad y etiqueta;
- mejores puntuaciones y rachas.

No se almacenarán textos escritos por el alumno, identidad, correo, tokens ni otros datos personales. Un estado corrupto se descartará de forma segura.

## Estados de error

- Si el banco no carga, se mostrará un mensaje con acción `Reintentar`; no se iniciará una misión incompleta.
- Si un nivel no contiene diez ejercicios válidos, se deshabilitará temporalmente y se explicará que está en preparación.
- Si una modalidad queda sin candidatos durante una misión, el motor usará otra modalidad disponible y lo dejará reflejado en el resumen de desarrollo.
- Si falla la persistencia, el juego continuará durante la sesión y avisará de que el progreso no se guardará.

## Fases de implementación

### Fase 1 — Diseño y validación editorial

- Aprobar este documento.
- Revisar los diez ejercicios iniciales.
- Cerrar nombre público y textos principales.

### Fase 2 — Prototipo vertical

- Implementar interfaz, motor común y las cuatro modalidades.
- Usar únicamente los diez ejercicios aprobados.
- Habilitar solamente la misión B1 de repaso; mostrar A1, A2 y B2 como niveles en preparación.
- Verificar la partida completa en escritorio y móvil.

### Fase 3 — Banco por niveles

- Crear el extractor de candidatos.
- Incorporar un mínimo de diez ejercicios por modalidad y nivel, 160 en total, en cuatro lotes independientes de cuarenta ejercicios: A1, A2, B1 y B2.
- Revisar manualmente respuesta, distractores, explicación, nivel y fuente de cada ejercicio.
- Publicar cada lote solamente después de su aprobación editorial; un nivel incompleto permanecerá deshabilitado.

### Fase 4 — Progreso y diagnóstico

- Añadir persistencia versionada.
- Repetición espaciada de errores.
- Informe de fortalezas, debilidades y enlaces de repaso.

### Fase 5 — Integración pública

- Añadir el juego a `/recursos/` y `/practicar-aleman/`.
- Incorporar canonical, metadatos sociales, JSON-LD y sitemap.
- Ejecutar pruebas de accesibilidad, responsive y regresión.

## Pruebas y aceptación

### Motor

- Selecciona diez retos con al menos dos de cada modalidad.
- No repite ejercicios recientes cuando hay alternativas.
- Acepta todos los órdenes declarados y rechaza los demás.
- Valida correctamente fragmentos, opciones y múltiples espacios verbales.
- Aplica puntos, bonificaciones, vidas y reintentos sin duplicarlos.
- Produce un diagnóstico coherente con las respuestas de la misión.

### Datos

- Identificadores únicos y esquema válido.
- Todos los ejercicios tienen nivel, tema, fuente, respuesta y explicación.
- Ningún ejercicio con estado distinto de `reviewed` llega al banco público.
- Todas las opciones contienen exactamente una respuesta válida, salvo que el tipo declare varias explícitamente.

### Navegador

- Partida mixta completa en escritorio y móvil.
- Selección de nivel y práctica de una modalidad.
- Manejo por teclado, foco visible y anuncios accesibles.
- Recuperación de misión después de recargar.
- Estado controlado cuando el JSON no está disponible.
- Respeto de movimiento reducido y ausencia de solapamientos en anchos móviles.

## Fuera de alcance

- Generación o corrección con IA durante la partida.
- Respuestas largas de escritura libre.
- Audio, reconocimiento de voz o evaluación de pronunciación.
- Cuenta online, clasificación entre usuarios o sincronización en Supabase.
- Monetización o anuncios recompensados.
- Modo contrarreloj.
- Publicación automática de ejercicios sin revisión humana.
