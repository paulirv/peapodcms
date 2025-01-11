module.exports = {
    testEnvironment: "jsdom", // Simulate a browser environment
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Use Babel to transpile JavaScript/JSX files
    },
    moduleFileExtensions: ["js", "jsx"], // Recognize both .js and .jsx files
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Optional: Setup file for global configs
  };