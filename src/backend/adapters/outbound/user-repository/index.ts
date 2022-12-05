import { UserModel } from "@models/user/user";

export type UpdateUserParams = {
  userId: string;
  data: {
    fullName: string;
  };
};

type UserRepositoryAdapter = {
  update: (params: UpdateUserParams) => Promise<UserModel>;
  get: (id: string) => Promise<UserModel>;
};

export default UserRepositoryAdapter;
