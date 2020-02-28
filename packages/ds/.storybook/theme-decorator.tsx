import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, Box } from '../src';

const ThemeDecorator = (storyFn: any) => (
  <>
    <ThemeProvider theme={theme.light}>
      <Box bg="bg.1" p={3} width="100%" height="100%" mb={4}>
        {storyFn()}
      </Box>
    </ThemeProvider>
    <ThemeProvider theme={theme.dark}>
      <Box bg="bg.1" p={3} width="100%" height="100%">
        {storyFn()}
      </Box>
    </ThemeProvider>
  </>
);

export default ThemeDecorator;
