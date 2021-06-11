import React from 'react';

import { Props, Description, Title } from '@storybook/addon-docs/blocks';

import { Icons  } from './';
import { Grid, Flex, Text } from '../';

export default {
  title: 'Components/Icons',
  component: Icons,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The build process is configured to transform SVGs into React components, using [SVGR](https://react-svgr.com). The script looks for all `.svg` files in `packages/ds/src/components/icons` and generates a `.tsx` file of the same name. The components support `space`, `color`, `layout` & `typography` styled-system props.
          </Description>
          <Props of={Icons} />
        </>
      ),
    },
  },
};

export const Directory = () => (
  <Grid
    gridTemplateColumns="repeat(auto-fill, minmax(min-content, 30%))"
    gridAutoRows="4rem"
    gridAutoFlow="dense"
    gridGap={3}
    p={3}
    justifyContent="center"
  >
    {Object.keys(Icons).map((name: string) => {
      const Component = Icons[name];
      return (
        <Flex key={name} alignItems="center">
          <Component
            color="text.primary"
            fontSize={6}
            justifySelf="center"
            aria-hidden
          />
          <Text variant="body" ml={2} fontSize={1} color="text.secondary">
            {name}
          </Text>
        </Flex>
      );
    })}
  </Grid>
);

// The components support `space`, `color`, `layout` & `typography` styled-system props.
export const Sizing = () => (
  <>
    <Icons.Loader fontSize={0} mr={2} color="text.primary" aria-hidden />
    <Icons.Loader fontSize={1} mr={2} color="text.primary" aria-hidden />
    <Icons.Loader fontSize={2} mr={2} color="text.primary" aria-hidden />
    <Icons.Loader fontSize={3} mr={2} color="text.primary" aria-hidden />
    <Icons.Loader fontSize={4} mr={2} color="text.primary" aria-hidden />
    <Icons.Loader fontSize={5} mr={2} color="text.primary" aria-hidden />
    <Icons.Loader fontSize={6} mr={2} color="text.primary" aria-hidden />
    <Icons.Loader fontSize={7} mr={2} color="text.primary" aria-hidden />
  </>
)

export const Color = () => (
  <Flex alignItems="center">
    <Icons.CheckboxChecked color="red" mr={2} aria-hidden />
    <Icons.CheckboxChecked color="orange" mr={2} aria-hidden />
    <Icons.CheckboxChecked color="gold" mr={2} aria-hidden />
    <Icons.CheckboxChecked color="green" mr={2} aria-hidden />
    <Icons.CheckboxChecked color="blue" mr={2} aria-hidden />
    <Icons.CheckboxChecked color="indigo" mr={2} aria-hidden />
    <Icons.CheckboxChecked color="violet" mr={2} aria-hidden />
  </Flex>
)

export const Usage = () => <Icons.CheckboxChecked title="checkbox checked" color="text.primary" />

export const Layout = () => <Icons.Loader width={3} height={3} color="text.primary" aria-hidden />

export const Decorative = () => <Icons.RadioChecked color="text.primary" aria-hidden />

export const NonDecorative = () => <Icons.Loader color="text.primary" title="waiting for content to load" />
