import { Customer } from '@/types/customer';
import { ProColumns } from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';

const columns: ProColumns<Customer>[] = [
  {
    title: <FormattedMessage id="table.customer.name" />,
    dataIndex: 'name',
  },
  {
    title: <FormattedMessage id="table.customer.email" />,
    dataIndex: 'email',
    copyable: true,
  },
  {
    title: <FormattedMessage id="table.customer.phone" />,
    dataIndex: 'phone',
    search: false,
  },
  {
    title: <FormattedMessage id="table.customer.role" />,
    dataIndex: 'role',
  },
  {
    title: <FormattedMessage id="table.customer.company" />,
    dataIndex: 'company',
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
