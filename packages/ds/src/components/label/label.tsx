import React, { forwardRef } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { TypographyFunctionsProps } from '../typography-functions';
import { Text } from '../text';
import { Box } from '../box';

type StyledLabelProps = {
  /** Apply the mandatory adornment */
  required?: boolean;
  /** A custom adornment to apply */
  adornment?: 'required' | string | JSX.Element;
} & TypographyFunctionsProps;

const StyledLabel = styled(Text)<StyledLabelProps>`
  display: flex;
  width: 100%;
  align-items: center;

  ${props =>
    props.required &&
    `&:after {
      content: "*";
      color: ${props.theme.colors.brand.secondary};
    }`}
`;

export type LabelProps = StyledComponentProps<
  'label',
  any,
  StyledLabelProps,
  never
>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...props }, ref) => (
    <StyledLabel
      as="label"
      variant="label"
      ref={ref}
      color="text.primary"
      mb={2}
      {...props}
    >
      {children}
      <Box display="inherit" color="text.secondary" ml={1}>
        {props.adornment}
      </Box>
    </StyledLabel>
  )
);

Label.defaultProps = {
  required: false,
};
