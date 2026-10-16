# Administración y futura migración al VPS

## Estado actual

- La web pública se construye como HTML, CSS y JavaScript estáticos.
- Las funciones de autenticación, cuenta y formularios usan Supabase o funciones PHP separadas.
- `/admin/`, `/admin/blogger/` y `/admin/informes/` son entradas protegidas por la sesión de Supabase.
- El editor de posts necesita el runtime Node actual (`npm run posts:manage`) porque lee y escribe `blog-posts/`, `f/` y ejecuta la generación HTML.

## Preparación para el VPS

En la migración habrá que:

1. Servir la salida pública estática desde Nginx o desde el servidor web elegido.
2. Ejecutar `npm run posts:manage` como proceso persistente con systemd o PM2, escuchando solo en localhost.
3. Publicar el editor mediante un reverse proxy bajo `/tools/post-manager/` o una ruta privada equivalente.
4. Mantener HTTPS y el dominio principal en el proxy para que la sesión Supabase funcione correctamente.
5. Añadir una capa de autorización en el servidor del gestor de posts, además de la protección del navegador, antes de exponer sus endpoints `/api/*`.
6. Configurar copias de seguridad y un flujo de despliegue para los Markdown, imágenes y HTML generado.

La migración no forma parte de esta fase; este documento sirve como checklist de infraestructura.
