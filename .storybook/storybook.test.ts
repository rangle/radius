import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  storyKindRegex: /^((?!.*?Spinner|Icons).)*$/,
});