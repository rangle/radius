    import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps
} from 'styled-system';

import { default as CheckCircle } from './check-circle';
import { default as CheckboxBlank } from './checkbox-blank';
import { default as CheckboxChecked } from './checkbox-checked';
import { default as CheckboxIndeterminate } from './checkbox-indeterminate';
import { default as Close } from './close';
import { default as Error } from './error';
import { default as ExpandMore } from './expand-more';
import { default as Info } from './info';
import { default as Loader } from './loader';
import { default as Place } from './place';
import { default as RadioChecked } from './radio-checked';
import { default as RadioUnchecked } from './radio-unchecked';
import { default as Search } from './search';
import { default as Visibility } from './visibility';
import { default as VisibilityOff } from './visibility-off';

export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

export const Icons: any = {
  CheckCircle,
  CheckboxBlank,
  CheckboxChecked,
  CheckboxIndeterminate,
  Close,
  Error,
  ExpandMore,
  Info,
  Loader,
  Place,
  RadioChecked,
  RadioUnchecked,
  Search,
  Visibility,
  VisibilityOff
};