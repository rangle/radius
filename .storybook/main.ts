module.exports = {
  webpackFinal: async (config) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias['crypto'] = 'crypto-browserify';
    config.resolve.alias['stream'] = 'stream-browserify';

    // Return the altered config
    return config;
  },
  core: {
    builder: 'webpack5',
  },
  staticDirs: [
    { from: '../src/assets/fonts/ubuntu', to: '/static/media' },
    { from: '../src/assets/imgs', to: '/' },
  ],
  stories: ['../src/**/*.stories.@(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-design-token',
    '@geometricpanda/storybook-addon-badges',
    'storybook-addon-designs',
  ],
  typescript: {
    check: true,
  },
  framework: '@storybook/react',
};
