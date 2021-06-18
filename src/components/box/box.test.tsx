import React from 'react';
import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components';

import * as theme from '../../theme';
import { Box } from './box';

const renderWithTheme = (element: React.ReactElement) => render(<ThemeProvider theme={theme.default.light}>{element}</ThemeProvider>);


describe('Box', () => {
  it('renders primary variant', () => {
    const rendered = renderWithTheme(<Box>
      <p>This is a box</p>
    </Box>)
    rendered.getByText('This is a box');
  });
});
