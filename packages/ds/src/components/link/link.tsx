import styled from 'styled-components';
import {
  variant
} from 'styled-system';
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from '../typography-functions';

type LinkProps = {
  variant: 'inline' | 'default' | 'nav-1' | 'nav-2' | 'nav-3';
} & TypographyFunctionsProps;

const linkVariants = variant({
  variants: {
    default: {
      fontFamily: 'body',
      fontSize: 7,
      fontWeight: 'medium',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: 'accent',
    },
    inline: {
      fontFamily: 'body',
      fontSize: 'inherit',
      fontWeight: 'medium',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: 'accent',
    },
    nav1: {
      fontFamily: 'heading',
      fontSize: 6,
      fontWeight: 'bold',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: 'textPrimary',
    },
    nav2: {
      fontFamily: 'heading',
      fontSize: 7,
      fontWeight: 'bold',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: 'textPrimary',
    },
    nav3: {
      fontFamily: 'heading',
      fontSize: 8,
      fontWeight: 'bold',
      lineHeight: 'copy',
      textDecoration: 'underline',
      color: 'textPrimary',
    },
  },
});

export const Link = styled.a<LinkProps>`
  ${linkVariants}
  ${typographyFunctions}
`;

Link.defaultProps = {
  variant: 'default',
};