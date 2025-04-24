import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/library.js'),
      name: 'easy-date',
      // the proper extensions will be added
      fileName: 'easy-date',
    },
    rollupOptions: {
    },
  },
})