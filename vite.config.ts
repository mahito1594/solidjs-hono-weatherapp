import build from "@hono/vite-build/node";
import devServer from "@hono/vite-dev-server";
import nodeAdapter from "@hono/vite-dev-server/node";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

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
            assetFileNames: ({ names }) => {
              if (names[0]?.endsWith(".css")) {
                return "build/index.css";
              }
              return "build/[name]-[hash][extname]";
            },
          },
        },
        // emptyOutDir: false,
        copyPublicDir: false,
      },
      plugins: [tailwindcss(), solid()],
    };
  }

  return {
    ssr: {
      external: ["solid-js"],
    },
    plugins: [
      solid({ ssr: true }),
      build({
        entry: "src/index.tsx",
      }),
      devServer({
        entry: "src/index.tsx",
        adapter: nodeAdapter,
      }),
    ],
  };
});
