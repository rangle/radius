import React from 'react';
import { Story, Meta } from '@storybook/react';
import DsTag, { DsTagProps } from './tag';

export default {
  component: DsTag,
  title: 'Components/Tag',
} as Meta;

const Template: Story<DsTagProps> = (args) => <DsTag {...args}>Tag</DsTag>;

export const PrimarySolid = Template.bind({});
PrimarySolid.args = {
  label: 'Primary Solid'
};

export const SecondarySolid = Template.bind({});
SecondarySolid.args = {
  type: 'secondary',
  label: 'Secondary Solid'
};

export const ErrorSolid = Template.bind({});
ErrorSolid.args = {
  type: 'error',
  label: 'Error Solid'
};

export const SuccessSolid = Template.bind({});
SuccessSolid.args = {
  type: 'success',
  label: 'Success Solid'
};

export const AlertSolid = Template.bind({});
AlertSolid.args = {
  type: 'alert',
  label: 'Alert Solid'
};


export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  variant: 'outline',
  label: 'Primary Outline'
};


export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  type: 'secondary',
  variant: 'outline',
  label: 'Secondary Outline'
};

export const ErrorOutline = Template.bind({});
ErrorOutline.args = {
  type: 'error',
  variant: 'outline',
  label: 'Error Outline'
};

export const SuccessOutline = Template.bind({});
SuccessOutline.args = {
  type: 'success',
  variant: 'outline',
  label: 'Success Outline'
};

export const AlertOutline = Template.bind({});
AlertOutline.args = {
  type: 'alert',
  variant: 'outline',
  label: 'Alert Outline'
};
