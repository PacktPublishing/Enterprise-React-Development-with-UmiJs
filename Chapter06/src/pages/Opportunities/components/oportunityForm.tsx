import { Opportunity } from '@/types/opportunity';
import { Card, Form, Input, Modal, Select } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { Customer } from '@/types/customer';

interface OpportunityFormProps {
  visible: boolean;
  customers: Customer[];
  onClose: () => any;
  onOk: (opportunity: Opportunity) => any;
}

export default function OpportunityForm(props: OpportunityFormProps) {
  const { visible, customers, onClose, onOk } = props;
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();

  const newOpportunity = async () => {
    await form.validateFields();
    onOk({ ...form.getFieldsValue() });
  };

  return (
    <>
      <Modal
        centered
        title={<FormattedMessage id="form.opportunity.title" />}
        bodyStyle={{ height: '350px' }}
        width="90%"
        closable
        destroyOnClose
        onOk={newOpportunity}
        onCancel={onClose}
        visible={visible}
      >
        <Card bordered={false}>
          <Form preserve={false} layout="vertical" form={form}>
            <Form.Item
              name="topic"
              rules={[
                {
                  required: true,
                  message: <FormattedMessage id="form.required" />,
                },
              ]}
              label={<FormattedMessage id="table.opportunity.topic" />}
            >
              <Input
                type="text"
                placeholder={formatMessage({
                  id: 'table.opportunity.topic',
                })}
              />
            </Form.Item>

            <Form.Item
              name="budget"
              rules={[
                {
                  required: true,
                  message: <FormattedMessage id="form.required" />,
                },
              ]}
              label={<FormattedMessage id="table.opportunity.budget" />}
            >
              <Input
                type="number"
                placeholder={formatMessage({
                  id: 'table.opportunity.budget',
                })}
              />
            </Form.Item>

            <Form.Item
              name="customer"
              rules={[
                {
                  required: true,
                  message: <FormattedMessage id="form.required" />,
                },
              ]}
              label={<FormattedMessage id="table.opportunity.customer" />}
            >
              <Select
                placeholder={formatMessage({
                  id: 'table.opportunity.customer',
                })}
              >
                {customers.map((customer, index) => (
                  <Select.Option key={index} value={customer.name as string}>
                    {customer.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Card>
      </Modal>
    </>
  );
}
