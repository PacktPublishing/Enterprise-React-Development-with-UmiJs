import { Avatar, Dropdown, Menu } from 'antd';
import styles from './index.less';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useModel } from 'umi';

export default function HeaderMenu() {
  const { initialState, setInitialState } = useModel('@@initialState');

  const userLogout = () => {
    initialState?.logout?.();

    setInitialState((state) => ({
      ...state,
      currentUser: undefined,
    }));
  };

  const options = (
    <Menu className={styles.menu} onClick={userLogout}>
      <Menu.Item key="center">
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown className={styles.dropdown} overlay={options}>
      <span>
        <Avatar
          size="small"
          className={styles.avatar}
          icon={<UserOutlined />}
        />
        <span className={`${styles.name} anticon`}>
          {initialState?.currentUser?.name}
        </span>
      </span>
    </Dropdown>
  );
}
