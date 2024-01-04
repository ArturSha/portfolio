module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react-hooks/recommended',
    'airbnb', 'airbnb/hooks', 'airbnb-typescript'
  ],
  parserOptions: {
      project: './tsconfig.json'
     },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/react-in-jsx-scope': ['off'],
    'linebreak-style': ['off'],
    '@typescript-eslint/comma-dangle':['off'],
    'react/function-component-definition':['off'],
    'import/prefer-default-export': ['off']
  },
}
