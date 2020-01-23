module.exports = {
  stories: ['../src/**/*.stories.(js|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],

  /**
   *   todo: once https://github.com/storybookjs/presets/pull/83 is merged in, we may no longer need
   *   to do this manually and simply just use the preset
   */
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
