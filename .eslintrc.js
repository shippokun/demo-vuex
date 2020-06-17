module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: ["babel-eslint", "@typescript-eslint/parser"],
    ecmaFeatures: {
      legacyDecotators: true,
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: ["**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
