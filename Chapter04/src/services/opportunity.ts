import { Opportunity, Activity } from '@/types/opportunity';
import { request } from 'umi';

export function listOpportunities(params?: any) {
  return request<{ data: Opportunity[]; success: boolean }>(
    `/api/opportunity/list`,
    {
      method: 'GET',
      params,
    },
  );
}

export function listActivities(params?: any) {
  return request<{ data: Activity[]; success: boolean }>(
    `/api/opportunity/activities`,
    {
      method: 'GET',
      params,
    },
  );
}

export function getOpportunity(params?: any) {
  return request<Opportunity>(`/api/opportunity`, {
    method: 'GET',
    params,
  });
}

export function createOpportunity(opportunity: Opportunity) {
  return request<{ success: boolean }>(`/api/opportunity`, {
    method: 'POST',
    data: opportunity,
  });
}

export function disableOpportunity(opportunityId?: string) {
  return request<{ success: boolean }>(`/api/opportunity/disable`, {
    method: 'PUT',
    params: { opportunityId },
  });
}

export function updateOpportunity(opportunity: Opportunity) {
  return request<{ success: boolean }>(`/api/opportunity`, {
    method: 'PUT',
    data: opportunity,
  });
}
