# Concepto de portada premium y móvil

Estado: propuesta visual para revisión; no implementada ni publicada.

Fecha: 2026-10-07, Asia/Makassar.

## Problema observado

En el hero móvil actual, el retrato invade el área del titular y del texto. El H1 ocupa demasiado espacio, los dos botones compiten entre sí y el visitante no conoce el precio antes de desplazarse. La identidad azul y la fotografía son reconocibles, pero la jerarquía no comunica una experiencia premium ni facilita la decisión.

## Dirección recomendada

Mantener el azul marino, el azul medio, el blanco, el logotipo y el retrato, con una composición móvil de lectura inmediata:

1. Cabecera compacta con logotipo, selector de idioma y menú.
2. Etiqueta breve: «Clases de alemán online».
3. H1: «Habla alemán con un plan hecho para ti.»
4. Subtítulo: «Clases online personalizadas para niños, adolescentes y adultos.»
5. Retrato en un contenedor independiente, sin texto superpuesto.
6. Precios visibles: «Individual desde 30 €/h» y «En pareja 40 €/h».
7. Una acción principal: «Reservar valoración gratuita».
8. Una acción secundaria discreta: «Ver cómo funciona».
9. Prueba social separada por fuente: «Google · 5,0 · 123 reseñas» y «Superprof · 5,0 · 48 opiniones».

La cifra de pareja se presenta como precio total por hora. Antes de implementar, conviene confirmar si esa interpretación comercial es correcta o si debe mostrarse como precio por persona.

Las reseñas se presentarán sin fotografías de perfil. Cuando se muestre una opinión concreta, se utilizará el nombre público real y su plataforma, por ejemplo «Ana Muñoz · Google» y «Unai · Superprof». No se crearán avatares, nombres ni testimonios ficticios.

Recuento comprobado el 2026-10-07:

- Google Maps muestra 5,0 y 123 reseñas en la ficha pública.
- Los listados recientes de Superprof muestran 5 y 48 opiniones. El perfil directo está protegido por una comprobación automática y su extracto anterior todavía muestra 47; el diseño mantiene cada cifra vinculada a su fuente para poder actualizarla sin alterar la otra.

## Alcance propuesto para la primera iteración

- Rediseñar únicamente la cabecera, el hero y la transición al bloque siguiente en ES, DE y EN.
- Diseñar primero para 390 px y adaptar después a tableta y escritorio.
- Mantener intactos formulario, recursos, reseñas y contenido inferior durante esta iteración.
- Usar directamente `assets/img/hero-photo.webp`; no generar, retocar ni reinterpretar el rostro o el cuerpo de Samuel.
- Sustituir «Éxito 100% garantizado» por una prueba demostrable; una garantía absoluta reduce credibilidad y puede crear una promesa difícil de sostener.
- Conservar accesibilidad, carga rápida, navegación por teclado y objetivos táctiles amplios.

## Evidencia visual

El archivo `2026-10-07-home-mobile-premium-concept.png` conserva la primera exploración. Queda superado por `2026-10-07-home-mobile-premium-concept-v2.png`, que elimina personas inventadas, usa nombres públicos y separa los recuentos por plataforma. Ambos son conceptos de composición: aunque la segunda versión se aproxima mejor al retrato, la implementación debe usar el recurso original del proyecto sin regenerarlo.

## Criterios de aceptación futuros

- A 390 px, ningún texto toca o cubre el retrato.
- La fotografía renderizada es byte a byte el recurso original del proyecto, sin sustituciones generativas.
- El H1 completo, ambos precios y la acción principal aparecen sin confusión en el primer recorrido visual.
- Las reseñas no contienen avatares inventados y cada recuento identifica su plataforma.
- No existe desplazamiento horizontal entre 320 y 1440 px.
- La navegación principal se entiende y usa con una mano en móvil.
- Las traducciones conservan intención comercial y no desbordan los componentes.
- El diseño respeta `prefers-reduced-motion` y contraste AA.
