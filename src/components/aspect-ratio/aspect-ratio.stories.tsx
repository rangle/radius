import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { AspectRatio } from './aspect-ratio';
import { Heading } from '../heading';

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Extension of the `Box` component that maintains content within a desired ratio.</Description>
          <Props of={AspectRatio} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <AspectRatio
    {...args}
      ratio={16/9}
      bg="brand.primary"
      p={3}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Heading variant="heading-1" color="brand.muted">Aspect Ratio</Heading>
    </AspectRatio>;
