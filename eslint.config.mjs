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
  {
    // First-party browser modules must parse on the oldest supported iOS 13.
    files: ["assets/js/**/*.js", "assets/js/**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2019,
      sourceType: "module",
    },
  },
];
