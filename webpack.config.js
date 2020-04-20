const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./bundle.js",
  },
  mode: "development",
  devServer: {
    publicPath: "/dist",
    // contentBase: path.join(__dirname, "build"),
  },
};
