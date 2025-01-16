import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// build visualizer
import { visualizer } from 'rollup-plugin-visualizer'
// compress
import { compression } from 'vite-plugin-compression2'
// brotli
// import brotli from 'rollup-plugin-brotli'

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  // console.log(':::::', command, mode, isSsrBuild, isPreview, process.cwd()) // serve development false false D:\code\interview\vue3-dawei

  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    root: process.cwd(),
    base: '/',
    mode,
    publicDir: 'public',
    cacheDir: 'node_modules/.vite',
    server: {
      host: '0.0.0.0',
      port: 1993,
      open: false,
      // cors: true,
      proxy: {
        [env.VITE_APP_API_BASEURL]: {
          target: 'http://localhost:9000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        [env.VITE_APP_MOCK_BASEURL]: {
          target: 'http://localhost:9000',
          changeOrigin: true,
          rewrite: (path) => {
            return path.replace(/^\/mock\/api/, '')
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
        '#': '/types',
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    plugins: [
      vue(),
      VueJsx({
        include: /\.[jt]sx$/,
      }),
      viteMockServe({
        mockPath: 'mock',
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      ElementPlus({
        // options
      }),
      visualizer({
        open: true,
      }),
      compression(),
      // brotli(),
    ],
    build: {
      target: 'modules',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      chunkSizeWarningLimit: 400,
      rollupOptions: {
        experimentalLogSideEffects: false,
        treeshake: {
          preset: 'recommended',
        },
        output: {
          experimentalMinChunkSize: 1024 * 20,
          // chunkFileNames: 'assets/js/[name]-[hash].js',
          // entryFileNames: 'assets/js/[name]-[hash].js',
          // assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          // 使用对象形式时，每个属性代表一个块，其中包含列出的模块及其所有依赖项（如果它们是模块图的一部分，除非它们已经在另一个手动块中）
          // manualChunks: {
          //   vue: ['vue', 'vue-router'],
          //   elementPlus: ['element-plus'],
          //   mock: ['vite-plugin-mock'],
          // },
          // 使用函数形式时，每个解析的模块 id 都将传递给函数。如果返回一个字符串，模块及其所有依赖项将添加到具有给定名称的手动块中
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
            return 'index'
          },
        },
      },
      ssr: false,
    },
    preview: {
      host: '0.0.0.0',
      port: 1993,
      open: false,
    },
  }
})
