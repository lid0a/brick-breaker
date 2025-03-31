import { resolve } from "node:path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

const __dirname = import.meta.dirname;

/** @type {import('webpack').Configuration} */
export default {
  entry: "./src/js/main.js",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif|mp3)$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, "assets"),
          to: resolve(__dirname, "dist/assets"),
        },
      ],
    }),
  ],
};
