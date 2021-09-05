const path = require("path");
const { WebPlugin } = require("web-webpack-plugin");
const autoprefixer = require("autoprefixer");

const isDevEnv = process.env.NODE_ENV === "development";

function getCssLoaders(modules = false) {
  return [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules,
        localIdentName: "[name]_[local]_[hash:base64:5]",
        camelCase: modules ? true : undefined,
        url: !isDevEnv
      }
    },
    {
      loader: "postcss-loader",
      options: {
        plugins: [
          autoprefixer({
            remove: false,
            overrideBrowserslist: ["firefox >= 4", "chrome >= 4", "not ie >= 0"]
          })
        ]
      }
    },
    "sass-loader"
  ];
}

module.exports = {
  mode: "development",
  entry: {
    // 修改入口文件即可调试不同文件下的代码
    app: "./src/06/index.jsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_[contenthash:8].js"
  },
  devtool: "cheap-module-eval-source-map",
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
      },
      {
        test: /\.s?css$/,
        use: getCssLoaders(false),
        exclude: /\.(m|module)\.s?css$/
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
