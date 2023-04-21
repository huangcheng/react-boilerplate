const { resolve } = require('path');

module.exports = {
  cache: {
    type: 'memory',
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    open: false,
    port: 8080,
  },
  devtool: 'inline-source-map',
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    publicPath: '/',
  },
};
