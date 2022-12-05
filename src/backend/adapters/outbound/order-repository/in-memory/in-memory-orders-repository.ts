import OrderModel from "@models/order/order";

import OrderRepositoryAdapter, { CreateOrderParams } from "..";
import { IN_MEMORY_ORDERS } from "./in-memory-orders";

export { IN_MEMORY_ORDERS };

export type InMemoryOrderItem = {
  id: string;
  consultantId: string;
  query: string;
  email: string;
  created: string;
  updated: string;
};

class InMemoryOrderRepository implements OrderRepositoryAdapter {
  async create({ consultantId }: CreateOrderParams): Promise<OrderModel> {
    return IN_MEMORY_ORDERS.find((c) => c.consultantId === consultantId);
  }

  async get(consultantId: string): Promise<OrderModel> {
    return IN_MEMORY_ORDERS.find((c) => c.consultantId === consultantId);
  }
}
export default InMemoryOrderRepository;
