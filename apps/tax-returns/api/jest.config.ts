/* eslint-disable */
export default {
  displayName: 'tax-returns-api',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/apps/tax-returns/api',
  setupFilesAfterEnv: ['<rootDir>/src/app/test/setup.ts'],
  testTimeout: 10000,
  maxWorkers: 1,
  detectLeaks: false,
  detectOpenHandles: true
}
