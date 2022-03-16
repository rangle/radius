// Theme Decorator for Storybook
import React from 'react';
import { Args, Story, StoryContext } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/theme';

export const ThemeDecorator = (Story: Story<Args>, context: StoryContext) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </>
  );
};
export default ThemeDecorator;
