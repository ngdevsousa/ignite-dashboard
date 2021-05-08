import { useQuery, UseQueryOptions } from "react-query";
import { formatDate } from "../dates";
import { User, UsersResponse } from "../users/types";
import api from "../users/index";

interface PaginatedUsers extends UsersResponse {
  totalCount: number;
}

export async function getUsers(page: number): Promise<PaginatedUsers> {
  const { data, headers } = await api.find(page);
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: formatDate(user.created_at)
    };
  });
  const totalCount = Number(headers["x-total-count"]);

  return { users, totalCount };
}

export function useUsers(
  page: number,
  options: UseQueryOptions<PaginatedUsers>
) {
  return useQuery<PaginatedUsers>(
    ["users", page],
    async () => {
      return getUsers(page);
    },
    {
      staleTime: 1000 * 5,
      ...options
    }
  );
}
