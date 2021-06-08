import React from 'react';
import { render } from '@testing-library/react'

import { Heading } from './heading';

describe('Heading', () => {
  it('renders heading with variant', () => {
    const title = 'Hello There';
    const rendered = render(<Heading variant="heading-1">{title}</Heading>)
    rendered.getAllByText(title);
  });
});
