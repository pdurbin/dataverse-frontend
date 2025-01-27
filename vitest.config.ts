import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.ts',
    include: ['./tests/**/*.(test).(ts|tsx)'],
    coverage: {
      reporter: ['lcov'],
      exclude: ['node_modules/', 'tests/'],
      lines: 95,
      functions: 95,
      branches: 95,
      statements: 95
    }
  }
})
