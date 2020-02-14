import styled from 'styled-components';
import { Box, BoxProps } from '../box';

type FlexProps = BoxProps;

export const Flex = styled(Box)({
  display: 'flex',
}) as React.FC<FlexProps>;
