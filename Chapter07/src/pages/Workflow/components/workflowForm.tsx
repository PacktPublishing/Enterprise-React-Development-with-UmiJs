import { Workflow } from '@/types/workflow.d';
import { Radio, Input, Form, Select, Modal } from 'antd';
import { FormattedMessage, useIntl } from 'umi';

interface WorkflowFormProps {
  visible: boolean;
  onClose: () => any;
  onOk: (workflow: Workflow) => any;
}

export default function WorkflowForm(props: WorkflowFormProps) {
  const { visible, onClose, onOk } = props;
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();

  const newWorkflow = async () => {
    await form.validateFields();
    onOk({ ...form.getFieldsValue() });
  };

  return (
    <Modal
      centered
      title={<FormattedMessage id="form.workflow.title" />}
      bodyStyle={{ height: '350px', overflowY: 'scroll' }}
      width="90%"
      closable
      destroyOnClose
      onOk={newWorkflow}
      onCancel={onClose}
      visible={visible}
    >
      <Form preserve={false} form={form} layout="vertical">
        <Form.Item
          name="type"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="form.required" />,
            },
          ]}
          label={<FormattedMessage id="table.workflow.type" />}
        >
          <Select placeholder={formatMessage({ id: 'table.workflow.type' })}>
            <Select.Option value={0}>
              <FormattedMessage id="table.workflow.email" />
            </Select.Option>

            <Select.Option value={1}>
              <FormattedMessage id="table.workflow.create" />
            </Select.Option>

            <Select.Option value={2}>
              <FormattedMessage id="table.workflow.check" />
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="table"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="form.required" />,
            },
          ]}
          label={<FormattedMessage id="table.workflow.table" />}
        >
          <Select placeholder={formatMessage({ id: 'table.workflow.table' })}>
            <Select.Option value={0}>
              <FormattedMessage id="table.workflow.opportunity" />
            </Select.Option>

            <Select.Option value={1}>
              <FormattedMessage id="table.workflow.customer" />
            </Select.Option>

            <Select.Option value={2}>
              <FormattedMessage id="table.workflow.analytics" />
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="trigger"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="form.required" />,
            },
          ]}
          label={<FormattedMessage id="table.workflow.trigger" />}
        >
          <Radio.Group>
            <Radio value={0}>
              <FormattedMessage id="table.workflow.trigger.created" />
            </Radio>

            <Radio value={1}>
              <FormattedMessage id="table.workflow.trigger.assigned" />
            </Radio>

            <Radio value={2}>
              <FormattedMessage id="table.workflow.trigger.change" />
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="value"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="form.required" />,
            },
          ]}
          label={<FormattedMessage id="table.workflow.value" />}
        >
          <Input.TextArea
            placeholder={formatMessage({ id: 'table.workflow.value' })}
            rows={5}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
