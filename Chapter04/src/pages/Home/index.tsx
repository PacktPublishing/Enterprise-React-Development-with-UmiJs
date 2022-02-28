import { listOpportunities } from '@/services/opportunity';
import { Opportunity } from '@/types/opportunity';
import { UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Avatar, message } from 'antd';
import { useEffect } from 'react';
import { FormattedMessage, useIntl, useModel } from 'umi';
import columns from '../Opportunities/columns';
import styles from './index.less';

export default function IndexPage() {
  const { initialState } = useModel('@@initialState');

  const { disable, update, clearResult, result } = useModel('opportunity');

  const { formatMessage } = useIntl();

  useEffect(() => {
    if (result?.success) {
      message.success(formatMessage({ id: 'messages.success.operation' }));

      clearResult();
    }
  }, [result]);

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
              <FormattedMessage id="greetings.hello" />{' '}
              {initialState?.currentUser?.name},{' '}
              <FormattedMessage id="greetings.welcome" />.
            </div>
            <div>
              {initialState?.currentUser?.role?.title} |{' '}
              {initialState?.currentUser?.company}
            </div>
          </div>
        </div>
      }
    >
      <ProTable<Opportunity>
        headerTitle={<FormattedMessage id="home.recents" />}
        pagination={{ pageSize: 5 }}
        editable={{
          type: 'multiple',
          deletePopconfirmMessage: <FormattedMessage id="table.confirm" />,
          deleteText: <FormattedMessage id="table.disable" />,
          onDelete: async (key) => disable(key as string),
          onSave: async (_, record) => update(record),
        }}
        request={listOpportunities}
        columns={columns}
        rowKey="id"
        search={false}
      />
    </PageContainer>
  );
}
