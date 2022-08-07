module.exports = {
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: false,
              node: 'current',
            },
          },
        ],
      ],
    },
  },
  plugins: [
    '@emotion',
    'react-hot-loader/babel',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: {
          proposals: true,
          version: 3,
        },
        modules: 'auto',
        targets: {
          node: 'current',
        },
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        importSource: '@emotion/react',
        runtime: 'automatic',
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
};
