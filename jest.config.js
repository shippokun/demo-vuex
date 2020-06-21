module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts"],
  transformIgnorePatterns: ["node_modules/"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/*.spec.{j,t}s?(x)"],
  testURL: "http://localhost/",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue,ts}",
    "!src/main.ts",
    "!src/pages/**/index.ts",
  ],
};
