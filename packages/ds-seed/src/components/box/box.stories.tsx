import * as React from 'react';
import { Box } from './box';
import { Text } from '../typography';

export default {
  title: 'Box',
  component: Box,
};

export const BoxStory = () => (
  <>
    <Box bg="highlight" mb={4}>
      <Text variant="primary">This is a box</Text>
    </Box>

    <Box bg="highlight">
      <Text variant="secondary">This is a box</Text>
    </Box>
  </>
);
