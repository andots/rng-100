import type { Component } from "solid-js";

import { Button } from "@repo/ui/button";
import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from "@repo/ui/switch";
import { useAppSate } from "../stores/state";

const RandomNumber: Component = () => {
  const randomNumber = useAppSate((state) => state.generatedNumber);
  const generate = useAppSate((state) => state.generateRandomNumber);
  const toggleTheme = useAppSate((state) => state.toggleTheme);

  return (
    <div class="flex flex-col items-center space-y-5">
      <Button onClick={generate} variant="ghost" size="extraLarge">
        {randomNumber()}
      </Button>
      <div class="mt-5">
        <Switch class="flex items-center space-x-2">
          <SwitchControl onClick={toggleTheme}>
            <SwitchThumb />
          </SwitchControl>
          <SwitchLabel>Theme</SwitchLabel>
        </Switch>
      </div>
    </div>
  );
};

export default RandomNumber;
