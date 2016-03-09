"use strict";

const webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders:  [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.html$/,
        loader: "raw"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      isTest: process.env.NODE_ENV === 'test'
    })
  ]
}
