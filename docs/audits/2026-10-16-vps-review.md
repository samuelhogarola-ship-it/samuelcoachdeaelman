# Revisión de la migración de Samuel Coach al VPS

La web pública y el login funcionan en el VPS, pero la migración todavía tiene pendientes de administración, persistencia, DNS y correo. Esta revisión diferencia lo comprobado en producción de los cambios preparados localmente.

## Producción comprobada

| Área | Resultado |
| --- | --- |
| Web pública | 2307 de 2307 URLs del sitemap responden 200. Sin canonical incorrecto, noindex inesperado ni título ausente en esa muestra. |
| Recursos enlazados | 86 archivos comprobados responden 200. |
| Login | Versión 3b9dc861 publicada; instancia obsoleta detenida. Usuario confirmó que ya funciona. |
| VPS | Docker saludable; 21% del disco ocupado y memoria disponible. Puerto 3000 interno, sin publicación directa. |
| Auth | Proyecto Supabase activo; URL y allowlist correctas para www. |
| Cuenta | RLS activo; acceso anónimo a datos privados bloqueado. Se detectaron diferencias entre el contrato del navegador y las columnas/RPC desplegadas. |
| Copias | Fuentes y páginas actuales y antiguas respaldadas en /data/samuel-coach/backups. Copias locales al mismo VPS. |

## Hallazgos y correcciones listas para publicar

| Hallazgo | Corrección preparada |
| --- | --- |
| API editorial accesible sin sesión; archivos internos y PHP descargables | Verificación de token y administrador en servidor; bloqueo de internos, borradores y volumen. |
| Redirecciones antiguas perdidas al abandonar Apache | Ejecución de RedirectMatch de .htaccess en Node, canonical www, alias admin y barras finales. |
| XML y TXT entregados como binarios | MIME correctos, HEAD y nosniff. |
| Contenedor sin volúmenes persistentes | Almacén editorial con reconciliación por hashes y recuperación de arranque interrumpido. |
| Contacto apunta a PHP y responde 404 | Receptor Node, validación y límites. Necesita proveedor de correo para enviar; sin configuración devuelve error explícito. |
| Respuesta 200 HTML podía fingir envío correcto | Solo se acepta JSON con success:true; se conservan los datos en error. |
| Retorno desde login de administración perdía la ruta | Se conserva la ruta y query solicitadas. |
| Traducciones del blog desaparecían de hreflang y sitemap | Consolidación respeta traducciones reales; sitemap incorpora 25 URLs indexables omitidas. |
| Imágenes OG/Twitter inexistentes | Referencias reparadas con recurso existente y validación de regresión. |
| Guardado de intentos incompatible con columnas actuales; RPC para leer mensajes ausente | Migración incremental preparada y probada para compatibilidad, validación de puntuaciones, propiedad de datos y actualización atómica del progreso. Pendiente de aprobación antes de aplicar a Supabase. |

## Pendientes de infraestructura y configuración

`admin` mezcla direcciones del VPS y del servidor antiguo. El webhook de publicación antiguo sigue activo. El volumen editorial aún no está montado. Los cambios concretos se describen en [el procedimiento del VPS](../coolify-migration.md).

La revisión automática rechazó aplicar DNS, webhook y almacenamiento porque la petición de chequeo no autorizaba explícitamente esas operaciones. No se ejecutaron esas mutaciones. Publicar las correcciones y aplicar esos cambios requiere la aprobación solicitada al usuario.

No existe SMTP personalizado en Supabase ni proveedor de envío configurado en el VPS. La confirmación de cuenta es obligatoria y el límite actual de Auth es 2 correos/hora. Newsletter no tiene desplegadas sus funciones ni su tabla de suscriptores. No se enviaron emails de prueba ni se crearon cuentas reales.

`actividad2` permanece en el hosting antiguo y falla por HTTPS. Su conservación o retirada depende de confirmar si se usa. Los informes de profesor se guardan en el navegador, no en el VPS.

El contenedor actual está saludable según Docker, aunque Coolify mantiene un estado agregado degradado. La instancia anterior detenida todavía existe y conserva etiquetas de la aplicación; no se eliminó. No se ha configurado un respaldo externo periódico. Quedan tres relaciones hreflang comerciales DE→EN sin reciprocidad; no impiden navegar.

## Verificación local

- Suite unitaria y de seguridad: 158 pruebas aprobadas, 0 fallos, en el pase integrado final.
- Base de datos: 2 escenarios PostgreSQL WASM (PGlite 0.5.10) aprobados, esquema actual y esquema del repositorio; comprueban permisos, aislamiento, validación, datos históricos y reaplicación. No sustituyen una prueba de concurrencia multiproceso ni se ejecutaron en producción.
- Navegador: 78 aprobadas, 3 omitidas por la configuración existente.
- ESLint: 0 errores y 20 advertencias previas.
- Enlaces internos y canonical locales: 2355 HTML revisados, sin enlaces internos rotos en el chequeo existente.
- Compilación y check:generated ejecutados en copia aislada para no interferir con cambios concurrentes.

Las pruebas de autenticación exitosa y correo usan fixtures. La sesión real del usuario fue confirmada por él; la entrega real de correo está pendiente del proveedor y de una prueba autorizada.
