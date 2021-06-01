import { addDecorator, addParameters } from '@storybook/react';
import ThemeDecorator from './theme-decorator';
// import { withKnobs } from '@storybook/addon-knobs';
// import { withA11y } from '@storybook/addon-a11y';

addDecorator(ThemeDecorator);
// addDecorator(withKnobs);
// addDecorator(withA11y);

addParameters({
  options: {
    showRoots: true,
  },
});


addParameters({
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
    defaultViewport: 'Small Mobile',
  },
});