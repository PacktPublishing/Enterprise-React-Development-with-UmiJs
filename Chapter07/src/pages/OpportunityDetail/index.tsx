import { getOpportunity, listActivities } from '@/services/opportunity';
import { Opportunity } from '@/types/opportunity';
import ProDescriptions, {
  ProDescriptionsItemProps,
} from '@ant-design/pro-descriptions';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Breadcrumb, Button, Card, message, Steps, Tag } from 'antd';
import { useParams, history, FormattedMessage, useIntl, useModel } from 'umi';
import columns from '../Opportunities/columns';
import { PlusOutlined } from '@ant-design/icons';
import activityColumns from './columns';
import { Activity } from '@/types/opportunity';
import { useEffect, useState } from 'react';

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { disable, update, clearResult, result } = useModel('opportunity');
  const [opportunity, setOpportunity] = useState<Opportunity>();

  const { formatMessage } = useIntl();

  useEffect(() => {
    const fetchOpportunity = async () => {
      setOpportunity(await getOpportunity({ opportunityId: id }));
    };

    fetchOpportunity();
  }, []);

  useEffect(() => {
    if (result?.success) {
      message.success(formatMessage({ id: 'messages.success.operation' }));

      clearResult();
    }
  }, [result]);

  return (
    <PageContainer
      header={{
        title: <FormattedMessage id="table.opportunity.title" />,
        breadcrumb: (
          <Breadcrumb>
            <Breadcrumb.Item>
              <a onClick={() => history.push('/opportunities')}>
                <FormattedMessage id="menu.opportunities" />
              </a>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <FormattedMessage id="table.opportunity.title" />
            </Breadcrumb.Item>
          </Breadcrumb>
        ),
      }}
      extra={[
        <Button icon={<PlusOutlined />} key="activity" type="primary">
          <FormattedMessage id="activity.new" />
        </Button>,
      ]}
    >
      <Card bordered>
        <Steps current={opportunity?.status}>
          <Steps.Step
            key="quality"
            description={<Tag color="#8d79f2" key={0} />}
            title={<FormattedMessage id="step.qualify" />}
          />

          <Steps.Step
            key="develop"
            description={<Tag color="#c7f279" key={1} />}
            title={<FormattedMessage id="step.develop" />}
          />

          <Steps.Step
            key="propose"
            description={<Tag color="#e379f2" key={2} />}
            title={<FormattedMessage id="step.propose" />}
          />

          <Steps.Step
            key="close"
            description={<Tag color="#42C3E3" key={3} />}
            title={<FormattedMessage id="step.close" />}
          />
        </Steps>
        <br />

        <ProDescriptions<Opportunity>
          title={<FormattedMessage id="table.opportunity.detail" />}
          editable={{
            type: 'multiple',
            deletePopconfirmMessage: <FormattedMessage id="table.confirm" />,
            deleteText: <FormattedMessage id="table.disable" />,
            onDelete: async (key) => disable(key as string),
            onSave: async (_, record) => update(record),
          }}
          columns={columns as ProDescriptionsItemProps<Opportunity>[]}
          dataSource={opportunity}
        />
      </Card>

      <Card bordered>
        <ProTable<Activity>
          headerTitle={<FormattedMessage id="table.opportunity.activities" />}
          rowKey="id"
          toolbar={{ settings: undefined }}
          search={false}
          pagination={{ pageSize: 5 }}
          columns={activityColumns}
          params={{ customerId: id }}
          request={listActivities}
        />
      </Card>
    </PageContainer>
  );
}
