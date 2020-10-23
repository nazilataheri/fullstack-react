const path = require("path");

module.exports = {
  resolve: {
    modules: [path.resolve("./lib"), path.resolve("./node_modules")],
  },
  entry: "./lib/renderer/dom.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.json5$/i,
        loader: "json5-loader",
        options: {
          esModule: false,
        },
        type: "javascript/auto",
      },
    ],
  },
};
