import OrderRepositoryAdapter from ".";
import InMemoryOrderRepository from "./in-memory";

class OrderRepositoryFactory {
  static instance(): OrderRepositoryAdapter {
    return new InMemoryOrderRepository();
  }
}

export default OrderRepositoryFactory;
