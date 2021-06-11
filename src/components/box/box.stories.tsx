import React from 'react';

// import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Box } from './box';
import { Text } from '..';

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    // docs: {
    //   page: () => (
    //     <>
    //       <Title />
    //       <Description>Building block of layouts. Creates a box-model context</Description>
    //       <Props of={Box} />
    //     </>
    //   ),
    // },
  },
};

export const Basic = (args: any) => <Box {...args} />;

export const Primary = () => (
  <Box bg="text.primary" p={3} mb={4}>
    <Text variant="body" color="text.inverse">
      This is a box
    </Text>
  </Box>
)

export const Sizing = () => (
  <Box bg="brand.accent" width={5} height={5}></Box>
)