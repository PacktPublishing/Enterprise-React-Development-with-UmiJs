import { User } from '@/types/user.d';
import { request } from 'umi';

export function getCurrentUser() {
  return request<User>(`/api/currentUser`, {
    method: 'GET',
  });
}

export function userLogin(email: string, password: string) {
  return request<User>(`/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { email, password },
  });
}

export function userLogout() {
  return request<void>(`/api/logout`, {
    method: 'POST',
  });
}
