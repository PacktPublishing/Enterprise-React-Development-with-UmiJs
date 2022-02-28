import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import ProTable from '@ant-design/pro-table';
import columns from './columns';
import { Customer } from '@/types/customer';
import { FormattedMessage, useIntl, getLocale, useModel } from 'umi';
import CustomerForm from './components/customerForm';
import { listCustomers } from '@/services/customer';
import { PageContainer } from '@ant-design/pro-layout';

export default function Page() {
  const [formOpened, setFormOpened] = useState<boolean>(false);
  const { disable, update, create, clearResult, result } = useModel('customer');

  const { formatMessage } = useIntl();

  useEffect(() => {
    if (result?.success) {
      message.success(formatMessage({ id: 'messages.success.operation' }));

      clearResult();
      if (formOpened) setFormOpened(false);
    }
  }, [result]);

  return (
    <PageContainer>
      <CustomerForm
        visible={formOpened}
        onOk={create}
        onClose={() => setFormOpened(false)}
      />

      <ProTable<Customer>
        headerTitle={<FormattedMessage id="table.customer.title" />}
        rowKey="id"
        search={{ labelWidth: 'auto' }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        columns={columns}
        locale={getLocale()}
        request={listCustomers}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
        }}
        editable={{
          type: 'multiple',
          deletePopconfirmMessage: <FormattedMessage id="table.confirm" />,
          deleteText: <FormattedMessage id="table.disable" />,
          onDelete: async (key) => disable(key as string),
          onSave: async (_, record) => update(record),
        }}
        toolBarRender={() => [
          <Button
            key="button"
            onClick={() => setFormOpened(true)}
            icon={<PlusOutlined />}
            type="primary"
          >
            <FormattedMessage id="table.new" />
          </Button>,
        ]}
      />
    </PageContainer>
  );
}
