import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Select } from './select';
import { Box, Icons } from '../';

export default {
  title: 'Components/Forms/Select',
  component: Select,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'label', enabled: false }],
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Description>When using this component, the menu options that you want `Select` component to display should be nested in using `option` tag. Specify `defaultValue` prop if you want `Select` to display an option other than the first one. If not specified, `Select` will display the first option by default.</Description>
          <Props of={Select} />
        </>
      ),
    },
  },
};

export const Basic = () => (
  <Box>
    <Select
      defaultValue="Select a city"
      name="city"
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
    <Select
      defaultValue="Select a city"
      leftIcon={<Icons.Place color="text.primary" aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
    <Select
      defaultValue="Select a city"
      rightIcon={<Icons.Info color="text.primary" aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
    <Select
      defaultValue="Select a city"
      leftIcon={<Icons.Place color="text.primary" aria-hidden />}
      rightIcon={<Icons.Info color="text.primary" aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
  </Box>
);

export const Disabled = () => (
  <Box>
    <Select
      disabled
      defaultValue="Select a city"
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
    <Select
      disabled
      defaultValue="Select a city"
      leftIcon={<Icons.Place aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
  </Box>
)

export const Error = () => (
  <Box>
    <Select
      error={true}
      defaultValue="Select a city"
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
    <Select
      error
      defaultValue="Select a city"
      leftIcon={<Icons.Place color="text.primary" aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
    <Select
      error
      defaultValue="Select a city"
      rightIcon={<Icons.Error aria-hidden color="ui.error" />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
    <Select
      error
      defaultValue="Select a city"
      leftIcon={<Icons.Place color="text.primary" aria-hidden />}
      rightIcon={<Icons.Error aria-hidden color="ui.error" />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </Select>
  </Box>
)