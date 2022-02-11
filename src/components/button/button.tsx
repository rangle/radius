import React from 'react';
import styles from "./button.module.scss";

const selector = 'ds-button';

export interface DsButtonProps {
  label: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'chevron' | 'icon';
  onClick?: any;
}

const DsButton = (props: DsButtonProps) => {
  const classesArray = `${selector},${selector}--${props.variant || 'primary'},${selector}--${props.size || 'medium'}`.split(',');
  const classNames = classesArray.map(n => styles[n]).toString().replace(/,/g, ' ');
  return <button onClick={props.onClick} className={classNames} disabled={props.disabled}>{props.label}</button>
};

export default DsButton;