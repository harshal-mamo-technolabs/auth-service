import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";

export default defineConfig(
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  // Base JS rules
  eslint.configs.recommended,

  // TypeScript (strict, type-checked)
  {
    files: ["src/**/*.ts"],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // ✅ Jest override (THIS IS THE IMPORTANT PART)
  {
    files: ["src/**/*.spec.ts", "src/**/*.test.ts"],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: {
        ...jest.environments.globals.globals,
      },
    },
    rules: {
      // Tests use dynamic APIs → safe to relax
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
);
