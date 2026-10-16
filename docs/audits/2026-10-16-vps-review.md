# Revisión de la migración de Samuel Coach al VPS

La publicación autorizada está activa en el VPS. Administración, persistencia, DNS y contrato de datos de ejercicios están corregidos. Correo, newsletter y los servicios auxiliares indicados al final siguen pendientes.

## Producción comprobada

| Área | Resultado |
| --- | --- |
| Web pública | 2332 de 2332 URLs del sitemap responden 200. Sin canonical incorrecto, noindex inesperado ni título ausente. Tres errores transitorios durante la renovación del proxy pasaron al reintentarlos. |
| Recursos enlazados | 109 archivos comprobados, incluidas imágenes sociales, responden 200. |
| Login | Corrección de 3b9dc861 conservada; usuario confirmó que funciona. El gestor redirige al login preservando su ruta, verificado en navegador real. |
| VPS | Docker saludable; 21% del disco ocupado y memoria disponible. Puerto 3000 interno, sin publicación directa. |
| Auth | Proyecto Supabase activo; URL y allowlist correctas para www. |
| Cuenta | Migración 20261016000001 aplicada en transacción y verificada antes/después; datos originales intactos y fixtures revertidos. API REST niega acceso anónimo a intentos y RPC con 401. |
| Copias | Fuentes y páginas actuales y antiguas respaldadas en /data/samuel-coach/backups. Respaldo SQL privado y restaurado de prueba en el ordenador del usuario; ver runbook. |

## Hallazgos y correcciones

| Hallazgo | Corrección |
| --- | --- |
| API editorial accesible sin sesión; archivos internos y PHP descargables | Verificación de token y administrador en servidor; bloqueo de internos, borradores y volumen. |
| Redirecciones antiguas perdidas al abandonar Apache | Ejecución de RedirectMatch de .htaccess en Node, canonical www, alias admin y barras finales. |
| XML y TXT entregados como binarios | MIME correctos, HEAD y nosniff. |
| Contenedor sin volúmenes persistentes | Volumen /data/samuel-coach/site-data montado en /app/site-data; 58 archivos verificados frente a copia viva y baseline anterior. Arranque compatible con overlayfs, recuperación ante interrupciones y prueba de reinicio aprobada. |
| Contacto apunta a PHP y responde 404 | Receptor Node, validación y límites. Necesita proveedor de correo para enviar; sin configuración devuelve error explícito. |
| Respuesta 200 HTML podía fingir envío correcto | Solo se acepta JSON con success:true; se conservan los datos en error. |
| Retorno desde login de administración perdía la ruta | Se conserva la ruta y query solicitadas. |
| Traducciones del blog desaparecían de hreflang y sitemap | Consolidación respeta traducciones reales; sitemap incorpora 25 URLs indexables omitidas. |
| Imágenes OG/Twitter inexistentes | Referencias reparadas con recurso existente y validación de regresión. |
| Guardado de intentos incompatible con columnas actuales; RPC para leer mensajes ausente | Migración incremental aplicada para compatibilidad, validación de puntuaciones, propiedad de datos y actualización atómica del progreso. |

## Pendientes de infraestructura y configuración

`admin` tiene únicamente A 187.124.55.36 y AAAA 2a02:4780:7:94a6::1, TTL 300. HTTPS verificado por ambas familias; certificado renovado hasta el 14 de enero de 2027. El webhook antiguo 618249997 está desactivado. El hosting antiguo se conserva. Detalles en [el procedimiento del VPS](../coolify-migration.md).

No existe SMTP personalizado en Supabase ni proveedor de envío configurado en el VPS. La confirmación de cuenta es obligatoria y el límite actual de Auth es 2 correos/hora. Newsletter no tiene desplegadas sus funciones ni su tabla de suscriptores. No se enviaron emails de prueba ni se crearon cuentas reales.

`actividad2` permanece en el hosting antiguo y falla por HTTPS. Su conservación o retirada depende de confirmar si se usa. Los informes de profesor se guardan en el navegador, no en el VPS.

El contenedor actual está saludable según Docker. La instancia obsoleta detenida fue archivada como imagen samuel-legacy-archive:20261016, con inspección privada y copias editoriales, y retirada para evitar etiquetas de producción duplicadas. No se ha configurado un respaldo externo periódico. Quedan tres relaciones hreflang comerciales DE→EN sin reciprocidad; no impiden navegar.

## Verificación local

- Suite unitaria y de seguridad: 162 pruebas aprobadas, 0 fallos, incluida regresión de redirección legacy y arranque Docker overlayfs.
- Base de datos: 2 escenarios PostgreSQL WASM (PGlite 0.5.10) aprobados, además de pruebas transaccionales reales de permisos, aislamiento, puntuaciones, progreso y lectura de mensajes en producción, revertidas sin residuos. No se hizo prueba de concurrencia multiproceso.
- Navegador: 78 aprobadas, 3 omitidas por la configuración existente.
- ESLint: 0 errores y 20 advertencias previas.
- Enlaces internos y canonical locales: 2355 HTML revisados, sin enlaces internos rotos en el chequeo existente.
- Compilación y check:generated ejecutados en copia aislada para no interferir con cambios concurrentes.

Las pruebas de autenticación exitosa y correo usan fixtures. La sesión real del usuario fue confirmada por él; la entrega real de correo está pendiente del proveedor y de una prueba autorizada.
