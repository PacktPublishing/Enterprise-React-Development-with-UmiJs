import {
  HistoryByMonth,
  LeadsSource,
  TopOpportunity,
} from '@/types/analiytics';
import { request } from 'umi';
import env from '../../config/env';

export function getTopOpportunities() {
  return request<{ data: TopOpportunity[]; success: boolean }>(
    `${env.API_URL}/api/analytics/top/opportunity`,
    {
      method: 'GET',
    },
  );
}

export function getLeadsBySource() {
  return request<{ data: LeadsSource[]; success: boolean }>(
    `${env.API_URL}/api/analytics/leads/source`,
    {
      method: 'GET',
    },
  );
}

export function getHistoryByMonth() {
  return request<{ data: HistoryByMonth[]; success: boolean }>(
    `${env.API_URL}/api/analytics/bymonth/opportunity`,
    {
      method: 'GET',
    },
  );
}
