import React from 'react';

import styles from "./tag.module.scss";

const selector = 'ds-tag';

export interface DsTagProps {
  label: string;
  type: 'primary' | 'secondary' | 'error' | 'success' | 'alert';
  variant: 'solid' | 'outline';
}

const DsTag = (props: DsTagProps) => {
  const classesArray = `${selector},${selector}--${props.type || 'primary'}--${props.variant || 'solid'}`.split(',');
  const classNames = classesArray.map(n => styles[n]).toString().replace(/,/g, ' ');
  return <span className={classNames}>{props.label}</span>
};

export default DsTag;