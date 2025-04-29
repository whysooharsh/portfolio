import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    }
  },
  build: {
    outDir: "dist",
    target: "es2015",
    minify: "terser",
    rollupOptions: {
      input: {
        main: path.resolve("index.html"),
      }
    }
  }
});
