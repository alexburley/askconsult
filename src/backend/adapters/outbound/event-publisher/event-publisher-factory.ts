import APIConfiguration from "@backend-config/api-configuration";

import LoggerFactory from "../logger";
import { EventPublisherAdapter } from ".";
import StandardEventPublisher from "./standard-event-publisher";

class EventPublisherFactory {
  static instance({ traceId }: { traceId: string }): EventPublisherAdapter {
    return new StandardEventPublisher({
      logger: LoggerFactory.instance({
        traceId,
        configuration: APIConfiguration,
      }),
    });
  }
}

export default EventPublisherFactory;
