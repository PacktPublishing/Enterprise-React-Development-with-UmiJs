import { Customer } from '@/types/customer';
import { request } from 'umi';
import env from '../../config/env';

export function listCustomers(params?: any) {
  return request<{ data: Customer[]; success: boolean }>(
    `${env.API_HOST}/api/customer/list`,
    {
      method: 'GET',
      params,
    },
  );
}

export function createCustomer(customer: Customer) {
  return request<{ success: boolean }>(`${env.API_HOST}/api/customer`, {
    method: 'POST',
    data: customer,
  });
}

export function disableCustomer(customerId?: string) {
  return request<{ success: boolean }>(`${env.API_HOST}/api/customer/disable`, {
    method: 'PUT',
    params: { customerId },
  });
}

export function updateCustomer(customer: Customer) {
  return request<{ success: boolean }>(`${env.API_HOST}/api/customer`, {
    method: 'PUT',
    data: customer,
  });
}
