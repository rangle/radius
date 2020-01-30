import { addDecorator } from '@storybook/react';
import themeDecorator from './theme-decorator';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(themeDecorator);
addDecorator(withKnobs);
