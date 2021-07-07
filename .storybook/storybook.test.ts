import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006'
  }),
  // if you uncomment the below line, no image snapshot will be done for both spinner and icon components
  // storyKindRegex: /^((?!.*?Spinner|Icons).)*$/
});

/* without imageSnapshot only HTML snapshot will be done and storybook.test.ts.snap
file will be created and added to the .storybook/__snapshots__ folder */