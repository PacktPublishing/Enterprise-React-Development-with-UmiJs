import { Button, Result } from 'antd';
import { history } from 'umi';

export default function notFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you accessed does not exist."
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          Back to Home
        </Button>
      }
    />
  );
}
