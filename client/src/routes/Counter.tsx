import { css } from "@styled-system/css";
import { createSignal } from "solid-js";
import { buttonStyle } from "../styles/button";

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <h2 class={css({ fontSize: "xl" })}>Counter</h2>
      <div class={css({ mt: "4" })}>
        <button type="button" class={buttonStyle({ visual: "solid" })} onClick={() => setCount(count() + 1)}>
          You clicked me {count()} times
        </button>
      </div>
    </>
  );
};

export default Counter;
