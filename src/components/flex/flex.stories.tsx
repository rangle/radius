import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Flex } from './flex';
import { Box, Text } from '../../';

export default {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Flex component helps you create flexbox layouts.</Description>
          <Props of={Flex} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <Flex {...args}flexDirection="column" pb={4} pt={4}>
      <Box bg="text.primary" p={3} mb={4}>
        <Text variant="body" color="text.inverse">
          This is a flex box item
        </Text>
      </Box>
      <Box bg="text.primary" p={3}>
        <Text variant="body" color="text.inverse">
          This is a flex box item
        </Text>
      </Box>
    </Flex>;
