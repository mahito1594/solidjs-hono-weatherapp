import build from "@hono/vite-build/node";
import devServer from "@hono/vite-dev-server";
import nodeAdapter from "@hono/vite-dev-server/node";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const API_SERVER_PORT = 3000;

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      root: "client",
      plugins: [tailwindcss(), solid()],
      server: {
        proxy: {
          "/api": `http://localhost:${API_SERVER_PORT}`,
        },
      },
      build: {
        outDir: "../dist/static",
        emptyOutDir: true,
      },
      esbuild: {
        jsxImportSource: "solid-js",
      },
    };
  }

  return {
    plugins: [
      build({
        entry: "server/index.ts",
      }),
      devServer({
        entry: "server/index.ts",
        adapter: nodeAdapter,
      }),
    ],
    server: {
      port: API_SERVER_PORT,
    },
  };
});
