import { addDecorator } from '@storybook/react';
import ThemeDecorator from './theme-decorator';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(ThemeDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);

