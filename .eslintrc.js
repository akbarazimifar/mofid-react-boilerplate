module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],

    // Warn
    'react/jsx-props-no-spreading': 'warn',
    'no-unused-expressions': 'warn',
    'no-console': 'warn',

    // Off
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'max-len': 'off',
  },
};