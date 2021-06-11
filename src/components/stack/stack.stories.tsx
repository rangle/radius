import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Stack } from './stack';
import { Box } from '../'

export default {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>An extension of the `Flex` component, that controls spacing between its children. For more context, see [Margin considered harmful](https://mxstbr.com/thoughts/margin)</Description>
          <Props of={Stack} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <Stack {...args} />;

export const Horizontal = () => (
  <Stack bg="secondary">
    <Box bg="ui.primary" width={3} height={3} />
    <Box bg="ui.primary" width={3} height={3} />
    <Box bg="ui.primary" width={3} height={3} />
    <Box bg="ui.primary" width={3} height={3} />
  </Stack>
)

export const Vertical = () => (
  <Stack bg="bg.secondary" axis="vertical">
    <Box bg="ui.primary" width={3} height={3} />
    <Box bg="ui.primary" width={3} height={3} />
    <Box bg="ui.primary" width={3} height={3} />
    <Box bg="ui.primary" width={3} height={3} />
  </Stack>
)

export const Spacing = () => (
  <Stack bg="bg.secondary" space={[4, 5, 6]}>
    <Box bg="ui.primary" width={3} height={3} />
    <Box bg="ui.primary" width={3} height={3} />
    <Box bg="ui.primary" width={3} height={3} />
    <Box bg="ui.primary" width={3} height={3} />
  </Stack>  
)

export const Alignment = () => (
  <Stack axis="vertical">
    <Stack bg="bg.secondary" alignment="start">
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
    </Stack>
    <Stack bg="bg.secondary" alignment="center">
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
    </Stack>
    <Stack bg="bg.secondary" alignment="end">
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
    </Stack>
  </Stack>
)

export const Distribution = () => (
  <Stack axis="vertical">
    <Stack bg="bg.secondary" distribution="start" height={3}>
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
    </Stack>
    <Stack bg="bg.secondary" distribution="center" height={3}>
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
    </Stack>
    <Stack bg="bg.secondary" distribution="end" height={3}>
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
      <Box bg="ui.primary" width={2} height={2} />
    </Stack>
  </Stack>
)
