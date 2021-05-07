import { useQuery } from "react-query";
import { api } from "../api";
import { formatDate } from "../dates";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date | string;
}

interface UsersResponse {
  users: Array<User>;
}

export async function getUsers(): Promise<Array<User>> {
  const { data } = await api.get<UsersResponse>("/users");
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: formatDate(user.createdAt)
    };
  });

  return users;
}

export function useUsers() {
  return useQuery("users-list", getUsers, {
    staleTime: 1000 * 5
  });
}
