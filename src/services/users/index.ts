import { api } from "../api";
import { User, UserCreateRequest, UsersResponse } from "./types";

export default {
  find: async (page: number) => {
    return api.get<UsersResponse>(`/users?page=${page}`);
  },
  findById: async (userId: string) => {
    return api.get<User>(`/users/${userId}`);
  },
  create(payload: UserCreateRequest) {
    return api.post("/users", payload);
  }
};
