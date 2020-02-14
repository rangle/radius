import styled from 'styled-components';
import {
  grid,
  GridProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { Box } from '../box';

type GridComponentProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  GridProps;

export const Grid = styled(Box)(
  {
    display: 'grid',
  },
  grid
) as React.FC<GridComponentProps>;
