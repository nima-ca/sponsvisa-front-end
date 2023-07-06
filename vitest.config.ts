import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: `jsdom`,
    setupFiles: `./test/setup.ts`,
    css: {
      modules: {
        classNameStrategy: `non-scoped`,
      },
    },
  },
  resolve: {
    alias: [
      { find: `@src`, replacement: resolve(__dirname, `./src`) },
      { find: `@public`, replacement: resolve(__dirname, `./public`) },
    ],
  },
});
