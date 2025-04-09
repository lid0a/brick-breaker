import { resolve } from 'node:path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const devMode = process.env.NODE_ENV !== 'production';

const __dirname = import.meta.dirname;

/** @type {import('webpack').Configuration} */
export default {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, 'public'),
          to: resolve(__dirname, 'dist/public'),
        },
      ],
    }),
  ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
};
