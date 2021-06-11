import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Text } from './text';
import { Box, Flex } from '../';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Primitive typographic component, defaults to `p`. Use the `as` prop to set the correct HTML element independent from styling.</Description>
          <Props of={Text} />
        </>
      ),
    },
  },
};

const Variant = (props: any) => (
  <Text
    variant="hint"
    fontSize={1}
    color="text.secondary"
    width={3}
    my={0}
    {...props}
  />
);

export const Basic = (args: any) => <Text {...args} />;
Basic.args = { children: 'Label' };

export const Variants = () => (
  <Box>
    <Flex alignItems="baseline" mb={3}>
      <Variant>body</Variant>
      <Text variant="body">You know nothing, Jon Snow</Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>caption</Variant>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>hint</Variant>
      <Text variant="hint">You know nothing, Jon Snow</Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>label</Variant>
      <Text variant="label">You know nothing, Jon Snow</Text>
    </Flex>
  </Box>
)
