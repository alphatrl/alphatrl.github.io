import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['dist'],
  },
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      prettierConfig,
    ],
    files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
