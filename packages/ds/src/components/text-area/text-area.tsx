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
import { Box, Text } from '../';
import { TypographyFunctionsProps } from '../typography-functions';
import { focusRing } from '../shared-styles';

type TextAreaProps = StyledComponentProps<
  'textarea',
  any,
  {
    placeholder?: string,
    maxCharacters?: number | undefined,
    error?: Boolean;
  } & TypographyFunctionsProps,
  never
>;

const ContentArea = styled(Text)<
{
  error?: Boolean;
} & TypographyFunctionsProps
>`
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
    font-wight: normal;
  }

  &:hover {
    border-color: ${props => props.theme.colors.ui.primary};
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
`

ContentArea.defaultProps = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 0,
  bg: 'ui.quaternary',
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({maxCharacters, placeholder, disabled, error, ...props}, ref) => {
    const [characterCount, setCharacterCount] = useState(0);

    return (
      <Box width={5}>
        <ContentArea
          as="textarea"
          variant="body"
          mb={0}
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCharacterCount(e.target.value.length)}
          error={error || (maxCharacters && characterCount > maxCharacters) ? true : false}
          {...props}
        />
        {maxCharacters ?
          <Text
            variant="hint"
            pl={3}
            width="100%"
            color={error ? "text.error" : "text.secondary"}
            textAlign="right"
          >
              {`${characterCount}/${maxCharacters}`}
          </Text>
          : null}
      </Box>
    )
  }
)

TextArea.defaultProps = {
  error: false,
  placeholder: "",
  maxCharacters: undefined
}