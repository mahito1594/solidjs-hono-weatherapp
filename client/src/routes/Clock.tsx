import type { AppType } from "@server/index";
import { css } from "@styled-system/css";
import { hc } from "hono/client";
import { Suspense, createResource } from "solid-js";
import { buttonStyle } from "../styles/button";

const client = hc<AppType>("/");

const Clock = () => {
  const [data, { refetch }] = createResource<string>(async () => {
    const response = await client.api.clock.$get();
    const data = await response.json();
    const headers = Array.from(response.headers).reduce<Record<string, string>>((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    return JSON.stringify(
      {
        url: response.url,
        status: response.status,
        headers,
        body: data,
      },
      null,
      2,
    );
  });

  return (
    <>
      <h2 class={css({ fontSize: "xl" })}>Clock</h2>
      <div class={css({ mt: "4" })}>
        <button type="button" class={buttonStyle()} onClick={() => refetch()}>
          Get Server Time
        </button>
        <Suspense fallback={<p>Loading...</p>}>
          <pre class={css({ bg: "gainsboro", mt: "4" })}>{data()}</pre>
        </Suspense>
      </div>
    </>
  );
};

export default Clock;
