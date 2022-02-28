import { HistoryByMonth, LeadsSource, TopOpportunity } from '@/types/analytics';
import { request } from 'umi';

export function getTopOpportunities() {
  return request<{ data: TopOpportunity[]; success: boolean }>(
    `/api/analytics/top/opportunity`,
    {
      method: 'GET',
    },
  );
}

export function getLeadsBySource() {
  return request<{ data: LeadsSource[]; success: boolean }>(
    `/api/analytics/leads/source`,
    {
      method: 'GET',
    },
  );
}

export function getHistoryByMonth() {
  return request<{ data: HistoryByMonth[]; success: boolean }>(
    `/api/analytics/bymonth/opportunity`,
    {
      method: 'GET',
    },
  );
}
