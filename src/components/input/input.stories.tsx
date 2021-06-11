import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Input } from './input';
import { Box, Icons } from '../';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: {
    docs: {
      a11y: {
        config: {
          rules: [{ id: 'label', enabled: false }],
        },
      },
      page: () => (
        <>
          <Title />
          <Description>Form input component</Description>
          <Props of={Input} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <Input {...args} />;

export const General = () => (
  <Box>
    <Input placeholder="Enter first name" mb={3} />
    <Input placeholder="Enter first name" value="David" />
  </Box>
);

export const Default = () => (
  <Box>
    <Input placeholder="Placeholder Text" mb={4} />
    <Input
      placeholder="Placeholder Text"
      leftIcon={<Icons.Search aria-hidden />}
      mb={4}
    />
    <Input
      placeholder="Placeholder Text"
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
      mb={4}
    />
    <Input
      placeholder="Placeholder Text"
      leftIcon={<Icons.Search aria-hidden />}
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
      mb={4}
    />
    <Input
      value="Inputted text"
      leftIcon={<Icons.Search aria-hidden />}
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
      mb={4}
    />
  </Box>
)

export const Disabled = () => (
  <Box>
    <Input disabled placeholder="Placeholder Text" mb={4} />
    <Input
      disabled
      placeholder="Placeholder Text"
      leftIcon={<Icons.Search aria-hidden />}
      mb={4}
    />
    <Input
      disabled
      placeholder="Placeholder Text"
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
      mb={4}
    />
    <Input
      disabled
      placeholder="Placeholder Text"
      leftIcon={<Icons.Search aria-hidden />}
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
      mb={4}
    />
    <Input
      disabled
      value="Inputted text"
      leftIcon={<Icons.Search aria-hidden />}
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
    />
  </Box>
)

export const Error = () => (
  <Box>
    <Input error value="" placeholder="Placeholder Text" mb={4} />
    <Input
      error
      value=""
      placeholder="Placeholder Text"
      leftIcon={<Icons.Search aria-hidden />}
      mb={4}
    />
    <Input
      error
      value=""
      placeholder="Placeholder Text"
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
      mb={4}
    />
    <Input
      error
      value=""
      placeholder="Placeholder Text"
      leftIcon={<Icons.Search aria-hidden />}
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
      mb={4}
    />
    <Input
      error
      value="Inputted text"
      leftIcon={<Icons.Search aria-hidden />}
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
    />
  </Box>
)

export const ReadOnly = () => (
  <Box>
    <Input readOnly={true} value="" placeholder="Placeholder Text" mb={4} />
    <Input
      readOnly={true}
      value=""
      placeholder="Placeholder Text"
      leftIcon={<Icons.Search aria-hidden />}
      mb={4}
    />
    <Input
      readOnly={true}
      value=""
      placeholder="Placeholder Text"
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
      mb={4}
    />
    <Input
      readOnly={true}
      value=""
      placeholder="Placeholder Text"
      leftIcon={<Icons.Search aria-hidden />}
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
      mb={4}
    />
    <Input
      readOnly={true}
      value="Inputted text"
      leftIcon={<Icons.Search aria-hidden />}
      rightIcon={<Icons.Close color="brand.primary" aria-hidden />}
    />
  </Box>
)

export const InlineValidation = () => (
  <Box>
    <Input
      type="email"
      placeholder="Email address"
      value="email@domain.com"
      rightIcon={<Icons.CheckCircle aria-hidden color="ui.success" />}
      mb={3}
    />
    <Input
      placeholder="Email address"
      error
      rightIcon={<Icons.Error aria-hidden color="ui.error" />}
    />
  </Box>
);