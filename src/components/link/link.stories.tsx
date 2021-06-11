import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Link } from './link';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Link component, defaults to `a`. Use the `as` prop to set the correct HTML element independent from styling.</Description>
          <Props of={Link} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <Link {...args} href='#!' variant="default">You know nothing, Jon Snow</Link>;

export const Inline = () => <Link href='#!' variant="inline">You know nothing, Jon Snow</Link>

export const Navigation1 = () => <Link href='#!' variant="nav1">You know nothing, Jon Snow</Link>

export const Navigation2 = () => <Link href='#!' variant="nav2">You know nothing, Jon Snow</Link>

export const Navigation3 = () => <Link href='#!' variant="nav3">You know nothing, Jon Snow</Link>
