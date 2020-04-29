module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(s?css)$": "identity-obj-proxy",
  },
  rootDir: "src",
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.stories.{ts,tsx}"],
  coverageDirectory: "../coverage",
};
