# Publicación selectiva preparada — Samuel Coach de Alemán

Última actualización: 2026-10-06 10:21:11 Asia/Makassar (UTC+08:00).

**Estado: desarrollado y probado; PR106 fusionada; publicación pendiente. Registro en WF-Studio pendiente de sesión administrativa accesible.** No se ha subido ningún archivo a Hostinger.

## Entrega y cambios

La [PR106](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/106) se fusionó el 2026-10-05 a las 20:52:19 Asia/Makassar, commit `5bcc7f818fcdacb950cda5fc9f0ba3ad946a49f3`. [CI posterior al merge aprobada](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/actions/runs/37312552870): 109 pruebas unitarias/seguridad, 66 E2E aprobadas y 3 omisiones previas, generación y enlaces correctos.

Producción tiene un catálogo diferente del repositorio. Se ha preparado un paquete selectivo de **82 archivos: 21 reemplazos y 61 altas**. Conserva íntegramente las 65 lecturas públicas existentes y sus 8 restricciones; incorpora las 20 aprobadas y sus 60 páginas ES/DE/EN, total 85 lecturas. Preserva los ejercicios de huecos servidos actualmente. La cifra 225 del informe anterior corresponde al banco del repositorio, no al público de 65 ejercicios. No desplegar el repositorio completo: incorporaría otros contenidos y cambios pendientes de revisión operativa.

El sitemap mantiene 548 URL únicas anteriores y añade 60: 608 únicas. Tiene 1016 elementos anteriores, incluidos 468 duplicados preexistentes; quedan 1076 elementos. Se mantienen los duplicados para limitar el cambio.

Se incluye auth.js corregido y referencias versionadas en los 18 índices y páginas de acceso, además de las páginas nuevas, para evitar reutilizar el JavaScript cacheado durante una semana.

**Adaptación adicional de hosting, desarrollada pero no fusionada:** se detectó que `/assets/js/auth-redirect.mjs` devuelve `Content-Type: text/plain` y bloquea el módulo de login en navegador. El paquete añade `auth-redirect-pr106.js`, copia exacta del módulo existente, y cambia su importación en las tres páginas de login. Conserva la protección contra redirecciones externas. Esta adaptación está registrada en el manifiesto; no atribuirla al commit106.

## Comprobaciones del paquete

- Revisión independiente: hashes de los 82 archivos, 21 copias de reversión idénticas, 65 objetos conservados y 20 objetos nuevos idénticos al commit aprobado.
- Chromium: **66 comprobaciones aprobadas** sobre una superposición local del paquete y los recursos públicos: 3 índices con 85 tarjetas y 8 restringidas; 3 callbacks de login con porcentaje literal, mensaje visible y limpieza de URL; 60 páginas con 5 preguntas, feedback interactivo y sin desbordamiento a 390 px.
- El SDK de cuentas se sirvió desde la dependencia instalada durante esta prueba. Fuentes externas y analítica se bloquearon deliberadamente; esto no verifica dichos servicios ni el acceso real a cuentas.
- Se conserva evidencia HTTP de las nuevas rutas y del MIME incorrecto. La vista previa adjunta corresponde al paquete local, no a una publicación.
- El backend de cuentas configurado `hocdlmxzghwymamientc.supabase.co` presentó fallo DNS. Login, registro, recuperación y persistencia real siguen pendientes de restaurar y comprobar con acceso al proyecto adecuado. No se afirma que la escuela completa esté operativa.

## Archivos y publicación

Paquete y evidencias: `output/releases/2026-10-06-pr106/`.

- `publicar-pr106.zip`: únicamente los archivos a servir desde la raíz web.
- `restaurar-anteriores.zip`: 21 originales públicos; copia de reversión, nunca publicar como ZIP accesible.
- `release-manifest.json`: rutas, SHA-256 nuevos/anteriores y operación por archivo.
- `rollback-remove-after-restore.txt`: altas que se eliminarían al revertir, después de comprobar que no contienen cambios posteriores.
- `browser-verification.json`, `new-routes-baseline.json`, captura móvil y cabeceras: evidencias de las comprobaciones.

Antes de subir: confirmar el dominio y raíz de Hostinger; realizar copia del servidor; comparar cada archivo existente con `previousSha256` y confirmar ausencia de las altas. Si hay diferencias, detener el reemplazo y reconciliar, sin pisar cambios nuevos. Las verificaciones HTTP conservadas son una instantánea, no una garantía futura.

Publicar primero los JavaScript y las 60 páginas; después los 18 índices/login y el sitemap. Purgar la caché de Hostinger/CDN y comprobar los 82 hashes/rutas desde producción. Verificar navegación, preguntas, tres idiomas y callbacks. Otros consumidores antiguos de auth.js pueden conservar caché hasta su purga o caducidad. Solo entonces registrar el hito publicado con fecha y evidencia. No hace falta ejecutar migraciones para este paquete selectivo; las dependencias de la plataforma completa siguen pendientes.

Reversión: comprobar que los archivos a restaurar siguen correspondiendo al paquete; restaurar los 21 originales; eliminar únicamente las 61 altas del manifiesto si siguen coincidiendo sus hashes; purgar caché y verificar. No revertir commits ni eliminar datos de cuentas para revertir este paquete.

## Registro preparado para WF-Studio

Cliente/proyecto: Samuel Coach de Alemán, identificadores pendientes de verificar en el panel. Buscar entrega existente vinculada a PR106 y actualizarla, evitando duplicados.

Título propuesto: «20 lecturas revisadas y estabilización del acceso — PR106».
Hitos: desarrollado y comprobado; fusionado en la fecha anterior; publicado pendiente. Enlace producción: https://www.samuelcoachdealeman.com/ (sirve aún la versión anterior; no demuestra publicación). Adjuntar este informe y las evidencias mediante las capacidades vigentes del panel, comprobando su acceso posterior.

**Corrección del bloqueo anterior:** el panel real responde en https://admin.webfuengirola.com/paneladmin y exige autenticación. La configuración local antigua no demuestra caída del panel. No hay sesión administrativa accesible en esta tarea; no se han confirmado IDs ni guardado registros. Este archivo conserva la ficha preparada hasta disponer del acceso.
