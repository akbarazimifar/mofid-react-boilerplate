module.exports = {
  transformIgnorePatterns: [
    '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$',
  ],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
  },
};
