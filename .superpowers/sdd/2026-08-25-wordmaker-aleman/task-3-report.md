# Task 3 Report: Wordmaker Aleman

## Estado

Implementada la pagina jugable en `/recursos/wordmaker-aleman/` con HTML semantico, metadatos SEO y `LearningResource`. La experiencia consume los motores existentes y la instantanea local de vocabulario, guarda preferencias y progreso en `localStorage`, y no incorpora dependencias nuevas.

## Entregado

- Selectores accesibles de nivel A1-B2 y dificultad facil, medio y dificil.
- Mini crucigrama conectado con casillas compartidas, pista en espanol, articulo cuando existe y bandeja de letras.
- Toque y teclado fisico, borrar, comprobar, nueva ronda, puntuacion, racha y vidas.
- Victoria y derrota con dialogos accesibles, foco retenido y recarga local rotulada como `demostracion`.
- Eventos `wordmaker:*` para los recorridos de interfaz.
- Diseno responsive sin tipografia ligada al viewport; las casillas calculan un tamano estable para no crear huecos opacos ni bloques sobredimensionados.

## TDD y pruebas

RED inicial:

```text
GET /recursos/wordmaker-aleman/ -> 404
```

Comandos ejecutados:

```text
npx playwright test tests/playwright/wordmaker-aleman.spec.js --reporter=line
5 passed

node --test tests/unit/wordmaker-engine.test.mjs tests/unit/wordmaker-progress.test.mjs
16 passed

npm run lint
0 errors; 20 warnings preexistentes fuera de Task 3

git diff --check
clean
```

Se revisaron capturas en escritorio y movil. La prueba Playwright tambien protege que los huecos del crucigrama no formen un rectangulo opaco y que las casillas se mantengan compactas cuando el tablero tiene un eje largo.

## Alcance pendiente

- Los enlaces desde Recursos y Practicar aleman, el sitemap y la integracion SEO interna pertenecen a Task 4 y no se han modificado.
- La recarga de vidas usa el adaptador local de demostracion hasta que exista un proveedor publicitario real.
