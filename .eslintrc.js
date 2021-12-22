module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
  },
  ignorePatterns: ['build'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    souceType: 'module',
    // project: "./tsconfig.json",
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
  settings: {
    react: { version: 'detect' },
  },
}
