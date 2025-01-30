import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";
import RandomNumber from "./components/RandomNumber";
import { ROUTES } from "./constants";

const App: Component = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <Router>
        <Route path={ROUTES.HOME} component={RandomNumber} />
      </Router>
    </div>
  );
};

export default App;
