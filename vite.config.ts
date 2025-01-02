import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  console.log(":::::", command, mode, isSsrBuild, isPreview, process.cwd()); // serve development false false D:\code\interview\vue3-dawei

  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    root: process.cwd(),
    base: "/",
    mode,
    publicDir: "public",
    cacheDir: "node_modules/.vite",
    server: {
      host: "0.0.0.0",
      port: 1993,
      open: false,
      // cors: true,
      proxy: {
        [env.VITE_APP_API_BASEURL]: {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
        [env.VITE_APP_MOCK_BASEURL]: {
          target: env.VITE_APP_MOCK_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        "@": "/src",
        "#": "/types",
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    plugins: [vue(), VueJsx({
      include: /\.[jt]sx$/
    })],
    build: {
      target: "modules",
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
      ssr: false,
    },
    preview: {
      host: "0.0.0.0",
      port: 1993,
      open: false,
    },
  };
});
