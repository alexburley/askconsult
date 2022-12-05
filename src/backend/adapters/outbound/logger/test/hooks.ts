import LoggerFactory from "@adapters/outbound/logger";
import pino from "pino";

export const useSilencedLogger = () => {
  beforeEach(() => {
    jest
      .spyOn(LoggerFactory, "instance")
      .mockReturnValue(pino({ enabled: false }));
  });
};
