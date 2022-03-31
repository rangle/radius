import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import DsTag, { DsTagProps } from './tag';

export default {
  component: DsTag,
  title: 'Components/Tag',
  argTypes:{
    type:{
      name: "Type",
      type: { name: 'string', required: false },
      defaultValue: {summary:'primary'},
      description: 'Controls the style state, error, success, alert',
      options: [ 'primary', 'secondary', 'error', 'success', 'alert'],
      control:{
        type:'select'
      }
    },
    variant:{
      name: "Variant",
      type: { name: 'string', required: false },
      defaultValue: {summary:'solid'},
      description: 'Options for different styles',
      options: [ 'solid', 'outline'],
      control:{
        type:'radio'
      }
    }
  },
  args:{
    type: 'primary',
    variant: 'solid'

  }
} as ComponentMeta<typeof DsTag>;

const Template: Story<DsTagProps> = (args) => <DsTag {...args}>Tag</DsTag>;

export const PrimarySolid = Template.bind({});
PrimarySolid.args = {};

export const SecondarySolid = Template.bind({});
SecondarySolid.args = {
  type: 'secondary'
};

export const ErrorSolid = Template.bind({});
ErrorSolid.args = {
  type: 'error'
};

export const SuccessSolid = Template.bind({});
SuccessSolid.args = {
  type: 'success'
};

export const AlertSolid = Template.bind({});
AlertSolid.args = {
  type: 'alert'
};


export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  variant: 'outline'
};


export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  type: 'secondary',
  variant: 'outline'
};

export const ErrorOutline = Template.bind({});
ErrorOutline.args = {
  type: 'error',
  variant: 'outline'
};

export const SuccessOutline = Template.bind({});
SuccessOutline.args = {
  type: 'success',
  variant: 'outline'
};

export const AlertOutline = Template.bind({});
AlertOutline.args = {
  type: 'alert',
  variant: 'outline'
};
