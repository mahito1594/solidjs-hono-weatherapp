import { Hono } from "hono";

const clockApp = new Hono().get("/", (c) => {
  return c.json({ time: new Date().toLocaleTimeString() });
});

export default clockApp;
