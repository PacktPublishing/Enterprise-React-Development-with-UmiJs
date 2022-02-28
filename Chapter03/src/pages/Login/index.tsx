import React from 'react';
import styles from './index.less';
import LoginForm from './LoginForm';

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome! Access your account.</h1>
      <LoginForm />
    </div>
  );
}
