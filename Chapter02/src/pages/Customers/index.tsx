import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable from '@ant-design/pro-table';
import { FormattedMessage, getLocale } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';

export default function Page() {
  return (
    <PageContainer style={{ minHeight: '90vh' }}>
      <ProTable<any>
        rowKey="id"
        headerTitle={<FormattedMessage id="table.customer.title" />}
        search={{ labelWidth: 'auto' }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        locale={getLocale()}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            <FormattedMessage id="table.new" />
          </Button>,
        ]}
      />
    </PageContainer>
  );
}
