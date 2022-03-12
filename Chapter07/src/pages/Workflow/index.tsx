import ProTable from '@ant-design/pro-table';
import { Button, Input, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@/.umi/plugin-locale/localeExports';
import columns from './columns';
import { Workflow } from '@/types/workflow.d';
import { listWorkflows } from '@/services/workflow';
import { useModel, useIntl } from 'umi';
import WorkflowForm from './components/workflowForm';

export default function Page() {
  const [formOpened, setFormOpened] = useState<boolean>(false);
  const { remove, update, create, clearResult, result } = useModel('workflow');

  const { formatMessage } = useIntl();

  useEffect(() => {
    if (result?.success) {
      message.success(formatMessage({ id: 'messages.success.operation' }));

      clearResult();
      if (formOpened) setFormOpened(false);
    }
  }, [result]);

  return (
    <PageContainer
      extra={
        <Input.Search
          placeholder={formatMessage({ id: 'table.workflow.search' })}
        />
      }
    >
      <WorkflowForm
        visible={formOpened}
        onOk={create}
        onClose={() => setFormOpened(false)}
      />

      <ProTable<Workflow>
        columns={columns}
        request={listWorkflows}
        editable={{
          type: 'multiple',
          deletePopconfirmMessage: <FormattedMessage id="table.confirm" />,
          deleteText: <FormattedMessage id="table.disable" />,
          onDelete: async (key) => remove(key as string),
          onSave: async (_, record) => update(record),
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
        }}
        rowKey="id"
        search={false}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
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
