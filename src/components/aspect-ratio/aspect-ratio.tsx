import React, { forwardRef } from 'react';
import { StyledComponentProps } from 'styled-components';
import { Box, BoxProps } from '../box';

type AspectRatioProps = StyledComponentProps<
  'div',
  any,
  {
    /** The ratio to apply */
    ratio?: number;
  } & BoxProps,
  never
>;

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 16 / 9, children, ...props }, ref) => (
    <Box ref={ref} position="relative" overflow="hidden">
      <Box width="100%" height={0} pb={100 / ratio + '%'} />
      <Box {...props} position="absolute" top={0} right={0} bottom={0} left={0}>
        {children}
      </Box>
    </Box>
  )
);

AspectRatio.defaultProps = {
  ratio: 1 / 1,
};
