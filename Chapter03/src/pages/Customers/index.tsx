import { PlusOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import columns from './columns';
import { Customer } from '@/types/customer';
import { listCustomers } from '@/services/customer';

import { FormattedMessage, getLocale, useIntl, useModel } from 'umi';
import { useEffect } from 'react';
import { Button, message } from 'antd';

export default function Page() {
  const { disable, update, clearResult, result } = useModel('customer');

  const { formatMessage } = useIntl();

  useEffect(() => {
    if (result?.success) {
      message.success(formatMessage({ id: 'messages.success.operation' }));

      clearResult();
    }
  }, [result]);

  return (
    <PageContainer style={{ minHeight: '90vh' }}>
      <ProTable<Customer>
        rowKey="id"
        headerTitle={<FormattedMessage id="table.customer.title" />}
        search={{ labelWidth: 'auto' }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        locale={getLocale()}
        request={listCustomers}
        editable={{
          type: 'multiple',
          deletePopconfirmMessage: <FormattedMessage id="table.confirm" />,
          deleteText: <FormattedMessage id="table.disable" />,
          onDelete: async (key) => disable(key as string),
          onSave: async (_, record) => update(record),
        }}
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
