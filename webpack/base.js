const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const CopyPlugin = require('copy-webpack-plugin');

const rootDir = resolve(__dirname, '..');
const srcDir = resolve(rootDir, 'src');

const package_ = require(resolve(rootDir, 'package.json'));

const SERVICE = process.env.SERVICE || '';

module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: {
                filter: (url) => {
                  return !/bg\.svg/.test(url);
                },
              },
            },
          },
        ],
      },
      {
        generator: {
          filename: 'static/images/[name].[hash][ext]',
        },
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        generator: {
          filename: 'static/font/[name].[hash][ext]',
        },
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(rootDir, 'public', 'index.ejs'),
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       context: rootDir,
    //       from: 'public/assets/images/*',
    //       to: 'static/images/[name][ext]',
    //     },
    //   ],
    // }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV),
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
      PROJECT: JSON.stringify(package_.name),
      SERVICE: JSON.stringify(SERVICE),
      VERSION: JSON.stringify(package_.version),
    }),
    new WebpackBar({}),
  ],
  resolve: {
    alias: {
      actions: resolve(srcDir, 'actions'),
      apis: resolve(srcDir, 'apis'),
      components: resolve(srcDir, 'components'),
      configs: resolve(srcDir, 'configs'),
      constant: resolve(srcDir, 'constant'),
      hooks: resolve(srcDir, 'hooks'),
      layouts: resolve(srcDir, 'layouts'),
      reducers: resolve(srcDir, 'reducers'),
      styles: resolve(srcDir, 'styles'),
      types: resolve(srcDir, 'types'),
      utils: resolve(srcDir, 'utils'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
