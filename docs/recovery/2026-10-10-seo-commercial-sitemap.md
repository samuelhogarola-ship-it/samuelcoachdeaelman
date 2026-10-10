# Entrega SEO comercial y saneamiento del sitemap

**Cliente:** Samuel Coach de Alemán

**Proyecto:** web y plataforma de la escuela de alemán

**Fecha de entrega:** 2026-10-10 16:26 WITA (Asia/Makassar)
**Última actualización:** 2026-10-10 16:28 WITA (Asia/Makassar)

## Estado de los hitos

| Hito | Estado | Fecha y evidencia |
| --- | --- | --- |
| Desarrollado | Completado | Portada, precios, reseñas verificables y sitemap implementados y comprobados el 2026-10-10. |
| Fusionado | Completado | PR [#108](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/108), merge `b849e92a0d240acc381671fa50bbcf459a0a467f`, 2026-10-10 15:42 WITA. PR [#109](https://github.com/samuelhogarola-ship-it/samuelcoachdeaelman/pull/109), merge `2670540ad1ade7bb358ecde72ccb23b6af955cdf`, 2026-10-10 16:26 WITA. |
| Publicado | Pendiente | No hay una vía VPS/Hostinger verificada en el repositorio. La producción seguía sirviendo la versión anterior al comprobarla el 2026-10-10 16:28 WITA. |

## Cambios entregados

- Portada móvil con H1 más corto, lectura clara y fotografía real separada del texto.
- Precios visibles: clase individual desde 30 €/h y clase en pareja por 40 €/h en total.
- Sustitución de la garantía absoluta por una explicación verificable del método y seguimiento.
- Recuentos públicos actualizados: 123 reseñas en Google y 48 opiniones en Superprof, 171 en total.
- Nombres públicos comprobados sin fotografías de perfil ni citas inventadas.
- Ofertas en datos estructurados para servicios, preparación Goethe y preparación TELC.
- Sitemap reducido de 2.775 entradas a 2.307 URLs únicas, eliminando 468 duplicados sin perder URLs.
- Deduplicación integrada en los generadores, con conservación de 549 `lastmod`, orden XML válido e idempotencia.

## Evidencias y comprobaciones

- [Captura móvil completa](2026-10-10-home-mobile-seo.png), viewport 390 × 844, generada desde el código fusionado.
- PR #108: ESLint, Edge Function typecheck, políticas de Supabase, Playwright E2E y CodeRabbit en verde; revisión final con riesgo mínimo y sin comentarios accionables.
- PR #109: los mismos checks remotos en verde; revisión final con riesgo mínimo y sin comentarios accionables.
- Hook local de ambas ramas: suite unitaria completa y smoke test 10/10.
- Navegación base: 13 pruebas pasadas y 3 omisiones previstas.
- SEO comercial: 7/7 pruebas pasadas.
- Enlaces internos: 2.351 HTML comprobados, sin roturas.
- Foto original conservada con SHA-256 `30af8f35b4dd65f7083e3ad151cada14c0c52df549a90676e0d0d84310e00c62`.
- Sitemap antes/después: mismo conjunto de 2.307 URLs; segunda generación con hash idéntico.

## Producción y pendientes

URL de producción: <https://www.samuelcoachdealeman.com/>.

La comprobación directa de producción del 2026-10-10 16:28 WITA encontró el H1 anterior «Aprende alemán de verdad.», sin el precio de 30 €/h, con los recuentos 124/47 y un sitemap de 1.016 entradas, 548 únicas y 468 duplicadas. Por tanto, las PR están fusionadas pero **no se consideran publicadas**. La publicación requiere desplegar desde una vía Git/VPS verificada, purgar caché si corresponde y repetir la comprobación de portada, precios, reseñas y sitemap.

## Registro preparado para WF-Studio

Buscar primero una entrega existente vinculada a las PR #108/#109 dentro del cliente Samuel Coach de Alemán y del proyecto concreto de web/plataforma; actualizarla y adjuntar este informe y la captura, evitando duplicados.

**Registro en WF-Studio pendiente.** El panel <https://admin.webfuengirola.com/paneladmin> está operativo, pero el 2026-10-10 16:28 WITA solo mostró el formulario de acceso y no había una sesión administrativa disponible. No se pudieron verificar los identificadores de cliente, proyecto o entrega ni realizar la lectura posterior exigida, por lo que no se ha afirmado ningún guardado.
