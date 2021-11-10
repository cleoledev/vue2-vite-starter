import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')({ grid: 'autoplace' })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/style/abstract/_index.scss" as *;'
      }
    }
  }

})
