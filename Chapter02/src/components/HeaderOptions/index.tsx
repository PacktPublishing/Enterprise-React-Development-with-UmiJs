import { Space } from 'antd';
import { SelectLang } from 'umi';
import HeaderMenu from '../HeaderMenu';

export default function HeaderOptions() {
  return (
    <Space>
      <HeaderMenu />
      <SelectLang />
    </Space>
  );
}
