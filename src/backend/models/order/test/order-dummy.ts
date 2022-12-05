import OrderModel from "../order";

class OrderDummy extends OrderModel {
  constructor() {
    super({
      id: "123",
      consultantId: "123",
      query: "This is a query about football",
      email: "joe.bloggs@mailcompany.co.uk",
    });
  }
}

export default OrderDummy;
