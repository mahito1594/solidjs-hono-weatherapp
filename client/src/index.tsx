/* @refresh reload */
import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import "./index.css";

const Home = lazy(() => import("./routes/Home"));
const Counter = lazy(() => import("./routes/Counter"));
const Clock = lazy(() => import("./routes/Clock"));

const App = () => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/counter" component={Counter} />
    <Route path="/clock" component={Clock} />
  </Router>
);

// biome-ignore lint/style/noNonNullAssertion: assume root element exists
const root = document.getElementById("root")!;
render(() => <App />, root);
