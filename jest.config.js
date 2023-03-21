/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/"],
  roots: [`<rootDir>/`],
  clearMocks: true,
};
