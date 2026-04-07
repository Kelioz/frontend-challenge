import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { ParseOptions } from 'terser'

// https://vite.dev/config/
export default defineConfig({
  base: '/frontend-challenge/',
  server: {
    cors: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['./src/shared/styles'],
      },
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    } as ParseOptions,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes('node_modules/@tanstack/react-query') ||
            id.includes('node_modules/axios')
          ) {
            return 'queries'
          }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },

  plugins: [react(), tsconfigPaths()],
})
