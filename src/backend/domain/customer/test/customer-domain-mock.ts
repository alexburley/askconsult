import { mock } from "jest-mock-extended";

import CustomerDomain from "..";

export const CustomerDomainMock = () => mock<CustomerDomain>();
export type CustomerDomainMockType = ReturnType<typeof CustomerDomainMock>;
