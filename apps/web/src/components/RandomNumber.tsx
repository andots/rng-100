import type { Component } from "solid-js";

import { Button } from "@repo/ui/button";
import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from "@repo/ui/switch";

const RandomNumber: Component = () => {
  return (
    <div>
      <div>
        <Button>Click me</Button>
      </div>
      <div class="mt-5">
        <Switch class="flex items-center space-x-2">
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          <SwitchLabel>Airplane Mode</SwitchLabel>
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
