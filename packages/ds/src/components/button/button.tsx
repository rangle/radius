import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space,
  variant,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system';
import { Box, BoxProps, Flex, Spinner } from '../.';

export type ButtonProps =
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  {
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    loading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'transparent';
  };

const defaultButtonStyles = {
  position: 'relative',
  fontFamily: 'heading',
  fontSize: 2,
  lineHeight: 'title',
  borderRadius: 0,
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 3,
  mx: 2,
  mb: 3,
  '-webkit-appearance': 'button',
  '-moz-appearance': 'button',
  '&:focus': {
    outline: 'none',
  }
};

const buttonVariants = variant({
  variants: {
    primary: {
      ...defaultButtonStyles,
      bg: 'brand.primary',
      color: 'text.inverse',
      borderColor: 'transparent',
      ' svg': {
        color: 'text.inverse'
      },
      '&:hover': {
        backgroundColor: 'highlights.primaryHighlight'
      },
      '&:active': {
        backgroundColor: 'highlights.primaryExtraHighlight'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'bg.disabled',
        borderColor: 'bg.disabled'
      }
    },
    secondary: {
      ...defaultButtonStyles,
      bg: 'bg.1',
      color: 'brand.primary',
      borderColor: 'brand.primary',
      ' svg': {
        color: 'brand.primary'
      },
      '&:hover': {
        borderColor: 'highlights.primaryHighlight'
      },
      '&:active': {
        borderColor: 'highlights.primaryExtraHighlight'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'bg.1',
        borderColor: 'bg.disabled',
      },
    },
    transparent: {
      ...defaultButtonStyles,
      bg: 'transparent',
      color: 'brand.primary',
      borderColor: 'transparent',
      ' svg': {
        color: 'brand.primary'
      },
      '&:hover': {
        backgroundColor: 'highlights.bgHighlight'
      },
      '&:active': {
        backgroundColor: 'highlights.bgHighlight'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'bg.disabled',
        borderColor: 'bg.disabled'
      }
    }
  },
});

const ButtonIcon = styled(Box)<BoxProps & { disabled?: boolean }>`
  display: inline-block;
  width: ${props => props.theme.fontSizes[4]};
  height: ${props => props.theme.fontSizes[4]};
  svg {
    position: absolute;
    display: block;
    font-size: ${props => props.theme.fontSizes[4]};
  }
`;

const StyledButton = styled.button<ButtonProps>(
  compose(space, layout, flexbox, border, position),
  buttonVariants
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { mb, mt, mx, my, ml, mr, leftIcon, rightIcon, disabled, loading, children, ...props },
    ref
  ) => (
      <StyledButton
        ref={ref}
        py={2}
        disabled={disabled}
        loading={loading}
        {...props}
        mx={mx}
        my={my}
        mb={mb}
        mt={mt}
        ml={ml}
        mr={mr}        
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          position="absolute"
          width="100%"
          left="0"
        >
          { loading && ( <Spinner size={4}/> ) }
        </Flex>
        <Flex
          alignItems="center"
          position="relative"
          justifyContent="center"
          opacity={loading ? 0: 1}
        >
          { leftIcon && ( <ButtonIcon disabled={disabled} mr={2}> {leftIcon} </ButtonIcon> )}
          { children }
          { rightIcon && ( <ButtonIcon disabled={disabled} ml={2}> {rightIcon} </ButtonIcon> )}
        </Flex>
      </StyledButton>
  )
);

Button.defaultProps = {
  variant: 'primary'
};
