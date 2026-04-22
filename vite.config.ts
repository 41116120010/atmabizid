import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  clearScreen: false,
  server: {
    host: '0.0.0.0',
    port: 4000,
    hmr: {
      overlay: false,
    },
  },
});
