module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json",
    },
  },
  testMatch: ["**/*.spec.{j,t}s?(x)"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!src/pages/**/index.js",
  ],
};
