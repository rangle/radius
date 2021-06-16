import React from 'react';
import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components';

import * as theme from '../../theme';
import { Text } from './text';

const renderWithTheme = (element: React.ReactElement) => render(<ThemeProvider theme={theme.default.light}> {element} </ThemeProvider>);

describe('Text', () => {
  it('renders text with body variant', () => {
    const title = 'title';
    const rendered = renderWithTheme(<Text variant="body" mr={3}>{title}</Text>)
    rendered.getAllByText(title);
  });

  it('renders text with caption variant', () => {
    const title = 'title';
    const rendered = renderWithTheme(<Text variant="caption" mr={3}>{title}</Text>)
    rendered.getAllByText(title);
  });

  it('renders text with hint variant', () => {
    const title = 'title';
    const rendered = renderWithTheme(<Text variant="hint" mr={3}>{title}</Text>)
    rendered.getAllByText(title);
  });

  it('renders text with label variant', () => {
    const title = 'title';
    const rendered = renderWithTheme(<Text variant="label" mr={3}>{title}</Text>)
    rendered.getAllByText(title);
  });
});