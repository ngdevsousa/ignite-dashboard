import { useQuery } from "react-query";
import { formatDate } from "../dates";
import { UsersResponse } from "../users/types";
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
      createdAt: formatDate(user.created_at)
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
