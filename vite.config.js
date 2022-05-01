import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { visualizer } from 'rollup-plugin-visualizer'

const resolve = (pathname) => path.resolve(__dirname, pathname)

export default ({ command, mode }) => {
  const { VITE_USELOCALMOCK, VITE_USEPRODMOCK } = loadEnv(mode, process.cwd())

  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss']
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/styles/variable.module.scss";`
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        // 是否启用本地 xxx.ts 文件， 在生产环境中设置为 false 将禁用 mock 功能
        localEnabled: command === 'serve' && VITE_USELOCALMOCK,
        // 生产环境是否启用 mock 功能
        prodEnabled: command === 'build' && VITE_USEPRODMOCK,
        // 注入到injectFile对应的文件的底部。默认为main.{ts,js}
        injectCode: `
          import {setupProdMockServer} from '../mock/mockProdServer'
          setupProdMockServer()
        `
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve('src/icons/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        //自定义插入位置  @default: body-last
        inject: 'body-last',
        //custom dom id  @default: __svg__icons__dom__
        customDomId: '__svg__icons__dom__'
      }),
      visualizer({
        open: true,
        gzipSize: true
      })
    ],
    server: {
      open: true
      /* port: 8080,
      hmr: {
        host: '127.0.0.1',
        port: 8080
      },
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      } */
    }
  })
}
