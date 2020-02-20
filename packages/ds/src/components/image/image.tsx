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

type ImageComponentProps = { variant: 'default' | 'avatar' } & SpaceProps &
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

export const Image = styled.img(
  compose(space, layout, flexbox, border, position),
  imageVariants
) as React.FC<ImageComponentProps>;

Image.defaultProps = {
  variant: 'default',
};
