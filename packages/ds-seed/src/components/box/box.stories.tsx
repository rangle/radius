import * as React from "react";
import { Box } from "./box";

export default {
  title: 'Box',
  component: Box,
};

export const BoxStory = () => (
  <Box variant="secondary">
    This is a box
  </Box>
);