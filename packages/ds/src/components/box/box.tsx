import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  grid,
  border,
  position,
  color,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(space, color, layout, flexbox, border, position, grid)
) as React.FC<BoxProps>;