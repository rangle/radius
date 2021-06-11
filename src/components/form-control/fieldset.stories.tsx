import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Label, Checkbox, Radio } from '..';
import { FormControl } from '.';

export default {
  title: 'Components/Forms/FormControl/FieldSet',
  component: FormControl.FieldSet,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Form fieldset component, an extension of the `Grid` component, that groups a legend with radios or checkboxes and help & error messages.</Description>
          <Props of={FormControl.FieldSet} />
        </>
      ),
    },
  },
};

export const WithCheckbox = () => (
  <FormControl.FieldSet pl={3} pr={3}>
    <Label as="legend">Legend</Label>
    <Checkbox label="Lorem ipsum dolor sit amet" />
    <Checkbox label="Lorem ipsum dolor sit amet" />
    <Checkbox label="Lorem ipsum dolor sit amet" />
    <Checkbox label="Lorem ipsum dolor sit amet" />
    <FormControl.Hint>Hint text</FormControl.Hint>
    <FormControl.Error>Error text</FormControl.Error>
  </FormControl.FieldSet>
)

export const WithRadio = () => (
  <FormControl.FieldSet pl={3} pr={3}>
    <Label as="legend">Legend</Label>
    <Radio label="Lorem ipsum dolor sit amet" />
    <Radio label="Lorem ipsum dolor sit amet" />
    <Radio label="Lorem ipsum dolor sit amet" />
    <Radio label="Lorem ipsum dolor sit amet" />
    <FormControl.Hint>Hint text</FormControl.Hint>
    <FormControl.Error>Error text</FormControl.Error>
  </FormControl.FieldSet>  
)
