import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { TextArea } from './text-area';
import { Box } from '../';

export default {
  title: 'Components/Forms/TextArea',
  component: TextArea,
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
          <Description>TextArea component for forms. Character count can be turn off by not setting `maxCharacters` prop.</Description>
          <Props of={TextArea} />
        </>
      ),
    },
  },
};

export const Basic = () => (
  <Box>
    <TextArea placeholder="Tell us your thoughts" maxCharacters={100} />
    <TextArea value="Very happy with the purchase" maxCharacters={100} />
  </Box>
);

export const Disabled = () => (
  <Box>
    <TextArea
      disabled
      value=""
      placeholder="Tell us your thoughts"
      maxCharacters={100}
    />
    <TextArea
      disabled
      value="Very happy with the purchase"
      maxCharacters={100}
    />
  </Box>
);

export const ReadOnly = () => (
  <Box>
    <TextArea
      readOnly={true}
      value=""
      placeholder="Tell us your thoughts"
      maxCharacters={100}
    />
    <TextArea
      readOnly={true}
      value="Very happy with the purchase"
      maxCharacters={100}
    />
  </Box>
);

export const Error = () => (
  <Box>
    <TextArea
      error
      aria-invalid="true"
      placeholder="Tell us your thoughts"
      maxCharacters={100}
    />
    <TextArea
      error
      aria-invalid="true"
      value="Very happy with the purchase"
      maxCharacters={100}
    />
  </Box>
);

// TextArea component for forms. Character count can be turn off by not setting `maxCharacters` prop.
