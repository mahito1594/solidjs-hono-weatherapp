import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static';

const app = new Hono()

app.use("/build/*", serveStatic({ root: "./dist/" }));

app.get("*", (c) => {
  const html = `
    <html>
      <head>
        <title>Hono & SolidJS</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${import.meta.env.PROD ? (
          '<script type="module" src="/build/client.js"></script>'
        ) : ( 
          '<script type="module" src="/src/client.tsx"></script>'
        )}
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  `;

  return c.html(html);
})

export default app;
