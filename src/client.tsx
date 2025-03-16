/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./routes/Home"));
const Counter = lazy(() => import("./routes/Counter"));
const Clock = lazy(() => import("./routes/Clock"));

const App = () => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/counter" component={Counter} />
    <Route path="/clock" component={Clock} />
  </Router>
)

const root = document.getElementById("root")!;
render(() => <App />, root);
