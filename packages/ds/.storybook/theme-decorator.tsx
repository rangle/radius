import React from 'react';
import { ThemeProvider } from 'styled-components';
import { select } from '@storybook/addon-knobs';
import theme from '../src/theme';

const ThemeDecorator = (storyFn: any) => (
  <ThemeProvider
    theme={
      theme[
        select(
          'Theme',
          {
            Light: 'light',
            Dark: 'dark',
          },
          'light'
        )
      ]
    }
  >
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
