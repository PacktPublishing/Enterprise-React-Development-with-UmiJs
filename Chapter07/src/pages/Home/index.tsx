import { Avatar, message, Row } from 'antd';
import ProTable from '@ant-design/pro-table';
import { Opportunity } from '@/types/opportunity';
import { listOpportunities } from '@/services/opportunity';
import { FormattedMessage, useIntl, useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import { UserOutlined } from '@ant-design/icons';
import columns from '../Opportunities/columns';
import { useEffect } from 'react';

export default function IndexPage() {
  const { initialState } = useModel('@@initialState');
  const { formatMessage } = useIntl();

  const { disable, update, clearResult, result } = useModel('opportunity');

  useEffect(() => {
    if (result?.success) {
      message.success(formatMessage({ id: 'messages.success.operation' }));

      clearResult();
    }
  }, [result]);

  return (
    <PageContainer
      header={{ title: undefined }}
      content={
        <div className={styles.pageHeaderContent}>
          <div className={styles.avatar}>
            <Avatar
              size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 100 }}
              icon={<UserOutlined />}
              style={{ color: 'white', backgroundColor: '#1895bb' }}
              alt="avatar"
            />
          </div>

          <div className={styles.content}>
            <div id="greetings" className={styles.contentTitle}>
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
      <Row gutter={24}>
        <div className={styles.table}>
          <ProTable<Opportunity>
            headerTitle={<FormattedMessage id="home.recents" />}
            pagination={{ pageSize: 5 }}
            request={listOpportunities}
            editable={{
              type: 'multiple',
              deletePopconfirmMessage: <FormattedMessage id="table.confirm" />,
              deleteText: <FormattedMessage id="table.disable" />,
              onDelete: async (key) => disable(key as string),
              onSave: async (_, record) => update(record),
            }}
            columns={columns}
            rowKey="id"
            search={false}
          />
        </div>
      </Row>
    </PageContainer>
  );
}
