import { Customer } from '@/types/customer';
import { Opportunity } from '@/types/opportunity';
import { ProColumns } from '@ant-design/pro-table';
import { Tag } from 'antd';
import { FormattedMessage, history } from 'umi';

const columns: ProColumns<Opportunity>[] = [
  {
    title: <FormattedMessage id="table.opportunity.topic" />,
    dataIndex: 'topic',
    width: 300,
  },
  {
    title: <FormattedMessage id="table.opportunity.budget" />,
    dataIndex: 'budget',
    render: (node) => <>{`$ ${node}`}</>,
  },
  {
    title: <FormattedMessage id="table.opportunity.status" />,
    dataIndex: 'status',
    valueType: 'select',
    hideInDescriptions: true,
    filters: true,
    onFilter: true,
    valueEnum: {
      0: {
        text: (
          <Tag color="#8d79f2" key={0}>
            <FormattedMessage id="step.qualify" />
          </Tag>
        ),
      },
      1: {
        text: (
          <Tag color="#c7f279" key={1}>
            <FormattedMessage id="step.develop" />
          </Tag>
        ),
      },
      2: {
        text: (
          <Tag color="#e379f2" key={2}>
            <FormattedMessage id="step.propose" />
          </Tag>
        ),
      },
      3: {
        text: (
          <Tag color="#79f2e3" key={3}>
            <FormattedMessage id="step.close" />
          </Tag>
        ),
      },
    },
  },
  {
    title: <FormattedMessage id="table.opportunity.customer" />,
    dataIndex: 'customer',
    render: (node) => <>{node && (node as Customer).name}</>,
    editable: false,
  },
  {
    title: <FormattedMessage id="table.customer.email" />,
    dataIndex: 'customer',
    hideInTable: true,
    render: (node) => <>{node && (node as Customer).email}</>,
    editable: false,
  },
  {
    title: <FormattedMessage id="table.customer.phone" />,
    dataIndex: 'customer',
    hideInTable: true,
    render: (node) => <>{node && (node as Customer).phone}</>,
    editable: false,
  },
  {
    title: <FormattedMessage id="table.customer.company" />,
    dataIndex: 'customer',
    hideInTable: true,
    render: (node) => <>{node && (node as Customer).company}</>,
    editable: false,
  },
  {
    title: <FormattedMessage id="table.options" />,
    valueType: 'option',
    hideInSetting: true,
    hideInDescriptions: true,
    render: (_, record, __, action) => [
      <a
        key="editable"
        id="editopportunity"
        onClick={() => {
          action?.startEditable(record.id as number);
        }}
      >
        <FormattedMessage id="table.edit" />
      </a>,
      <a key="more" onClick={() => history.push(`/opportunity/${record.id}`)}>
        <FormattedMessage id="table.more" />
      </a>,
    ],
  },
];

export default columns;
