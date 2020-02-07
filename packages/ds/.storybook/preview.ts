import { addDecorator } from '@storybook/react';
import ThemeDecorator from './theme-decorator';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(ThemeDecorator);
addDecorator(withKnobs);
