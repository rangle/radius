import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  variant,
  typography,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  TypographyProps,
} from 'styled-system';

type TextProps = {
  variant: 'body' | 'caption' | 'hint' | 'label';
} & SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  TypographyProps;

export const typographyFunctions = compose(
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  typography
);

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
