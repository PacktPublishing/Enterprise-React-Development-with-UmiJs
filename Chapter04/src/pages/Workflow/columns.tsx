import { ProColumns } from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';

const columns: ProColumns<any>[] = [
  {
    title: <FormattedMessage id="table.workflow.name" />,
    dataIndex: 'name',
  },
  {
    title: <FormattedMessage id="table.workflow.type" />,
    dataIndex: 'type',
  },
  {
    title: <FormattedMessage id="table.workflow.table" />,
    dataIndex: 'table',
  },
  {
    title: <FormattedMessage id="table.options" />,
    valueType: 'option',
    hideInSetting: true,
    hideInDescriptions: true,
    render: () => [
      <a>
        <FormattedMessage id="table.edit" />
      </a>,
    ],
  },
];

export default columns;
