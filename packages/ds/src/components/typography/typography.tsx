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

type TypeProps = SpaceProps &
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

const textVariant = variant({
  variants: {
    primary: {
      color: 'text',
      mb: 3,
      p: 3,
      fontSize: 3,
    },
    secondary: {
      color: 'text',
      mb: 4,
      p: 4,
      fontSize: 4,
    },
  },
});

export const Text = styled.p<TypeProps & { variant: 'primary' | 'secondary' }>`
  ${textVariant}
  ${typographyFunctions}
`;

Text.defaultProps = {
  fontFamily: 'body',
};
