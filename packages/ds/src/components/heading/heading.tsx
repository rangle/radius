import styled from 'styled-components';
import {
  variant,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  TypographyProps,
} from 'styled-system';
import { typographyFunctions } from '../typography';

type HeadingProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  TypographyProps & {
    variant: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small';
  };

const defaultHeadingStyles = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  lineHeight: 'title',
  color: 'text',
};

const headingVariant = variant({
  variants: {
    'extra-large': {
      fontSize: [2, 1, 0, 0],
      ...defaultHeadingStyles,
    },
    large: {
      fontSize: [3, 2, 1, 1],
      ...defaultHeadingStyles,
    },
    medium: {
      fontSize: [4, 3, 2, 2],
      ...defaultHeadingStyles,
    },
    small: {
      fontSize: [5, 4, 3, 3],
      ...defaultHeadingStyles,
    },
    'extra-small': {
      fontSize: [6, 5, 4, 4],
      ...defaultHeadingStyles,
    },
  },
});

export const Heading = styled.h1`
  ${headingVariant}
  ${typographyFunctions}
` as React.FC<HeadingProps>;

Heading.defaultProps = {
  fontFamily: 'heading',
};
