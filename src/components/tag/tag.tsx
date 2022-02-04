import styled from '@emotion/styled';

export interface DsTagProps {
  type: 'primary' | 'secondary' | 'error' | 'success' | 'alert';
  variant: 'solid' | 'outline';
}

type KEY_VALUE = { [key: string]: string }
type KEY_VALUE_VALUE = { [key: string]: KEY_VALUE }

enum COLOR_TYPE {
  'color',
  'background_color',
  'border_color'
};

const COLORS: KEY_VALUE_VALUE = {};
COLORS[COLOR_TYPE.color] = {
  primary_solid: 'var(--ds-color--text-inverse)',
  secondary_solid: 'var(--ds-color--text-inverse)',
  error_solid: 'var(--ds-color--text-inverse)',
  success_solid: 'var(--ds-color--text-inverse)',
  alert_solid: 'var(--ds-color--text-inverse)',
  primary_outline: 'var(--ds-color--ui-primary)',
  secondary_outline: 'var(--ds-color-brand-primary-main)',
  error_outline: 'var(--ds-color--ui-error-default)',
  success_outline: 'var(--ds-color--ui-success-default)',
  alert_outline: 'var(--ds-color--ui-alert-default)',
};

COLORS[COLOR_TYPE.background_color] = {
  primary_solid: 'var(--ds-color--ui-primary)',
  secondary_solid: 'var(--ds-color-brand-primary-main)',
  error_solid: 'var(--ds-color--ui-error-default)',
  success_solid: 'var(--ds-color--ui-success-default)',
  alert_solid: 'var(--ds-color--ui-alert-default)',
  primary_outline: 'none',
  secondary_outline: 'none',
  error_outline: 'none',
  success_outline: 'none',
  alert_outline: 'none',
};

COLORS[COLOR_TYPE.border_color] = {
  primary_solid: 'none',
  secondary_solid: 'none',
  error_solid: 'none',
  success_solid: 'none',
  alert_solid: 'none',
  primary_outline: 'var(--ds-color--ui-primary)',
  secondary_outline: 'var(--ds-color-brand-primary-main)',
  error_outline: 'var(--ds-color--ui-error-default)',
  success_outline: 'var(--ds-color--ui-success-default)',
  alert_outline: 'var(--ds-color--ui-alert-default)',
};

const getColor = (props: DsTagProps, colorType: COLOR_TYPE = COLOR_TYPE.background_color) => {
  const type = props.type || 'primary';
  const variant = props.variant || 'solid';
  return COLORS[colorType][`${type}_${variant}`];
}

const DsTag = styled.div<DsTagProps>`
  height: fit-content;
  display: inline-block;
  padding: 0 var(--ds-space-2);
  white-space: nowrap;
  border-radius: var(--ds-border-radius-m);
  border-style: solid;
  border-width: 1px;
  font-size: 11px;
  border-color: transparent;
  background-color: ${props => getColor(props, COLOR_TYPE.background_color)};
  border-color: ${props => getColor(props, COLOR_TYPE.border_color)};
  color: ${props => getColor(props, COLOR_TYPE.color)};
`;

export default DsTag;