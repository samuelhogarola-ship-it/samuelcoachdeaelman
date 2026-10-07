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
9. Prueba social: «171 reseñas · 5,0 ★».

La cifra de pareja se presenta como precio total por hora. Antes de implementar, conviene confirmar si esa interpretación comercial es correcta o si debe mostrarse como precio por persona.

## Alcance propuesto para la primera iteración

- Rediseñar únicamente la cabecera, el hero y la transición al bloque siguiente en ES, DE y EN.
- Diseñar primero para 390 px y adaptar después a tableta y escritorio.
- Mantener intactos formulario, recursos, reseñas y contenido inferior durante esta iteración.
- Sustituir «Éxito 100% garantizado» por una prueba demostrable; una garantía absoluta reduce credibilidad y puede crear una promesa difícil de sostener.
- Conservar accesibilidad, carga rápida, navegación por teclado y objetivos táctiles amplios.

## Evidencia visual

El archivo `2026-10-07-home-mobile-premium-concept.png` es un concepto generado para validar jerarquía y composición. No es código final y el retrato debe sustituirse por el recurso fotográfico real del proyecto durante la implementación.

## Criterios de aceptación futuros

- A 390 px, ningún texto toca o cubre el retrato.
- El H1 completo, ambos precios y la acción principal aparecen sin confusión en el primer recorrido visual.
- No existe desplazamiento horizontal entre 320 y 1440 px.
- La navegación principal se entiende y usa con una mano en móvil.
- Las traducciones conservan intención comercial y no desbordan los componentes.
- El diseño respeta `prefers-reduced-motion` y contraste AA.
