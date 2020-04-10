const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.min.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  optimization: {
    minimize: false //Update this to true or false
  }
};
