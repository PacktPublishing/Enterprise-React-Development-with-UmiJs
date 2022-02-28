import { Avatar, Dropdown, Menu } from 'antd';
import styles from './index.less';
import { LogoutOutlined } from '@ant-design/icons';

export default function HeaderMenu() {
  const options = (
    <Menu className={styles.menu}>
      <Menu.Item key="center">
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown className={styles.dropdown} overlay={options}>
      <span>
        <Avatar size="small" className={styles.avatar} />
        <span className={`${styles.name} anticon`}>John Doe</span>
      </span>
    </Dropdown>
  );
}
