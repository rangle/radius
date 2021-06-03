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
  /** HTML element to render */
  as?: 'label' | 'legend';
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

StyledLabel.defaultProps = {
  pl: 0,
  pr: 0,
};

export type LabelProps = StyledComponentProps<
  'label',
  any,
  StyledLabelProps,
  never
>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, as, ...props }, ref) => (
    <StyledLabel
      as={as}
      variant="label"
      ref={ref}
      color="text.primary"
      {...props}
    >
      {children}
      {props.adornment && (
        <Box
          display="inline-flex"
          alignItems="center"
          color="text.secondary"
          ml={1}
        >
          {props.adornment}
        </Box>
      )}
    </StyledLabel>
  )
);

Label.defaultProps = {
  required: false,
  as: 'label',
};
