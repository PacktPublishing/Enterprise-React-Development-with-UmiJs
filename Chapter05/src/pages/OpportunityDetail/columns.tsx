import { ProColumns } from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';
import { Activity } from '@/types/opportunity';
import { Tag } from 'antd';

const columns: ProColumns<Activity>[] = [
  {
    title: <FormattedMessage id="table.activity.summary" />,
    dataIndex: 'summary',
    width: 300,
  },
  {
    title: <FormattedMessage id="table.activity.type" />,
    dataIndex: 'type',
    valueEnum: {
      0: {
        text: (
          <Tag color="#42C3E3" key={0}>
            <FormattedMessage id="activity.call" />
          </Tag>
        ),
      },
      1: {
        text: (
          <Tag color="#42C3E3" key={0}>
            <FormattedMessage id="activity.email" />
          </Tag>
        ),
      },
      2: {
        text: (
          <Tag color="#42C3E3" key={0}>
            <FormattedMessage id="activity.meeting" />
          </Tag>
        ),
      },
      3: {
        text: (
          <Tag color="#42C3E3" key={0}>
            <FormattedMessage id="activity.event" />
          </Tag>
        ),
      },
    },
  },
  {
    title: <FormattedMessage id="table.activity.schedule" />,
    valueType: 'date',
    dataIndex: 'schedule',
  },
  {
    title: <FormattedMessage id="table.activity.createdBy" />,
    dataIndex: 'createdBy',
  },
];

export default columns;
