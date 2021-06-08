module.exports = {
  stories: ['../src/**/*.stories.(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport/register',
  ],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen',
  }
};
