# Leseverstehen — Arquitectura y guía para añadir textos

## Estructura de archivos

```
leseverstehen/
├── index.html            ← Página de lista (se genera dinámicamente con JS)
├── generate-pages.js     ← Script Node.js para regenerar las páginas estáticas
├── a2/[slug]/index.html  ← Páginas generadas A2 (no editar a mano)
├── b1/[slug]/index.html  ← Páginas generadas B1
└── b2/[slug]/index.html  ← Páginas generadas B2

assets/js/
├── leseverstehen-data.js ← ⭐ FUENTE ÚNICA DE DATOS — array TEXTOS con todos los textos
└── leseverstehen.js      ← Lógica de renderizado (renderLista, renderLectura, etc.)
```

## Cómo añadir un texto nuevo

### 1. Editar `assets/js/leseverstehen-data.js`

Añade un objeto al array `TEXTOS`. Ejemplo:

```js
{
  slug: 'mi-nuevo-texto',      // URL: /leseverstehen/b1/mi-nuevo-texto/
  nivel: 'B1',                  // 'A2' | 'B1' | 'B2'
  titulo: 'Mi nuevo texto',
  descripcion: 'Descripción corta para SEO y tarjeta de lista.',
  texto: `Primer párrafo del texto en alemán.

Segundo párrafo. Separar con línea en blanco.`,
  preguntas: [
    { enunciado: 'Afirmación sobre el texto.', respuesta: true },
    { enunciado: 'Afirmación incorrecta.', respuesta: false },
    // mínimo 4-5 preguntas
  ],
},
```

> **Regla:** `slug` solo minúsculas, sin tildes, palabras separadas por guiones.  
> La `descripcion` es el meta description de la página — máx. 160 caracteres, incluye nivel y tipo de ejercicio.

### 2. Regenerar las páginas estáticas

```bash
node leseverstehen/generate-pages.js
```

Esto sobreescribe (o crea) `/leseverstehen/[nivel]/[slug]/index.html` para cada entrada del array.

### 3. Commit

```bash
git add assets/js/leseverstehen-data.js leseverstehen/[nivel]/[slug]/
git commit -m "feat: añadir texto [nivel] '[titulo]'"
```

---

## Arquitectura de datos

`leseverstehen-data.js` es la **única fuente de verdad**:
- El navegador la carga para renderizar la lista y cada texto (`renderLista` / `renderLectura`).
- `generate-pages.js` la importa vía `require()` para generar el HTML estático.
- No existe copia del array en ningún otro sitio.

### Preparación para Supabase

Cuando los textos migren a Supabase:
1. Reemplazar `leseverstehen-data.js` por una llamada `fetch` a la API.
2. La lógica de renderizado en `leseverstehen.js` **no cambia** — espera el mismo array.
3. Las páginas estáticas se pueden seguir generando consultando Supabase desde `generate-pages.js`.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `node leseverstehen/generate-pages.js` | Regenera las 28+ páginas estáticas |

## Notas técnicas

- Las páginas estáticas están 3 niveles de profundidad (`leseverstehen/[nivel]/[slug]/`), por eso los paths de los assets usan `../../../`.
- La imagen OG está en `assets/img/leseverstehen-og.jpg` (JPG, no WebP — WhatsApp no soporta WebP en OG).
- El ejercicio de `position: sticky` en la columna derecha necesita `-webkit-sticky` + `will-change: transform` para funcionar en Safari (ya incluido en `styles.css`).
