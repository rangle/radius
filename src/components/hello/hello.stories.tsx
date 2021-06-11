import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Hello, Props } from './hello';

const meta: Meta = {
  title: 'Components/Hello',
  component: Hello,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Hello {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Basic = Template.bind({});

Basic.args = {};
