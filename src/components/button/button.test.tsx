import DsButton, { DsButtonProps } from './button'; //

import React from 'react';
import renderer from 'react-test-renderer';

test('test creation', () => {
  const args: DsButtonProps = {
    variant: 'primary',
    size: 'small',
    as: 'button',
    onClick: () => {},
  };
  const tree = renderer.create(<DsButton {...args} />).toJSON();

  if (tree === null || Array.isArray(tree)) {
    throw new Error("render didn't work correctly");
  }

  expect(tree.type).toBe('button');
  expect(tree.props.disabled).toBe(undefined);
});
