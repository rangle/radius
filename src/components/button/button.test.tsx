import DsButton, { DsButtonProps } from './button';
import * as React from 'react';
import { createSerializer } from '@emotion/jest';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

expect.addSnapshotSerializer(createSerializer());

test('test creation', () => {
  const args: DsButtonProps = {
    variant: 'primary',
    size: 'small',
    as: 'button',
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  };
  const tree = renderer.create(<DsButton {...args} />).toJSON();

  if (tree === null || Array.isArray(tree)) {
    throw new Error("render didn't work correctly");
  }

  expect(tree.type).toBe('button');
  expect(tree.props.disabled).toBe(undefined);
});
