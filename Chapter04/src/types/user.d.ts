export interface User {
  id?: number;
  name?: string;
  company?: string;
  role?: {
    id: number;
    title: string;
  };
  isLoggedIn: boolean;
}
