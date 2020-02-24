import styled from 'styled-components';
import { variant } from 'styled-system';
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
      color: 'accent',
      lineHeight: 'copy',
      textDecoration: 'underline',
      ':hover': {
        color: 'secondary',
      },
    },
    inline: {
      fontFamily: 'body',
      fontSize: 'inherit',
      fontWeight: 'medium',
      color: 'accent',
      lineHeight: 'copy',
      textDecoration: 'underline',
      ':hover': {
        color: 'secondary',
      },
    },
    nav1: {
      fontFamily: 'heading',
      fontSize: 6,
      fontWeight: 'bold',
      color: 'textPrimary',
      lineHeight: 'copy',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
      ':active': {
        textDecoration: 'underline',
      },
    },
    nav2: {
      fontFamily: 'heading',
      fontSize: 7,
      fontWeight: 'bold',
      color: 'textPrimary',
      lineHeight: 'copy',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
      ':active': {
        textDecoration: 'underline',
      },
    },
    nav3: {
      fontFamily: 'heading',
      fontSize: 8,
      fontWeight: 'bold',
      color: 'textPrimary',
      lineHeight: 'copy',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
      ':active': {
        textDecoration: 'underline',
      },
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
