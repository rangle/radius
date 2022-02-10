import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import DsBox from './box';

export default {
  title: 'Components/Box',
  component: DsBox,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Building block of layouts. Creates a box-model context</Description>
          <Props of={DsBox} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <DsBox {...args} />;

export const Primary = () => (
  <DsBox>
    <h1>
      This is a box
    </h1>
  </DsBox>
)
