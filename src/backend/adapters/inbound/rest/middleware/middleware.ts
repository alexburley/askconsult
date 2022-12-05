import LoggerFactory from "@adapters/outbound/logger";
import TraceID from "@common/trace-id";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import pinoHttp from "pino-http";

class Middleware {
  static withLogging(f: NextApiHandler): NextApiHandler {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      const logger = pinoHttp({
        logger: LoggerFactory.instance({ traceId: TraceID.parseHeader(req) }),
        useLevel: "debug",
        genReqId: function (req) {
          return TraceID.parseHeader(req);
        },
      });
      logger(req, res);
      await f(req, res);
    };
  }
}

export default Middleware;
