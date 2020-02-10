import * as React from 'react';
import { Flex } from './flex';
import { Text } from '../typography';
import { Box } from '../box';

export default {
  title: 'Flex',
  component: Flex
};

export const flex = () => (
  <>
    <Flex flexDirection='column' pb={4} pt={4}>
      <Box bg="highlight" mb={4}>
        <Text variant="primary">This is a flex box item</Text>
      </Box>
      <Box bg="highlight">
        <Text variant="primary">This is a flex box item</Text>
      </Box>
    </Flex>
  </>
);