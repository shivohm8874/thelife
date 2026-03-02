import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        robots: resolve(__dirname, 'robots.html'),
        philosophy: resolve(__dirname, 'philosophy.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
