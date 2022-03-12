/* eslint-disable @typescript-eslint/no-explicit-any */
import routes from '../config/routes';
import { RunTimeLayoutConfig, history, getLocale, RequestConfig } from 'umi';
import HeaderOptions from './components/HeaderOptions';
import { getCurrentUser, userLogin, userLogout } from './services/user';
import { GlobalState } from './types/globalState';
import { Button, message, Result } from 'antd';
import { ResponseError } from 'umi-request';
import eng from './locales/en-US/http';
import port from './locales/pt-BR/http';

export async function getInitialState(): Promise<GlobalState> {
  const fetchUser = async () => await getCurrentUser();

  const logout = async () => {
    await userLogout(), history.push('/login');
  };

  const login = async (email: string, password: string) => {
    const user = await userLogin(email, password);

    if (user) localStorage.setItem('context', user.context || '');
    return user;
  };

  const currentUser = await fetchUser();

  return {
    login,
    logout,
    fetchUser,
    currentUser,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    routes,
    rightContentRender: () => <HeaderOptions />,
    onPageChange: () => {
      const isLoggedIn = initialState?.currentUser?.isLoggedIn;
      const location = history.location.pathname;

      if (!isLoggedIn && location != '/login') history.push(`/login`);
    },

    unAccessible: (
      <Result
        status="403"
        title="403"
        subTitle={
          <span id="unauthorized">
            Sorry, you are not authorized to access this page.
          </span>
        }
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            Back to Home
          </Button>
        }
      />
    ),
  };
};

const errorHandler = (error: ResponseError) => {
  const { response } = error;
  let messages = undefined;

  switch (getLocale()) {
    case 'en-US':
      messages = eng;
      break;
    case 'pt-BR':
      messages = port;
      break;
  }

  if (response) {
    message.error((messages as any)[response.status]);
  } else if (!response) {
    message.error((messages as any)['empty']);
  }

  throw error;
};

export const request: RequestConfig = { errorHandler };
