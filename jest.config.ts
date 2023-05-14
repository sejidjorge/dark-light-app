export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testMatch: ['**/__tests__/**/*.test.(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest',
    '^.+\\.(jsx|tsx)$': '@swc/jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './setupTests.ts',
  ],
};
