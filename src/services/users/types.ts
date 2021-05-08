export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date | string;
}

export interface UsersResponse {
  users: Array<User>;
}
