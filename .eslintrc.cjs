/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [

    'eslint:recommended',
    // Include for react in this order only
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended', // for the imports
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended', // for typescript config
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // for enabling type-checking
    'plugin:jsx-a11y/recommended', // for jsx accessibility rules

    'prettier', // extends the eslint-config-prettier (put it in the end of all config before other shareable configs)
    'airbnb', //  extends the eslint-config-airbnb
    'airbnb/hooks', // extends airbnb hooks rules
    'airbnb-typescript', // extends the eslint-config-airbnb-typescript
    'plugin:react/jsx-runtime', // to allow jsx-runtime for react 17 allowing automatic react insertion for jsx

  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // changed to location of the tsconfig

  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  // For import-resolution of absolute imports: Finds and resolves where the modules are located

  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',

  },
};
