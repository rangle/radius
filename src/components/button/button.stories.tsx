import { ComponentMeta, ComponentStory } from '@storybook/react';
import DsButton from './button';

export default {
  component: DsButton,
  title: 'Components/Button',
  argTypes: {
    variant: {
      name: 'Variant',
      type: { name: 'string', required: false },
      description: 'Options for different styles',
      options: ['primary', 'secondary', 'disabled'],
      control: {
        type: 'radio',
      },
    },
    size: {
      name: 'Size',
      type: { name: 'string', required: true },
      description: 'Options for sizes',
      options: ['small', 'medium', 'large'],
      control: 'radio',
    },
    disabled: {
      type: { name: 'string', required: false },
      name: 'Disabled',
      description: 'The button is no longer active',
      control: {
        type: 'toggle',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'small',
    disabled: false,
  },
} as ComponentMeta<typeof DsButton>;

const Template: ComponentStory<typeof DsButton> = (args) => (
  <DsButton {...args}>Hello Button</DsButton>
);

Template.args = {
  ...Template.args,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
};

export const Disabled: ComponentStory<typeof DsButton> = Template.bind({});
Disabled.args = {
  variant: 'primary',
  size: 'large',
  disabled: true,
};
