export type User = {
  id: string;
  name: string;
  role: 'USER' | 'ADMIN';
  email: string;
};
