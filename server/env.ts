import { createEnv } from "@t3-oss/env-core";
import * as v from "valibot";
import "@dotenvx/dotenvx/config";

export const env = createEnv({
  server: {
    /**
     * The URL of the OpenWeatherAPI.
     */
    API_BASEURL: v.pipe(v.string(), v.url()),

    /**
     * The endpoint for the current weather.
     */
    API_ENDPOINT_CURRENTWEATHER: v.string(),

    /**
     * The API key for the OpenWeatherAPI.
     */
    API_KEY: v.string(),
  },

  // @ts-ignore: this line is checkecd by tsconfig.client.json
  // biome-ignore lint/nursery/noProcessEnv: only here we use process.env
  runtimeEnv: process.env,
});
