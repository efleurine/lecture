module.exports = {
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  plugins: ["flowtype", "react", "prettier", "react-native"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      legacyDecorators: true
    }
  },
  env: {
    es6: true,
    node: true,
    "react-native/react-native": true
  },
  rules: {
    strict: 0,
    "comma-dangle": 0,
    "no-use-before-define": 0,
    "quote-props": 1,
    "react/jsx-no-bind": 1,
    "react/prefer-stateless-function": 1,
    "padded-blocks": 0,
    "no-shadow": 1,
    "no-return-assign": 1,
    "no-case-declarations": 1,
    "react-native/no-unused-styles": 1,
    "react-native/split-platform-components": 1,
    "no-underscore-dangle": 0,
    "global-require": 0,
    "import/no-unresolved": 1,
    "no-param-reassign": 0,
    "consistent-return": 1,
    "react/no-multi-comp": 1,
    "no-confusing-arrow": 0,
    "react/jsx-filename-extension": 0,
    "no-console": 0,
    "react/forbid-prop-types": 0,
    "prettier/prettier": "error",
    "react/prefer-stateless-function": [1, { ignorePureComponents: true }],
    "react/destructuring-assignment": 0,
    "react/no-multi-comp": [0, { ignoreStateless: true }],
    "default-case": 0,
    "arrow-body-style": 0,
    "react/display-name": 0
  }
};
