import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Конфигурация сборки: React + SCSS-модули через Vite
export default defineConfig({
  plugins: [react()],
  css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
  server: { port: 5173, host: true },
})
