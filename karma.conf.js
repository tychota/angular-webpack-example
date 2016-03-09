'use strict';

const path = require('path');
const webpackConfig = require('./webpack.config.js');

const entry = path.resolve(webpackConfig.context, webpackConfig.entry);
const appDir = path.resolve(entry, '..');

const preprocessors = {};

preprocessors[entry] = 'webpack';
preprocessors[`${appDir}/**/*.test.js`] = 'babel';

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [entry],
    webpack: webpackConfig,
    exclude: [],
    preprocessors,
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-babel-preprocessor',
      'karma-mocha-reporter'
    ]
  });
};
