import antfu from "@antfu/eslint-config";

/** @type {import('antfu').Config} */
const config = antfu(
  {
    type: "app",
    stylistic: {
      "indent": 2,
      "quotes": "double",
      "semi": true,
      "jsx": true,
      "style/brace-style": "off",
    },
    typescript: true,
    astro: true,
    solid: true,
    jsonc: true,
    yaml: true,
    ignores: [
      "node_modules/",
      "cjs/",
      "coverage/",
      "esm/",
      "lib/",
      "mjs/",
      "*.d.ts",
      ".memo/**",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-console": "off",
      "curly": "off",
      "ts/consistent-type-definitions": "off",
      "style/brace-style": "off",
    },
  },
);

export default config;
