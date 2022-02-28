import { Card, Col, Row } from 'antd';
import { FormattedMessage } from 'umi';
import { useState, useEffect } from 'react';
import {
  HistoryByMonth,
  LeadsSource,
  TopOpportunity,
} from '@/types/analiytics';
import { PageContainer } from '@ant-design/pro-layout';
import {
  getHistoryByMonth,
  getLeadsBySource,
  getTopOpportunities,
} from '@/services/analytics';
import {
  Chart,
  Coordinate,
  Axis,
  Legend,
  Interval,
  Tooltip,
  Interaction,
} from 'bizcharts';

export default function IndexPage() {
  const [leadsBySource, setLeadsBySource] = useState<LeadsSource[]>([]);
  const [historyByMonth, setHistoryByMonth] = useState<HistoryByMonth[]>([]);
  const [topOpp, setTopOpp] = useState<TopOpportunity[]>([]);

  useEffect(() => {
    const fetchTopOpp = async () => {
      setTopOpp((await getTopOpportunities()).data);
    };

    const fetchLeadsBySource = async () => {
      setLeadsBySource((await getLeadsBySource()).data);
    };

    const fetchHistoryByMonth = async () => {
      setHistoryByMonth((await getHistoryByMonth()).data);
    };

    fetchHistoryByMonth();
    fetchLeadsBySource();
    fetchTopOpp();
  }, []);

  const colProps = {
    style: { marginBottom: 24 },
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  };

  return (
    <PageContainer>
      <Row gutter={24}>
        <Col {...colProps}>
          <Card
            id="top"
            loading={topOpp.length == 0}
            title={<FormattedMessage id="chart.top" />}
          >
            <Chart height={200} data={topOpp} autoFit>
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
          <Card
            loading={leadsBySource?.length == 0}
            title={<FormattedMessage id="chart.leads" />}
          >
            <Chart
              height={200}
              data={leadsBySource}
              scale={{
                percent: {
                  formatter: (val: unknown) => {
                    val = (val as number) * 100 + '%';
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
          loading={historyByMonth?.length == 0}
          title={<FormattedMessage id="chart.month" />}
        >
          <Chart height={300} padding="auto" data={historyByMonth} autoFit>
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
