import * as React from "react";
import MySillyButton from "./button";
import { action } from '@storybook/addon-actions';

export default {
  title: 'MySillyButton',
  component: MySillyButton,
};

export const example = () => <MySillyButton onClick={action('clicked')} />

