import styled from 'styled-components';
import { grid } from 'styled-system';
import { Box } from '../box';

export const Grid = styled(Box)(
  {
    display: 'grid',
  },
  grid
);
