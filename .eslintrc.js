module.exports = {
  root: true,
  plugins: ['emotion'],
  extends: ['@labd/eslint-config'],
  rules: {
    'emotion/jsx-import': 'error',
    'react/react-in-jsx-scope': 'off',
  },
}
