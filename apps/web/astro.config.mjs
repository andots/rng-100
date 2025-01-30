import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

// @ts-check
import { defineConfig } from "astro/config";

import tsconfigPaths from "vite-tsconfig-paths";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind({ applyBaseStyles: false })],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
