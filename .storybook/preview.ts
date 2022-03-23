import '../src/styles/index.css';
import ThemeDecorator from './theme-decorator';
import { withDesign } from 'storybook-addon-designs';

const tokenContext = require.context(
  '!!raw-loader!../src/styles/',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  designToken: {
    files: tokenFiles,
    defaultTab: 'colors',
    styleInjection:
      '@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");',
  },
  docs: { inlineStories: true },
  viewport: {
    viewports: {
      small: {
        name: 'Small (40em)',
        styles: {
          width: 40 * 16 + 'px',
          height: '100%',
        },
      },
      medium: {
        name: 'Medium (56em)',
        styles: {
          width: 56 * 16 + 'px',
          height: '100%',
        },
      },
      large: {
        name: 'Large (64em)',
        styles: {
          width: 64 * 16 + 'px',
          height: '100%',
        },
      },
      responsive: {
        name: 'Responsive',
        styles: {
          width: '100%',
          height: '100%',
        },
      },
    },
  },
};

export const decorators = [ThemeDecorator, withDesign];
