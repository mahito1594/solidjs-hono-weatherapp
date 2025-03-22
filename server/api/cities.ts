import { Hono } from "hono";
import cities from "../data/cities.json";

const citiesApp = new Hono().get("/", (c) => {
  return c.json({
    cities,
  });
});

export default citiesApp;
