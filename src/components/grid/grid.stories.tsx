import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Grid } from './grid';
import { Box, Text } from '..';

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Grid creates a Grid container that exposes CSS Grid properties</Description>
          <Props of={Grid} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => (
  <Grid {...args} gridTemplateColumns="1fr 2fr" gridColumnGap={16}>
    <Box bg="text.primary" p={3} mb={4}>
      <Text variant="body" color="text.inverse">
        This is a grid box
      </Text>
    </Box>
    <Box bg="text.primary" p={3} mb={4}>
      <Text variant="body" color="text.inverse">
        This is a grid box
      </Text>
    </Box>
  </Grid>
);
