import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: './storybook-static',
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
  },
  plugins: [
    react(),
  ],
  server: {
    headers: {
      'Permissions-Policy': 'interest-cohort=()',
    },
  },
});
