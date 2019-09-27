const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: false,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/utils',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|cass|scss|less|css)$': '<rootDir>/__mocks__/fileMock.js',
    '^@Components/(.*)$': '<rootDir>/src/components/$1',
    '^@Actions/(.*)$': '<rootDir>/src/redux/actions/$1',
    '^@Reducers/(.*)$': '<rootDir>/src/redux/reducers/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
