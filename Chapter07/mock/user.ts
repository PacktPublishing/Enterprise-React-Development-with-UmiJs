/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@/types/user.d';
import { Request, Response } from 'express';
import uuid from 'uuid';

const user: { currentUser: User } = {
  currentUser: {
    isLoggedIn: false,
    context: undefined,
  },
};

const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email == 'john@doe.com' && password == 'user') {
    user.currentUser = {
      id: 0,
      name: 'John Doe',
      company: 'Umi Group',
      role: {
        id: 1,
        title: 'Inside Sales',
      },
      isLoggedIn: true,
      context: uuid.v4(),
    };

    res.json(user.currentUser);
  } else if (email == 'marry@doe.com' && password == 'admin') {
    user.currentUser = {
      id: 1,
      name: 'Marry Doe',
      company: 'Umi Group',
      role: {
        id: 0,
        title: 'Sales Manager',
      },
      isLoggedIn: true,
      context: uuid.v4(),
    };

    res.json(user.currentUser);
  } else {
    res.status(401).send();
  }
};

const logout = (_: any, res: Response) => {
  user.currentUser = { isLoggedIn: false };
  res.send({ success: true });
};

const getUser = (req: Request, res: Response) => {
  if (
    !user.currentUser.isLoggedIn ||
    req.query.context != user.currentUser.context
  ) {
    res.status(204).send();
  } else {
    res.json(user.currentUser);
  }
};

export default {
  'POST /api/login': login,
  'POST /api/logout': logout,
  '/api/currentUser': getUser,
};
