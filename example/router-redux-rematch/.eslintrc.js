const eslintrc = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  plugins: ['import'],
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'no-eval': 'error',
    'import/first': 'error',
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
};

if (process.env.NODE_ENV === 'development') {
  Object.assign(eslintrc.rules,
    {
      'no-console': 0,
      'no-unused-vars': 0,
    });
}

module.exports = eslintrc;
