import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        content: resolve(__dirname, 'content.html'),
      }
    }
  }
});
