import { Button } from "@repo/ui/button";
import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from "@repo/ui/switch";
import { useAppSate } from "../stores/state";

import type { Component } from "solid-js";

const RandomNumber: Component = () => {
  const randomNumber = useAppSate((state) => state.generatedNumber);
  const generate = useAppSate((state) => state.generateRandomNumber);
  const toggleTheme = useAppSate((state) => state.toggleTheme);
  const theme = useAppSate((state) => state.theme);

  const getColor = () => {
    let text: string;
    if (randomNumber() < 30) {
      text = "text-red-500";
    } else if (randomNumber() >= 30 && randomNumber() < 70) {
      text = "text-yellow-500";
    } else {
      text = "text-green-500";
    }
    return text;
  };

  return (
    <div class="flex flex-col items-center space-y-2">
      <Button onClick={generate} variant="ghost" size="extraLarge">
        <p class={getColor()}>{randomNumber()}</p>
      </Button>
      <div>
        <Switch class="flex items-center space-x-2">
          <SwitchControl onClick={toggleTheme}>
            <SwitchThumb />
          </SwitchControl>
          <SwitchLabel class="capitalize">{theme()} theme</SwitchLabel>
        </Switch>
      </div>
    </div>
  );
};

export default RandomNumber;
