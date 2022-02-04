import { addons } from '@storybook/addons';

import radiusTheme from './theme';

addons.setConfig({
  theme: radiusTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  isToolshown: true,
})