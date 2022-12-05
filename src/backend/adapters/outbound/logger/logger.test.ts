import pino from "pino";

import LoggerFactory from "./logger-factory";

describe("LoggerFactory", () => {
  it("Should child the logger with a traceID and a log level", () => {
    const pinoLogger = pino();
    const childStub = jest.spyOn(pinoLogger, "child");

    LoggerFactory.instance({
      logger: pinoLogger,
    });

    expect(childStub).toHaveBeenCalledWith(
      { traceId: expect.any(String) },
      { level: "info" }
    );
  });
});
