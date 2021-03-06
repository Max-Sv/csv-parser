module.exports = {
    env: {
    browser: true,
    es6: true,
    node: true,
    typescript: true,
    jest: true
    },
    extends: 'airbnb-base',
    parser: 'typescript-eslint-parser',
    globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    },
    rules: {
    },
};
