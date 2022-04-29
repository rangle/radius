import React from 'react';

import { ArgsTable, Description, Title } from '@storybook/addon-docs';

import DsBox from './box';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof DsBox>;

const Template: ComponentStory<typeof DsBox> = (args) => (
  <DsBox {...args}>{args.children}</DsBox>
);

export const Box = Template.bind({});
Box.args = {
  children: <h1>This is a box</h1>,
};
