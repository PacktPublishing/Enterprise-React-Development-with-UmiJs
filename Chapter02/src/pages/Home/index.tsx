import { UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Avatar, Row } from 'antd';
import { FormattedMessage } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <PageContainer
      header={{ title: undefined }}
      style={{ minHeight: '90vh' }}
      content={
        <div className={styles.pageHeaderContent}>
          <div className={styles.avatar}>
            <Avatar
              alt="avatar"
              className={styles.avatarComponent}
              size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 100 }}
              icon={<UserOutlined />}
            />
          </div>

          <div className={styles.content}>
            <div className={styles.contentTitle}>
              <FormattedMessage id="greetings.hello" /> John Doe,{' '}
              <FormattedMessage id="greetings.welcome" />.
            </div>
            <div>Inside Sales | Umi Group</div>
          </div>
        </div>
      }
    >
      <div style={{ width: '100%' }}>
        <ProTable<any> // TODO: add types!!
          headerTitle={<FormattedMessage id="home.recents" />}
          pagination={{ pageSize: 5 }}
          request={() => [] as any}
          columns={[]}
          rowKey="id"
          search={false}
        />
      </div>
    </PageContainer>
  );
}
