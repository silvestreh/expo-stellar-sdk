module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'semistandard'
  ],
  ignorePatterns: ['node_modules/**/*'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {}
};
