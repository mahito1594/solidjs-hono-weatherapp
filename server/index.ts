import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

app.get("/api/clock", (c) => {
  return c.json({ time: new Date().toLocaleTimeString() });
});

app.use("/*", serveStatic({ root: "./dist/static/" }));
app.get("*", serveStatic({ path: "./dist/static/index.html" }));

export default app;
