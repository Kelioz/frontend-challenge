import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { ParseOptions } from 'terser'

// https://vite.dev/config/
export default defineConfig({
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
        manualChunks: {
          queries: ['@tanstack/react-query', 'axios'],
        },
      },
    },
  },

  plugins: [react(), tsconfigPaths()],
})
