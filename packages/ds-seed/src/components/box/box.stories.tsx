import * as React from "react";
import { Box } from "./box";

export default {
  title: 'Box',
  component: Box,
};

export const BoxStory = () => (
  <Box color="powderblue" bg="salmon" mb={3} p={3}>
    This is a box
  </Box>
);