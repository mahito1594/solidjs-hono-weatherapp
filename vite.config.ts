import { defineConfig } from "vite";
import build from "@hono/vite-build/node";
import devServer from "@hono/vite-dev-server";
import nodeAdapter from "@hono/vite-dev-server/node";

export default defineConfig({
  plugins: [
    build({
      entry: "src/index.ts",
    }),
    devServer({
      entry: "src/index.ts",
      adapter: nodeAdapter,
    })
  ]
});