const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./config');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['react-hot-loader/patch', './src/index.js'],
  optimization: {
    splitChunks: false,
    noEmitOnErrors: true,
  },
  cache: {
    type: 'memory',
  },
  devServer: {
    hot: true,
    compress: true,
    contentBase: [path.resolve(__dirname, '..', 'dist')],
    open: false,
    inline: true,
    overlay: true,
    historyApiFallback: true,
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};

module.exports = merge(baseConfig, config);
