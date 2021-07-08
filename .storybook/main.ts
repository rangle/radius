module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias['crypto'] = "crypto-browserify";
    config.resolve.alias['stream'] = "stream-browserify";

    // Return the altered config
    return config;
  },
  core: {
    builder: "webpack5",
  },
  stories: ['../src/**/*.stories.@(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource'
  ],
  typescript: {
    check: true,
  }
};
