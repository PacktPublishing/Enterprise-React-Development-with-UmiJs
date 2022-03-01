import { User } from '@/types/user.d';
import { request } from 'umi';

export function getCurrentUser() {
  const contextId = localStorage.getItem('context');

  return request<User>(`/api/currentUser`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    params: { context: contextId },
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
