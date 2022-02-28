import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col, Card } from 'antd';
import {
  Chart,
  Coordinate,
  Axis,
  Legend,
  Interval,
  Tooltip,
  Interaction,
} from 'bizcharts';
import { FormattedMessage } from 'umi';

const colProps = {
  style: { marginBottom: 24 },
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

export default function Page() {
  return (
    <PageContainer>
      <Row gutter={24}>
        <Col {...colProps}>
          <Card title={<FormattedMessage id="chart.top" />}>
            <Chart height={200} data={[]} autoFit>
              <Coordinate transpose />

              <Axis name="name" label={false} />
              <Axis
                name="revenue"
                label={{
                  formatter: (text) => `$ ${text}`,
                }}
              />
              <Interval
                type="interval"
                label={['name', (name) => <>{name}</>]}
                tooltip={{
                  fields: ['name', 'revenue'],
                  callback: (name, revenue) => {
                    return { name: name, value: `$ ${revenue}` };
                  },
                }}
                color={['name', '#3936FE-#14CCBE']}
                position="name*revenue"
              />
              <Interaction type="element-single-selected" />
            </Chart>
          </Card>
        </Col>

        <Col {...colProps}>
          <Card title={<FormattedMessage id="chart.leads" />}>
            <Chart
              height={200}
              data={[]}
              scale={{
                percent: {
                  formatter: (val: any) => {
                    val = val * 100 + '%';
                    return val;
                  },
                },
              }}
              autoFit
            >
              <Coordinate type="theta" radius={0.95} />
              <Tooltip showTitle={false} />
              <Axis visible={false} />
              <Legend position="right" />
              <Interval
                position="percent"
                adjust="stack"
                color="source"
                style={{
                  lineWidth: 1,
                  stroke: '#fff',
                }}
              />
              <Interaction type="element-single-selected" />
            </Chart>
          </Card>
        </Col>
      </Row>

      <Row gutter={24} style={{ padding: 10 }}>
        <Card
          style={{ width: '100%' }}
          title={<FormattedMessage id="chart.month" />}
        >
          <Chart height={300} padding="auto" data={[]} autoFit>
            <Interval
              adjust={[
                {
                  type: 'dodge',
                  marginRatio: 0,
                },
              ]}
              color={['name', '#3776E7-#14CCBE']}
              position="month*value"
            />
            <Tooltip shared />
          </Chart>
        </Card>
      </Row>
    </PageContainer>
  );
}
