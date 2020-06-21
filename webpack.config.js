module.exports = {
  entry: "./src/main.ts",
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              // Vueをtypescriptとして扱う
              appendTsSuffixTo: [/\.vue/],
              transpileOnly: true, // 型チェックしない！！！
            },
          },
        ],
      },
    ],
  },
};
