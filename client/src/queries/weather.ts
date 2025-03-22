import type { AppType } from "@server/index";
import { query } from "@solidjs/router";
import { hc } from "hono/client";

const client = hc<AppType>("/");

export const getWeather = query(async (city: string) => {
  const res = await client.api.weather[":city"].$get({ param: { city } });

  if (!res.ok) {
    throw new Error("Internal server error");
  }

  const data = await res.json();

  return { weather: data.weather[0], temperture: data.main.temp - 273.5 };
}, "weatherByCityNames");
