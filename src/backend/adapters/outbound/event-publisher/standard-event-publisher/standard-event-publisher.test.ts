import { DomainEvent } from "@domain/events";
import pino from "pino";

import StandardEventPublisher from "./standard-event-publisher";

describe("StandardEventPublisher", () => {
  let logger: pino.Logger;
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    logger = pino({ enabled: false });
    logSpy = jest.spyOn(logger, "info");
  });
  describe("log", () => {
    it("Should log the traceID and event", () => {
      const publisher = new StandardEventPublisher({ logger });
      publisher.log(DomainEvent.QUERY_SUBMITTED, { some: "field" });
      expect(logSpy).toHaveBeenCalledWith({
        event: "query-submitted",
        some: "field",
      });
    });
  });
});
export {};
