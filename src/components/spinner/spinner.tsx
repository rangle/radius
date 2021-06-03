import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Icons } from '../icons';
import { Box, BoxProps } from '../box';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotatingLoader = styled(Icons.Loader)`
  animation: ${spin} 3s linear infinite;
`;

export interface SpinnerProps extends BoxProps {
  block: boolean;
  title: string;
  color?: string;
  size?: number;
}

export const Spinner = ({
  block,
  title,
  size,
  color,
  ...props
}: SpinnerProps) => (
  <Box display={block ? 'block' : 'inline-block'} {...props}>
    <RotatingLoader title={title} fontSize={size} color={color} />
  </Box>
);

Spinner.defaultProps = {
  block: true,
  title: 'Loading…',
  color: 'ui.primary',
};
