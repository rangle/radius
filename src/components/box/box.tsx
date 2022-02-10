import React from 'react';
import styles from "./box.module.scss";

export type DsBoxProps = {
  children: JSX.Element | string;
};

const DsBox = ({ children }: DsBoxProps) => {
  return <div className={styles.box}>
    {children}
  </div>
};

export default DsBox;