import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Button,  } from './button';
import { Box, Icons, Flex } from '../';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Props of={Button} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <Button {...args} />;
Basic.args = { children: 'Label' };

export const All = () => (
  <>
        <Box>
          <Flex mb={3}>
            <Button variant="primary" mr={3}>
              Primary
            </Button>
            <Button variant="primary" mr={3} disabled>
              Disabled
            </Button>
            <Button variant="primary" isLoading>
              Loading
            </Button>
          </Flex>
          <Flex mb={3}>
            <Button variant="primary" mr={3}>
              Flexible Width
            </Button>
            <Button variant="primary" width={200}>
              Fixed Width
            </Button>
          </Flex>
          <Flex mb={3}>
            <Button
              variant="primary"
              leftIcon={<Icons.Visibility aria-hidden />}
              mr={3}>
              Left Icon
            </Button>
            <Button
              variant="primary"
              mr={3}
              rightIcon={<Icons.Visibility aria-hidden />}>
              Right Icon
            </Button>
            <Button
              variant="primary"
              leftIcon={<Icons.Info aria-hidden />}
              rightIcon={<Icons.Info aria-hidden />}>
              Both Icons
            </Button>
          </Flex>
        </Box>
  </>
)
