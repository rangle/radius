import React, { forwardRef, useState } from 'react';
import { StyledComponentProps } from 'styled-components';
import { Box, Text } from '../';
import { TypographyFunctionsProps } from '../typography-functions';

type TextAreaProps = StyledComponentProps<
  'textarea',
  any,
  {
    placeholder?: string,
    maxCharacters?: number
  } & TypographyFunctionsProps,
  never
>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({maxCharacters, placeholder}, ref) => {
    const [characterCount, setCharacterCount] = useState(0)
    return (
    <Box>
      <Box
        as="textarea"
        placeholder={placeholder}
        style={{ resize: 'vertical' }}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCharacterCount(e.target.value.length)}
      />
      {maxCharacters ? <Text variant="hint">{`${characterCount}/${maxCharacters}`}</Text> : null}
    </Box>
  )}
)

TextArea.defaultProps = {
  placeholder: "",
  maxCharacters: false
}