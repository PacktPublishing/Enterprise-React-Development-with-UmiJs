import React from 'react';
import styles from './index.less';

export default function (props: { children: React.ReactChild }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Umi App</h1>
      </header>
      {props.children}
    </div>
  );
}
