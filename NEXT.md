# NEXT

## Current Focus
- Preparar `/recursos/` como la primera zona evolutiva del proyecto.
- Mantener la web principal estática y estable mientras `Recursos` gana lógica propia.
- Consolidar la calidad de los ejercicios generados antes de mover más lógica de producto.
- Rematar optimizaciones de rendimiento movil sin abrir un frente de rediseño global.

## Next Steps
- Definir la arquitectura de autenticacion para usuarios gratuitos y premium.
- Decidir la pasarela de pago y el modelo de acceso a contenidos premium.
- Separar datos y bloques de `Recursos` para facilitar una futura migracion a React.
- Empezar por `Schreiben` como primer recurso con login y experiencia premium.
- Añadir validaciones automaticas para `Sprachbausteine`, sobre todo para categoria gramatical y consistencia de distractores.
- Mejorar la calidad semantica de distractores nominales y verbales sin romper la consistencia gramatical.
- Atacar el siguiente tramo de rendimiento movil: CSS bloqueante, carga de Google Fonts y tamanos adaptables de `samuel-cookie.webp`, `hero-photo-full.webp` y `logo-main.webp`.

## Notes
- El widget de apps ya no se abre por defecto en movil.
- El `logo-tree.png` pesado ya no se referencia en las paginas espanolas donde seguia vivo.
- Convencion de blog: los posts nuevos deben publicarse con un unico slug canonico, siempre en minusculas, con guiones y sin acentos ni `ñ`.
- Si se rescata un post legacy con otra URL historica, se crea una pagina estatica real en `/f/` para ese slug legacy; no se depende de CSV ni de redirects HTML.
- Convencion tecnica: antes de levantar cualquier proyecto local, comprobar si el puerto objetivo ya esta en uso; si lo esta, arrancar en otro puerto libre en vez de pisar el proceso existente.
- `playwright.config.js` ya aplica esta regla buscando un puerto libre a partir del `4173` o del valor de `PLAYWRIGHT_PORT`.
- Evitar redisenos globales; los cambios de producto deben concentrarse primero en `Recursos`.
- El cierre del ciclo de `Sprachbausteine` ya esta mergeado en `main` mediante el PR `#31`.
