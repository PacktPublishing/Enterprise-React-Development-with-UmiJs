import { Card, Form, Input, Modal } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { Customer } from '@/types/customer';

interface CustomerFormProps {
  visible: boolean;
  onClose: () => unknown;
  onOk: (customer: Customer) => unknown;
}

export default function CustomerForm(props: CustomerFormProps) {
  const { visible, onClose, onOk } = props;
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();

  const newcustomer = async () => {
    await form.validateFields();
    onOk({ ...form.getFieldsValue() });
  };

  return (
    <>
      <Modal
        centered
        title={<FormattedMessage id="form.customer.title" />}
        bodyStyle={{ height: '400px', overflowY: 'scroll' }}
        width="80%"
        closable
        destroyOnClose
        onOk={newcustomer}
        onCancel={onClose}
        visible={visible}
      >
        <Card bordered={false}>
          <Form preserve={false} layout="vertical" form={form}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: <FormattedMessage id="form.required" />,
                },
              ]}
              label={<FormattedMessage id="table.customer.name" />}
            >
              <Input
                type="text"
                placeholder={formatMessage({ id: 'table.customer.name' })}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: <FormattedMessage id="form.required" />,
                },
              ]}
              label={<FormattedMessage id="table.customer.email" />}
            >
              <Input
                type="email"
                placeholder={formatMessage({ id: 'table.customer.email' })}
              />
            </Form.Item>

            <Form.Item
              name="phone"
              label={<FormattedMessage id="table.customer.phone" />}
            >
              <Input
                type="tel"
                placeholder={formatMessage({ id: 'table.customer.phone' })}
              />
            </Form.Item>

            <Form.Item
              name="role"
              label={<FormattedMessage id="table.customer.role" />}
            >
              <Input
                type="text"
                placeholder={formatMessage({ id: 'table.customer.role' })}
              />
            </Form.Item>

            <Form.Item
              name="company"
              label={<FormattedMessage id="table.customer.company" />}
            >
              <Input
                type="text"
                placeholder={formatMessage({
                  id: 'table.customer.company',
                })}
              />
            </Form.Item>
          </Form>
        </Card>
      </Modal>
    </>
  );
}
