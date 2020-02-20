import React, { forwardRef } from 'react';
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { Box } from '../box';

type AspectRatioProps = {
  /** The ratio to apply */
  ratio: number;
} & SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 16 / 9, ...props }, ref) => (
    <Box ref={ref} position="relative" overflow="hidden">
      <Box width="100%" height={0} pb={100 / ratio + '%'} />
      <Box
        {...props}
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
    </Box>
  )
);

AspectRatio.defaultProps = {
  ratio: 16 / 9,
};
