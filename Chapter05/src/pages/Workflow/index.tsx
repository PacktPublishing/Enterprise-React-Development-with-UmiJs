import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@/.umi/plugin-locale/localeExports';
import columns from './columns';

export default function Page() {
  const workflow = [
    {
      id: 0,
      name: 'AssignEmail',
      table: 'Opportunity',
      type: 'send email',
      trigger: 0,
    },
    {
      id: 1,
      name: 'NewOpportunity',
      table: 'Analytics',
      type: 'create record',
      trigger: 1,
    },
  ];

  return (
    <PageContainer>
      <ProTable<any>
        columns={columns}
        dataSource={workflow}
        rowKey="id"
        search={false}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            <FormattedMessage id="table.new" />
          </Button>,
        ]}
      />
    </PageContainer>
  );
}
