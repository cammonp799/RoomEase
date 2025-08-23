export default {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: { '^.+\\.(ts|mjs|js|html)$': ['ts-jest', { tsconfig: 'tsconfig.spec.json', isolatedModules: true }]},
  testMatch: ['**/?(*.)+(spec).ts']
};
