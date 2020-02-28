import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { StyledSystemProps } from '../../styled-system-props';
import { Image } from '../image';
import { AspectRatio } from '../aspect-ratio';

type CoverImageProps = StyledSystemProps<
  'img',
  {
    /** The ratio to apply */
    ratio: number;
  } & SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps
>;

const CoverImage = styled(Image)<CoverImageProps>({
  objectFit: 'cover',
  objectPosition: 'center',
});

export const AspectImage = forwardRef<HTMLImageElement, CoverImageProps>(
  ({ ratio, children, ...props }, ref) => (
    <AspectRatio ratio={ratio}>
      <CoverImage ref={ref} {...props} />
    </AspectRatio>
  )
);

AspectImage.defaultProps = {
  ratio: 16 / 9,
};
