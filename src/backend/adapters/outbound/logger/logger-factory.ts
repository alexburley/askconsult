import TraceID from "@common/trace-id";
import pino from "pino";

export type LoggerFactoryParams = {
  logger?: pino.Logger;
  traceId?: string;
  configuration?: { LOG_LEVEL?: string };
};

class LoggerFactory {
  static instance({
    logger,
    traceId,
    configuration: { LOG_LEVEL = "info" } = {},
  }: LoggerFactoryParams = {}) {
    const instance = logger || pino();
    return instance.child(
      {
        traceId: traceId || TraceID.generate(),
      },
      {
        level: LOG_LEVEL,
      }
    );
  }
}

export default LoggerFactory;
