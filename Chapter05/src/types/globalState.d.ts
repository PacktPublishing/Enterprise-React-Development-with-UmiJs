import { User } from '@/types/user.d';

export interface GlobalState {
  login?: (email: string, password: string) => Promise<User>;
  logout?: () => Promise<void>;
  fetchUser?: () => Promise<User>;
  currentUser?: User;
}
