module.exports = {
  stories: ["../src/**/*.stories.js", "../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-knobs"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    config.module.rules.push({
      test: /\.tsx?$/,
      use: ["ts-loader"],
      exclude: /\.test.tsx?$/,
    });
    config.resolve = {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    };
    return config;
  },
};
