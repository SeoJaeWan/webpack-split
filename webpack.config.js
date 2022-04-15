const path = require("path");

module.exports = {
  entry: {
    page1: "./src/index1.js",
    page2: "./src/index2.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
};
