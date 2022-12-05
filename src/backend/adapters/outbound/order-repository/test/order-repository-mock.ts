import { mock } from "jest-mock-extended";

import OrderRepositoryAdapter from "..";

export const OrderRepositoryMock = () => mock<OrderRepositoryAdapter>();
export type OrderRepositoryMockType = ReturnType<typeof OrderRepositoryMock>;
