import { mock } from "jest-mock-extended";

import AskDomain from "..";

export const AskDomainMock = () => mock<AskDomain>();
export type AskDomainMockType = ReturnType<typeof AskDomainMock>;
