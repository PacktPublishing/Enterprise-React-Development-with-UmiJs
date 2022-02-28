import React from 'react';
import styles from './index.less';
import { history } from 'umi';

export default function Page() {
  const { query } = history.location;
  const { code } = query as { code: string };

  alert(`code=${code}`);

  return (
    <div>
      <h1 className={styles.title}>Page /Home/index</h1>
    </div>
  );
}
