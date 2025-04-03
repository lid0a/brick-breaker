import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig({
  extends: ["js/recommended"],
  languageOptions: {
    parser: babelParser,
    globals: globals.browser,
  },
  plugins: { js },
  files: ["src/**/*.js"],
  rules: {},
});
