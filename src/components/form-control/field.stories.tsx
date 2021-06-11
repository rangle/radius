import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Label, Input, TextArea, Select } from '../';
import { FormControl } from '.';

export default {
  title: 'Components/Forms/FormControl/Field',
  component: FormControl.Field,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Form field component, an extension of the `Grid` component, that groups a label, an input, help and error messaged.</Description>
          <Props of={FormControl.Field} />
        </>
      ),
    },
  },
};

export const WithInput = () => (
  <FormControl.Field>
    <Label required>
      Label text
    </Label>
    <Input
      placeholder="Placeholder Text"
    />
    <FormControl.Hint>Hint text</FormControl.Hint>
    <FormControl.Error>Error text</FormControl.Error>
  </FormControl.Field>
)

export const WithTextArea = () => (
  <FormControl.Field>
    <Label required>
      Label text
    </Label>
    <TextArea
      placeholder="Tell us your thoughts"
      maxCharacters={100}
    />
    <FormControl.Hint>Hint text</FormControl.Hint>
    <FormControl.Error>Error text</FormControl.Error>
  </FormControl.Field>
)

export const WithSelect = () => (
  <FormControl.Field>
    <Label>
      Legend
    </Label>
    <Select
      defaultValue="Lorem ipsum dolor sit amet"
      >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
    </Select>
    <FormControl.Hint>Hint text</FormControl.Hint>
    <FormControl.Error>Error text</FormControl.Error>
  </FormControl.Field>
)