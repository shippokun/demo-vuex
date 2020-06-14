module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/*.spec.{j,t}s?(x)"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!src/pages/**/index.js",
  ],
};
