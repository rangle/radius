import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box } from '../src/components';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Box />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
