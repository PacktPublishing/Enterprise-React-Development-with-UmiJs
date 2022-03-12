import { Workflow } from '@/types/workflow.d';
import env from '../../config/env';
import { request } from 'umi';

export function listWorkflows(params?: any) {
  return request<{ data: Workflow[]; success: boolean }>(
    `${env.API_URL}/api/workflow/list`,
    {
      method: 'GET',
      params,
    },
  );
}

export function createWorkflow(workflow: Workflow) {
  return request<{ success: boolean }>(`${env.API_URL}/api/workflow`, {
    method: 'POST',
    data: workflow,
  });
}

export function updateWorkflow(workflow: Workflow) {
  return request<{ success: boolean }>(`${env.API_URL}/api/workflow`, {
    method: 'PUT',
    data: workflow,
  });
}

export function deleteWorkflow(workflowId?: string) {
  return request<{ success: boolean }>(`${env.API_URL}/api/workflow`, {
    method: 'DELETE',
    params: { workflowId },
  });
}
