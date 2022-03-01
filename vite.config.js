import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

fs.writeFileSync(
  resolve(__dirname, 'public', 'translations', 'translations.json'),
  JSON.stringify(fs.readdirSync(resolve(__dirname, 'public', 'translations'))),
);

export default defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        content: resolve(__dirname, 'content.html'),
      },
    },
  },
});
