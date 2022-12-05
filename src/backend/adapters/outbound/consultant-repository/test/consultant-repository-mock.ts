import { mock } from "jest-mock-extended";

import ConsultantRepositoryAdapter from "..";

export const ConsultantRepositoryMock = () =>
  mock<ConsultantRepositoryAdapter>();
export type ConsultantRepositoryMockType = ReturnType<
  typeof ConsultantRepositoryMock
>;
