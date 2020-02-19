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

type ImageComponentProps =
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  { variant: 'default' | 'avatar' };

const imageVariants = variant({
  variants: {
    default: {
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 999999
    }
  },
});

export const Image = styled.img(
  compose(space, layout, flexbox, border, position),
  imageVariants
) as React.FC<ImageComponentProps>;