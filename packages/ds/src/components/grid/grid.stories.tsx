import * as React from 'react';
import { Grid } from './grid';
import { Text } from '../typography';
import { Box } from '../box';

export default {
  title: 'Grid',
  component: Grid
};

export const grid = () => (
  <>
    <Grid>
      <Box bg="highlight" mb={4}>
        <Text variant="primary">This is a grid box</Text>
      </Box>
    </Grid>
  </>
);