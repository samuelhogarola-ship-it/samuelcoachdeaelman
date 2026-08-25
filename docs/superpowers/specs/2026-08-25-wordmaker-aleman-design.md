# Wordmaker Aleman Design

## Objetivo

Crear un juego de vocabulario aleman tipo Wordmaker dentro de Recursos. Cada ronda presenta un mini crucigrama y una bandeja de letras desordenadas. El alumno completa palabras alemanas a partir de pistas en espanol y aprovecha las letras compartidas entre palabras.

## Experiencia

- Selector de nivel linguistico A1, A2, B1 o B2.
- Selector de dificultad: facil usa 2 palabras, medio 3 y dificil 4.
- Todas las palabras de una ronda forman un unico crucigrama conectado.
- Las casillas de cruce pertenecen a ambas palabras; una letra colocada correctamente ayuda a resolver las dos.
- La pista activa muestra el significado en espanol y, en sustantivos, el articulo aleman cuando exista en la fuente.
- Las letras de la palabra activa aparecen desordenadas en una bandeja inferior. Se pueden colocar mediante toque o teclado fisico.
- El jugador empieza con 5 vidas. Comprobar una palabra incorrecta resta una vida; una correcta suma puntos y activa la siguiente pista.
- Al perder todas las vidas se muestra una accion de recarga preparada para una futura integracion publicitaria. Mientras no exista proveedor, reinicia las cinco vidas localmente y queda identificada como recompensa de demostracion.
- El mejor resultado, racha, palabras completadas y preferencias se guardan en localStorage. No requiere Supabase ni login.

## Contenido

La fuente es `assets/data/sudoku-german-questions.json`, instantanea local de Vokabel Lab. Solo se aceptan entradas con una palabra alemana individual de 3 a 12 letras; se eliminan articulos iniciales de los sustantivos para el tablero, se conservan umlauts y Eszett, y se descartan expresiones, alternativas con barra, espacios, numeros o puntuacion.

El generador busca cruces reales y devuelve una ronda conectada. Si la seleccion aleatoria no permite reunir la cantidad solicitada, recorre candidatos adicionales del mismo nivel. Nunca genera palabras aisladas.

## Integracion

- Ruta canonica: `/recursos/wordmaker-aleman/`.
- Accesos desde `/recursos/` y `/practicar-aleman/`.
- Entrada en `sitemap.xml`, metadatos sociales y datos estructurados `LearningResource`.
- Diseno responsive coherente con Sudoku Aleman, con tablero estable, foco visible, estados accesibles y sin dependencias nuevas.

## Validacion

- Pruebas unitarias para normalizacion, filtrado, cruces, cantidades por dificultad y validacion de respuestas.
- Pruebas de integracion para ruta, enlaces, sitemap y metadatos.
- Prueba Playwright del recorrido de una ronda y capturas en escritorio y movil.

