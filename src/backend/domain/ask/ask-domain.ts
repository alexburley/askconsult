import ConsultantRepositoryAdapter from "@adapters/outbound/consultant-repository";
import { EventPublisherAdapter } from "@adapters/outbound/event-publisher";
import OrderRepositoryAdapter from "@adapters/outbound/order-repository";
import { DomainEvent } from "@domain/events";
import ConsultantModel from "@models/consultant/consultant";
import Order from "@models/order/order";

export type QueryConsultantParams = {
  query: string;
  email: string;
  consultantId: string;
};

export interface AskDependencies {
  consultantRepository: ConsultantRepositoryAdapter;
  orderRepository: OrderRepositoryAdapter;
  eventPublisher: EventPublisherAdapter;
}

class AskDomain {
  private consultantRepository: ConsultantRepositoryAdapter;
  private orderRepository: OrderRepositoryAdapter;
  private eventPublisher: EventPublisherAdapter;

  constructor(dependencies: AskDependencies) {
    this.consultantRepository = dependencies.consultantRepository;
    this.orderRepository = dependencies.orderRepository;
    this.eventPublisher = dependencies.eventPublisher;
  }

  async listConsultants(): Promise<ConsultantModel[]> {
    const result = await this.consultantRepository.list();
    return result;
  }

  async getConsultant(id: string): Promise<ConsultantModel> {
    const result = await this.consultantRepository.get({ id });
    return result;
  }

  async queryConsultant(input: QueryConsultantParams): Promise<Order> {
    const order = await this.orderRepository.create({
      consultantId: input.consultantId,
      email: input.email,
      query: input.query,
    });

    this.eventPublisher.log(DomainEvent.QUERY_SUBMITTED, {
      consultantId: input.consultantId,
      orderId: order.id,
      email: input.email,
      query: input.query,
    });

    return order;
  }

  async getOrder(id: string): Promise<Order> {
    const order = await this.orderRepository.get(id);
    return order;
  }
}
export default AskDomain;
