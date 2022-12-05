import LoggerFactory from "@adapters/outbound/logger";
import TraceID from "@common/trace-id";
import pinoHttp from "pino-http";

import { middleware } from "../util";

const TraceIDMiddleware = middleware(async ({ ctx, next }) => {
  const logger = pinoHttp({
    logger: LoggerFactory.instance({
      traceId: TraceID.parseHeader(ctx.req),
    }),
    useLevel: "debug",
    genReqId: function (req) {
      return TraceID.parseHeader(req);
    },
  });
  return next({
    ctx: {
      traceId: "",
      logger,
    },
  });
});

export default TraceIDMiddleware;
