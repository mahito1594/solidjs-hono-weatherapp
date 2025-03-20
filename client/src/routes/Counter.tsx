import { createSignal } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <h1>Hono and SolidJS: Counter</h1>
      <div>
        <button type="button" onClick={() => setCount(count() + 1)}>
          You clicked me {count()} times
        </button>
      </div>
    </>
  );
};

export default Counter;
