/* @refresh reload */
import { A, Route, Router } from "@solidjs/router";
import { type ParentComponent, lazy } from "solid-js";
import { render } from "solid-js/web";
import "./index.css";
import { css } from "@styled-system/css";
import { container } from "@styled-system/patterns";
import { getCities } from "./queries/city";
import { getWeather } from "./queries/weather";

const Home = lazy(() => import("./routes/Home"));
const Weather = lazy(() => import("./routes/Weather"));
const NotFound = lazy(() => import("./routes/NotFound"));

const Layout: ParentComponent = (props) => (
  <>
    <header class={css({ py: "4" })}>
      <h1 class={css({ fontSize: "2xl", textAlign: "center" })}>
        <A href="/">Weather App</A>
      </h1>
    </header>
    <main class={container({ maxW: "breakpoint-md" })}>{props.children}</main>
    <footer class={css({ py: "2", textAlign: "center" })}>
      <p class={css({ fontSize: "sm" })}>Hono ❤️ SolidJS</p>
    </footer>
  </>
);

const App = () => (
  <Router root={Layout}>
    <Route path="/" component={Home} preload={() => getCities()} />
    <Route path="/weather/:city" component={Weather} preload={({ params }) => getWeather(params.city)} />
    <Route path="*404" component={NotFound} />
  </Router>
);

// biome-ignore lint/style/noNonNullAssertion: assume root element exists
const root = document.getElementById("root")!;
render(() => <App />, root);
