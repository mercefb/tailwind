import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  // Para GitHub Pages, descomenta y pon el nombre de tu repositorio:
  // base: '/mi-landing/',
})
