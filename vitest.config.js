import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    teardownTimeout: 5_000,
    minThreads: 2,
  },
});
