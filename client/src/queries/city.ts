import type { AppType } from "@server/index";
import { query } from "@solidjs/router";
import { hc } from "hono/client";

const client = hc<AppType>("/");

export const getCities = query(async () => {
  const res = await client.api.cities.$get();
  return await res.json();
}, "cities");
