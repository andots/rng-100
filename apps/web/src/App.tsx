import type { Component } from "solid-js";
import { Route, Router } from "@solidjs/router";
import RandomNumber from "./components/RandomNumber";
import { ROUTES } from "./constants";

const App: Component = () => {
  return (
    <div>
      <Router>
        <Route path={ROUTES.HOME} component={RandomNumber} />
      </Router>
    </div>
  );
};

export default App;
