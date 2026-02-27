/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { plugins } from './vite.plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
            src: "/src",
        },
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          query: ['@tanstack/react-query'],
          mui: ['@mui/material', '@mui/icons-material'],
        },
      },
    },
  },
  server: {
    port: 3002,
    open: true,
  },
  preview: {
    port: 3002,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})