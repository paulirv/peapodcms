export default {
  testEnvironment: "jest-environment-jsdom", // Use JSDOM for DOM-based tests
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use Babel to transform JavaScript/JSX
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Load setup file for Jest DOM
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  transformIgnorePatterns: ["/node_modules/(?!@testing-library)"], // Ensure dependencies are transformed
};