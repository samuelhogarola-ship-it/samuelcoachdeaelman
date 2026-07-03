---
title: Cómo escribir posts automáticos
slug: como-escribir-posts
description: Guía para crear nuevos posts en el blog usando markdown
date: 2026-07-03
author: Samuel Coach de Alemán
lang: es
---

# Cómo Escribir Posts Automáticamente

Este archivo explica cómo crear nuevos posts para el blog.

## Formato

Cada post es un archivo `.md` en `/blog-posts/` con este formato:

```
---
title: Título del Post
slug: slug-del-post
description: Descripción corta (meta)
date: 2026-07-03
author: Samuel Coach de Alemán
lang: es
---

# Contenido del post

Tu contenido en markdown aquí...
```

## Campos Obligatorios

- **title**: Título del post
- **slug**: URL slug (sin espacios, sin guiones al inicio/final)
- **description**: Meta description (160 caracteres máximo)
- **date**: Fecha de publicación (YYYY-MM-DD)
- **author**: Autor
- **lang**: Idioma (es, en, de)

## Markdown Soportado

- **Encabezados**: `# H1`, `## H2`, `### H3`
- **Bold**: `**texto**`
- **Italic**: `*texto*`
- **Links**: `[texto](url)`
- **Listas**: `- item`
- **Código**: `` `inline` `` o `` ```code block``` ``

## Ejemplo

Crea un archivo: `/blog-posts/mi-primer-post.md`

```markdown
---
title: Mi Primer Post
slug: mi-primer-post
description: Este es mi primer post automático
date: 2026-07-03
author: Samuel Coach de Alemán
lang: es
---

# Bienvenida

Este post se genera automáticamente desde markdown.

## Ventajas

- **Rápido**: Escribe markdown, no HTML
- **Automático**: npm run build:blog genera todo
- **SEO**: Schema.org automático, meta tags

## Cómo publicar

1. Crea `/blog-posts/mi-primer-post.md`
2. Ejecuta: `npm run build:blog`
3. El post aparece en `/f/mi-primer-post/`
4. Commit + push

¡Listo!
```

## Ejecutar Generador

```bash
npm run build:blog
```

Esto genera HTML en `/f/{slug}/index.html` automáticamente.

## Multiidioma

Para crear post en inglés: `/blog-posts/my-first-post-en.md`

Con `lang: en` en frontmatter.

---

**Listo.** Ahora puedes escribir posts en markdown sin tocar HTML.
