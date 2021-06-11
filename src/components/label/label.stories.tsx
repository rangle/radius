import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Label } from './label';
import { Icons } from '../';

export default {
  title: 'Components/Forms/Label',
  component: Label,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Form checkbox input component with a label wrapper</Description>
          <Props of={Label} />
        </>
      ),
    },
  },
};

export const Default = (args: any) => <Label {...args}>Label</Label>

export const MandatoryAdornment = () => <Label required>Required</Label>

export const TextAdornment = () => (
  <>
    <Label adornment="(optional)" mb={4}>Field Label</Label> <br/>
    <Label adornment="(more info)" required>Field Label</Label>
  </>
)

export const FlexibleAdornment = () => <Label adornment={<Icons.Info color="brand.primary" fontSize={2} />}>Field Label</Label>
