# Verificacion SEO post-fix

Fecha: 2026-06-30

## Resumen

Se aplicaron fixes tecnicos SEO sobre sitemap, headings estaticos, canonicals, descriptions, schema e interlinking interno sin crear ramas, commits ni pushes.

El baseline inicial pre-cambios se mantiene en `.seo-cache/page-baselines/`.

## Validacion local publicable

- HTML publicables analizados: 484
- URLs en `sitemap.xml`: 2519
- URLs legacy `/recursos/lueckentext/` en sitemap: 0
- Enlaces internos rotos detectables localmente: 0
- Paginas sin exactamente un H1: 0
- Paginas sin meta description: 0
- Paginas sin canonical: 0
- URLs autocanonicas indexables fuera del sitemap: 0
- Paginas indexables sin schema JSON-LD: 0
- Paginas sin schema: 9, todas noindex

## Duplicados canonicos del blog

No se ha cambiado a `noindex` ningun slug legacy del blog porque el proyecto documenta que los rescates legacy se mantienen como paginas estaticas reales en `/f/` y no hay configuracion local de redirects 301/308.

Estrategia aplicada:

- Mantener los slugs legacy fuera del sitemap.
- Mantener canonical hacia la URL principal.
- Evitar enlaces internos hacia slugs legacy.

Slugs legacy revisados:

- `/f/demonstrativpronomen-los-pronombres-demostrativos-en-aleman/` -> `/f/demonstrativpronomen-en-aleman/`
- `/f/el-imperativo-en-aleman/` -> `/f/imperativ-en-aleman/`
- `/f/haeufigkeitsadverbien-en-aleman/` -> `/f/adverbios-de-frecuencia-en-aleman/`
- `/f/la-voz-pasiva-con-verbos-modales-en-aleman-passiv-mit-modalverben/` -> `/f/passiv-mit-modalverben-en-aleman/`
- `/f/las-w-fragen-en-aleman/` -> `/f/w-fragen-en-aleman/`
- `/f/los-articulos-posesivos-en-aleman-possessivartikel-auf-deutsch/` -> `/f/possessivartikel-en-aleman/`
- `/f/partizip-1-vs-partizip-2-en-aleman/` -> `/f/partizip-1-en-aleman/`
- `/f/partizip-2-en-aleman-la-formacion-del-participio/` -> `/f/partizip-2-en-aleman/`
- `/f/tekamolo-2-0-en-aleman-satzbau/` -> `/f/tekamolo-orden-de-palabras-en-aleman/`
- `/f/trennbare-verben-en-aleman-verbos-separables-y-no-separables/` -> `/f/trennbare-verben-en-aleman/`

Resultado: 0 enlaces internos apuntando a slugs legacy.

## Validacion de lint

`npm run lint` termina sin errores. Quedan 16 warnings preexistentes de variables no usadas en:

- `assets/js/cookie-banner-core.js`
- `assets/js/google-analytics-core.js`
- `assets/js/leseverstehen.js`
- `assets/js/main.js`
- `playwright.config.js`

## Siguiente decision recomendada

Si el hosting permite redirects reales, crear una fase separada `codex/seo-drift-cleanup` para convertir los 10 slugs legacy del blog en redirects 301/308 hacia sus canonicals. Si no, mantener la estrategia actual: canonical, fuera de sitemap y sin enlaces internos.
