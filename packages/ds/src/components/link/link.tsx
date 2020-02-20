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

type LinkProps = {
  variant: 'inline' | 'default' | 'nav-1' | 'nav-2' | 'nav-3';
} & SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  TypographyProps;

export const linkFunctions = compose(
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  typography
);

const linkVariants = variant({
  variants: {
    default: {
      fontFamily: 'body',
      fontSize: 7,
      fontWeight: 'medium',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: '--accent-colour',
    },
    inline: {
      fontFamily: 'body',
      fontSize: 'inherit',
      fontWeight: 'medium',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: '--accent-colour',
    },
    'nav-1': {
      fontFamily: 'heading',
      fontSize: 6,
      fontWeight: 'bold',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: '--text-primary-colour',
    },
    'nav-2': {
      fontFamily: 'heading',
      fontSize: 7,
      fontWeight: 'bold',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: '--text-primary-colour',
    },
    'nav-3': {
      fontFamily: 'heading',
      fontSize: 8,
      fontWeight: 'bold',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: '--text-primary-colour',
    },
  },
});

export const Link = styled.a<LinkProps>`
  ${linkVariants}
  ${linkFunctions}
`;
