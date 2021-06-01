import styled from 'styled-components';
import {
  grid,
  GridProps as _GridProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { Box } from '../box';

export type GridProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  _GridProps;

export const Grid = styled(Box)<GridProps>(
  {
    display: 'grid',
  },
  grid
);
