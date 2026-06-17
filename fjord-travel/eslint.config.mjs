import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Custom rules to enforce best practices and maintain code quality.
    rules: {
      // Restrict imports from next/dist to prevent importing server-side code in client-side files.
      "no-restricted-imports": [
        "error",
        {
          patterns: ["next/dist/*"],
        },
      ],
      // Disallow duplicate imports to prevent confusion and improve code clarity.
      "no-duplicate-imports": "error",

      // Disallow unused variables to keep the code clean and prevent potential bugs.
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
