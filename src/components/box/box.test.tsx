import React from 'react';
import { render } from '@testing-library/react'

import { composeStories } from '@storybook/testing-react';

import * as stories from './box.stories';

const { Primary } = composeStories(stories);

describe('Box', () => {
  it('renders primary variant', () => {
    const rendered = render(<Primary />)
    rendered.getByText('This is a box');
  });
});
