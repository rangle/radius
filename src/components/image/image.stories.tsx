import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Image } from './image';
import sampleImg from '../../imgs/img.png';
import userImg from '../../imgs/user.png';

export default {
  title: 'Components/Image',
  component: Image,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Building block of layouts. Creates a box-model context</Description>
          <Props of={Image} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <Image {...args} src={sampleImg} />;

export const Avatar = () => <Image src={userImg} variant="avatar" />;
