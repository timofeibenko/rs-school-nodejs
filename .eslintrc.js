module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/ban-ts-comment': 0,
  }
};