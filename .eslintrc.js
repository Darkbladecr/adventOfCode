module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-useless-catch': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'operator-linebreak': 'off',
    'max-classes-per-file': 'off',
    'global-require': 'off',
    quotes: 'single',
  },
};
