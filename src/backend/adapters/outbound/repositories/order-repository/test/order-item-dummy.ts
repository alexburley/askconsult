import OrderModel from "@models/order/order";

const orderItemDummy: OrderModel = new OrderModel({
  id: "1234",
  consultantId: "123",
  query: "some query about something",
  email: "alex@mail.com",
  // created: "2022-04-16T22:24:24.505Z",
  // updated: "2022-04-16T22:24:24.505Z",
});

export default orderItemDummy;
