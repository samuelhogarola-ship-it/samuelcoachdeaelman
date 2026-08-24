# Sudoku de alemán — diseño

## Objetivo

Crear un juego en `/recursos/sudoku-aleman/` que combine sudokus 9x9 con repasos breves de alemán. El jugador elige A1, A2, B1 o B2, completa tableros y, después de cada tres sudokus nuevos resueltos, debe superar una pregunta lingüística del mismo nivel para continuar.

La primera versión será completamente estática y funcionará sin login. Guardará partida, progreso y vidas en el navegador. La integración real de anuncios recompensados queda fuera de este alcance, pero el juego incluirá una interfaz estable para conectarla después.

## Experiencia de juego

### Niveles y tableros

- Cuatro niveles: A1, A2, B1 y B2.
- Veinte tableros deterministas por nivel.
- La dificultad del sudoku aumenta con el nivel mediante más casillas vacías.
- Cada tablero tiene solución conocida, estado independiente, tiempo y mejor marca.
- Solo cuentan para el avance las primeras resoluciones de cada tablero; repetir uno mejora el tiempo, pero no permite acumular preguntas o recompensas.

### Controles

- Cuadrícula 9x9 accesible por ratón, tacto y teclado.
- Selector de nivel y selector de tablero.
- Teclado numérico del 1 al 9.
- Borrar, pista, reiniciar y comprobar.
- Resaltado de fila, columna, bloque, números iguales y conflictos.
- Tres errores de sudoku terminan el intento actual, igual que en Viking Fitness. Las vidas lingüísticas son un sistema separado.

### Puerta lingüística

- Al completar el tercer sudoku nuevo de un bloque, se abre una pregunta obligatoria antes de poder iniciar otro tablero.
- Una respuesta correcta cierra la puerta y comienza un nuevo bloque de tres.
- Una respuesta incorrecta muestra la corrección, resta una vida y presenta otra pregunta aleatoria del mismo nivel.
- El jugador comienza con cinco vidas.
- Al llegar a cero vidas se conservan tableros, tiempos y progreso, pero se bloquea el siguiente bloque.

### Recuperación de vidas

- La UI mostrará una acción `Recuperar 5 vidas`.
- Esa acción llamará a un adaptador `rewardedLifeProvider.show()`.
- En esta versión el adaptador local resuelve inmediatamente y recarga las vidas, para que el juego siga siendo funcional.
- La integración futura reemplazará solo ese adaptador por el SDK del proveedor de anuncios. El juego concederá vidas únicamente cuando el proveedor confirme la recompensa.
- El texto visible no prometerá todavía un anuncio ni mencionará un proveedor concreto.

## Banco de preguntas

### Fuente

Se incluirá un JSON versionado generado desde `https://www.vokabellab.com/api/vocabulario`. El juego nunca dependerá de esa API durante una partida. Un script de mantenimiento permitirá regenerar el archivo desde una URL o un JSON local.

Los niveles se derivan de `thema` igual que en Vokabel Lab:

- A1: temas 1–10.
- A2: temas 11–20.
- B1: temas 21–39.
- B2: temas 40 en adelante.

El generador eliminará filas incompletas, normalizará tipos y artículos, evitará duplicados y producirá únicamente los campos públicos necesarios para las preguntas.

### Tipos de pregunta

1. **Artículo:** para sustantivos con artículo válido; elegir `der`, `die` o `das`.
2. **Gramática:** identificar si la palabra es sustantivo, verbo, adjetivo/adverbio o expresión.
3. **Significado:** elegir la traducción española correcta entre cuatro opciones del mismo nivel, priorizando distractores del mismo tipo gramatical.

La selección equilibrará las tres categorías disponibles, evitará repetir las preguntas recientes y mezclará las opciones. Si una categoría no tiene suficientes datos, se elegirá otra sin bloquear la partida.

## Arquitectura

### Página y estilos

- `recursos/sudoku-aleman/index.html`: estructura, SEO, navegación y contenedores accesibles.
- `assets/css/sudoku-aleman.css`: tablero, panel lateral, estados, modal lingüístico y responsive móvil.
- La página reutilizará la navegación, tipografía, colores y componentes base del sitio. No copiará la identidad visual de Viking Fitness.

### Lógica

- `assets/js/sudoku-engine.js`: helpers puros y banco determinista adaptado del motor probado de Viking Fitness.
- `assets/js/sudoku-questions.js`: normalización, selección y validación de preguntas.
- `assets/js/sudoku-aleman.js`: controlador de UI, temporizador, persistencia, puerta lingüística y adaptador de vidas.
- `assets/data/sudoku-german-questions.json`: banco público y versionado por nivel.
- `scripts/generate-sudoku-question-bank.mjs`: regeneración reproducible desde Vokabel Lab.

La lógica pura no tocará DOM ni almacenamiento. El controlador será el único responsable de renderizar y persistir.

## Persistencia

Se usará un único documento versionado en `localStorage` con:

- nivel y tablero actuales;
- valores y tiempo de cada partida en curso;
- tableros completados y mejores tiempos;
- número de completados nuevos dentro del bloque actual;
- pregunta pendiente;
- cinco vidas y estado de bloqueo;
- historial corto de preguntas para reducir repeticiones.

El lector validará el esquema y recuperará valores seguros si el documento está corrupto. No se guardarán emails, tokens ni datos personales.

## Estados y fallos

- Si el banco JSON no carga, el sudoku seguirá visible, pero no permitirá cruzar la siguiente puerta y mostrará una acción para reintentar.
- Una pregunta pendiente sobrevivirá a recargas para impedir saltarse la puerta cerrando la página.
- Cambiar de nivel no elimina una puerta pendiente: debe resolverse en el nivel que la generó.
- Las pistas no invalidan la resolución, pero quedarán reflejadas en el estado del tablero.
- El juego respetará `prefers-reduced-motion` y no dependerá de animaciones para comunicar estados.

## SEO y descubrimiento

- Título y descripción orientados a `sudoku alemán`, `juegos para aprender alemán` y niveles A1–B2.
- Canonical propio y JSON-LD de `WebApplication`/juego educativo.
- Enlace desde `/practicar-aleman/` y desde la zona de recursos.
- Inclusión en `sitemap.xml`.

## Pruebas y aceptación

### Unitarias

- Los 80 tableros tienen cuadrícula y solución válidas y son distintos.
- Celdas fijas, movimientos, conflictos, resolución y resumen de progreso.
- Mapeo de temas a niveles y construcción de los tres tipos de pregunta.
- Distractores, aleatoriedad inyectable, no repetición y validación de respuestas.
- Puerta exactamente tras cada tres primeras resoluciones.
- Repeticiones no aumentan el contador.
- Error lingüístico resta una sola vida; acierto desbloquea; cero vidas exige recompensa.
- El adaptador concede cinco vidas solo tras resolver la recompensa.

### Navegador

- Flujo completo en escritorio y móvil.
- Teclado, foco, modal y lectores de pantalla.
- Persistencia tras recarga.
- Estado sin banco de preguntas.
- Capturas visuales sin solapamientos en móvil y escritorio.

## Fuera de alcance

- SDK o proveedor real de anuncios.
- Sincronización en Supabase, login o clasificación online.
- Compras, suscripciones o eliminación de anuncios.
- Nuevos contenidos editoriales dentro de Vokabel Lab.

## Entrega

La implementación se hará en una rama y un PR. `NEXT.md` dejará de presentar el juego como aparcado y mantendrá únicamente la integración de anuncios recompensados como pendiente.
