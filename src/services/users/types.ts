export interface User {
  id: string;
  name: string;
  email: string;
  created_at: Date | string;
}

export interface UsersResponse {
  users: Array<User>;
}

export interface UserCreateRequest {
  user: Omit<User, "id">;
}
