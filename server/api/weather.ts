import { Hono } from "hono";
import { validator } from "hono/validator";
import * as v from "valibot";
import cities from "../data/cities.json";
import { env } from "../env";

const cityNames = cities.map((city) => city.name.toLocaleLowerCase());
const CityName = v.pipe(v.string(), v.toLowerCase(), v.picklist(cityNames));

const CurrentWeather = v.object({
  weather: v.array(
    v.object({
      id: v.number(),
      main: v.string(),
      description: v.string(),
      icon: v.string(),
    }),
  ),
  main: v.object({
    temp: v.number(),
  }),
});

const weatherApp = new Hono().get(
  "/:city",
  validator("param", (value, c) => {
    const result = v.safeParse(CityName, value.city);
    if (!result.success) {
      return c.text("No such city", 404);
    }
    return result.output;
  }),
  async (c) => {
    const city = cities.find((city) => city.name.toLowerCase() === c.req.param("city"));
    const endpoint = new URL(env.API_ENDPOINT_CURRENTWEATHER, env.API_BASEURL);
    const res = await fetch(`${endpoint}?lat=${city?.latitude}&lon=${city?.latitude}&appid=${env.API_KEY}`);

    if (!res.ok) {
      return c.text("Internal server error", 500);
    }

    const data = v.parse(CurrentWeather, await res.json());
    return c.json(data);
  },
);

export default weatherApp;
