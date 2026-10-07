# Verificación y registro de cambios de Samuel Coach de Alemán

Última comprobación y actualización: 2026-10-05 21:16:19 WITA (UTC+08:00).

No se han encontrado regresiones en las comprobaciones del código fusionado. La PR 106 está fusionada y la CI posterior al merge termina en verde tras repetir un fallo de infraestructura. La web pública sigue sirviendo archivos anteriores: las novedades aún no se pueden validar como publicadas.

## Qué cambió y qué podrás ver

| Área | Cambio comprobado |
| --- | --- |
| Lectura | 20 lecturas revisadas A1–B2 y 60 páginas con interfaz ES/DE/EN. Banco del navegador de 471 a 491; las 471 anteriores permanecen idénticas. |
| Acceso | Un error de enlace que contiene un porcentaje literal ya no detiene la inicialización del login. También se muestran callbacks que solo incluyen un código de error. |
| Navegadores | Se elimina sintaxis incompatible de auth.js y se añade control ES2019 en CI para módulos propios. No equivale a certificar las APIs ni el SDK remoto en todos los iPhone. |
| Ejercicios de huecos | Se conservan exactamente los 225 publicados. Añadir lecturas ya no recalcula sus respuestas, huecos ni formatos. Los nuevos borradores requieren revisión y promoción explícita al banco editorial. |
| Dependencias | brace-expansion actualizado de 5.0.9 a 5.0.12; auditoría de dependencias aprobada. |
| Sitemap | 60 URL nuevas sin retirar URL anteriores. No se rediseñan portada, recursos ni login en este lote. |

## Versiones e hitos

- [PR 106](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/106).
- Desarrollado y probado en la rama original: 2026-10-05 por la mañana, Asia/Makassar; commit 8edc9ec8b83941a8250320b88ebad0b62b84014d.
- Fusionado: 2026-10-05 20:52:19 Asia/Makassar, equivalente a 12:52:19 UTC.
- [Commit integrado](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/commit/5bcc7f818fcdacb950cda5fc9f0ba3ad946a49f3): 5bcc7f818fcdacb950cda5fc9f0ba3ad946a49f3.
- Publicado: pendiente. No se ha ejecutado un despliegue durante esta comprobación.
- Otros trabajos previos: main incorporó tres lotes automáticos de 12 registros JSON antes del merge (d18bc6ad, 75c8f61e y bd08f4b1). La PR preserva ese archivo JSON sin cambios respecto a su padre. El banco JSON de importación y el JS del navegador siguen siendo corpus distintos.

## Pruebas posteriores al merge

- 109 pruebas unitarias y de seguridad aprobadas de nuevo sobre el commit integrado.
- Generación reproducible aprobada con check:generated.
- 2.351 páginas HTML verificadas sin enlaces internos rotos.
- [CI del commit integrado](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/actions/runs/37312552870), intento 2: ESLint, unitarias, generación, enlaces, auditoría, Edge Functions, E2E y políticas Supabase aprobadas.
- Navegador en CI: 66 pruebas aprobadas y 3 omitidas previamente por el bloque lueckentext desactivado de tests/playwright/site.spec.js. No se presentan las omitidas como verificadas.
- Incidente conservado: en el primer intento, Supabase no pudo iniciar Docker porque el puerto 54322 estaba ocupado. Falló antes de ejecutar pruebas de políticas. Se repitió únicamente el job fallido, sin cambiar código; pasó.
- Árbol de trabajo limpio tras las comprobaciones. No se introdujeron cambios de producto durante esta verificación.

## Estado público observado

Comprobaciones HTTP y capturas tomadas el 2026-10-05 alrededor de las 21:12 Asia/Makassar. Portadas, recursos y login ES/DE/EN respondieron HTTP 200, al igual que la lectura existente Lenas Zimmer. La muestra nueva Beim Bäcker devolvió 404 en ES/DE/EN. auth.js y ambos bancos JS servidos públicamente difieren del commit integrado; auth.js conserva el doble decode antiguo. Por ello no se afirma que las novedades estén publicadas.

En navegador real se comprobó portada de escritorio, recursos móvil y login móvil. No hubo errores JavaScript ni desbordamiento horizontal en esas tres vistas. El login tiene su diseño independiente sin navegación visible. Se registró una petición de Analytics abortada durante la sesión de recursos; no bloqueó su carga. No se enviaron formularios, correos ni solicitudes con credenciales reales.

El backend de cuentas hocdlmxzghwymamientc.supabase.co sigue dando NXDOMAIN. Es un bloqueo previo; no se ha verificado inicio de sesión real ni corregido la disponibilidad del servicio mediante este merge.

Capturas de la versión pública anterior, conservadas como referencia:

- [Portada de escritorio](2026-10-05-postmerge-evidencias/public-home-desktop.png)
- [Recursos en móvil](2026-10-05-postmerge-evidencias/public-resources-mobile.png)
- [Login en móvil](2026-10-05-postmerge-evidencias/public-login-mobile.png)
- [Resultados HTTP](2026-10-05-postmerge-evidencias/http.json)
- [Resultados de navegador](2026-10-05-postmerge-evidencias/browser.json)

## Lecturas para revisar después de publicar

Estas rutas existen en el código integrado. No deben darse por disponibles en producción hasta desplegar y comprobar la versión. Cada una tiene además variante de interfaz con prefijo /de o /en; los textos de aprendizaje siguen en alemán.

| Nivel | Lectura | Ruta prevista |
| --- | --- | --- |
| A1 | Beim Bäcker | `/leseverstehen/a1/beim-baecker/` |
| A1 | Das Postamt | `/leseverstehen/a1/das-postamt/` |
| A1 | Der Wochenplan | `/leseverstehen/a1/der-wochenplan/` |
| A1 | Lisas Lieblingsfarben | `/leseverstehen/a1/lisas-lieblingsfarben/` |
| A2 | Das Familientreffen | `/leseverstehen/a2/das-familientreffen/` |
| A2 | Der Campingurlaub | `/leseverstehen/a2/der-campingurlaub/` |
| A2 | Der Sprachkurs | `/leseverstehen/a2/der-sprachkurs/` |
| A2 | Sabines verlorener Schlüssel | `/leseverstehen/a2/sabines-verlorener-schluessel/` |
| A2 | Taschengeld | `/leseverstehen/a2/taschengeld/` |
| B1 | Das Straßenfest im Viertel | `/leseverstehen/b1/das-strassenfest-im-viertel/` |
| B1 | Der Schüleraustausch | `/leseverstehen/b1/der-schueleraustausch/` |
| B1 | Die neue Wohngemeinschaft | `/leseverstehen/b1/die-neue-wohngemeinschaft/` |
| B1 | Jugendherbergen in Deutschland | `/leseverstehen/b1/jugendherbergen-in-deutschland/` |
| B1 | Schlafprobleme bei Jugendlichen | `/leseverstehen/b1/schlafprobleme-bei-jugendlichen/` |
| B2 | Altersarmut in Deutschland | `/leseverstehen/b2/altersarmut-in-deutschland/` |
| B2 | Bürgerbeteiligung und Demokratie | `/leseverstehen/b2/buergerbeteiligung-und-demokratie/` |
| B2 | Cybermobbing und digitale Verantwortung | `/leseverstehen/b2/cybermobbing-und-digitale-verantwortung/` |
| B2 | Die Mietpreisbremse | `/leseverstehen/b2/die-mietpreisbremse/` |
| B2 | Digitale Kluft zwischen den Generationen | `/leseverstehen/b2/digitale-kluft-zwischen-generationen/` |
| B2 | Rentensystem und demografischer Wandel | `/leseverstehen/b2/rentensystem-und-demografischer-wandel/` |

## Cómo revertir este lote si hiciera falta

No se ha ejecutado ninguna reversión. Para deshacer exclusivamente el commit squash de la PR 106, crear una rama desde main actualizado, ejecutar `git revert 5bcc7f818fcdacb950cda5fc9f0ba3ad946a49f3`, pasar las pruebas y abrir una PR de reversión. Revisar posibles conflictos si otros trabajos ya dependen de estas lecturas o del banco editorial. Evitar reset o force push sobre main. Si llegara a publicarse, revertir GitHub por sí solo no cambia el hosting: también habría que desplegar y verificar la versión revertida.

## Registro de entrega en WF Studio

Pendiente. La conexión configurada iaglqispczaoduoodzwx.supabase.co sigue devolviendo NXDOMAIN, reconfirmado en esta revisión. No hay identificadores verificados de cliente, proyecto concreto ni entrega; no se inventan ni se crea un duplicado. Este informe y las capturas quedan conservados en el proyecto para adjuntarlos cuando el acceso esté disponible. No se ha guardado ni verificado un registro en el panel.


## Continuación del 6 de octubre

Paquete selectivo preparado y probado, sin publicar: [informe y reversión](2026-10-06-publicacion-selectiva.md). Aclaración: los 225 ejercicios de huecos son el banco del repositorio; producción sirve 65 y el paquete los conserva. WF-Studio tiene panel activo; el bloqueo vigente es la falta de sesión administrativa accesible, no una caída demostrada del panel.
