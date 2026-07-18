# Auditoría SEO profesional y plan de crecimiento

Fecha: 18 de julio de 2026

## Resumen ejecutivo

La web ya tenía una base de contenido amplia, pero las señales de relevancia estaban concentradas en Fuengirola y repartidas entre muchas URLs sin una arquitectura internacional suficientemente clara. El crecimiento debe apoyarse en dos líneas comerciales separadas pero conectadas:

1. Captación local para clases de alemán en Málaga y Costa del Sol.
2. Captación internacional para preparación online B1/B2 y el Prüfungsvorbereitung Pack.

Esta intervención crea las landings principales en español, alemán e inglés, refuerza su enlazado interno y corrige problemas técnicos que podían dividir autoridad o enviar señales contradictorias a buscadores.

No se ha tenido acceso a Google Search Console, Google Analytics ni al perfil de empresa. Por tanto, esta auditoría valida arquitectura, contenido, indexabilidad, experiencia y muestras públicas de competencia, pero no afirma posiciones, clics o conversiones históricas que no se hayan podido medir.

## Estado técnico verificado

- 684 páginas HTML analizadas.
- 558 páginas indexables.
- 636 URLs únicas y existentes en `sitemap.xml`.
- 0 URLs duplicadas en sitemap.
- 0 URLs del sitemap sin archivo local.
- 0 páginas indexables sin título, descripción, canonical, idioma o H1 único.
- 0 enlaces internos rotos detectados.
- 0 avisos de agenda caducados.
- 0 páginas DE/EN indexables enlazando por error al hub español del blog.
- Canonicalización del dominio hacia `www` y redirecciones de aliases históricos.
- Compresión y caché de navegador configuradas para Apache.

Las 32 páginas sin `hreflang` son recursos que no tienen un equivalente real en los tres idiomas. No se deben inventar equivalencias. Se añadirá `hreflang` cuando exista una traducción o producto realmente equivalente.

Los artículos españoles copiados anteriormente bajo `/de/f/` y `/en/f/` ya no se presentan como traducciones. Esas copias quedan con `noindex, follow`, idioma español y canonical al original. Los hubs `/de/f/` y `/en/f/` sí permanecen indexables porque su interfaz y contenido introductorio están localizados.

## Arquitectura de captación

### Málaga y Costa del Sol

| Idioma | Intención principal | Landing |
| --- | --- | --- |
| ES | clases de alemán Málaga, profesor de alemán Málaga, clases online Málaga | `/clases-aleman-malaga/` |
| DE | Deutschunterricht Málaga, privater Deutschunterricht Málaga, Goethe/TELC Málaga | `/de/deutschunterricht-malaga/` |
| EN | German lessons Malaga, private German tutor Malaga, online German classes Malaga | `/en/german-lessons-malaga/` |

Las tres landings incorporan contenido local, prueba social, FAQ, datos estructurados y rutas hacia clases individuales y preparación B1/B2. La página española deja de usar textos orientados al buscador como "búsquedas que cubre esta ruta" y pasa a responder preguntas reales del alumno.

### Producto internacional B1/B2

| Idioma | Intención principal | Landing |
| --- | --- | --- |
| ES | preparación examen alemán B1/B2 online, modelos Goethe B1, ejercicios TELC B2 | `/preparacion-examen-aleman-b1-b2/` |
| DE | B1/B2 Prüfungsvorbereitung online, Goethe B1 Modelltest, TELC B2 Übungen | `/de/pruefungsvorbereitung-pack/` |
| EN | German B1/B2 exam preparation online, Goethe B1 practice, TELC B2 exercises | `/en/german-exam-preparation-b1-b2/` |

La propuesta queda expresada como producto de suscripción: 75 modelos organizados en Leseverstehen, Sprachbausteine y Schreiben, separados por Goethe, TELC y práctica general, con nivel B1/B2 y un modelo guiado paso a paso. La landing alemana conduce al producto premium protegido; las landings ES/EN funcionan como embudos comerciales hacia el acceso mensual.

### Clusters de apoyo

- Empleo: `/trabajar-en-alemania/`, `/de/arbeiten-in-deutschland/` y `/en/work-in-germany/`.
- Profesionales sanitarios: `/medicos-en-alemania/` y la guía FSP española.
- Exámenes: preparación general, Goethe/TELC, Schreiben, Lesen y Sprachbausteine.
- Aprendizaje: blog, recursos gratuitos y ejercicios por nivel como entrada al Pack.

El cluster de médicos necesita landings reales en alemán e inglés antes de activar `hreflang`; no conviene indexar una copia española bajo rutas extranjeras.

## Competencia y oportunidad

En búsquedas locales compiten academias, profesores y marketplaces con cientos de fichas. Superprof agrega 110 profesores para Málaga, mientras que Trainlang crea páginas programáticas por público y ciudad. La ventaja defendible de Samuel no debe ser volumen de perfiles, sino especialización, continuidad 1:1, prueba social y conexión directa entre clase, recursos y examen.

En preparación internacional, la referencia oficial de Goethe combina plataforma, profesor y entrenamiento de examen. Productos como GermanJoin destacan formato completo B1/B2 y feedback inmediato; German Language Practice vende simulacros y audio; LanguagePrep incorpora puntuación y corrección de escritura. El Pack debe competir con una propuesta más concreta que "más ejercicios": guía en español para hispanohablantes, 75 modelos estructurados, acompañamiento, progreso y corrección útil.

Referencias consultadas:

- Goethe-Institut: https://www.goethe.de/ins/es/es/spr/kur/onl/pvo.html
- GermanJoin: https://germanjoin.com/
- German Language Practice: https://www.germanlanguagepractice.com/
- LanguagePrep: https://www.languageprep.de/en
- Superprof Málaga: https://www.superprof.es/clases/aleman/malaga/
- Trainlang Málaga: https://www.trainlang.com/clases/aleman/?para=ninos&ubicacion=malaga

## Rendimiento y móvil

Las landings prioritarias usan imágenes hero WebP entre 88 y 139 KB, logos ligeros, dimensiones explícitas, prioridad alta solo para el recurso principal y carga diferida en elementos secundarios. La hoja CSS compartida pesa aproximadamente 147 KB y el JavaScript principal 27 KB antes de compresión.

La segunda fase de rendimiento debe centrarse en recursos antiguos aislados: `logo-tree.png` supera 2,6 MB, `og-sobre-mi.webp` supera 2,5 MB y algunas láminas originales superan 1 MB. Antes de convertirlos se debe confirmar qué páginas generan tráfico, para optimizar primero los activos con impresiones y visitas reales.

## Plan de 90 días

### Semanas 1-2: indexación y medición

- Desplegar esta PR y enviar el sitemap en Search Console.
- Inspeccionar y solicitar indexación de las seis landings Málaga/Pack.
- Verificar redirecciones `www`, aliases de blog y URLs antiguas de GoDaddy.
- Configurar GA4 o analítica equivalente con eventos para CTA del Pack, login, contacto y suscripción.
- Actualizar el perfil de empresa con Málaga, enlace a la landing local, servicios y publicaciones semanales.

### Semanas 3-6: autoridad local

- Publicar seis piezas útiles: Goethe/TELC en Málaga, alemán para hostelería en Costa del Sol, clases para niños y adolescentes, alemán para médicos, trabajo en Alemania y plan B1/B2.
- Conseguir menciones y enlaces reales desde entidades locales, asociaciones, medios de Málaga y colaboradores educativos.
- Añadir testimonios específicos por objetivo: examen, mudanza, empleo y menores.
- Crear páginas locales solo cuando tengan contenido y oferta diferenciados; evitar duplicar Málaga cambiando únicamente el municipio.

### Semanas 7-12: producto internacional

- Traducir de verdad los ocho artículos con mayor intención comercial a alemán e inglés.
- Publicar muestras indexables de Goethe/TELC B1/B2 con CTA hacia el Pack.
- Incorporar progreso, corrección de Schreiben y feedback como ventajas visibles del producto.
- Crear páginas específicas para "German for doctors" y "medical German/FSP" en DE/EN.
- Comparar mensual y trimestralmente páginas y queries para consolidar o ampliar clusters.

## KPIs

- Impresiones y clics no de marca por grupo: Málaga, B1/B2, Goethe, TELC, empleo y médicos.
- Consultas en top 10 y top 3 para Málaga, separadas por idioma.
- Porcentaje de URLs válidas e indexadas frente a enviadas en sitemap.
- CTR orgánico de las landings prioritarias.
- Conversión de visita a CTA, contacto, cuenta y suscripción.
- Activación del Pack y retención mensual.
- Core Web Vitals móvil por plantilla, no solo promedio del dominio.

## Criterio de éxito

La primera meta no es publicar más URLs, sino hacer que seis páginas comerciales concentren relevancia, autoridad y conversión. El contenido nuevo debe responder a una intención concreta, tener un idioma real, enlazar al siguiente paso comercial y medirse. La expansión geográfica o internacional se hará solo cuando cada nueva landing aporte una oferta, evidencia o contenido propio.
