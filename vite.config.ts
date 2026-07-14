import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Конфигурация сборки: React + SCSS-модули через Vite
export default defineConfig({
  // Проект публикуется на GitHub Pages по под-пути /portfolio_site/
  base: '/portfolio_site/',
  plugins: [react()],
  css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
  server: { port: 5173, host: true },
})
