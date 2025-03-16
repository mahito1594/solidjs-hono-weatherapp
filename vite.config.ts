import { defineConfig } from "vite";
import build from "@hono/vite-build/node";
import devServer from "@hono/vite-dev-server";
import nodeAdapter from "@hono/vite-dev-server/node";
import solid from "vite-plugin-solid";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      esbuild: {
        jsxImportSource: "solid-js",
      },
      build: {
        rollupOptions: {
          input: "src/client.tsx",
          output: {
            entryFileNames: "build/client.js",
            chunkFileNames: "build/[name]-[hash].js",
            assetFileNames: "build/[name]-[hash].[ext]",
          },
        },
        // emptyOutDir: false,
        copyPublicDir: false,
      },
      plugins: [solid()]
    }
  }

  return {
    plugins: [
      solid({ ssr: true }),
      build({
        entry: "src/index.ts",
      }),
      devServer({
        entry: "src/index.ts",
        adapter: nodeAdapter,
      })
    ]
  };
});