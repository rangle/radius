import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Spinner } from './spinner';
import { Flex } from '../flex';
import { Text } from '../text';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Spinning SVG loading indicator</Description>
          <Props of={Spinner} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <Spinner {...args} />;

export const Sizing = () => (
  <Flex alignItems="center">
    <Spinner size={0} mr={2} />
    <Spinner size={1} mr={2} />
    <Spinner size={2} mr={2} />
    <Spinner size={3} mr={2} />
    <Spinner size={4} mr={2} />
    <Spinner size={5} mr={2} />
    <Spinner size={6} mr={2} />
    <Spinner size={7} mr={2} />
    <Spinner size={8} mr={2} />
    <Spinner size={9} />
  </Flex>
)

export const Color = () => <Spinner color="brand.primary" p={4} bg="brand.muted" block={false} size={3}/>

export const Inline = () => <Text>this is an inline <Spinner block={false} /> spinner</Text>

export const Block = () => <Text>this is a block <Spinner block p={3} /> spinner (default)</Text>
