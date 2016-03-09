"use strict";

const path = require('path');
const webpackConfig = require('./webpack.config.js');

const entry = path.resolve(webpackConfig.context, webpackConfig.entry);
const appDir = path.resolve(entry, '..');

let preprocessors = {};
preprocessors[entry] = 'webpack';
preprocessors[`${appDir}/**/*.test.js`] = 'babel';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [entry],
    webpack: webpackConfig,
    exclude: [],
    preprocessors: preprocessors,
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      require('karma-webpack'),
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-babel-preprocessor',
      'karma-mocha-reporter'
    ]
  })
}
