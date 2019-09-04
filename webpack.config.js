"use strict";
const path = require("path");
const distDir = path.resolve(__dirname, "dist");
const webpack = require("webpack");
// Make sure this plugin is listed first
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/client/index.js",
    vendor: "./src/client/vendor.js"
  },
  output: {
    path: distDir,
    publicPath: "dtlbjvxtsh2ns.cloudfront.net",
    filename: "[name].js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: "/",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader" // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run postcss actions
            options: {
              plugins: function() {
                // postcss plugins, can be exported to postcss.config.js
                return [require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g|pdf)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Benedict Daly",
      template: "./src/client/template.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
