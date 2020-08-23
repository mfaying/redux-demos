const path = require("path");
const { WebPlugin } = require("web-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // 修改入口文件即可调试不同文件下的代码
    app: "./src/03/index.jsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_[contenthash:8].js"
  },
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
        options: {
          presets: ["env", "react", "stage-2"]
        }
      }
    ]
  },
  plugins: [
    new WebPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
};
