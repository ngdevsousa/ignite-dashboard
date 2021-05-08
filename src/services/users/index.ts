import { api } from "../api";
import { User, UsersResponse } from "./types";

export default {
  find: async (page: number) => {
    return api.get<UsersResponse>(`/users?page=${page}`);
  },
  findById: async (userId: number) => {
    return await api.get<User>(`/users/${userId}`);
  }
};
