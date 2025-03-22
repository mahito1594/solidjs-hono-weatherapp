import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import citiesApp from "./api/cities";
import clockApp from "./api/clock";
import weatherApp from "./api/weather";

const app = new Hono();

const routes = app.route("/api/clock", clockApp).route("/api/cities", citiesApp).route("/api/weather", weatherApp);

app.use("/*", serveStatic({ root: "./dist/static/" }));
app.get("*", serveStatic({ path: "./dist/static/index.html" }));

export default app;
export type AppType = typeof routes;
