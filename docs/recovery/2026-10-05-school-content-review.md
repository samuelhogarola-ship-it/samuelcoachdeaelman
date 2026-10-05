# Samuel Coach de Alemán: contenido y plataforma

Fecha de desarrollo y actualización: 2026-10-05 09:25 (Asia/Makassar, UTC+08:00).
Base revisada: main c481984c2a811cb5c3f5dc90b54a8103307052fe.
Estado: desarrollado en rama de revisión; no fusionado ni publicado.

## Resultado

Se recuperan 20 lecturas de las PR #104/#105 mediante revisión editorial (4 A1, 5 A2, 5 B1, 6 B2): el corpus pasa de 471 a 491, conservando exactamente los textos publicados y sus slugs. Se generan 60 páginas en ES/DE/EN. Las fuentes JSON de importación y JS del navegador contienen corpus distintos: no se sobrescribe el JSON.

El login vuelve a inicializarse cuando un callback contiene un porcentaje literal o solo un código de error. Se elimina el doble decode de URLSearchParams y se mantienen las restricciones de acceso. ESLint verifica sintaxis ES2019 en módulos propios del navegador; esto no certifica las APIs ni el SDK remoto de Supabase en todos los dispositivos iOS.

La regeneración de Sprachbausteine usa ahora assets/data/sprachbausteine-published.json como fuente editorial. Conserva los 225 ejercicios publicados y sus respuestas, identificadores y formatos. buildDraftExercises sigue disponible para elaborar candidatos, pero añadir lecturas no publica automáticamente nuevos cloze. Para publicar uno, revisar texto, distractores y respuestas, añadirlo al snapshot y regenerar. Corregir intencionadamente uno publicado exige valorar el progreso guardado.

brace-expansion se actualiza de 5.0.9 a 5.0.12 dentro del rango de la dependencia; npm audit tras la actualización informa cero vulnerabilidades.

## Revisión de PR abiertas

| PR | Hallazgo y disposición |
| --- | --- |
| [86](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/86) | Draft con conflictos, 574 archivos. Newsletter DE/EN sitúa el mensaje fuera del formulario, aunque newsletter.js lo busca dentro. Portar selectivamente las mejoras comerciales sobre el generador vigente. |
| [88](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/88) | Draft con conflictos. Comparte 36 de sus 37 archivos con #86. Tarjetas comerciales españolas en home DE/EN y documentación editorial promovida como artículo público. El generador antiguo ya no existe en main; no restaurarlo. |
| [97](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/97) | Fusionable y CI correcto al revisar. Ajuste tablet acotado; test desktop calcula intersección con solo dos bordes. Pendiente integración/revisión final. |
| [103](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/103) | Fusionable; CI falla en check:generated por páginas/sitemap desactualizados. El fallo no prueba que las imágenes sean defectuosas. Pendiente actualizar y comprobar las imágenes. |
| [104](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/104) | Rama antigua con 1.443 archivos. Reutiliza dos slugs publicados para historias diferentes y mueve las originales a nuevos slugs. Recuperación selectiva preservando los originales; no integrar toda la rama. |
| [105](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/105) | Se recuperan ocho lecturas revisadas. Su descripción no corresponde al banco cloze real: los ocho nuevos son derivados de las mismas lecturas. Evitar sustituir el corpus actual por su versión antigua. |

Las PR originales permanecen abiertas. No se ha fusionado ni desplegado ninguna.

## Revisión editorial

En los textos B1 se sustituyen generalizaciones no sustentadas por situaciones concretas; las respuestas se deducen del texto. En B2 se distingue brecha de pensiones de riesgo de pobreza y se corrige la revisión automática del complemento Grundrente. Referencias de contraste: [DRV](https://www.deutsche-rentenversicherung.de/SharedDocs/FAQ/grundrente/04_grundrente_antrag_stellen_faq.html), [Destatis](https://www.destatis.de/DE/Themen/Querschnitt/Gleichstellungsindikatoren/gender-pension-gap-f33.html).

## Verificación y pendientes

- 109 pruebas unitarias y de seguridad pasan.
- Cinco pruebas de navegador del login pasan: callbacks ES/DE/EN, error sin descripción y retorno a contenido restringido tras login simulado. Antes de corregir, los cuatro casos de error fallaban.
- ESLint: cero errores, 20 avisos preexistentes.
- build:generated y check:generated pasan; generación reproducible.
- 2.291 páginas HTML comprobadas sin enlaces internos rotos.
- git diff --check pasa.
- Comparación contra main: 471 lecturas y 225 cloze publicados conservados exactamente.
- Sitemap: 60 URL añadidas, ninguna retirada. Conserva los duplicados preexistentes; su limpieza queda fuera de este cambio.
- Revisión independiente de auth y fuente editorial cloze: sin bloqueantes.
- 13 pruebas adicionales de recursos/cuenta pasan (18 pruebas de navegador verificadas en total). La suite E2E completa y CI remota quedan pendientes. Las pruebas del login usan respuestas simuladas y no acreditan disponibilidad del backend real. El 5 de octubre de 2026 se reconfirma NXDOMAIN (respuesta DNS pública Status 3) para hocdlmxzghwymamientc.supabase.co; no se cambian proyecto, cuentas ni credenciales para evitar perder acceso al histórico.

La escuela sigue pendiente de restaurar/verificar el backend de autenticación, validar las migraciones del runbook crítico y definir roles/retención antes de trasladar informes de alumnos a almacenamiento compartido.

Registro WF-Studio: pendiente de acceso y lectura de verificación. Enlaces de revisión y registro se añadirán cuando existan; no hay despliegue nuevo de producción.
