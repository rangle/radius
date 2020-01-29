import * as React from 'react';
import { Box } from './box';
import { Text } from '../typography';

export default {
  title: 'Box',
  component: Box,
};

export const BoxStory = () => (
  <>
    <Box mb={4}>
      <Text variant="primary">This is a box</Text>
    </Box>

    <Box>
      <Text variant="secondary">This is a box</Text>
    </Box>
  </>
);
