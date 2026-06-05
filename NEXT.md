# NEXT

## Objetivo inmediato
- Reconstruir el blog dentro de la web estatica bajo `/f/` para recuperar trafico de las URLs caidas.
- Publicar los posts uno a uno, solo cuando cada pieza tenga contenido, enlazado interno, SEO tecnico y slug estable.
- Mantener separado este frente del antiguo experimento en GoDaddy/WordPress.

## Ya avanzado
- Creado el hub estatico del blog en `/f/`.
- Publicado el primer articulo en `/f/la-hora-en-aleman-die-uhrzeit/`.
- Añadidos metadatos base para el articulo inicial: `canonical`, Open Graph, Twitter Cards y `BlogPosting` JSON-LD.
- Conectada la home principal con el nuevo blog estatico.
- Actualizado `sitemap.xml` con el hub del blog y el primer post.
- Preparados borradores editoriales en `blog/editorial/` para la siguiente tanda de publicaciones.
- Empezada la migracion de enlaces que antes apuntaban al blog externo para que apunten al nuevo blog local.

## Siguiente tanda de trabajo
- Revisar y normalizar todos los enlaces al blog para que usen `/f/` y no queden restos inconsistentes del dominio anterior.
- Revisar el alcance de los cambios masivos en `leseverstehen`, `recursos` y versiones `de/en` antes de dar por buena la migracion de enlazado.
- Publicar el siguiente post prioritario con pagina estatica completa, metadescripcion, JSON-LD y enlazado interno:
  - `der, die, das`
  - `el dativo`
  - `pronombres personales`
  - `la negacion`
  - `verbos separables`
- Convertir la tabla editorial maestra en checklist de publicacion con estado por slug.
- Definir una plantilla unica para posts con:
  - intro clara
  - resumen visual
  - errores frecuentes
  - CTA
  - posts relacionados
  - FAQ SEO si procede

## SEO tecnico pendiente
- Añadir plantilla reutilizable para `BlogPosting` JSON-LD en todos los posts nuevos.
- Añadir metadescripciones unicas y revisadas manualmente por articulo.
- Reforzar el enlazado entre posts relacionados, recursos, `sprachbausteine`, `leseverstehen` y preparacion TELC/Goethe.
- Revisar si conviene crear un indice tematico dentro de `/f/` por nivel y por categoria.
- Verificar que los slugs antiguos recuperables queden exactamente bajo `/f/...` cuando sea posible.

## Riesgos abiertos
- Hay muchos cambios de enlazado en todo el sitio que todavia no estan auditados uno por uno.
- Sigue existiendo trabajo previo en el tema de WordPress, pero no forma parte de la estrategia final de publicacion.
- Falta una verificacion visual completa del flujo estatico despues de la migracion de enlaces.

## Regla operativa
- No publicar contenido nuevo en sistemas externos.
- Todo post nuevo debe vivir en la web estatica y salir con su SEO tecnico minimo resuelto desde el primer dia.
