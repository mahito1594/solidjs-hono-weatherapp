import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { renderToString } from "solid-js/web";

const app = new Hono();

app.get("/api/clock", (c) => {
  return c.json({ time: new Date().toLocaleTimeString() });
});

app.use("/build/*", serveStatic({ root: "./dist/" }));

app.get("*", (c) => {
  const html = renderToString(() => (
    <html lang="ja">
      <head>
        <title>Hono & SolidJS</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {import.meta.env.PROD ? (
          <script type="module" src="/build/client.js" />
        ) : (
          <script type="module" src="/src/client.tsx" />
        )}
      </head>
      <body>
        <div id="root" />
      </body>
    </html>
  ));

  return c.html(html);
});

export default app;
