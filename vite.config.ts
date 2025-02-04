import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'
// build visualizer
import { visualizer } from 'rollup-plugin-visualizer'
// vite-plugin-compression
import viteCompression from 'vite-plugin-compression'
// brotli
// import brotli from 'rollup-plugin-brotli'
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'

export default defineConfig(({ mode }) => {
  // console.log(':::::', command, mode, isSsrBuild, isPreview, process.cwd()) // serve development false false D:\code\interview\vue3-dawei

  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    root: process.cwd(),
    base: mode === 'development' ? '/' : '/vue3-dawei/',
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
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
      // ElementPlus({}),
      visualizer({
        open: true,
      }),
      // brotli(),
      viteCompression({
        threshold: 1024 * 20,
        algorithm: 'brotliCompress',
        ext: '.br',
        deleteOriginFile: false,
      }),
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
          // chunkFileNames: 'assets/js/chunk-[hash].js',
          // entryFileNames: 'assets/js/entry-[hash].js',
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
            if (id.includes('src/views/user')) {
              return 'user'
            }
            if (id.includes('src/views/role')) {
              return 'role'
            }
            // return 'index'
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
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport8plugin({
            unitToConvert: 'px',
            viewportWidth: (file) => {
              // console.log(file)
              let num = 750
              if (file.indexOf('vant') !== -1) {
                num = 375
              }
              return num
            },
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ['*'], // 能转化为vw的属性列表
            viewportUnit: 'vw', // 希望使用的视口单位
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: true, // 媒体查询里的单位是否需要转换单位
            replace: true, //  是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules\/ant-design-vue/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw', // 横屏时使用的单位
            landscapeWidth: 1024, // 横屏时使用的视口宽度
          }),
        ],
      },
    },
  }
})
