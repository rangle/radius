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

type HeadingProps = {
  variant: 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5';
} & SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  TypographyProps;

const defaultHeadingStyles = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  lineHeight: 'title',
  color: 'text',
};

const headingVariant = variant({
  variants: {
    'heading-1': {
      fontSize: [2, 1, 0, 0],
      ...defaultHeadingStyles,
    },
    'heading-2': {
      fontSize: [3, 2, 1, 1],
      ...defaultHeadingStyles,
    },
    'heading-3': {
      fontSize: [4, 3, 2, 2],
      ...defaultHeadingStyles,
    },
    'heading-4': {
      fontSize: [5, 4, 3, 3],
      ...defaultHeadingStyles,
    },
    'heading-5': {
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
