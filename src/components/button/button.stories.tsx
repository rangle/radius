import React from 'react';
import { Story,ComponentMeta } from '@storybook/react';
import DsButton, { DsButtonProps } from './button';

export default {
  component: DsButton,
  title: 'Components/Button',
  argTypes:{
    variant:{
      name: "Variant",
      type: { name: 'string', required: false },
      defaultValue: {summary:'primary'},
      description: 'Options for different styles',
      options: [ 'primary', 'secondary'],
      control:{
        type:'radio'
      }
    },
    disabled:{
      name: "Disabled",
      description: 'The button is no longer active',
      defaultValue: {summary:false},
      control:{
        type:'boolean'
      }
    }
  },
  args:{
    variant:'primary',
    disabled: false
  }  
} as ComponentMeta<typeof DsButton>;

const Template: Story<DsButtonProps> = (args) => <DsButton {...args}>Hello Button</DsButton>;

export const Primary = Template.bind({});
Primary.args = {
};


export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Disabled: Story<DsButtonProps> = (args) => <DsButton disabled {...args}>Hello Button</DsButton>;
Secondary.args = {
  variant: 'primary'
};