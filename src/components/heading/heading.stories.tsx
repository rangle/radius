import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Heading } from './heading';
import { Box, Flex, Text } from '../'

const Variant = (props: any) => (
  <Text
    variant="hint"
    fontSize={1}
    color="text.secondary"
    width={3}
    mr={2}
    my={0}
    {...props}
  />
);
export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Primitive heading component, defaults to `h1`. Use the `as` prop to set the correct HTML element independent from styling.</Description>
          <Props of={Heading} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <Heading {...args} />;
Basic.args = { children: 'Heading' };

export const All = () => (
  <Box>
  <Flex alignItems="baseline" mb={3}>
    <Variant>heading-1</Variant>{' '}
    <Heading variant="heading-1">You know nothing, Jon Snow</Heading>
  </Flex>
  <Flex alignItems="baseline" mb={3}>
    <Variant>heading-2</Variant>{' '}
    <Heading variant="heading-2">You know nothing, Jon Snow</Heading>
  </Flex>
  <Flex alignItems="baseline" mb={3}>
    <Variant>heading-3</Variant>{' '}
    <Heading variant="heading-3">You know nothing, Jon Snow</Heading>
  </Flex>
  <Flex alignItems="baseline" mb={3}>
    <Variant>heading-4</Variant>{' '}
    <Heading variant="heading-4">You know nothing, Jon Snow</Heading>
  </Flex>
  <Flex alignItems="baseline" mb={3}>
    <Variant>heading-5</Variant>{' '}
    <Heading variant="heading-5">You know nothing, Jon Snow</Heading>
  </Flex>
</Box>
)