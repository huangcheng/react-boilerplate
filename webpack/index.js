const { merge, mergeWithRules } = require('webpack-merge');

const baseConfig = require('./base');
const devConfig = require('./dev');
const prodConfig = require('./prod');

module.exports = ({ production, development }) => {
  if (production) {
    return mergeWithRules({
      module: {
        rules: {
          test: 'match',
          use: 'replace',
        },
      },
    })(baseConfig, prodConfig);
  } else if (development) {
    return merge(baseConfig, devConfig);
  }

  throw new Error('Unsupported building environment');
};
