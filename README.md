# Hono + SolidJS + Vite / Node.js

## Prerequest

Download your own Weather API key from [OpenWeather](https://openweathermap.org/), and put it on `.env`.
See [.env.example](./.env.example) and [env.ts](./server/env.ts).

## Development

```bash
pnpm install
pnpm run dev
```

## Deployment

```bash
pnpm run build
pnpm run start
```

## Acknowledgement
This project was developed with reference to the following articles and repositories:

- [HonoでAPIだけ作って素のReact DOMでSPAを書くアーキテクチャ](https://zenn.dev/laiso/articles/c7eba95ce43feb)
- [laiso/hono-spa-react](https://github.com/laiso/hono-spa-react)
- [HonoでAPI付き雑React SPA最小](https://zenn.dev/yusukebe/articles/06d9cc1714bfb7)
- [yusukebe/hono-spa-react](https://github.com/yusukebe/hono-spa-react)
