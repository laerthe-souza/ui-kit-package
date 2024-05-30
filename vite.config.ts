import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@fxdeveloper/ui-kit',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
