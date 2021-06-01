import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  typography,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  TypographyProps,
} from 'styled-system';

export type TypographyFunctionsProps = SpaceProps &
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