import React, { forwardRef } from 'react';
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { StyledSystemProps } from '../../styled-system-props';
import { Box } from '../box';

type AspectRatioProps = StyledSystemProps<
  'div',
  {
    /** The ratio to apply */
    ratio: number;
  } & SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps
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
  ratio: 16 / 9,
};
