module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['prettier', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-var': 'error',
    semi: 'error',
    indent: ['error', 'tab'],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    '@typescript-eslint/no-explicit-any': 2,
    'require-jsdoc': 0,
    'linebreak-style': 0,
    'no-unused-vars': 'off',
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'always'],
  },
};
