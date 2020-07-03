const HtmlWepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'js/main.bundle.js',
  },

  module: {
    rules: [
      {
        test: [/\.pug$/],
        use: ['pug-loader'],
      },

      {
        test: [/\.js/],
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },

      {
        test: [/\.s[ac]ss$|.css$/],
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWepackPlugin({
      filename: 'index.html',
      template: 'src/pages/index.pug',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
};
