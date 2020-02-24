import styled from 'styled-components';
import { variant } from 'styled-system';
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from '../typography-functions';

type TextProps = {
  variant: 'body' | 'caption' | 'hint' | 'label';
} & TypographyFunctionsProps;

const defaultextStyles = {
  fontFamily: 'body',
  fontWeight: 'regular',
  lineHeight: 'copy',
  color: 'text',
  mt: 0,
  mb: 3,
};

const textVariants = variant({
  variants: {
    body: {
      ...defaultextStyles,
      fontSize: 2,
    },
    caption: {
      ...defaultextStyles,
      fontSize: 1,
    },
    hint: {
      ...defaultextStyles,
      fontSize: 0,
    },
    label: {
      ...defaultextStyles,
      fontFamily: 'heading',
      fontSize: 1,
      fontWeight: 'medium',
    },
  },
});

export const Text = styled.p<TextProps>`
  ${textVariants}
  ${typographyFunctions}
`;

Text.defaultProps = {
  fontFamily: 'body',
};
