import { useEffect } from 'react';
import { SelectLang, useModel, history } from 'umi';
import styles from './index.less';
import LoginForm from './LoginForm';

export default function Page() {
  const { initialState } = useModel('@@initialState');

  useEffect(() => {
    if (initialState?.currentUser?.isLoggedIn) history.push('/');
  }, [initialState?.currentUser]);

  return (
    <div>
      <span className={styles.header}>
        <span className={styles.logo}>
          <img
            height={45}
            alt="crm logo"
            src="https://img.icons8.com/ios-filled/50/ffffff/customer-insight.png"
          />
          &nbsp; &nbsp;
          <h1 className={styles.title}>Umi CRM</h1>
        </span>
        <SelectLang className={styles.language} />
      </span>

      <div className={styles.container}>
        <LoginForm />
      </div>
    </div>
  );
}
