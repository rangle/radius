import React from 'react';
import * as ReactDOM from 'react-dom';
import { Basic as Hello } from './hello.stories';

describe('Hello', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hello />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
