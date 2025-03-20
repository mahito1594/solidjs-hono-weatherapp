import build from "@hono/vite-build/node";
import devServer from "@hono/vite-dev-server";
import nodeAdapter from "@hono/vite-dev-server/node";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

const API_SERVER_PORT = 3000;

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      root: "client",
      plugins: [solid(), tsconfigPaths()],
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
