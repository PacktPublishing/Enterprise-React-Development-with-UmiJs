import { ProColumns } from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';
import { Workflow } from '@/types/workflow.d';
import { Tag } from 'antd';

const columns: ProColumns<Workflow>[] = [
  {
    title: <FormattedMessage id="table.workflow.name" />,
    dataIndex: 'name',
  },
  {
    title: <FormattedMessage id="table.workflow.type" />,
    dataIndex: 'type',
    valueType: 'select',
    hideInDescriptions: true,
    editable: false,
    filters: true,
    onFilter: true,
    valueEnum: {
      0: {
        text: (
          <Tag color="#42C3E3" key={0}>
            <FormattedMessage id="table.workflow.email" />
          </Tag>
        ),
      },
      1: {
        text: (
          <Tag color="#42C3E3" key={0}>
            <FormattedMessage id="table.workflow.create" />
          </Tag>
        ),
      },
      2: {
        text: (
          <Tag color="#42C3E3" key={0}>
            <FormattedMessage id="table.workflow.check" />
          </Tag>
        ),
      },
    },
  },
  {
    title: <FormattedMessage id="table.workflow.table" />,
    dataIndex: 'table',
    valueType: 'select',
    hideInDescriptions: true,
    editable: false,
    filters: true,
    onFilter: true,
    valueEnum: {
      Opportunity: {
        text: (
          <Tag color="#248CD9" key={0}>
            <FormattedMessage id="table.workflow.opportunity" />
          </Tag>
        ),
      },
      Customer: {
        text: (
          <Tag color="#248CD9" key={0}>
            <FormattedMessage id="table.workflow.customer" />
          </Tag>
        ),
      },
      Analytics: {
        text: (
          <Tag color="#248CD9" key={0}>
            <FormattedMessage id="table.workflow.analytics" />
          </Tag>
        ),
      },
      Invoce: {
        text: (
          <Tag color="#248CD9" key={0}>
            <FormattedMessage id="table.workflow.invoce" />
          </Tag>
        ),
      },
    },
  },
  {
    title: <FormattedMessage id="table.options" />,
    valueType: 'option',
    hideInSetting: true,
    hideInDescriptions: true,
    render: (_, record, __, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable(record.id as number);
        }}
      >
        <FormattedMessage id="table.edit" />
      </a>,
    ],
  },
];

export default columns;
