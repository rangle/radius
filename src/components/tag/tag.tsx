import styled from '@emotion/styled';
import { theme } from '../../theme'

// Define the options for but tags
export interface DsTagProps {
  type: 'primary' | 'secondary' | 'error' | 'success' | 'alert';
  variant: 'solid' | 'outline';
}

type KEY_VALUE = { [key: string]: string }
type KEY_VALUE_VALUE = { [key: string]: KEY_VALUE }

// Setup the types of color options
enum COLOR_TYPE {
  'color',
  'background_color',
  'border_color'
};

// Define color option
const COLORS: KEY_VALUE_VALUE = {};
COLORS[COLOR_TYPE.color] = {
  primary_solid: theme.colors.text.inverse,
  secondary_solid: theme.colors.text.inverse,
  error_solid: theme.colors.text.inverse,
  success_solid: theme.colors.text.inverse,
  alert_solid: theme.colors.text.inverse,
  primary_outline: theme.colors.ui.primary,
  secondary_outline: theme.colors.brand.primaryMain,
  error_outline: theme.colors.ui.errorDefault,
  success_outline: theme.colors.ui.successLight,
  alert_outline: theme.colors.ui.alertLight,
};

// Background colors
COLORS[COLOR_TYPE.background_color] = {
  primary_solid: theme.colors.ui.primary,
  secondary_solid: theme.colors.brand.primaryMain,
  error_solid: theme.colors.ui.errorDefault,
  success_solid: theme.colors.ui.successDefault,
  alert_solid: theme.colors.ui.alertDefault,
  primary_outline: 'none',
  secondary_outline: 'none',
  error_outline: 'none',
  success_outline: 'none',
  alert_outline: 'none',
};

// Border colors
COLORS[COLOR_TYPE.border_color] = {
  primary_solid: 'none',
  secondary_solid: 'none',
  error_solid: 'none',
  success_solid: 'none',
  alert_solid: 'none',
  primary_outline: theme.colors.ui.primary,
  secondary_outline: theme.colors.brand.primaryMain,
  error_outline: theme.colors.ui.errorDefault,
  success_outline: theme.colors.ui.successDefault,
  alert_outline: theme.colors.ui.alertDefault,
};

// Returns the color 
const getColor = (props: DsTagProps, colorType: COLOR_TYPE = COLOR_TYPE.background_color) => {
  const type = props.type || 'primary';
  const variant = props.variant || 'solid';
  return COLORS[colorType][`${type}_${variant}`];
}

// Create the styled element
const DsTag = styled.div<DsTagProps>`
  height: fit-content;
  display: inline-block;
  padding: 0  ${theme.spacing.space2};
  white-space: nowrap;
  border-radius: ${theme.borders.radiusMedium};
  border-style: solid;
  border-width: 1px;
  font-size: ${theme.typography.scale_m};
  font-family: ${theme.typography.font_family_secondary};
  border-color: transparent;
  background-color: ${props => getColor(props, COLOR_TYPE.background_color)};
  border-color: ${props => getColor(props, COLOR_TYPE.border_color)};
  color: ${props => getColor(props, COLOR_TYPE.color)};
`;

export default DsTag;