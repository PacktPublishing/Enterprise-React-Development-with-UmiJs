import { Avatar, Dropdown, Menu } from 'antd';
import styles from './index.less';
import { LogoutOutlined } from '@ant-design/icons';
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
      <Menu.Item id="logout" key="center">
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown className={styles.dropdown} overlay={options}>
      <span id="headermenu">
        <Avatar
          size="small"
          icon={
            initialState?.currentUser?.name &&
            initialState?.currentUser?.name[0]
          }
          className={styles.avatar}
          alt="avatar"
        />
        <span id="loggeduser" className="anticon">
          {initialState?.currentUser?.name}
        </span>
      </span>
    </Dropdown>
  );
}
