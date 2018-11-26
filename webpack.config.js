const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
// const autoprefixer = require("autoprefixer");
// const Dotenv = require("dotenv-webpack");
const outputDirectory = "build";

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: { name: "bundle.css" }
      //     },
      //     { loader: "extract-loader" },
      //     { loader: "css-loader" },
      //     {
      //       loader: "postcss-loader",
      //       options: { plugins: () => [autoprefixer()] }
      //     }
      //   ]
      // },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   loader: "url-loader",
      //   options: { limit: 100000 }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    open: false,
    historyApiFallback: true
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:5000",
    //     pathRewrite: { "^/api": "" }
    //   }
    // }
  },
  plugins: [
    // new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
