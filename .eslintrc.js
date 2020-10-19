module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: false,
    jest: true,
  },
  extends: [],
  plugins: ['import'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpreads": true
    }
  },
  globals: {},
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },
};
