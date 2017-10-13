/**
 * Created by arb1tr on 10/12/17.
 */
const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './core/core.module.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'core.bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {}
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

module.exports.plugins = (module.exports.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  })
]);