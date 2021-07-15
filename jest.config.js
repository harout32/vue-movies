module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/jestGlobalSetup.ts'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: [
    'vue',
    'js',
    'ts'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    '!<rootDir>/node_modules/',
    '!src/**/*.stories.ts',
    '!src/**/*.d.ts',
    '!src/mocks/**',
    '!src/services/**',
    '!src/assets/**',
    '!src/main.ts',
    '!src/App.vue',
    '!src/serviceWorker.js',
    '!src/types/**'
  ],
  coverageThreshold: {
    global: {
      branches: 84,
      functions: 95,
      lines: 95,
      statements: 95
    }
  }
}
