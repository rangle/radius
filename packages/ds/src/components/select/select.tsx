import React, { forwardRef } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
} from 'styled-system';
import { Box, BoxProps } from '../box';
import { Flex } from '../flex';
import { TypographyFunctionsProps } from '../typography-functions';
import { Text } from '../text';
import { focusRing } from '../shared-styles';

type SelectProps = StyledComponentProps<
  'select',
  any,
  {},
  never
>;

const ContentArea = styled(Text)<
  {} & TypographyFunctionsProps
>`
  display: block;
  width: 100%;
  appearance: none;
  background-color: ${props => props.theme.colors.bg[1]};

  ${compose(space, layout, flexbox, border, position, color)}
`;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => (
    <ContentArea
      as="select"
      variant="body"
      ref={ref}
      {...props}
    />
  )
);