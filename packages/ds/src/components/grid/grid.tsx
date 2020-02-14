import styled from 'styled-components';
import { grid, GridProps } from 'styled-system';
import { Box, BoxProps } from '../box';

type GridComponentProps = BoxProps & GridProps;

export const Grid = styled(Box)(
  {
    display: 'grid',
  },
  grid
) as React.FC<GridComponentProps>;
