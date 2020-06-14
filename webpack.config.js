module.exports = {
  entry: "./src/main.js",
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
              transpileOnly: true, // 型チェックしない！！！
            },
          },
        ],
      },
    ],
  },
};
