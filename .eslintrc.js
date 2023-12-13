// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  overrides: [
    {
      extends: [
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:typescript-sort-keys/recommended',
        'plugin:unicorn/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        project: ['./tsconfig.json'],
        sourceType: 'module',
        // eslint-disable-next-line unicorn/prefer-module
        tsconfigRootDir: __dirname,
      },
      plugins: ['typescript-sort-keys', '@emotion', 'testing-library', 'jest-dom'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': ['error'],
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'react-hooks/exhaustive-deps': ['error'],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/jsx-uses-react': 'off',
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
        'react/react-in-jsx-scope': 'off',
        'tsdoc/syntax': 'error',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prevent-abbreviations': [
          'error',
          {
            allowList: {
              Params: true,
              Prop: true,
              Props: true,
              Ref: true,
              prop: true,
              props: true,
              ref: true,
            },
          },
        ],
      },
      settings: {
        jest: {
          version: 27,
        },
        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
    },
  ],
  parser: '@babel/eslint-parser',
  plugins: ['html', 'import', 'eslint-plugin-tsdoc'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'sort-keys': 'error',
  },
};
