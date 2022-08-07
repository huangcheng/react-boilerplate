module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'prettier/prettier': true,
    'order/order': ['declarations', 'custom-properties', 'dollar-variables', 'rules', 'at-rules'],
  },
};
