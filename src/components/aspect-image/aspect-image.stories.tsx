import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { AspectImage } from './aspect-image';
import sampleImg from '../../imgs/img.png';

export default {
  title: 'Components/AspectImage',
  component: AspectImage,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Extension of the `Image` component that constrains the image within a desired ratio.</Description>
          <Props of={AspectImage} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <AspectImage {...args} src={sampleImg} ratio={16 / 9} />;
