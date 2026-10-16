# Despliegue de Samuel Coach en Coolify

## Modelo elegido

Una aplicación Docker desde el repositorio. El contenedor sirve el HTML público y el editor Node en el puerto interno `3000`. Coolify publica ese puerto mediante su proxy y gestiona el dominio y HTTPS.

## Configuración en Coolify

1. Crear una Application desde el repositorio Git.
2. Elegir build pack `Dockerfile` y dejar `Dockerfile` como ruta.
3. Configurar `Ports Exposes` como `3000`.
4. Añadir el dominio principal `https://samuelcoachdealeman.com`.
5. Activar el health check HTTP `GET /health` en el puerto `3000` si se prefiere gestionarlo desde Coolify; el Dockerfile ya incluye uno equivalente.
6. Añadir almacenamiento persistente con estos destinos dentro del contenedor:
   - `/app/blog-posts` — fuentes Markdown editables.
   - `/app/f` — imágenes y páginas generadas asociadas a posts.
   - `/app/sitemap.xml` — sitemap generado, si el flujo de despliegue necesita conservarlo entre ejecuciones.
7. Configurar el despliegue automático desde la rama principal después de probar la primera imagen.

## Antes de la primera producción

- Confirmar que el repositorio contiene `package-lock.json` y que el build Docker termina correctamente.
- Crear una copia de seguridad de `blog-posts/` y `f/` antes de activar los volúmenes.
- Verificar Supabase con el dominio final en las URLs de redirección permitidas.
- Probar `/`, `/admin/`, `/admin/informes/`, `/admin/blogger/` y `/health`.
- Añadir autorización en el servidor para los endpoints `/api/*`; la protección actual del navegador no debe considerarse suficiente para exponer una API de escritura en Internet.

## Nota sobre la migración

Este cambio prepara el artefacto desplegable, pero no conecta todavía el VPS ni crea la aplicación dentro de Coolify. La creación final requiere acceso al panel de Coolify, al servidor y al proveedor DNS.
