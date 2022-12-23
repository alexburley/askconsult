import EventPublisherFactory from "@adapters/outbound/event-publisher/event-publisher-factory";
import {
  EventPublisherMock,
  EventPublisherMockType,
} from "@adapters/outbound/event-publisher/test/event-publisher-mock";
import ConsultantRepositoryFactory from "@adapters/outbound/repositories/consultant-repository/consultants-repository-factory";
import {
  ConsultantRepositoryMock,
  ConsultantRepositoryMockType,
} from "@adapters/outbound/repositories/consultant-repository/test/consultant-repository-mock";
import OrderRepositoryFactory from "@adapters/outbound/repositories/order-repository/orders-repository-factory";
import orderItemDummy from "@adapters/outbound/repositories/order-repository/test/order-item-dummy";
import {
  OrderRepositoryMock,
  OrderRepositoryMockType,
} from "@adapters/outbound/repositories/order-repository/test/order-repository-mock";
import ConsultantDummy from "@models/consultant/test/consultant-dummy";

import AskDomain from ".";
import AskDomainFactory from "./ask-domain-factory";

describe("AskDomain", () => {
  let consultantRepository: ConsultantRepositoryMockType;
  let orderRepository: OrderRepositoryMockType;
  let eventPublisher: EventPublisherMockType;
  let domain: AskDomain;

  beforeEach(() => {
    consultantRepository = ConsultantRepositoryMock();
    orderRepository = OrderRepositoryMock();
    jest
      .spyOn(ConsultantRepositoryFactory, "InMemory")
      .mockReturnValue(consultantRepository);
    jest
      .spyOn(OrderRepositoryFactory, "instance")
      .mockReturnValue(orderRepository);
    eventPublisher = EventPublisherMock();
    jest
      .spyOn(EventPublisherFactory, "instance")
      .mockReturnValue(eventPublisher);
    domain = AskDomainFactory.instance({ traceId: "someTraceId" });
  });

  describe("getConsultants", () => {
    beforeEach(() => {
      consultantRepository.get.mockResolvedValue(new ConsultantDummy());
    });

    it("Should call the consultants repository with the id", async () => {
      await domain.getConsultant("123");
      expect(consultantRepository.get).toHaveBeenCalledWith({ id: "123" });
    });

    it("Should return the consultant", async () => {
      const consultant = await domain.getConsultant("123");
      expect(consultant).toEqual(new ConsultantDummy());
    });
  });

  describe("listConsultants", () => {
    beforeEach(() => {
      consultantRepository.list.mockResolvedValue([new ConsultantDummy()]);
    });

    it("Should return a list of consultants", async () => {
      const consultants = await domain.listConsultants();
      expect(consultants).toEqual([new ConsultantDummy()]);
    });
  });

  describe("queryConsultant", () => {
    beforeEach(() => {
      orderRepository.create.mockResolvedValue(orderItemDummy);
    });

    const act = () =>
      domain.queryConsultant({
        consultantId: "123",
        query: "someQuery",
        email: "someEmail",
      });

    it("Should create an order", async () => {
      await act();
      expect(orderRepository.create).toHaveBeenCalledWith({
        consultantId: "123",
        query: "someQuery",
        email: "someEmail",
      });
    });

    it("Should log a domain event", async () => {
      await act();
      expect(eventPublisher.log).toHaveBeenCalledWith("query-submitted", {
        consultantId: "123",
        orderId: "1234",
        query: "someQuery",
        email: "someEmail",
      });
    });

    it("Should return the order", async () => {
      const order = await act();
      expect(order).toEqual({
        id: "1234",
        consultantId: "123",
        query: "some query about something",
        email: "alex@mail.com",
      });
    });
  });

  describe("getOrder", () => {
    beforeEach(() => {
      orderRepository.get.mockResolvedValue(orderItemDummy);
    });

    const act = () => domain.getOrder("123");
    it("Should create an order", async () => {
      await act();
      expect(orderRepository.get).toHaveBeenCalledWith("123");
    });

    it("Should return an order", async () => {
      const order = await act();
      expect(order.result()).toEqual({
        id: "1234",
        consultantId: "123",
        query: "some query about something",
        email: "alex@mail.com",
      });
    });
  });
});

export {};
