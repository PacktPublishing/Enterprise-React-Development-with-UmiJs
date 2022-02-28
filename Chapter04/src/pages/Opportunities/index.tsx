import { PlusOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import ProTable from '@ant-design/pro-table';
import { FormattedMessage, getLocale, useAccess, useIntl, useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Opportunity } from '@/types/opportunity';
import columns from './columns';
import { listOpportunities } from '@/services/opportunity';
import { useEffect } from 'react';

export default function Page() {
  const { disable, update, clearResult, result } = useModel('opportunity');

  const { canAdmin } = useAccess();

  const { formatMessage } = useIntl();

  useEffect(() => {
    if (result?.success) {
      message.success(formatMessage({ id: 'messages.success.operation' }));

      clearResult();
    }
  }, [result]);

  return (
    <PageContainer style={{ minHeight: '90vh' }}>
      <ProTable<Opportunity>
        rowKey="id"
        headerTitle={<FormattedMessage id="table.opportunity.title" />}
        search={{ labelWidth: 'auto' }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        locale={getLocale()}
        editable={{
          type: 'multiple',
          deletePopconfirmMessage: <FormattedMessage id="table.confirm" />,
          deleteText: <FormattedMessage id="table.disable" />,
          onDelete: async (key) => disable(key as string),
          onSave: async (_, record) => update(record),
        }}
        rowSelection={canAdmin && { onChange: () => {} }}
        tableAlertOptionRender={() => <a>Assign</a>}
        request={listOpportunities}
        columns={columns}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            <FormattedMessage id="table.new" />
          </Button>,
        ]}
      />
    </PageContainer>
  );
}
