import React, { forwardRef, useState } from 'react';
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
import { Box } from '../box';
import { Text } from '../text';
import { TypographyFunctionsProps } from '../typography-functions';
import { focusRing } from '../shared-styles';

type TextAreaProps = StyledComponentProps<
  'textarea',
  any,
  {
    placeholder?: string;
    maxCharacters?: number | undefined;
    error?: Boolean;
    value?: String;
  } & TypographyFunctionsProps,
  never
>;

const ContentArea = styled(Text)<
  {
    error?: Boolean;
  } & TypographyFunctionsProps
>`
  box-sizing: border-box;
  display: block;
  appearance: none;
  -webkit-appearance: none;
  resize: vertical;
  width: 100%;
  min-height: ${(props: any) => props.theme.sizes[3] + 14}px;
  padding: ${(props: any) => props.theme.space[2]}px;

  border-color: ${(props: any) =>
    props.error
      ? props.theme.colors.ui.error
      : props.theme.colors.ui.secondary};

  &::placeholder {
    color: ${props => props.theme.colors.text.secondary};
    font-size: ${props => props.theme.sizes[1]}px;
    font-weight: normal;
  }

  &:hover {
    border-color: ${props =>
      props.error
        ? props.theme.colors.ui.error
        : props.theme.colors.ui.primary};
  }

  &:focus {
    ${focusRing}

    &::placeholder {
      color: transparent;
    }
  }

  &:-moz-read-only {
    background-color: ${props => props.theme.colors.ui.tertiary};
    border-color: ${props => props.theme.colors.ui.secondary};
  }

  &:read-only {
    background-color: ${props => props.theme.colors.ui.tertiary};
    border-color: ${props => props.theme.colors.ui.secondary};

    &::placeholder {
      color: ${props => props.theme.colors.text.secondary};
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
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 0,
  bg: 'ui.quaternary',
};

export const StyledText = styled(Text)<
  {
    error?: Boolean;
  } & TypographyFunctionsProps
>`
  color: ${props =>
    props.error
      ? props.theme.colors.text.error
      : props.theme.colors.text.secondary};
`;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      maxCharacters,
      placeholder,
      disabled,
      error,
      mb,
      mt,
      mx,
      my,
      ml,
      mr,
      ...props
    },
    ref
  ) => {
    const [characterCount, setCharacterCount] = useState(
      props.value ? props.value.length : 0
    );
    const isError =
      error || (maxCharacters && characterCount > maxCharacters) ? true : false;

    return (
      <Box mx={mx} my={my} mb={mb} mt={mt} ml={ml} mr={mr}>
        <ContentArea
          as="textarea"
          variant="body"
          mb={0}
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setCharacterCount(e.target.value.length)
          }
          error={isError}
          aria-invalid={isError ? 'true' : 'false'}
          {...props}
        />
        {maxCharacters ? (
          <Text
            variant="hint"
            width="100%"
            color={isError ? 'text.error' : 'text.secondary'}
            textAlign="right"
          >
            {`${characterCount}/${maxCharacters}`}
          </Text>
        ) : null}
      </Box>
    );
  }
);

TextArea.defaultProps = {
  error: false,
  placeholder: '',
  maxCharacters: undefined,
};
