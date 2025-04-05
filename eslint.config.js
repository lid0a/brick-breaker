import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig({
  extends: ["js/recommended"],
  languageOptions: {
    globals: globals.browser,
  },
  plugins: { js },
  files: ["src/**/*.js"],
  rules: {},
});
