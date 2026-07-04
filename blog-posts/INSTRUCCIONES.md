---
title: Cómo escribir posts automáticos
slug: como-escribir-posts
description: Guía para crear nuevos posts en el blog usando markdown
date: 2026-07-04
author: Samuel Coach de Alemán
lang: es
---

# Cómo Escribir Posts Automáticamente

Crear un blog post es tan fácil como escribir texto en markdown.

## 🚀 Opción 1: Comando Interactivo (Recomendado)

```bash
npm run new:post
```

Te pide interactivamente:
- **Título** del post
- **Slug** (URL, ej: mi-primer-post)
- **Meta description** (160 caracteres max)
- **Autor** (default: Samuel Coach de Alemán)
- **Idioma** (es/en, default: es)
- **¿Añadir imagen?** (s/n)

El script:
1. Crea `/blog-posts/mi-post.md` con frontmatter
2. Crea carpeta `/f/mi-post/img/` para la imagen
3. Ejecuta `npm run build:blog` automáticamente
4. Tu post está listo en `/f/mi-post/index.html`

## 📝 Opción 2: Manual

Crea un archivo en `/blog-posts/` con este formato:

```markdown
---
title: Mi Primer Post
slug: mi-primer-post
description: Descripción corta para meta tags
date: 2026-07-04
author: Samuel Coach de Alemán
lang: es
image: img/cover.webp
---

# Título del Post

Contenido aquí...

## Sección 2

Más contenido...
```

Luego ejecuta:
```bash
npm run build:blog
```

## 🖼️ Imágenes

Para añadir una imagen (OG image + schema.org):

1. Colócala en `/f/{slug}/img/nombre.webp`
2. Añade a frontmatter: `image: img/nombre.webp`
3. En el contenido, úsala así: `![Alt text](./img/nombre.webp)`

La imagen aparecerá en:
- Redes sociales (OG tags)
- Buscadores (schema.org)
- Contenido del artículo

Sin imagen: fallback automático a `/assets/img/og-blog.webp`

## ✨ Markdown Soportado

- **Encabezados**: `# H1`, `## H2`, `### H3`
- **Bold**: `**texto**`
- **Italic**: `*texto*`
- **Links**: `[texto](url)`
- **Listas**: `- item`
- **Código inline**: `` `código` ``
- **Código block**: `` ```javascript ... ``` ``

## 📋 Campos Obligatorios

- **title**: Título del post
- **slug**: URL slug (sin espacios)
- **description**: Meta description (160 caracteres max)
- **date**: Fecha (YYYY-MM-DD)
- **author**: Autor del post
- **lang**: Idioma (es, en)
- **image** (opcional): Ruta relativa imagen OG

## 🔄 Flujo Completo

```bash
# 1. Crear post
npm run new:post
# Responde preguntas...

# 2. Editar contenido
nano blog-posts/mi-post.md

# 3. Copiar imagen (si la agregaste)
cp mi-imagen.webp f/mi-post/img/

# 4. Regenerar HTML (si editaste manual)
npm run build:blog

# 5. Commit + push
git add blog-posts/ f/
git commit -m "feat: nuevo post - mi post"
git push
```

## 🌍 Multiidioma

Para crear post en inglés:
- Crea `/blog-posts/my-post.md`
- Usa `lang: en` en frontmatter
- Aparecerá en `/f/my-post/index.html`

Automáticamente genera hreflang para SEO.

## ✅ SEO Automático

Cada post incluye:
- ✅ Meta description
- ✅ OG tags (Facebook, LinkedIn)
- ✅ Twitter Card
- ✅ Schema.org BlogPosting
- ✅ Canonical URL
- ✅ Imagen personalizada
- ✅ Hreflang (multiidioma)

---

**Tip:** Si es tu primer post, usa `npm run new:post` — es más rápido. 🚀
