module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
};
