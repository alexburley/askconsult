import { mock } from "jest-mock-extended";

import { EventPublisherAdapter } from "..";

export const EventPublisherMock = () => mock<EventPublisherAdapter>();
export type EventPublisherMockType = ReturnType<typeof EventPublisherMock>;
