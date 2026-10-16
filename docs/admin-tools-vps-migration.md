# Administración en el VPS

Samuel Coach ya se ejecuta en Docker y Coolify. El servidor Node sirve la web pública y el gestor de posts en el puerto interno 3000. Traefik publica HTTPS; no se necesita Apache, PHP ni PM2 para este contenedor.

La revisión del 16 de octubre de 2026 encontró que la protección del navegador no estaba acompañada de autorización en las API. La corrección publicada verifica cada token en Supabase antes de permitir leer o modificar posts e imágenes o regenerar el blog. Mantiene la política de administrador existente y no crea nuevas cuentas ni permisos.

El editor conserva el destino al iniciar sesión y adjunta la sesión a sus peticiones. Los borradores, archivos internos y el volumen privado quedan fuera del servidor estático. El módulo de persistencia conserva los cambios editoriales entre despliegues sin fijar para siempre los HTML de la imagen anterior.

El gestor separa **Guardar borrador** de **Publicar**. Publicar guarda la versión, regenera la página y ofrece un enlace a la URL pública. Los posts heredados se editan como HTML para conservar tablas, tarjetas y clases del diseño anterior; el generador reutiliza su plantilla pública y actualiza contenido y metadatos. Los nuevos posts usan la plantilla actual del blog. Los slugs duplicados se rechazan y los Markdown antiguos con otro nombre se normalizan sin dejar dos fuentes para el mismo artículo.

Los informes de profesor todavía guardan plantillas e información en `localStorage` del navegador. Una copia del VPS no respalda esos datos; cambiar de navegador u origen tampoco los transfiere. Esto es una limitación existente que requiere una migración de datos independiente si se desea almacenamiento centralizado.

El estado de publicación, montaje, DNS y correo se detalla en [el procedimiento del VPS](coolify-migration.md). El volumen y la protección de la API están activos; API anónima 401 y retorno al login comprobados. El envío de correo sigue pendiente de proveedor.
