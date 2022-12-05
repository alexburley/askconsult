import pino from "pino";

import LoggerFactory from "../logger-factory";

const silenceLogger = () => {
  jest
    .spyOn(LoggerFactory, "instance")
    .mockReturnValue(pino({ enabled: false }));
};

export default silenceLogger;
