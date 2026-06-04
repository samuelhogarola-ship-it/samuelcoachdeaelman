# AUDIT

## Last Closed Cycle
- Mejorada la generacion de distractores de `Sprachbausteine`.
- Fusionado el PR `#31` en `main`.

## What Changed
- Se endurecio la seleccion de distractores para respetar mejor categoria gramatical, perfil flexivo y familia de conectores.
- Se regeneraron los datos de `assets/js/lueckentext-data.js`.
- Se actualizo `sitemap.xml` como parte de la regeneracion.
- Se sustituyeron referencias residuales a `assets/img/logo-tree.png` por `assets/img/logo-tree.webp` en las paginas espanolas con widget de apps.
- Se hizo mas descriptivo el enlace del banner de cookies hacia la politica de privacidad en la web principal y en el tema del blog.

## Review Outcome
- Se detectaron regresiones iniciales en articulos y adjetivos etiquetados como verbos.
- Se corrigieron antes del merge con una segunda pasada sobre el generador.
- Estado final revisado manualmente y sin hallazgos bloqueantes abiertos.

## Validation
- Comprobacion por Node de que los ejercicios `type1` vuelven a tener 3 opciones por hueco.
- Revision manual de casos problematicos de `Sprachbausteine`.
- Revision de PageSpeed Insights movil del 4 de junio de 2026 para `https://samuelcoachdealeman.com/`: rendimiento `93`, con foco restante en imagenes y recursos bloqueantes.
- Verificacion local de que ya no quedan referencias a `logo-tree.png` en HTML publicados y de que el servidor local responde correctamente.
- No se pudo ejecutar `npm run test:e2e:smoke` en esta sesion porque falta el binario `playwright`.

## Current State
- `main` contiene el merge commit `36bac4e`.
- La home movil ya no esta en el escenario previo de ~70; la captura revisada muestra `93` en PageSpeed Insights.
- Queda margen de mejora en CSS bloqueante, Google Fonts y tamano adaptable de algunas imagenes secundarias.

## Follow-up Risks
- Los distractores nominales siguen siendo mas fuertes en categoria gramatical que en cercania semantica.
- Conviene anadir validaciones automaticas especificas para detectar mezclas de categoria en futuros regenerados.
