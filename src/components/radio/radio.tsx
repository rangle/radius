import React, { forwardRef } from 'react';
import styled, { css, StyledComponentProps } from 'styled-components';
import { Text } from '../text';
import { Icons } from '../icons';
import { Box, BoxProps } from '../box';
import { focusRing } from '../shared-styles';

const radioIconStyles = css<{ error?: Boolean }>`
  color: ${props =>
    props.error
      ? props.theme.colors.ui.error
      : props.theme.colors.ui.secondary};

  font-size: ${props => props.theme.fontSizes[4]}px;
  margin-right: ${props => props.theme.space[1]}px;

  &:hover {
    color: ${props =>
      props.error
        ? props.theme.colors.ui.error
        : props.theme.colors.ui.primary};
  }

  input:focus ~ & {
    color: ${props =>
      props.error
        ? props.theme.colors.ui.error
        : props.theme.colors.ui.primary};
    ${focusRing}
  }

  input:checked:disabled ~ &,
  input:disabled ~ & {
    color: ${props => props.theme.colors.ui.disabled};
  }

  input:checked ~ & {
    color: ${props =>
      props.error
        ? props.theme.colors.ui.error
        : props.theme.colors.ui.primary};
  }
`;

const RadioUnchecked = styled(Icons.RadioUnchecked)`
  display: block;

  input:checked ~ & {
    display: none;
  }

  ${radioIconStyles}
`;

const RadioChecked = styled(Icons.RadioChecked)`
  display: none;

  input:checked ~ & {
    display: block;
  }

  ${radioIconStyles}
`;

const RadioIcon = (props: any) => (
  <>
    <RadioUnchecked {...props} />
    <RadioChecked {...props} />
  </>
);

export type RadioProps = StyledComponentProps<
  'input',
  any,
  { label: string; error?: Boolean } & BoxProps,
  never
>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { children, label, disabled, error, mb, mt, mx, my, ml, mr, ...props },
    ref
  ) => (
    <Text
      as="label"
      variant="body"
      display="flex"
      alignItems="center"
      color={disabled ? 'text.disabled' : 'text.primary'}
      mx={mx}
      my={my}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
    >
      <Box display="inline-block">
        <Box
          ref={ref}
          as="input"
          type="radio"
          disabled={disabled}
          {...props}
          position="absolute"
          opacity={0}
          zIndex={-1}
          width={1}
          height={1}
          overflow="hidden"
          aria-invalid={error ? 'true' : 'false'}
        />
        <Box
          as={RadioIcon}
          display="inline-block"
          aria-hidden="true"
          disabled={disabled}
          error={error}
        />
      </Box>
      {label}
    </Text>
  )
);

Radio.defaultProps = {};
