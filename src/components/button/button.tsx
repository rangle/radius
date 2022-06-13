import styled from '@emotion/styled';
import * as React from 'react';
import { FC } from 'react';
import { theme } from '../../theme';

// Define the options for but button
export type DsButtonProps = {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'chevron' | 'icon';
  disabled?: boolean;
  as: 'button';
  children?: Node | JSX.Element | JSX.Element[];
  onClick: () => void;
};

// create options for color and background based off theme
const COLOR: any = {
  primary: theme.colors.text.secondary,
  secondary: theme.colors.ui.primary,
};

const BG_COLOR: any = {
  primary: theme.colors.ui.primary,
  secondary: theme.colors.text.primary,
};

// Create the styled element
const StyledDsButton = styled.button<DsButtonProps>`
  border-style: none;
  position: relative;
  cursor: pointer;
  display: flex;
  vertical-align: middle;
  padding-top: ${theme.spacing.space2};
  padding-bottom: ${theme.spacing.space2};
  padding-left: ${theme.spacing.space7};
  padding-right: ${theme.spacing.space7};
  border-radius: ${theme.borders.radiusMedium};
  background-color: ${(props) => BG_COLOR[props.variant]};
  color: ${(props) => COLOR[props.variant]};
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
    cursor: not-allowed;
    background-color: ${theme.colors.ui.disabled};
    color: ${theme.colors.text.inverse};
  }
`;

const DsButton: FC<DsButtonProps> = ({ children, ...props }: DsButtonProps) => {
  return (
    <StyledDsButton role="button" {...props}>
      {children}
    </StyledDsButton>
  );
};

export default DsButton;
