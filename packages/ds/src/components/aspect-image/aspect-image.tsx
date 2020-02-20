import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Image, ImageProps } from '../image';
import { AspectRatio } from '../aspect-ratio';

interface CoverImageProps extends React.ComponentPropsWithRef<any>, ImageProps {
  /** The ratio to apply */
  ratio: number;
}

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
