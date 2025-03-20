import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import clockApp from "./api/clock";

const app = new Hono();

const routes = app.route("/api/clock", clockApp);

app.use("/*", serveStatic({ root: "./dist/static/" }));
app.get("*", serveStatic({ path: "./dist/static/index.html" }));

export default app;
export type AppType = typeof routes;
