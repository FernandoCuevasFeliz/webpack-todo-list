const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptomizeCssPlugin = require('optimize-css-assets-webpack-plugin');

const webpackConfigBase = require('./webpack.common.config');

module.exports = merge(webpackConfigBase, {
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptomizeCssPlugin()],
  },
});
