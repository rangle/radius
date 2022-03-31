import styled from '@emotion/styled';

import { theme } from '../../theme'

// Define the options for but button
export type DsButtonProps = {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'chevron' | 'icon';
}

// create options for color and background based off theme
const COLOR: any = {
  primary: theme.colors.text.inverse,
  secondary: theme.colors.ui.primary,
};

const BG_COLOR: any = {
  primary: theme.colors.ui.primary,
  secondary: theme.colors.text.inverse,
};

// Create the styled element
const DsButton = styled.button<DsButtonProps>`
  border-style: none;
  position: relative;
  cursor: pointer;
  display: flex;
  vertical-align: middle;
  font-family: ${theme.typography.font_family};
  padding-top: ${theme.spacing.space2};
  padding-bottom: ${theme.spacing.space2};
  padding-left: ${theme.spacing.space7};
  padding-right: ${theme.spacing.space7};
  border-radius: ${theme.borders.radiusMedium};
  background-color: ${props => BG_COLOR[props.variant]};
  color: ${props => COLOR[props.variant]};
  :hover {
    color: ${theme.colors.text.inverse};
    background-color: ${theme.colors.brand.primaryMain};
  }
  :active,
  :focus {
    color: ${theme.colors.text.inverse};
    background-color: ${theme.colors.brand.primaryDark};
  }
  :disabled {
    background-color: ${theme.colors.ui.disabled};
    color: ${theme.colors.text.inverse};
  }
`;

export default DsButton;