import styled from 'styled-components';
import {
  compose,
  variant,
  space,
  layout,
  flexbox,
  border,
  position,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

export type ImageProps = { variant?: 'default' | 'avatar' } & SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

const imageVariants = variant({
  variants: {
    default: {},
    avatar: {
      width: 3,
      height: 3,
      borderRadius: 999999,
    },
  },
});

export const Image = styled.img<ImageProps>(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  compose(space, layout, flexbox, border, position),
  imageVariants
);

Image.defaultProps = {
  variant: 'default',
};
