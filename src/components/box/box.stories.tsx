import React from 'react';

import { ArgsTable, Description, Title } from '@storybook/addon-docs';

import { DsBox } from './box';

export default {
  title: 'Components/Box',
  component: DsBox,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Building block of layouts. Creates a box-model context
          </Description>
          <ArgsTable of={DsBox} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <DsBox {...args} />;

export const Primary = () => (
  <DsBox>
    <h1>This is a box</h1>
  </DsBox>
);
