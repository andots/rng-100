import { Route, Router } from "@solidjs/router";
import { createEffect, on } from "solid-js";
import type { Component } from "solid-js";
import RandomNumber from "./components/RandomNumber";
import { ROUTES } from "./constants";
import { useAppSate } from "./stores/state";

const App: Component = () => {
  const theme = useAppSate((state) => state.theme);

  createEffect(
    on(theme, (t) => {
      const root = document.documentElement;
      if (
        t === "dark" ||
        (t === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }),
  );

  return (
    <div class="flex items-center justify-center h-screen">
      <Router>
        <Route path={ROUTES.HOME} component={RandomNumber} />
      </Router>
    </div>
  );
};

export default App;
