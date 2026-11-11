# Proyecto con Vite y Tailwind CSS v4

Las lecciones usan el CDN porque es lo más rápido para aprender. Para un proyecto real (práctica 2 y proyecto final) Tailwind se instala con **Vite**, por tres motivos:

- Genera un archivo CSS pequeño, solo con las clases que usas. El CDN, en cambio, genera el CSS en el navegador cada vez que se carga la página.
- La extensión **Tailwind CSS IntelliSense** de VS Code funciona: autocompleta clases y muestra su CSS.
- Puedes publicar la web en GitHub Pages, Netlify o Vercel.

Necesitas **Node.js** (versión LTS). Compruébalo con `node -v` en la terminal.

## 1. Crear el proyecto

```bash
npm create vite@latest mi-landing -- --template vanilla
cd mi-landing
npm install
```

Esto crea un proyecto Vite vacío con HTML, CSS y JavaScript normales, sin React ni otros frameworks.

## 2. Instalar Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

## 3. Activar el plugin de Tailwind en Vite

Crea en la raíz del proyecto el archivo `vite.config.js` (o sustituye el que haya) con este contenido. Lo tienes también en esta carpeta.

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

## 4. Importar Tailwind en el CSS

Borra todo el contenido de `src/style.css` y escribe:

```css
@import "tailwindcss";
```

Aquí irán también tu `@theme`, tus `@apply` y el `@custom-variant` del modo oscuro (lecciones 7 y 8). En esta carpeta tienes un `src/style.css` de ejemplo con todo eso comentado.

## 5. Limpiar el ejemplo de Vite

Vite trae una página de ejemplo. Deja `src/main.js` solo con la línea que importa el CSS:

```js
import './style.css'
```

Y escribe tu HTML en `index.html`, dentro del `<body>`. No borres la línea `<script type="module" src="/src/main.js"></script>`: es la que carga el CSS. Puedes borrar `src/counter.js` y los SVG de ejemplo. En esta carpeta tienes un `index.html` de partida.

## 6. Arrancar el servidor de desarrollo

```bash
npm run dev
```

Abre la dirección que aparece (normalmente `http://localhost:5173`). Cada vez que guardes, la página se actualiza sola.

## 7. Generar la versión final

```bash
npm run build
```

Crea la carpeta `dist/` con el HTML y un CSS pequeño. Esa carpeta es la que se publica.

> **Publicar en GitHub Pages:** si la web va a estar en `https://usuario.github.io/mi-landing/`, añade `base: '/mi-landing/'` en `vite.config.js`, dentro de `defineConfig({ ... })`. Si no, el CSS no carga.

## Errores típicos

| Problema | Causa | Solución |
| --- | --- | --- |
| Las clases no hacen nada | Falta `@import "tailwindcss";` en `src/style.css`, o `main.js` no importa el CSS | Revisa los pasos 4 y 5 |
| `npm` no se reconoce | Node.js no está instalado | Instala la versión LTS desde nodejs.org y reinicia la terminal |
| Un tutorial dice que crees `tailwind.config.js` | Es de Tailwind v3 | En la v4 no hace falta: todo va en el CSS |
| IntelliSense no autocompleta | Se abrió la carpeta equivocada en VS Code | Abre la carpeta del proyecto (la que tiene `package.json`) |
