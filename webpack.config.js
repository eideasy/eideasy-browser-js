const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const dotenv = require('dotenv');

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({
  mode,
  presets,
} = {
  mode: 'production',
  presets: [],
}) => merge(
  {
    mode,
    stats: {
      chunks: true,
    },
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'eideasy-browser.js',
      library: 'eideasyBrowser',
      libraryTarget: 'umd',
    },
    devServer: {
      contentBase: './dist',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ESLintPlugin(),
      new webpack.ProgressPlugin(),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config({
          path: path.join(__dirname, `.env.${mode}`),
        }).parsed),
      }),
    ],
  },
  modeConfig(mode),
  presetConfig({ mode, presets }),
);
