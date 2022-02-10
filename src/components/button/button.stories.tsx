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
  variant: 'primary',
  size: 'medium',
  label: 'Primary Button'
};


export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  label: 'Secondary Button'
};

export const Disabled: Story<DsButtonProps> = (args) => <DsButton {...args}>Hello Button</DsButton>;
Disabled.args = {
  variant: 'primary',
  disabled: true,
  size: 'medium',
  label: 'Primary Disabled Button'
};