export interface User {
  id?: number;
  name?: string;
  company?: string;
  role?: {
    id: 0 | 1;
    title: string;
  };
  isLoggedIn: boolean;
  context?: string;
}
