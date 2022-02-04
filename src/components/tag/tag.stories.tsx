import React from 'react';
import { Story, Meta } from '@storybook/react';
import DsTag, { DsTagProps } from './tag';

export default {
  component: DsTag,
  title: 'Components/Tag',
} as Meta;

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
