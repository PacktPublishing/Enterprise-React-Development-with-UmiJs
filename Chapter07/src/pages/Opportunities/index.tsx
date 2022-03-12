import { PlusOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import ProTable from '@ant-design/pro-table';
import columns from './columns';
import OpportunityForm from './components/oportunityForm';
import { useState, useEffect } from 'react';
import { Opportunity } from '@/types/opportunity';
import { listOpportunities } from '@/services/opportunity';
import { listCustomers } from '@/services/customer';
import { Customer } from '@/types/customer';
import { FormattedMessage, useModel, useIntl, useAccess } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';

export default function Page() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [formOpened, setFormOpened] = useState<boolean>(false);
  const { canAdmin } = useAccess();
  const { formatMessage } = useIntl();

  const { disable, update, create, clearResult, result } =
    useModel('opportunity');

  useEffect(() => {
    const fetchCostumer = async () => {
      if (formOpened) setCustomers((await listCustomers()).data);
    };

    fetchCostumer();
  }, [formOpened]);

  useEffect(() => {
    if (result?.success) {
      message.success(formatMessage({ id: 'messages.success.operation' }));

      clearResult();
      if (formOpened) setFormOpened(false);
    }
  }, [result]);

  return (
    <PageContainer>
      <OpportunityForm
        customers={customers}
        visible={formOpened}
        onOk={create}
        onClose={() => setFormOpened(false)}
      />

      <ProTable<Opportunity>
        headerTitle={<FormattedMessage id="table.opportunity.title" />}
        rowKey="id"
        search={{ labelWidth: 'auto' }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        columns={columns}
        request={listOpportunities}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
        }}
        editable={{
          type: 'multiple',
          deletePopconfirmMessage: <FormattedMessage id="table.confirm" />,
          saveText: (
            <span id="save">
              <FormattedMessage id="table.save" />
            </span>
          ),
          deleteText: <FormattedMessage id="table.disable" />,
          onDelete: async (key) => disable(key as string),
          onSave: async (_, record) => update(record),
        }}
        rowSelection={canAdmin && { onChange: () => undefined }}
        tableAlertOptionRender={() => (
          <a>
            <FormattedMessage id="table.opportunity.assign" />
          </a>
        )}
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            onClick={() => setFormOpened(true)}
            type="primary"
          >
            <FormattedMessage id="table.new" />
          </Button>,
        ]}
      />
    </PageContainer>
  );
}
