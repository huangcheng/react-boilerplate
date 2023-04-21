const { mergeWithRules } = require('webpack-merge');

const baseConfig = require('./base');
const devConfig = require('./dev');
const prodConfig = require('./prod');

module.exports = ({ production }) => {
  return mergeWithRules({
    module: {
      rules: {
        test: 'match',
        use: 'replace',
      },
    },
  })(baseConfig, production ? prodConfig : devConfig);
};
