import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { StyledSystemProps } from '../../styled-system-props';
import { Text } from '../text';
import { TypographyFunctionsProps } from '../typography-functions';
import { Box } from '../box';

type LabelProps = StyledSystemProps<
  'label',
  {
    /** Apply the mandatory adornment */
    required: boolean;
    /** A custom adornment to apply */
    adornment?: 'required' | string | JSX.Element;
  } & TypographyFunctionsProps
>;

export const StyledLabel = styled(Text)<LabelProps>`
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
