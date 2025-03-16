import { createResource, Suspense } from "solid-js";

const Clock = () => {
  const [data, { refetch }] = createResource<string>(async () => {
    const response = await fetch("/api/clock");
    const data = await response.json();
    const headers = Array.from(response.headers)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    return JSON.stringify({
      url: response.url,
      status: response.status,
      headers,
      body: data,
    }, null, 2);
  })

  return (
    <>
      <h1>Hono and SolidJS: Clock</h1>
      <div>
        <button type="button" onClick={() => refetch()}>
          Get Server Time
        </button>
        <Suspense fallback={<p>Loading...</p>}>
          <pre>{data()}</pre>
        </Suspense>
      </div>
    </>
  )
};

export default Clock;
