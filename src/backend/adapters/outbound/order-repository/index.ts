import OrderModel from "@models/order/order";

export type CreateOrderParams = {
  consultantId: string;
  query: string;
  email: string;
};

interface OrderRepositoryAdapter {
  create(input: CreateOrderParams): Promise<OrderModel>;
  get(id: string): Promise<OrderModel>;
}

export default OrderRepositoryAdapter;
