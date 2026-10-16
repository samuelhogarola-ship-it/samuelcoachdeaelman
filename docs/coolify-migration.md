# Samuel Coach en el VPS

## Estado verificado el 16 de octubre de 2026

La web principal ya se sirve en el VPS `187.124.55.36`, aplicación Coolify `b3hcv1rftd5b46ynn2amvk4v`, desde `main` del repositorio `samuelhogarola-ship-it/samuelcoachdeaelman`. Docker escucha en el puerto interno 3000 y Traefik termina HTTPS. El contenedor no publica directamente sus puertos.

El login quedó reparado y publicado en `3b9dc861`. Una instancia antigua atendía alternativamente peticiones y devolvía los módulos `.mjs` como `application/octet-stream`. Esa instancia está detenida y tiene reinicio deshabilitado. La versión actual está saludable según Docker.

## Correcciones preparadas después de la auditoría

Estas correcciones locales no están publicadas hasta completar la aprobación y verificación de despliegue:

- El servidor verifica el token de Supabase y la política de administrador antes de cualquier `/api/*`.
- Los archivos internos, PHP, borradores y almacenamiento privado no se sirven por HTTP.
- Las reglas `RedirectMatch 301` de `.htaccess` se aplican también en Node; apex y el alias `admin` llevan al dominio canónico `www`.
- MIME correctos para XML, TXT, módulos, fuentes y manifest; soporte HEAD y rutas con barra final.
- El editor espera autorización, envía Bearer y conserva su destino después del login.
- Contacto dispone de un receptor Node. Sin proveedor configurado responde 503 y conserva la alternativa de correo del formulario; no simula un envío correcto.
- El arranque reconcilia contenido editorial persistente con cada nueva versión de la web.

## Almacenamiento persistente

Crear en Coolify un volumen de la aplicación con:

- Host: `/data/samuel-coach/site-data`
- Contenedor: `/app/site-data`
- Variable del Dockerfile: `SAMUEL_CONTENT_DIR=/app/site-data`

`start-site.mjs` prepara `site-data/content/blog-posts` y `site-data/content/f`; los directorios de la aplicación pasan a enlazarlos. `baseline.json` registra las sumas del contenido incluido en la imagen anterior. Los archivos sin cambios editoriales siguen las actualizaciones del repositorio; los editados, subidos o borrados desde el editor se conservan. El directorio `/site-data` y las fuentes Markdown no son públicos. Las páginas publicadas se sirven únicamente a través de `/f/`.

No montar todo `/app`, ni montar directamente árboles HTML sin reconciliación: ocultaría los cambios de las siguientes imágenes. El generador de posts no modifica el sitemap en tiempo de ejecución, por lo que el sitemap pertenece al despliegue y no debe quedar fijado a un volumen antiguo.

Copias iniciales ya guardadas en `/data/samuel-coach/backups/`: fuentes y páginas tanto del contenedor actual como del antiguo, antes de añadir persistencia. Son copias en el mismo VPS; no sustituyen un respaldo externo.

## Primera migración: sembrar antes de montar

**No desplegar la nueva imagen con un volumen vacío.** El arranque conoce el contenido de la imagen y el volumen; no puede recuperar las ediciones del contenedor anterior. Los respaldos existentes permiten recuperar datos, pero no sustituyen la siembra. Detener temporalmente el despliegue automático y mantener la nueva imagen sin tráfico hasta terminar esta operación aprobada.

La siembra necesita dos versiones diferentes de los mismos árboles:

- **Contenido vivo:** copia final de `/app/f` y `/app/blog-posts` del contenedor que atiende producción, incluidos cambios, imágenes y ausencias por borrado editorial.
- **Baseline anterior:** esos árboles extraídos de la imagen inmutable que creó ese contenedor, sin ejecutar su arranque. No calcular el baseline desde el contenido vivo ni desde la nueva imagen: impediría distinguir las ediciones de los archivos que deben actualizarse.

Comparar también el respaldo del contenedor antiguo detenido: resolver sus diferencias y recuperar únicamente los cambios confirmados. No superponer toda esa copia sobre la actual; podría restaurar páginas o imágenes borradas a propósito.

Procedimiento para quien ejecute la migración, tras aprobar volumen y ventana de mantenimiento:

1. Identificar `LIVE_CONTAINER` por la aplicación y verificar que es el único que recibe tráfico. Fijar `OLD_IMAGE_ID` con `docker inspect --format '{{.Image}}' "$LIVE_CONTAINER"`. Preparar `NEW_IMAGE_ID`, la nueva imagen verificada, sin desplegarla aún. Guardar esos identificadores con el respaldo; no usar una etiqueta mutable como `latest`.
2. Crear un directorio de trabajo nuevo fuera del futuro montaje, por ejemplo `MIGRATION_STAGE=$(mktemp -d /data/samuel-coach/migration.XXXXXX)`, y sus subdirectorios `live` y `pristine`. Pausar las escrituras durante la copia final. Detener el contenedor actual en la ventana de mantenimiento proporciona un punto consistente; `docker cp` también funciona con contenedores detenidos. Mantener el contenedor y la imagen anteriores disponibles para rollback.
3. Copiar los dos árboles vivos con `docker cp "$LIVE_CONTAINER":/app/f "$MIGRATION_STAGE/live/f"` y su equivalente para `blog-posts`. Crear un contenedor desechable mediante `docker create --entrypoint /bin/true "$OLD_IMAGE_ID"`, guardar su ID y extraer los mismos árboles a `pristine/f` y `pristine/blog-posts`. No arrancar ese contenedor; eliminar únicamente ese contenedor desechable después de copiar. Si alguna ruta ya es un enlace, comprobar y copiar su destino real, no un enlace que deje de resolver fuera de su contenedor.
4. Generar el baseline viejo usando el módulo de la nueva imagen, sin red y con acceso solamente al directorio de trabajo:

   ```sh
   docker run --rm --network none --entrypoint node \
     --mount "type=bind,src=$MIGRATION_STAGE,dst=/migration" \
     "$NEW_IMAGE_ID" --input-type=module -e '
       import { prepareSiteContent } from "/app/scripts/site-content-store.mjs";
       await prepareSiteContent("/migration/pristine", "/migration/seed");
     '
   ```

   Esto crea `seed/baseline.json` con los hashes de la imagen anterior. `pristine` es una copia desechable: el módulo la transforma en enlaces.
5. Sustituir **por completo** `seed/content/f` y `seed/content/blog-posts` por las copias de `live`, conservando `seed/baseline.json`. Hacerlo únicamente dentro de este staging nuevo. No usar una copia que mezcle árboles: deben conservarse también los archivos que faltan porque fueron borrados. Comparar inventario y SHA-256 de cada archivo vivo con el árbol sembrado; exigir coincidencia completa.
6. Validar en otra copia desechable del seed: extraer los árboles de `NEW_IMAGE_ID` sin arrancarlo y ejecutar `prepareSiteContent` con esos árboles y la copia. Verificar un archivo editorial modificado, una imagen añadida, una borrada y una página sin editar que deba incorporar cambios del nuevo despliegue. La comparación debe cubrir todos los archivos vivos, no solo esos ejemplos. No ejecutar esta reconciliación de prueba sobre el seed definitivo: cambiaría el baseline antes del arranque real.
7. Colocar el seed validado en `/data/samuel-coach/site-data` solo si esa ruta no existe o se ha comprobado vacía; si contiene datos, detenerse y reconciliarlos, sin sobrescribir. Configurar su montaje a `/app/site-data` y comprobarlo con `docker inspect` en el contenedor nuevo. Arrancar exactamente `NEW_IMAGE_ID`, revisar logs y ejecutar las comprobaciones HTTP antes de devolver tráfico. Conservar staging, respaldos, imagen y contenedor anteriores hasta terminar la validación.
8. Si hay que volver atrás, detener las escrituras y el contenedor nuevo antes de restaurar tráfico al anterior. No arrancar a la vez dos versiones que escriban sobre este volumen. Tras admitir nuevas ediciones en la versión nueva, recuperar también esos cambios antes de cualquier rollback a la copia antigua.

El algoritmo de reconciliación no proporciona bloqueo entre procesos: las operaciones de arranque sobre un mismo volumen deben ejecutarse de forma secuencial. Las copias de prueba no deben apuntar al volumen real.

## DNS y publicación antigua

- Apex A: `187.124.55.36`; `www` CNAME al apex. No hay AAAA en esos dos nombres.
- `admin` conserva un A del VPS, otro A del hosting antiguo y un AAAA antiguo. Cambio preparado: A único `187.124.55.36` y AAAA `2a02:4780:7:94a6::1`, la IPv6 comprobada del VPS; añadir `https://admin.samuelcoachdealeman.com` a la aplicación.
- El webhook GitHub `618249997` todavía apunta al despliegue de Hostinger. Desactivarlo, sin borrar el hosting, una vez aprobada la consolidación del VPS.
- `actividad2` y `ftp` siguen apuntando al hosting antiguo. No eliminarlos sin aclarar su uso y conservar sus datos.

## Correo y newsletter

No hay credenciales SMTP/Resend configuradas en el contenedor ni secretos de funciones en Supabase. Auth tiene `site_url` y allowlist correctas para `www`, pero sin SMTP propio, con confirmación obligatoria y límite configurado de 2 correos/hora.

Contacto Node requiere `RESEND_API_KEY`, `RESEND_FROM_EMAIL` y `CONTACT_EMAIL`. `TRUST_PROXY_HOPS=1` se usa en Docker porque Traefik es la única entrada; en una ejecución expuesta directamente no debe habilitarse.

Newsletter necesita proveedor, tabla/migraciones y funciones antes de anunciarlo operativo. No ejecutar todas las migraciones indiscriminadamente: revisar las que faltan y validar sus políticas antes de aplicarlas.

## Secuencia de publicación y comprobación

1. Obtener la aprobación de los cambios de DNS, webhook y volumen; mantener los respaldos.
2. Sembrar y validar el volumen según «Primera migración» antes de montarlo; configurar después el volumen y el dominio admin en Coolify. Corregir únicamente sus registros DNS, preservando el resto de la zona.
3. Publicar el commit verificado. Confirmar que Coolify despliega ese SHA y solo una instancia recibe tráfico.
4. Verificar `/health`, HTTPS en ambos dominios, redirecciones, MIME y hashes públicos de los archivos cambiados.
5. Verificar API anónima 401, rutas privadas 404 y contenido `/f/` público después del montaje.
6. Comprobar que contenido editorial e imágenes sobreviven a un reinicio/despliegue, sin usar datos reales como fixtures.
7. Conectar correo y hacer una prueba final de entrega solo con autorización explícita para enviar.
