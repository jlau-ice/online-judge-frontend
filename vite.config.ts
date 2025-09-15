import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import vueDevTools from 'vite-plugin-vue-devtools'
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  server: {
    host: true,
    port: 8888,
    proxy: {
      '/api': 'http://localhost:8101',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
