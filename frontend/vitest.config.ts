import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node', 
    coverage: {
      reporter: ['text', 'html'],
    },
    include: ['**/*.test.{ts,tsx,js}'],
    exclude: ['node_modules', 'dist', '**/e2e/**'],
  },
})