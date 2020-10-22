const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./config');

const config = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          chunks: 'initial',
          name: 'vendor',
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
    emitOnErrors: true,
    mergeDuplicateChunks: true,
    removeEmptyChunks: true,
    removeAvailableModules: true,
    moduleIds: 'named',
    chunkIds: 'named',
    providedExports: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '..', 'dist'),
    }),
  ],
};

module.exports = merge(baseConfig, config);
