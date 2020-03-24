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
import { Icons } from '../icons';
import { focusRing } from '../shared-styles';

const selectTokens = {
  iconSize: 4, // icon size on font-size scale
  y: 2, // padding y
  x: 2, // padding x
  iconRightOffset: 4,
};

type SelectProps = StyledComponentProps<
  'select',
  any,
  {
    /** Icon or ‘Interactive Icon’ adornment to apply to the left of the content area */
    leftIcon?: JSX.Element;
    /** Icon or ‘Interactive Icon’ adornment to apply to the right of the content area */
    rightIcon?: JSX.Element;
    /** Does the input have a validation error */
    error?: Boolean;
  } & TypographyFunctionsProps,
  never
>;

const ContentArea = styled(Text)<
  {
    hasLeftIcon: Boolean;
    hasRightIcon: Boolean;
    error?: Boolean;
  } & TypographyFunctionsProps
>`
  display: block;
  width: 100%;
  appearance: none;

  padding-left: ${props =>
    props.hasLeftIcon
      ? `calc(${props.theme.fontSizes[selectTokens.iconSize]} + ${2 *
          props.theme.space[selectTokens.x]}px)`
      : props.theme.space[selectTokens.x] + 'px'};

  padding-right: ${props =>
    props.hasRightIcon
      ? selectTokens.iconSize + 2 * props.theme.space[selectTokens.x]
      : props.theme.space[selectTokens.x]}px;

  border-color: ${props =>
    props.error
      ? props.theme.colors.ui.error
      : props.theme.colors.ui.secondary};

  &::placeholder {
    color: ${props => props.theme.colors.text.secondary};
  }

  &:hover {
    border-color: ${props =>
      props.error
        ? props.theme.colors.ui.error
        : props.theme.colors.ui.primary};
  }

  &:focus {
    ${focusRing}

    border-color: ${props => props.theme.colors.ui.primary};

    &::placeholder {
      color: transparent;
    }
  }

  &:disabled {
    -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */
    opacity: 1; /* correct opacity on iOS */
    color: ${props => props.theme.colors.text.disabled};
    background-color: ${props => props.theme.colors.ui.disabled};
    border-color: ${props => props.theme.colors.ui.disabled};

    &::placeholder {
      color: ${props => props.theme.colors.text.disabled};
      opacity: 1;
    }
  }

  ${compose(space, layout, flexbox, border, position, color)}
`;

ContentArea.defaultProps = {
  pt: selectTokens.y,
  pb: selectTokens.y,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 0,
  color: 'text.primary',
  bg: 'bg.primary',
  mb: 0,
};

const LeftIcon = styled(Box)<BoxProps & { disabled?: boolean }>`
  position: absolute;

  svg {
    display: block;
    font-size: ${props => props.theme.fontSizes[4]};
    color: ${props =>
      props.disabled
        ? props.theme.colors.text.disabled
        : props.theme.colors.text.primary};
  }
`;

const RightIcon = styled(Box)<
  BoxProps & { disabled?: boolean; readOnly?: boolean; error?: boolean }
>`
  position: absolute;

  svg {
    display: block;
    font-size: ${props => props.theme.fontSizes[4]};
    ${props => props.disabled && { color: props.theme.colors.text.disabled }};
  }
`;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { leftIcon, rightIcon, mb, mt, mx, my, ml, mr, disabled, ...props },
    ref
  ) => (
    <Flex
      alignItems="center"
      position="relative"
      mx={mx}
      my={my}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
    >
      {leftIcon && (
        <LeftIcon left={selectTokens.x} disabled={disabled}>
          {leftIcon}
        </LeftIcon>
      )}
      <ContentArea
        as="select"
        variant="body"
        ref={ref}
        py={2}
        hasLeftIcon={!!leftIcon}
        hasRightIcon={!!rightIcon}
        disabled={disabled}
        aria-invalid={props.error ? 'true' : 'false'}
        {...props}
      />
      {rightIcon && (
        <RightIcon right={selectTokens.iconRightOffset} disabled={disabled}>
          {rightIcon}
        </RightIcon>
      )}
      <RightIcon
        right={selectTokens.x}
        disabled={disabled}
        style={{ pointerEvents: 'none' }}
      >
        <Icons.ExpandMore color="text.primary" aria-hidden />
      </RightIcon>
    </Flex>
  )
);

Select.defaultProps = {
  error: false,
};
