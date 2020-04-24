module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(s?css)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  rootDir: "src",
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.stories.{ts,tsx}"],
};
