module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  plugins: ['prettier', 'jest', 'react', 'react-hooks', 'jsx-a11y'],
  // parserOptions: {
  //   ecmaFeatures: { jsx: true },
  //   allowImportExportEverywhere: true,
  // },
  rules: {
    // 'react/sort-comp': [
    //   2,
    //   {
    //     order: [
    //       'type-annotations',
    //       'static-methods',
    //       'lifecycle',
    //       'everything-else',
    //       'render',
    //     ],
    //   },
    // ],
    // 'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    // 'react/prop-types': 2,
    // 'react/default-props-match-prop-types': 0,
    // 'react/no-unused-prop-types': 0,
    // 'import/prefer-default-export': 0,
    // 'flowtype/define-flow-type': 1,
    // 'flowtype/use-flow-type': 1,
    // 'class-methods-use-this': 'off',
    // 'react/require-default-props': 'off',
    // 'react/destructuring-assignment': ['warn', 'always'],
    // 'react/jsx-one-expression-per-line': 'warn',
    // 'react/no-access-state-in-setstate': 'warn',
    // 'react/forbid-prop-types': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prop-types': 2,
    'react-hooks/exhaustive-deps': 2,
    'no-underscore-dangle': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'react/forbid-prop-types': 1,
    'react/destructuring-assignment': 0,
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': [1, 'always-multiline'],
    'import/no-dynamic-require': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 1,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-before-return': 2,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-destructuring': [
      'error',
      {
        object: false,
        array: false,
      },
    ],
    'prefer-template': 2,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/sort-prop-types': 2,
    'react/jsx-props-no-spreading': 0,
  },
  // settings: {
  //   'import/resolver': { webpack: { config: './webpack.config.js' } },
  // },
};
