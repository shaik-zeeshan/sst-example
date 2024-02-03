import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  define: process.env.VITEST ? {} : { global: "window" },
  plugins: [react()],
  test: {
    css: true,
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
    alias: {
      "@": "/src",
    },
  },
});
