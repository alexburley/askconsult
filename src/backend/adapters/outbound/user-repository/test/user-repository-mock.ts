import { mock } from "jest-mock-extended";

import UserRepositoryAdapter from "..";

export const UserRepositoryMock = () => mock<UserRepositoryAdapter>();
export type UserRepositoryMockType = ReturnType<typeof UserRepositoryMock>;
