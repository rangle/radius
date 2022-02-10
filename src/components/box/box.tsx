import React from 'react';
import styles from "./box.module.scss";

const DsBox = ({ children }: any) => {
  return <div className={styles.box}>
    {children}
  </div>
};

export default DsBox;