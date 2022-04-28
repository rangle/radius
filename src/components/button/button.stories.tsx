import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DsButton, DsButtonProps } from './button';

export default {
  component: DsButton,
  title: 'Components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/RqENxZWAzGiEWM7COch1Sc/Radius-Design-Kit?node-id=1%3A6',
    },
  },
} as ComponentMeta<typeof DsButton>;

const Template: ComponentStory<typeof DsButton> = (args: DsButtonProps) => (
  <DsButton {...args}>Hello Button</DsButton>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  label: 'Primary Button',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
  size: 'medium',
  label: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  size: 'medium',
  label: 'Primary Disabled Button',
};
