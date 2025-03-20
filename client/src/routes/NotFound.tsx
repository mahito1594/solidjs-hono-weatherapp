import { A } from "@solidjs/router";
import { css } from "@styled-system/css";

const NotFound = () => (
  <div>
    <h2 class={css({ fontSize: "xl" })}>404 - Not Found!</h2>
    <div>
      <A href="/">Back to Home</A>
    </div>
  </div>
);

export default NotFound;
