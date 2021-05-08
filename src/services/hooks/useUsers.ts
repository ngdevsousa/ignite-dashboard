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

interface PaginatedUsers extends UsersResponse {
  totalCount: number;
}

export async function getUsers(page: number): Promise<PaginatedUsers> {
  const { data, headers } = await api.get<UsersResponse>(`/users?page=${page}`);
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: formatDate(user.createdAt)
    };
  });
  const totalCount = Number(headers["x-total-count"]);

  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5
  });
}
