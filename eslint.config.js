/**
 * @type {import('eslint').Linter.RulesRecord}
 */
 const rulesBase = {
    'react/jsx-wrap-multilines': [
      'error',
      {
        prop: false, // this conflicts with Prettier
      },
    ],
    'import/no-named-as-default': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/no-unresolved': 0,
    'import/no-cycle': 0,
    'import/no-useless-path-segments': [2, { noUselessIndex: true }],
    'jam3/no-sanitizer-with-danger': [2, { wrapperName: ['sanitizeString'] }],
    'no-trailing-spaces': [2],
    'arrow-spacing': [2, { before: true }],
    'keyword-spacing': [2, { before: true }],
    'object-curly-spacing': [2, 'always'],
    semi: ['error', 'always'],
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/no-danger': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'jest/consistent-test-it': ['warn', { fn: 'test', withinDescribe: 'test' }],
    'jest/expect-expect': [
      'warn',
      { assertFunctionNames: ['expect', 'nock', 'request'] },
    ],
    'jest/no-done-callback': 'warn',
    'jest/no-large-snapshots': ['warn', { maxSize: 40 }],
    'jest/no-test-return-statement': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-spy-on': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/forbid-prop-types': [0, { forbid: ['any'] }],
    'no-restricted-exports': 0,
    'import/no-named-as-default-member': 0,
    'import/no-self-import': 0,
    'import/named': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'max-classes-per-file': 0,
    'jest/no-test-callback': 0,
    'jest/no-mocks-import': 0,
    'react/static-property-placement': 0,
    'react/jsx-curly-newline': 0, // conflicts with prettier
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'import/extensions': [0],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: ['variable'],
        types: ['function'],
        format: ['camelCase', 'PascalCase'], // PascalCase for ReactComponents
      },
      {
        selector: ['parameter'],
        leadingUnderscore: 'allowSingleOrDouble',
        format: ['camelCase', 'PascalCase'], // PascalCase for ReactComponents
      },
      {
        selector: ['function'],
        format: ['camelCase', 'PascalCase'], // PascalCase for ReactComponents
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'memberLike',
        format: null, // keep open to support html/css props
      },
      {
        selector: ['enum', 'enumMember'],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'], // UPPER_CASE for COPY, PascalCase for React
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'], // PascalCase for React
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Input', 'Textarea', 'Checkbox', 'Radio'],
        depth: 3,
      },
    ],
  };
  
  /**
   * @type {import('eslint').Linter.Config}
   */
  module.exports = {
    ignorePatterns: ['**/dist/**'],
    env: {
      browser: true,
      commonjs: true,
      es2022: true,
      jest: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: 'module',
      project: 'config/typescript/tsconfig.lint.json',
    },
    extends: [
      'airbnb',
      'plugin:jsx-a11y/recommended',
      'plugin:jest/recommended',
      'plugin:jest/style',
      'plugin:prettier/recommended',
      'prettier',
    ],
    rules: {
      ...rulesBase,
    },
    plugins: [
      '@typescript-eslint',
      'react',
      'prettier',
      'jsx-a11y',
      'jest',
      'react-hooks',
      'jam3',
      'import',
      'testing-library',
    ],
    overrides: [
      // TS/TSX files
      {
        files: ['**/*.ts', '**/*.tsx'],
        extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
        rules: {
          ...rulesBase,
          semi: 'off',
          'react/require-default-props': 0,
          '@typescript-eslint/semi': 'error',
          'no-use-before-define': 'off',
          '@typescript-eslint/no-use-before-define': ['error'],
          'no-shadow': 0,
          '@typescript-eslint/no-shadow': 2,
          'import/order': [
            'error',
            {
              pathGroups: [
                {
                  pattern: '~/**',
                  group: 'internal',
                },
              ],
              groups: [
                'builtin',
                'external',
                'internal',
                'parent',
                ['index', 'sibling'],
              ],
              'newlines-between': 'always',
              pathGroupsExcludedImportTypes: ['builtin'],
            },
          ],
        },
      },
      // disable some rules for type definition files
      {
        files: ['**/*.d.ts'],
        rules: {
          '@typescript-eslint/triple-slash-reference': 0,
          '@typescript-eslint/naming-convention': 0,
        },
      },
      // Handling of JS/JSX files
      {
        files: ['**/*.js', '**/*.jsx'],
        parser: '@babel/eslint-parser',
        parserOptions: {
          project: undefined,
          ecmaFeatures: {
            jsx: true,
            modules: true,
          },
          requireConfigFile: false,
        },
        rules: {
          ...rulesBase,
          'prettier/prettier': 0,
          '@typescript-eslint/naming-convention': 0,
        },
      },
    ],
  };