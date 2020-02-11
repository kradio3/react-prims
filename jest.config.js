module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 92,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: ['node_modules', 'src'],

  //setupTestFrameworkScriptFile: '<rootDir>/internals/testing/test-bundler.js',
  setupFiles: ['<rootDir>/enzyme-setup.js'],
  testRegex: 'tests/.*\\.test\\.js$',
  //snapshotSerializers: ['enzyme-to-json/serializer'],
};

