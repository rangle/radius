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
};

const textVariants = variant({
  variants: {
    body: {
      ...defaultextStyles,
      fontSize: 7,
    },
    caption: {
      ...defaultextStyles,
      fontSize: 8,
    },
    hint: {
      ...defaultextStyles,
      fontSize: 9,
    },
    label: {
      ...defaultextStyles,
      fontFamily: 'heading',
      fontSize: 8,
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
