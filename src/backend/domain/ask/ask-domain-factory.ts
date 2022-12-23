import EventPublisherFactory from "@adapters/outbound/event-publisher/event-publisher-factory";
import ConsultantRepositoryFactory from "@adapters/outbound/repositories/consultant-repository/consultants-repository-factory";
import OrderRepositoryFactory from "@adapters/outbound/repositories/order-repository/orders-repository-factory";

import AskDomain from "./ask-domain";

class AskDomainFactory {
  static instance({ traceId }: { traceId: string }): AskDomain {
    return new AskDomain({
      consultantRepository: ConsultantRepositoryFactory.InMemory(),
      orderRepository: OrderRepositoryFactory.instance(),
      eventPublisher: EventPublisherFactory.instance({ traceId }),
    });
  }
}

export default AskDomainFactory;
