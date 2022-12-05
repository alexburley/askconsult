import { mock } from "jest-mock-extended";

import ConsultantApplicationRepositoryAdapter from "..";

export const ConsultantApplicationRepositoryMock = () =>
  mock<ConsultantApplicationRepositoryAdapter>();

export type ConsultantApplicationRepositoryMockType = ReturnType<
  typeof ConsultantApplicationRepositoryMock
>;
