import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    outDir: "../backend/public",
    emptyOutDir: true,
  },
  plugins: [solid(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
})