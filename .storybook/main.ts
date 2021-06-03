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
    // reactDocgen: 'none',
  }
};

// module.exports = {
//   stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-docs'],
//   // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
//   typescript: {
//     check: true, // type-check stories during Storybook build
//     reactDocgen: 'none' // disable react docgen typescript https://github.com/styleguidist/react-docgen-typescript/issues/356
//   }
// };
