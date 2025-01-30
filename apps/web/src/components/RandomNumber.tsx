import type { Component } from "solid-js";

import { Button } from "@repo/ui/button";
import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from "@repo/ui/switch";
import { useAppSate } from "../stores/state";

const RandomNumber: Component = () => {
  const randomNumber = useAppSate((state) => state.generatedNumber);
  const generate = useAppSate((state) => state.generateRandomNumber);

  return (
    <div>
      <div>
        <Button onClick={generate}>{randomNumber()}</Button>
      </div>
      <div class="mt-5">
        <Switch class="flex items-center space-x-2">
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          <SwitchLabel>Randomizer</SwitchLabel>
        </Switch>
        <div class="mt-5">
          <Switch class="flex items-center space-x-2">
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
            <SwitchLabel class="font-bold">日本語</SwitchLabel>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default RandomNumber;
