import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

fs.writeFileSync(
  resolve(__dirname, 'public', 'api', 'translations.json'),
  JSON.stringify(fs.readdirSync(resolve(__dirname, 'public', 'translations'))),
);

fs.writeFileSync(
  resolve(__dirname, 'public', 'api', 'themes.json'),
  JSON.stringify(fs.readdirSync(resolve(__dirname, 'public', 'themes'))),
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
