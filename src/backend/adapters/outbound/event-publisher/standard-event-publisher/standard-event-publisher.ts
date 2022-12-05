import pino from "pino";

import { EventPublisherAdapter, LogEventParams } from "..";

class StandardEventPublisher implements EventPublisherAdapter {
  logger: pino.Logger;

  constructor({ logger }: { logger: pino.Logger }) {
    this.logger = logger;
  }

  log(event: string, input: LogEventParams) {
    this.logger.info({
      ...input,
      event,
    });
  }
}

export default StandardEventPublisher;
