import { Opportunity, Activity } from '@/types/opportunity';
import { request } from 'umi';
import env from '../../config/env';

export function listOpportunities(params?: any) {
  return request<{ data: Opportunity[]; success: boolean }>(
    `${env.API_HOST}/api/opportunity/list`,
    {
      method: 'GET',
      params,
    },
  );
}

export function listActivities(params?: any) {
  return request<{ data: Activity[]; success: boolean }>(
    `${env.API_HOST}/api/opportunity/activities`,
    {
      method: 'GET',
      params,
    },
  );
}

export function getOpportunity(params?: any) {
  return request<Opportunity>(`${env.API_HOST}/api/opportunity`, {
    method: 'GET',
    params,
  });
}

export function createOpportunity(opportunity: Opportunity) {
  return request<{ success: boolean }>(`${env.API_HOST}/api/opportunity`, {
    method: 'POST',
    data: opportunity,
  });
}

export function disableOpportunity(opportunityId?: string) {
  return request<{ success: boolean }>(
    `${env.API_HOST}/api/opportunity/disable`,
    {
      method: 'PUT',
      params: { opportunityId },
    },
  );
}

export function updateOpportunity(opportunity: Opportunity) {
  return request<{ success: boolean }>(`${env.API_HOST}/api/opportunity`, {
    method: 'PUT',
    data: opportunity,
  });
}
