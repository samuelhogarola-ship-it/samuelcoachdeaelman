# Blog Post Style System

Esta carpeta define la linea base para crear nuevos posts del blog con una misma estructura, el mismo tono visual y una maquetacion coherente con los posts ya integrados en `/f/`.

## Objetivo

Usar siempre el mismo esqueleto para que:

- todos los posts se vean parte del mismo producto
- la lectura sea mas clara
- el SEO y los enlaces internos sigan un patron consistente
- sea facil duplicar un post base y rellenarlo sin improvisar

## Referencia visual

La referencia principal son los posts estaticos de `/f/`, que ya comparten el patron correcto:

- `main.blog-shell`
- `div.blog-breadcrumbs`
- `div.blog-post-layout`
- `article.blog-post-main`
- `div.blog-post-card`
- `div.blog-post-kicker`
- `p.blog-post-lead`
- `div.blog-post-meta`
- `div.blog-summary-card`
- `div.blog-cta-card`
- `aside.blog-post-aside`

## Estructura obligatoria del post

Todo post nuevo debe mantener este orden:

1. `head` con `title`, `meta description`, canonical, Open Graph y JSON-LD.
2. `main.blog-shell`.
3. `div.blog-breadcrumbs`.
4. `div.blog-post-layout`.
5. `article.blog-post-main`.
6. `div.blog-post-card`.
7. Hero del post:
   - kicker
   - `h1`
   - lead
   - meta
   - imagen destacada
8. Resumen inicial con `div.blog-summary-card`.
9. Cuerpo del contenido en bloques claros con `h2` y, si hace falta, `h3`.
10. CTA final con `div.blog-cta-card`.
11. Relacionados.
12. `aside.blog-post-aside` con ayuda de navegacion o conversion.

## Bloques recomendados

Estos bloques ya existen en posts publicados y conviene reutilizarlos antes de inventar otros:

- `blog-summary-card` para el resumen rapido
- `blog-table-wrap` y `blog-table` para tablas
- `blog-highlight` para reglas o ideas importantes
- `blog-error-list` y `blog-error-item` para errores frecuentes
- `blog-example-grid` y `blog-example-box` para ejemplos comparados
- `blog-visual-card` para explicaciones con apoyo visual
- `blog-cta-card` para cierre comercial o paso siguiente
- `blog-related-wrap`, `blog-related-grid` y `blog-related-card` para enlazado interno
- `blog-side-card` para bloques del lateral

## Reglas de maquetacion

- Un solo `h1` por pagina.
- El lead debe explicar en una o dos frases que aprendera el usuario.
- Empezar con un resumen escaneable antes de entrar en detalle.
- Priorizar bloques cortos y visuales frente a parrafos largos.
- Cada seccion importante debe tener un `h2`.
- Las tablas deben ir dentro de `blog-table-wrap`.
- Si hay listas de errores o diferencias, usar los componentes de errores o ejemplos.
- El CTA final debe enlazar a una accion real del sitio.

## Reglas de copy

- Espanol claro, directo y didactico.
- Primero resolver la duda del alumno, luego ampliar.
- Evitar intros largas y relleno.
- Incluir ejemplos reales en aleman cuando el tema lo pida.
- Cerrar con una invitacion concreta: clase, recurso relacionado o siguiente leccion.

## SEO minimo

Cada post nuevo debe salir con:

- `title` unico
- `meta description` unica
- `link rel="canonical"`
- Open Graph basico
- `script type="application/ld+json"` tipo `Article`
- imagen destacada con `alt` descriptivo
- enlazado interno a 2 o 3 posts relacionados

## Flujo recomendado

1. Duplicar `post-template.html`.
2. Rellenar metadatos.
3. Sustituir el contenido de ejemplo por el tema real.
4. Mantener las clases existentes.
5. Revisar que haya resumen, CTA y relacionados.
6. Comprobar que la URL, canonical y breadcrumbs coinciden.

## No hacer

- No mezclar estructuras distintas entre posts.
- No cambiar clases base si no es necesario.
- No publicar posts sin resumen inicial ni CTA final.
- No dejar el lateral vacio si el resto de posts similares lo usan.
- No crear componentes nuevos si ya existe uno valido en `/f/`.
