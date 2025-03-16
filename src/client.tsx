/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./routes/Home"));
const Counter = lazy(() => import("./routes/Counter"));

const App = () => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/counter" component={Counter} />
  </Router>
)

const root = document.getElementById("root")!;
render(() => <App />, root);
