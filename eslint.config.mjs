import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "node_modules/**",
      "assets/js/vendor/**",
      "leseverstehen/output/**",
      "sprachbausteine/output/**",
      "de/**",
      "en/**",
      "f/**",
    ],
  },
  {
    files: ["assets/js/**/*.js", "scripts/**/*.js", "*.js", "*.mjs"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
    },
  },
];
