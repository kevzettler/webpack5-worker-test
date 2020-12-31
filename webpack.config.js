'use strict';
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  watch: true,
  cache: false,
  mode: 'production',
  target: "node",
  externals: [ nodeExternals() ],
  devtool: 'source-map',
  entry: './index.js',

  resolve: {
    extensions: [ '.js'],
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'server.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    }),
  ]
};
