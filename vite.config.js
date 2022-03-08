import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

const resolve = pathname => path.resolve(__dirname, pathname)

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/styles/variable.scss";`
      }
    }
  },
  plugins: [vue(), viteMockServe()]
})
