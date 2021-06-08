import React from 'react';
import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components';

import * as theme from '../../theme';
import { Button } from './button';
import { Icons } from '../';

const renderWithTheme = (element: React.ReactElement) => render(<ThemeProvider theme={theme.default.light}>{element}</ThemeProvider>);

describe('Button', () => {
  it('renders button with variant', () => {
    const title = 'title';
    const rendered = renderWithTheme(<Button variant="primary" mr={3}>{title}</Button>)
    rendered.getAllByText(title);
  });

  it('renders disabled button', () => {
    const title = 'title';
    const rendered = renderWithTheme(<Button variant="primary" mr={3} disabled={true}>{title}</Button>)
    rendered.getAllByText(title)
  });

  it('renders loading button', () => {
    const title = 'title';
    const rendered = renderWithTheme(<Button variant="primary" mr={3} isLoading={true}>{title}</Button>)

    rendered.getAllByText(title)
    rendered.getAllByText('Loading…')
  });

  it('renders icon button', () => {
    const title = 'title';
    const rendered = renderWithTheme(<Button variant="primary" leftIcon={<Icons.Info aria-hidden />} rightIcon={<Icons.Info aria-hidden />}>{title}</Button>)

    rendered.getAllByText(title)
  });

  

});


