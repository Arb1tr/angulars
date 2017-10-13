/**
 * Created by arb1tr on 10/12/17.
 */
const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app.bootstrap.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8092,
    historyApiFallback: true,
    noInfo: true
  }
};

module.exports.plugins = (module.exports.plugins || []).concat([
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  })
]);