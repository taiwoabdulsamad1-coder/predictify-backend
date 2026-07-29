import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
    },
  },
  {
    ignores: ["dist/", "coverage/", "drizzle/"],
  },
);
