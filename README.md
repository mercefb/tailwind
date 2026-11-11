# Tailwind CSS en DIW

Material para aprender **Tailwind CSS v4** en el módulo de Diseño de Interfaces Web (2.º DAW).

Son 8 lecciones. Cada una tiene una explicación, ejemplos que se ven en vivo con su código debajo, una tabla de referencia rápida y un ejercicio con la solución desplegable.

Las lecciones funcionan **solo con CDN**: abre cualquier archivo `.html` en el navegador (con conexión a internet) y ya está. No hay que instalar nada. Para el proyecto de verdad (práctica 2 y proyecto final) se usa Vite: está explicado en [`proyecto-vite/`](proyecto-vite/README.md).

## Lecciones

| N.º | Archivo | Contenido | Ejercicio |
| --- | --- | --- | --- |
| 1 | `01-introduccion.html` | Qué es *utility-first*, cómo enlazar Tailwind por CDN y cómo leer una clase | Caja de aviso |
| 2 | `02-espaciado-tamanos.html` | Escala de espaciado, `p-*`, `m-*`, `w-*`, `h-*`, `max-w-*` y valores arbitrarios | Tres cajas con espaciados distintos |
| 3 | `03-tipografia-color.html` | Tamaños y pesos de letra, paleta de colores, opacidad, bordes, esquinas y sombras | Tarjeta de perfil |
| 4 | `04-flexbox.html` | `flex`, dirección, alineación, `gap`, `flex-1` y `flex-wrap` | Barra de navegación |
| 5 | `05-grid.html` | `grid`, columnas, `col-span-*`, contenedores y comparación con la rejilla de Bootstrap | Maqueta de página con barra lateral |
| 6 | `06-responsive.html` | *Mobile first*, breakpoints `sm:` `md:` `lg:` `xl:` `2xl:` | Rejilla de cards de 1, 2 y 4 columnas |
| 7 | `07-estados-modo-oscuro.html` | `hover:`, `focus-visible:`, `disabled:`, `group-hover:`, transiciones y `dark:` | Card con hover y modo oscuro |
| 8 | `08-tema-reutilizacion.html` | Colores y fuentes propios con `@theme`, `@apply` y `@utility` | Tema de marca y botón reutilizable |

## Orden de las sesiones

| Sesión | Lecciones | Cómo se trabaja |
| --- | --- | --- |
| 7 | 1 y 2 | CDN. Explicación con la lección abierta en el proyector y ejercicios en el navegador |
| 8 | 3 | CDN |
| 9 | 4 y 5 | CDN |
| 10 | 6 y 7 | CDN |
| 11 | Instalación con Vite + lección 8 | Se crea el proyecto con Vite y el tema se escribe en su CSS |
| 12 | Práctica 2 | Proyecto Vite |

## Cómo usar este repositorio

1. Descarga o clona el repositorio.
2. Abre `index.html` en el navegador y entra en la lección.
3. Lee la explicación, mira cada ejemplo y su código, y cambia clases en el archivo para ver qué pasa.
4. Haz el ejercicio en un archivo nuevo antes de abrir la solución.

Recomendado: extensión **Live Server** de VS Code para que la página se recargue sola al guardar.

## Referencias

- [Documentación oficial de Tailwind CSS](https://tailwindcss.com/docs)
- [Tailwind Play](https://play.tailwindcss.com): editor online para probar sin instalar nada
- [Guía de actualización de v3 a v4](https://tailwindcss.com/docs/upgrade-guide): útil para reconocer tutoriales antiguos

> **Cuidado con los tutoriales antiguos.** Muchos son de Tailwind v3 y usan `tailwind.config.js` o `@tailwind base`. En la v4 eso ya no se usa: todo se configura en el CSS.
