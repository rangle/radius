import React from 'react';
import { Story, Meta } from '@storybook/react';
import DsButton, { DsButtonProps } from './button';

export default {
  component: DsButton,
  title: 'Components/Button',
} as Meta;

const Template: Story<DsButtonProps> = (args) => <DsButton {...args}>Hello Button</DsButton>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};


export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Disabled: Story<DsButtonProps> = (args) => <DsButton disabled {...args}>Hello Button</DsButton>;
Secondary.args = {
  variant: 'primary'
};